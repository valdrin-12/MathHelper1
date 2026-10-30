// Shared pieces of the lesson/quiz pictures (react-native-svg, drawn from data).
// Every picture is drawn in a fixed coordinate box (viewBox) and scaled to the screen width, so it looks
// the same on phones, tablets and web; colours follow the light/dark theme.
import React from 'react';
import { View, Platform } from 'react-native';
import Svg, { G } from 'react-native-svg';
import { useTheme } from '../theme/ThemeContext';
import { formatNumber } from '../utils/formatNumber';

export const VIEW_W = 320;

// SVG text does not inherit the app font on web (it falls back to a serif font)
const SVG_FONT = Platform.OS === 'web' ? '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' : undefined;

/** Split "1, 2, 3, 4, 6, 12" into lines of at most `max` characters (breaking after commas). */
export function wrapList(text, max) {
  const parts = String(text).split(/,\s*/);
  const lines = []; let line = '';
  parts.forEach((p, i) => {
    const piece = i < parts.length - 1 ? `${p},` : p;
    if (line && (line + ' ' + piece).length > max) { lines.push(line); line = piece; } else line = line ? `${line} ${piece}` : piece;
  });
  if (line) lines.push(line);
  return lines;
}

/**
 * A label in the data can be:
 *  - a plain string (same in every language: "A", "5 cm", "x")
 *  - a number (formatted per language: 3.5 → "3,5" in al/de)
 *  - { n, unit?, prefix?, suffix? } (a number with a unit: { n: 4.5, unit: 'cm' } → "4,5 cm")
 *  - { al, en, de } (translated text)
 */
export function tr(label, lang) {
  if (label === null || label === undefined) return '';
  if (typeof label === 'number') return formatNumber(label, lang);
  if (typeof label === 'string') return label;
  if (typeof label === 'object') {
    if ('n' in label) {
      return `${label.prefix || ''}${formatNumber(label.n, lang, label.decimals !== undefined ? { decimals: label.decimals } : {})}${label.unit ? ` ${label.unit}` : ''}${label.suffix || ''}`;
    }
    return label[lang] ?? label.en ?? label.al ?? '';
  }
  return String(label);
}

/** Theme colours for pictures: ink, muted ink, grid, and a palette for series/shapes. */
export function useVisualColors() {
  const { colors, isDark } = useTheme();
  return {
    ink: colors.text,
    muted: colors.textSubtle,
    grid: isDark ? '#3A3A3C' : '#E5E5EA',
    axis: colors.textSecondary,
    surface: colors.surface,
    primary: colors.primary,
    palette: [colors.primary, colors.secondary, colors.success, colors.purple, colors.error, colors.accent],
    fillAlpha: isDark ? '55' : '33',
  };
}

/** Pick a palette colour by index or keyword ('primary', 'secondary', 'success', 'error', 'purple', 'accent'). */
export function pickColor(c, vc, i = 0) {
  const named = { primary: 0, secondary: 1, success: 2, purple: 3, error: 4, accent: 5 };
  if (typeof c === 'string' && c in named) return vc.palette[named[c]];
  if (typeof c === 'string') return c;
  return vc.palette[i % vc.palette.length];
}

/** Responsive SVG box of VIEW_W × h units. */
export function Frame({ h, children, maxWidth = 520 }) {
  return (
    <View style={{ width: '100%', maxWidth, alignSelf: 'center', aspectRatio: VIEW_W / h }}>
      <Svg width="100%" height="100%" viewBox={`0 0 ${VIEW_W} ${h}`}>
        <G fontFamily={SVG_FONT}>{children}</G>
      </Svg>
    </View>
  );
}

/** Linear map from math coordinates (y up) to the SVG box. */
export function makeScale(view, w, h, pad = 16) {
  const { xMin, xMax, yMin, yMax } = view;
  // equal units on both axes when `equal` is set (geometry), otherwise fill the box
  let sx = (w - 2 * pad) / (xMax - xMin);
  let sy = (h - 2 * pad) / (yMax - yMin);
  let ox = pad; let oy = pad;
  if (view.equal) {
    const s = Math.min(sx, sy);
    ox += ((w - 2 * pad) - s * (xMax - xMin)) / 2;
    oy += ((h - 2 * pad) - s * (yMax - yMin)) / 2;
    sx = s; sy = s;
  }
  return {
    x: (v) => ox + (v - xMin) * sx,
    y: (v) => oy + (yMax - v) * sy,
    sx, sy,
    toMath: (px, py) => [xMin + (px - ox) / sx, yMax - (py - oy) / sy],
  };
}

/** Evenly spaced tick values between min and max (inclusive) for a step. */
export function stepTicks(min, max, step) {
  const out = [];
  const first = Math.ceil(min / step - 1e-9) * step;
  for (let v = first; v <= max + 1e-9; v += step) out.push(Number(v.toFixed(10)));
  return out;
}
