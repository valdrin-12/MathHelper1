import React from 'react';
import { View, Platform } from 'react-native';

const DEFAULT_MAX_WIDTH = 900;

export default function WebContainer({ children, maxWidth = DEFAULT_MAX_WIDTH, style }) {
  if (Platform.OS !== 'web') {
    return <>{children}</>;
  }

  return (
    <View style={[{ width: '100%', maxWidth, alignSelf: 'center' }, style]}>
      {children}
    </View>
  );
}
