import React from 'react';
import ProgressRing from '../../shared/ui/ProgressRing';

// ─── Circular Progress Ring ───
export default function CircularProgress({ size = 80, strokeWidth = 6, progress, color, children }) {
  return (
    <ProgressRing size={size} strokeWidth={strokeWidth} progress={progress} color={color}>
      {children}
    </ProgressRing>
  );
}
