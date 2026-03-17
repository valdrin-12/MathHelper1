import React, { useState, useCallback } from 'react';
import { Pressable, Platform } from 'react-native';

export default function PressableCard({ children, onPress, style, hoverStyle, activeOpacity = 0.85, ...props }) {
  const [hovered, setHovered] = useState(false);

  const handleHoverIn = useCallback(() => setHovered(true), []);
  const handleHoverOut = useCallback(() => setHovered(false), []);

  const isWeb = Platform.OS === 'web';

  const webHoverStyles = hovered && isWeb ? [
    { transform: [{ scale: 1.015 }] },
    isWeb && { boxShadow: '0 8px 24px rgba(0,0,0,0.08)' },
    hoverStyle,
  ] : [];

  const webTransition = isWeb ? { transitionDuration: '150ms', cursor: onPress ? 'pointer' : 'default' } : {};

  return (
    <Pressable
      onPress={onPress}
      onHoverIn={isWeb ? handleHoverIn : undefined}
      onHoverOut={isWeb ? handleHoverOut : undefined}
      style={({ pressed }) => [
        style,
        webTransition,
        ...webHoverStyles,
        pressed && !isWeb && { opacity: activeOpacity },
      ]}
      {...props}
    >
      {children}
    </Pressable>
  );
}
