// Shërbim për përpunimin e imazheve
import { Platform } from 'react-native';
import GEMINI_CONFIG from '../config/gemini.config';

/**
 * Konverton URI-në e imazhit në base64 për Gemini API
 * @param {string} imageUri - URI-ja e imazhit nga expo-image-picker
 * @returns {Promise<{base64: string, mimeType: string}>}
 */
export const convertImageToBase64 = async (imageUri) => {
  try {
    // Për web, përdor fetch për të lexuar blob
    if (Platform.OS === 'web') {
      return await convertImageToBase64Web(imageUri);
    }

    // Për native (iOS/Android), përdor expo-file-system
    return await convertImageToBase64Native(imageUri);
  } catch (error) {
    console.error('Error converting image:', error);
    if (error.message.includes('Fotografia')) {
      throw error;
    }
    throw new Error('Gabim gjatë leximit të fotografisë. Ju lutemi provoni përsëri.');
  }
};

/**
 * Konverton imazhin në base64 për web platform
 */
const convertImageToBase64Web = async (imageUri) => {
  try {
    // Fetch blob nga URI
    const response = await fetch(imageUri);
    const blob = await response.blob();

    // Kontrollo madhësinë
    const fileSizeInMB = blob.size / (1024 * 1024);
    if (fileSizeInMB > GEMINI_CONFIG.maxImageSizeMB) {
      throw new Error(
        `Fotografia është shumë e madhe (${fileSizeInMB.toFixed(1)}MB). Maksimumi është ${GEMINI_CONFIG.maxImageSizeMB}MB.`
      );
    }

    // Konverto në base64
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result.split(',')[1];
        const mimeType = blob.type || 'image/jpeg';
        resolve({ base64: base64String, mimeType });
      };
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  } catch (error) {
    throw new Error('Gabim gjatë leximit të fotografisë në web. Ju lutemi provoni përsëri.');
  }
};

/**
 * Konverton imazhin në base64 për native platform (iOS/Android)
 */
const convertImageToBase64Native = async (imageUri) => {
  // Import dynamically për të shmangur errors në web
  const FileSystem = require('expo-file-system');

  const fileInfo = await FileSystem.getInfoAsync(imageUri);

  if (!fileInfo.exists) {
    throw new Error('Fotografia nuk u gjet. Ju lutemi provoni përsëri.');
  }

  const fileSizeInMB = fileInfo.size / (1024 * 1024);
  if (fileSizeInMB > GEMINI_CONFIG.maxImageSizeMB) {
    throw new Error(
      `Fotografia është shumë e madhe (${fileSizeInMB.toFixed(1)}MB). Maksimumi është ${GEMINI_CONFIG.maxImageSizeMB}MB.`
    );
  }

  const base64 = await FileSystem.readAsStringAsync(imageUri, {
    encoding: FileSystem.EncodingType.Base64,
  });

  const mimeType = getMimeType(imageUri);

  return { base64, mimeType };
};

/**
 * Valido imazhin para se të dërgohet në Gemini
 * @param {string} imageUri - URI-ja e imazhit
 * @returns {Promise<boolean>}
 */
export const validateImage = async (imageUri) => {
  try {
    if (Platform.OS === 'web') {
      // Për web, thjesht kontrollo nëse URI ekziston
      if (!imageUri) {
        throw new Error('Fotografia nuk ekziston.');
      }
      return true;
    }

    // Për native, përdor FileSystem
    const FileSystem = require('expo-file-system');
    const fileInfo = await FileSystem.getInfoAsync(imageUri);

    if (!fileInfo.exists) {
      throw new Error('Fotografia nuk ekziston.');
    }

    const fileSizeInMB = fileInfo.size / (1024 * 1024);
    if (fileSizeInMB > GEMINI_CONFIG.maxImageSizeMB) {
      throw new Error(
        `Fotografia është shumë e madhe. Maksimumi është ${GEMINI_CONFIG.maxImageSizeMB}MB.`
      );
    }

    const mimeType = getMimeType(imageUri);
    const validTypes = ['image/jpeg', 'image/png', 'image/webp'];

    if (!validTypes.includes(mimeType)) {
      throw new Error('Formati i fotografisë nuk mbështetet. Përdorni JPG, PNG ose WebP.');
    }

    return true;
  } catch (error) {
    throw error;
  }
};

/**
 * Përcakto MIME type bazuar në prapashtesën e skedarit
 * @param {string} uri - URI-ja e skedarit
 * @returns {string} - MIME type
 */
const getMimeType = (uri) => {
  const extension = uri.split('.').pop()?.toLowerCase() || '';

  const mimeTypes = {
    'jpg': 'image/jpeg',
    'jpeg': 'image/jpeg',
    'png': 'image/png',
    'webp': 'image/webp',
  };

  return mimeTypes[extension] || 'image/jpeg';
};

export default {
  convertImageToBase64,
  validateImage,
};
