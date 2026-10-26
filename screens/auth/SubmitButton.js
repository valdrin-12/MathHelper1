import React from 'react';
import { View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useAuthStyles } from './authStyles';

// Big blue button of the sign-in forms: shows a spinner instead of its content while `loading`
export default function SubmitButton({ onPress, loading, children }) {
  const styles = useAuthStyles();
  return (
    <TouchableOpacity
      style={[styles.submitButton, loading && styles.submitButtonDisabled]}
      onPress={onPress}
      disabled={loading}
    >
      <View style={styles.submitGradient}>
        {loading ? <ActivityIndicator color="#FFFFFF" size="small" /> : children}
      </View>
    </TouchableOpacity>
  );
}
