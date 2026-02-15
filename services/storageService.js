import api from './apiClient';

/**
 * Get all saved items from backend
 * @returns {Promise<Array>}
 */
export const getSavedItems = async () => {
  try {
    const data = await api.get('/api/saved-items');
    return data.items || [];
  } catch (error) {
    console.error('Error fetching saved items:', error);
    return [];
  }
};

/**
 * Save a new item
 * @param {Object} item - Item to save
 * @returns {Promise<boolean>}
 */
export const saveItem = async (item) => {
  try {
    await api.post('/api/saved-items', {
      imageData: item.imageData || null,
      problemText: item.problemText || null,
      answer: item.answer,
      steps: item.steps,
      explanation: item.explanation,
    });
    return true;
  } catch (error) {
    console.error('Error saving item:', error);
    throw new Error(error.message || 'Failed to save item');
  }
};

/**
 * Delete a saved item
 * @param {string} id - Item ID
 * @returns {Promise<boolean>}
 */
export const deleteItem = async (id) => {
  try {
    await api.delete(`/api/saved-items/${id}`);
    return true;
  } catch (error) {
    console.error('Error deleting item:', error);
    throw new Error(error.message || 'Failed to delete item');
  }
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
  saveItem,
  deleteItem,
  isItemSaved,
};
