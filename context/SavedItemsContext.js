// Context për menaxhimin e problemeve të ruajtura
import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';
import { AppState } from 'react-native';
import * as storageService from '../services/storageService';
import { getErrorCode } from '../services/authService';
import { useUser } from './UserContext';

const SavedItemsContext = createContext();

export const useSavedItems = () => {
  const context = useContext(SavedItemsContext);
  if (!context) {
    throw new Error('useSavedItems duhet të përdoret brenda SavedItemsProvider');
  }
  return context;
};

export const SavedItemsProvider = ({ children }) => {
  const { offline } = useUser();
  const [savedItems, setSavedItems] = useState([]);
  const [loading, setLoading] = useState(true);
  // Load error: { code, message } or null. The list keeps its last good value on error.
  const [error, setError] = useState(null);
  const errorRef = useRef(null);
  errorRef.current = error;

  const loadSavedItems = useCallback(async () => {
    try {
      setLoading(true);
      const items = await storageService.getSavedItems();
      setSavedItems(items);
      setError(null);
      return true;
    } catch (e) {
      console.warn('Gabim gjatë ngarkimit:', e?.code || e?.message);
      setError({ code: getErrorCode(e, 'SAVED_ITEMS_LOAD_FAILED'), message: e?.message || null });
      return false;
    } finally {
      setLoading(false);
    }
  }, []);

  // Ngarko të dhënat kur komponenti montohet
  useEffect(() => {
    loadSavedItems();
  }, [loadSavedItems]);

  // Retry automatically when the app returns to the foreground or the session comes back online
  useEffect(() => {
    const sub = AppState.addEventListener('change', (state) => {
      if (state === 'active' && errorRef.current) loadSavedItems();
    });
    return () => sub.remove();
  }, [loadSavedItems]);

  useEffect(() => {
    if (!offline && errorRef.current) loadSavedItems();
  }, [offline, loadSavedItems]);

  const addItem = async (item) => {
    try {
      await storageService.saveItem(item);
      await loadSavedItems(); // Ringarko listën
      return true;
    } catch (e) {
      console.error('Gabim gjatë shtimit:', e);
      throw e;
    }
  };

  const removeItem = async (id) => {
    try {
      await storageService.deleteItem(id);
      await loadSavedItems(); // Ringarko listën
      return true;
    } catch (e) {
      console.error('Gabim gjatë fshirjes:', e);
      throw e;
    }
  };

  /** Load one item with its full imageData (list items only carry `hasImage`). Throws on error. */
  const getItem = (id) => storageService.getSavedItem(id);

  const checkIfSaved = async (imageUri) => {
    return await storageService.isItemSaved(imageUri);
  };

  const value = {
    savedItems,
    loading,
    error,
    addItem,
    removeItem,
    getItem,
    checkIfSaved,
    refresh: loadSavedItems,
    retry: loadSavedItems,
  };

  return (
    <SavedItemsContext.Provider value={value}>
      {children}
    </SavedItemsContext.Provider>
  );
};

export default SavedItemsContext;
