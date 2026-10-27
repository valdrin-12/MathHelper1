// Context për menaxhimin e problemeve të ruajtura
import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';
import { AppState } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as storageService from '../../shared/api/storageService';
import { getErrorCode } from '../auth/authService';
import { useUser } from '../auth/UserContext';
import { getUserScopedKey, SAVED_ITEMS_CACHE_KEY } from '../auth/userStorage';

const SavedItemsContext = createContext();

export const useSavedItems = () => {
  const context = useContext(SavedItemsContext);
  if (!context) {
    throw new Error('useSavedItems duhet të përdoret brenda SavedItemsProvider');
  }
  return context;
};

export const SavedItemsProvider = ({ children }) => {
  const { offline, user } = useUser();
  // Saving needs an account; a guest simply has an empty list
  const isGuest = !user;
  const [savedItems, setSavedItems] = useState([]);
  const [loading, setLoading] = useState(true);
  // Load error: { code, message } or null. The list keeps its last good value on error.
  const [error, setError] = useState(null);
  const errorRef = useRef(null);
  // true once the server answered for the current user; the cached list must not replace that answer
  const freshRef = useRef(false);
  errorRef.current = error;

  const loadSavedItems = useCallback(async () => {
    if (isGuest) {
      setSavedItems([]);
      setError(null);
      setLoading(false);
      return true;
    }
    const cacheKey = getUserScopedKey(SAVED_ITEMS_CACHE_KEY, user?.id);
    try {
      setLoading(true);
      const items = await storageService.getSavedItems();
      freshRef.current = true;
      setSavedItems(items);
      setError(null);
      AsyncStorage.setItem(cacheKey, JSON.stringify(items)).catch(() => {});
      return true;
    } catch (e) {
      console.warn('Gabim gjatë ngarkimit:', e?.code || e?.message);
      setError({ code: getErrorCode(e, 'SAVED_ITEMS_LOAD_FAILED'), message: e?.message || null });
      return false;
    } finally {
      setLoading(false);
    }
  }, [isGuest, user?.id]);

  // Show the last known list right away (also offline), then refresh it from the server
  useEffect(() => {
    let cancelled = false;
    freshRef.current = false;
    if (!isGuest) {
      AsyncStorage.getItem(getUserScopedKey(SAVED_ITEMS_CACHE_KEY, user?.id))
        .then((raw) => {
          const cached = raw ? JSON.parse(raw) : null;
          if (!cancelled && !freshRef.current && Array.isArray(cached)) setSavedItems(cached);
        })
        .catch(() => {});
    }
    loadSavedItems();
    return () => { cancelled = true; };
  }, [loadSavedItems, isGuest, user?.id]);

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
