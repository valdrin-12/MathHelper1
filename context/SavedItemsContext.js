// Context për menaxhimin e problemeve të ruajtura
import React, { createContext, useContext, useState, useEffect } from 'react';
import * as storageService from '../services/storageService';

const SavedItemsContext = createContext();

export const useSavedItems = () => {
  const context = useContext(SavedItemsContext);
  if (!context) {
    throw new Error('useSavedItems duhet të përdoret brenda SavedItemsProvider');
  }
  return context;
};

export const SavedItemsProvider = ({ children }) => {
  const [savedItems, setSavedItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Ngarko të dhënat kur komponenti montohet
  useEffect(() => {
    loadSavedItems();
  }, []);

  const loadSavedItems = async () => {
    try {
      setLoading(true);
      const items = await storageService.getSavedItems();
      setSavedItems(items);
    } catch (error) {
      console.error('Gabim gjatë ngarkimit:', error);
    } finally {
      setLoading(false);
    }
  };

  const addItem = async (item) => {
    try {
      await storageService.saveItem(item);
      await loadSavedItems(); // Ringarko listën
      return true;
    } catch (error) {
      console.error('Gabim gjatë shtimit:', error);
      throw error;
    }
  };

  const removeItem = async (id) => {
    try {
      await storageService.deleteItem(id);
      await loadSavedItems(); // Ringarko listën
      return true;
    } catch (error) {
      console.error('Gabim gjatë fshirjes:', error);
      throw error;
    }
  };

  const checkIfSaved = async (imageUri) => {
    return await storageService.isItemSaved(imageUri);
  };

  const value = {
    savedItems,
    loading,
    addItem,
    removeItem,
    checkIfSaved,
    refresh: loadSavedItems,
  };

  return (
    <SavedItemsContext.Provider value={value}>
      {children}
    </SavedItemsContext.Provider>
  );
};

export default SavedItemsContext;
