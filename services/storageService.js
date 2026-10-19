import api from './apiClient';

/**
 * Get all saved items (list view). Items do NOT include `imageData`; use `hasImage` to know
 * whether a photo exists and `getSavedItem(id)` to load it. Errors PROPAGATE.
 * @returns {Promise<Array<{ id, problemText, answer, steps, explanation, savedAt, hasImage: boolean }>>}
 */
export const getSavedItems = async () => {
  const data = await api.get('/api/saved-items');
  return (data.items || []).map((item) => ({
    ...item,
    hasImage: item.hasImage ?? !!item.imageData,
  }));
};

/**
 * Get a single saved item including `imageData` (base64). Errors propagate.
 * @param {string} id
 * @returns {Promise<Object>}
 */
export const getSavedItem = async (id) => {
  const data = await api.get(`/api/saved-items/${encodeURIComponent(id)}`);
  const item = data.item || data;
  return { ...item, hasImage: item.hasImage ?? !!item.imageData };
};

/**
 * Save a new item
 * @param {Object} item - Item to save
 * @returns {Promise<boolean>}
 */
export const saveItem = async (item) => {
  await api.post('/api/saved-items', {
    imageData: item.imageData || null,
    problemText: item.problemText || null,
    answer: item.answer,
    steps: item.steps,
    explanation: item.explanation,
  });
  return true;
};

/**
 * Delete a saved item
 * @param {string} id - Item ID
 * @returns {Promise<boolean>}
 */
export const deleteItem = async (id) => {
  await api.delete(`/api/saved-items/${encodeURIComponent(id)}`);
  return true;
};

/**
 * Check if an item is saved
 * @returns {Promise<boolean>}
 */
export const isItemSaved = async () => {
  return false;
};

export default {
  getSavedItems,
  getSavedItem,
  saveItem,
  deleteItem,
  isItemSaved,
};
