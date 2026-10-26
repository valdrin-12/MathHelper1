import React, { useState, useEffect, useRef } from 'react';
import { Modal, View, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useUser } from '../context/UserContext';
import { useProfileStyles } from './profile/profileStyles';
import ProfileView from './profile/ProfileView';
import EditProfileView from './profile/EditProfileView';
import SuccessPopup from './profile/SuccessPopup';

// Profile sheet: the profile page, or the edit form on top of it, plus the "updated" popup.
export default function ProfileModal({ visible, onClose, onUpgrade }) {
  const { user } = useUser();
  const styles = useProfileStyles();
  const [showEdit, setShowEdit] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  // Animations
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.9)).current;

  useEffect(() => {
    if (visible) {
      Animated.parallel([
        Animated.timing(fadeAnim, { toValue: 1, duration: 400, useNativeDriver: true }),
        Animated.spring(scaleAnim, { toValue: 1, friction: 6, tension: 80, useNativeDriver: true }),
      ]).start();
    } else {
      fadeAnim.setValue(0);
      scaleAnim.setValue(0.9);
    }
  }, [visible, fadeAnim, scaleAnim]);

  useEffect(() => {
    if (!visible) setShowEdit(false);
  }, [visible]);

  if (!user) return null;

  const handleBackFromEdit = () => setShowEdit(false);

  return (
    <Modal visible={visible} animationType="slide" presentationStyle="pageSheet" onRequestClose={showEdit ? handleBackFromEdit : onClose}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          {showEdit ? (
            <EditProfileView user={user} onBack={handleBackFromEdit} onSaved={() => setShowSuccessPopup(true)} />
          ) : (
            <ProfileView
              fadeAnim={fadeAnim}
              scaleAnim={scaleAnim}
              onClose={onClose}
              onEdit={() => setShowEdit(true)}
              onUpgrade={onUpgrade}
            />
          )}
        </View>

        {showSuccessPopup && (
          <SuccessPopup onOk={() => { setShowSuccessPopup(false); setShowEdit(false); }} />
        )}
      </SafeAreaView>
    </Modal>
  );
}
