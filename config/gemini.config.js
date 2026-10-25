// Frontend config - only image size limit (Gemini API is now server-side)
const GEMINI_CONFIG = {
  maxImageSizeMB: parseInt(process.env.EXPO_PUBLIC_MAX_IMAGE_SIZE_MB || '4', 10),
};

export default GEMINI_CONFIG;
