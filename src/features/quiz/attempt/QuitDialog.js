import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useQuizStyles } from './quizStyles';

// Quit confirmation, iOS alert style.
export default function QuitDialog({ onCancel, onQuit }) {
  const { t } = useTranslation();
  const styles = useQuizStyles();

  return (
    <View style={styles.quitOverlay}>
      <View style={styles.quitDialog}>
        <View style={styles.quitDialogBody}>
          <Text style={styles.quitDialogTitle}>{t('activeQuiz.quitTitle')}</Text>
          <Text style={styles.quitDialogText}>{t('activeQuiz.quitMessage')}</Text>
        </View>
        <View style={styles.quitDialogButtons}>
          <TouchableOpacity style={styles.quitCancelButton} onPress={onCancel} activeOpacity={0.6}>
            <Text style={styles.quitCancelText}>{t('activeQuiz.continueQuiz')}</Text>
          </TouchableOpacity>
          <View style={styles.quitDialogDivider} />
          <TouchableOpacity style={styles.quitConfirmButton} onPress={onQuit} activeOpacity={0.6}>
            <Text style={styles.quitConfirmText}>{t('activeQuiz.quit')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
