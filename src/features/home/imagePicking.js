import * as ImagePicker from 'expo-image-picker';
import { showAlert } from '../../shared/ui';

// Both return the picked asset, or null (cancelled / permission denied, the user is told why).
export const pickFromGallery = async (t) => {
  const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
  if (permissionResult.granted === false) {
    showAlert(t('dashboard.permissionNeeded'), t('dashboard.galleryPermission'));
    return null;
  }
  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ['images'],
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });
  return result.canceled ? null : result.assets[0];
};

export const takeWithCamera = async (t) => {
  const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
  if (permissionResult.granted === false) {
    showAlert(t('dashboard.permissionNeeded'), t('dashboard.cameraPermission'));
    return null;
  }
  const result = await ImagePicker.launchCameraAsync({
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });
  return result.canceled ? null : result.assets[0];
};
