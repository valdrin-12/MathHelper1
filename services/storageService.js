// Shërbim për ruajtjen e të dhënave lokale
import AsyncStorage from '@react-native-async-storage/async-storage';

const SAVED_ITEMS_KEY_PREFIX = '@saved_math_problems_';
const USER_KEY = '@math_helper_user';

const getCurrentUserId = async () => {
  try {
    const userData = await AsyncStorage.getItem(USER_KEY);
    if (!userData) return null;
    const user = JSON.parse(userData);
    return user.id;
  } catch {
    return null;
  }
};

/**
 * Merr të gjitha problemet e ruajtura
 * @returns {Promise<Array>}
 */
export const getSavedItems = async () => {
  try {
    const userId = await getCurrentUserId();
    if (!userId) return [];

    const itemsKey = `${SAVED_ITEMS_KEY_PREFIX}${userId}`;
    const savedData = await AsyncStorage.getItem(itemsKey);
    return savedData ? JSON.parse(savedData) : [];
  } catch (error) {
    console.error('Gabim gjatë leximit të të dhënave:', error);
    return [];
  }
};

/**
 * Ruaj një problem të ri
 * @param {Object} item - Problemi për t'u ruajtur
 * @returns {Promise<boolean>}
 */
export const saveItem = async (item) => {
  try {
    const userId = await getCurrentUserId();
    if (!userId) throw new Error('Duhet të jeni të kyçur për të ruajtur.');

    const existingItems = await getSavedItems();

    // Shto ID dhe datën nëse nuk ekzistojnë
    const newItem = {
      ...item,
      id: item.id || Date.now().toString(),
      savedAt: item.savedAt || new Date().toISOString(),
    };

    const updatedItems = [newItem, ...existingItems];
    const itemsKey = `${SAVED_ITEMS_KEY_PREFIX}${userId}`;
    await AsyncStorage.setItem(itemsKey, JSON.stringify(updatedItems));
    return true;
  } catch (error) {
    console.error('Gabim gjatë ruajtjes:', error);
    throw new Error(error.message || 'Nuk mund të ruhet problemi. Provoni përsëri.');
  }
};

/**
 * Fshi një problem të ruajtur
 * @param {string} id - ID e problemit
 * @returns {Promise<boolean>}
 */
export const deleteItem = async (id) => {
  try {
    const userId = await getCurrentUserId();
    if (!userId) throw new Error('Duhet të jeni të kyçur.');

    const existingItems = await getSavedItems();
    const updatedItems = existingItems.filter(item => item.id !== id);
    const itemsKey = `${SAVED_ITEMS_KEY_PREFIX}${userId}`;
    await AsyncStorage.setItem(itemsKey, JSON.stringify(updatedItems));
    return true;
  } catch (error) {
    console.error('Gabim gjatë fshirjes:', error);
    throw new Error(error.message || 'Nuk mund të fshihet problemi. Provoni përsëri.');
  }
};

/**
 * Kontrollo nëse një problem është i ruajtur
 * @param {string} imageUri - URI e imazhit
 * @returns {Promise<boolean>}
 */
export const isItemSaved = async (imageUri) => {
  try {
    const existingItems = await getSavedItems();
    return existingItems.some(item => item.imageUri === imageUri);
  } catch (error) {
    console.error('Gabim gjatë kontrollimit:', error);
    return false;
  }
};

/**
 * Pastro të gjitha të dhënat (për testim)
 * @returns {Promise<boolean>}
 */
export const clearAllItems = async () => {
  try {
    const userId = await getCurrentUserId();
    if (!userId) return false;

    const itemsKey = `${SAVED_ITEMS_KEY_PREFIX}${userId}`;
    await AsyncStorage.removeItem(itemsKey);
    return true;
  } catch (error) {
    console.error('Gabim gjatë pastrimit:', error);
    return false;
  }
};

export default {
  getSavedItems,
  saveItem,
  deleteItem,
  isItemSaved,
  clearAllItems,
};
