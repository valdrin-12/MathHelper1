// The grade the student picked on Learn or Quiz ('general' or 6–12). One shared value for both
// screens, remembered per user in AsyncStorage (wiped with the other per-user data on logout).
import { useEffect, useState, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getUserScopedKey, GRADE_FILTER_KEY } from '../../features/auth/userStorage';
import { normalizeGradeSelection } from '../../content/grades/filterByGrade';

let current = { userId: undefined, value: 'general', loaded: false };
const listeners = new Set();
const emit = () => listeners.forEach((fn) => fn(current.value));

export async function loadGradeFilter(userId, storage = AsyncStorage) {
  const key = getUserScopedKey(GRADE_FILTER_KEY, userId);
  let value = 'general';
  try { value = normalizeGradeSelection(JSON.parse((await storage.getItem(key)) ?? '"general"')); } catch { value = 'general'; }
  current = { userId, value, loaded: true };
  emit();
  return value;
}

export async function saveGradeFilter(userId, value, storage = AsyncStorage) {
  const v = normalizeGradeSelection(value);
  current = { userId, value: v, loaded: true };
  emit();
  try { await storage.setItem(getUserScopedKey(GRADE_FILTER_KEY, userId), JSON.stringify(v)); } catch { /* keep the in-memory value */ }
  return v;
}

/** [grade, setGrade] for the given user id; both screens stay in sync. */
export default function useGradeFilter(userId) {
  const [value, setValue] = useState(current.userId === userId ? current.value : 'general');
  useEffect(() => {
    listeners.add(setValue);
    if (!current.loaded || current.userId !== userId) loadGradeFilter(userId);
    else setValue(current.value);
    return () => listeners.delete(setValue);
  }, [userId]);
  const setGrade = useCallback((v) => saveGradeFilter(userId, v), [userId]);
  return [value, setGrade];
}
