// Shërbim për përpunimin e imazheve
// Images are downscaled (longest side ≤ 1600px) and re-encoded as JPEG (quality 0.7) before
// upload. Errors carry a stable `code` (also used as `message`) that the UI translates.
import { ImageManipulator, SaveFormat } from 'expo-image-manipulator';
import GEMINI_CONFIG from './gemini.config';

export const MAX_IMAGE_DIMENSION = 1600;
export const JPEG_QUALITY = 0.7;

export const IMAGE_ERROR_CODES = {
  IMAGE_NOT_FOUND: 'IMAGE_NOT_FOUND', // no URI / file missing
  IMAGE_READ_FAILED: 'IMAGE_READ_FAILED', // could not decode/compress the image
  IMAGE_TOO_LARGE: 'IMAGE_TOO_LARGE', // still above the limit after compression; details: { sizeMB, maxMB }
};

const imageError = (code, details = {}, cause = null) => {
  const err = new Error(code);
  err.code = code;
  err.details = details;
  if (cause) err.cause = cause;
  return err;
};

/** Approximate decoded byte size of a base64 string. */
const base64Bytes = (b64) => {
  const padding = b64.endsWith('==') ? 2 : b64.endsWith('=') ? 1 : 0;
  return Math.floor((b64.length * 3) / 4) - padding;
};

const release = (ref) => {
  try {
    ref?.release?.();
  } catch {
    // ignore
  }
};

/**
 * Resize (longest side ≤ MAX_IMAGE_DIMENSION) and compress to JPEG.
 * @param {string} imageUri
 * @param {{ width?: number, height?: number }} [hint] - picker asset dimensions, if known
 */
const compressImage = async (imageUri, hint = {}) => {
  let { width, height } = hint;
  let probe = null;
  if (!width || !height) {
    probe = await ImageManipulator.manipulate(imageUri).renderAsync();
    width = probe.width;
    height = probe.height;
  }

  let ref = probe;
  if (Math.max(width, height) > MAX_IMAGE_DIMENSION) {
    const size = width >= height ? { width: MAX_IMAGE_DIMENSION } : { height: MAX_IMAGE_DIMENSION };
    ref = await ImageManipulator.manipulate(imageUri).resize(size).renderAsync();
    release(probe);
  } else if (!ref) {
    ref = await ImageManipulator.manipulate(imageUri).renderAsync();
  }

  try {
    return await ref.saveAsync({ base64: true, compress: JPEG_QUALITY, format: SaveFormat.JPEG });
  } finally {
    release(ref);
  }
};

/**
 * Konverton URI-në e imazhit në base64 (JPEG i kompresuar) për analizë.
 * @param {string} imageUri - URI-ja e imazhit nga expo-image-picker
 * @param {{ width?: number, height?: number }} [hint] - optional asset dimensions (skips a decode)
 * @returns {Promise<{ base64: string, mimeType: 'image/jpeg', width: number, height: number }>}
 * @throws Error with `code` in IMAGE_ERROR_CODES
 */
export const convertImageToBase64 = async (imageUri, hint) => {
  if (!imageUri) throw imageError(IMAGE_ERROR_CODES.IMAGE_NOT_FOUND);

  let result;
  try {
    result = await compressImage(imageUri, hint);
  } catch (error) {
    console.error('Error converting image:', error?.message);
    throw imageError(IMAGE_ERROR_CODES.IMAGE_READ_FAILED, {}, error);
  }

  if (!result?.base64) {
    throw imageError(IMAGE_ERROR_CODES.IMAGE_READ_FAILED);
  }

  const sizeMB = base64Bytes(result.base64) / (1024 * 1024);
  const maxMB = GEMINI_CONFIG.maxImageSizeMB;
  if (sizeMB > maxMB) {
    throw imageError(IMAGE_ERROR_CODES.IMAGE_TOO_LARGE, {
      sizeMB: Number(sizeMB.toFixed(1)),
      maxMB,
    });
  }

  return { base64: result.base64, mimeType: 'image/jpeg', width: result.width, height: result.height };
};

/**
 * Valido imazhin para se të dërgohet. Any format the platform can decode is accepted because it
 * is re-encoded to JPEG by convertImageToBase64.
 * @param {string} imageUri
 * @returns {Promise<boolean>}
 * @throws Error with code IMAGE_NOT_FOUND
 */
export const validateImage = async (imageUri) => {
  if (!imageUri) throw imageError(IMAGE_ERROR_CODES.IMAGE_NOT_FOUND);
  return true;
};

export default {
  convertImageToBase64,
  validateImage,
  IMAGE_ERROR_CODES,
};
