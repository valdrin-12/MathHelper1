import AsyncStorage from '@react-native-async-storage/async-storage';

// Where the user stopped in each course: { [courseId]: lessonIndex }, stored per user (see utils/userStorage)

/** The saved lesson index of a course, or null when the user has not got past the first lesson. */
export async function loadCourseProgress(progressKey, courseId) {
  try {
    const data = await AsyncStorage.getItem(progressKey);
    if (data) {
      const progress = JSON.parse(data);
      if (progress[courseId] !== undefined && progress[courseId] > 0) return progress[courseId];
    }
  } catch (e) {
    console.error('Error loading course progress:', e);
  }
  return null;
}

/** Returns true when the progress was saved. */
export async function saveCourseProgress(progressKey, courseId, lessonIndex) {
  try {
    const data = await AsyncStorage.getItem(progressKey);
    const progress = data ? JSON.parse(data) : {};
    progress[courseId] = lessonIndex;
    await AsyncStorage.setItem(progressKey, JSON.stringify(progress));
    return true;
  } catch (e) {
    console.error('Error saving course progress:', e);
    return false;
  }
}
