/**
 * FunctionGraph — offline SVG plot of one or more functions (react-native-svg, works on iOS/Android/web).
 * Grid, axes with tick labels, curves split at discontinuities, asymptotes, highlighted key points.
 * Interaction: drag to pan, pinch to zoom (touch), zoom/reset buttons, tap a point to see its coordinates.
 */
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, PanResponder } from 'react-native';
import Svg, { Path, Line, Circle, Rect, Text as SvgText, G } from 'react-native-svg';
import { useTranslation } from 'react-i18next';
import { Ionicons } from '@expo/vector-icons';
import { placeLabels } from './labelLayout';
import { useTheme } from '../../shared/theme/ThemeContext';
import { SPACING, BORDER_RADIUS, TYPOGRAPHY } from '../../shared/theme/constants';
import { sampleSegments } from './functionAnalysis';
import { formatNumber, formatPoint } from './graphService';

const PADDING = 0; // plot fills the whole surface; labels are drawn inside
const LABEL_FONT = 10;
const TAP_RADIUS = 24;
const MAX_INLINE_LABELS = 6;

function niceStep(span, target) {
  const raw = span / Math.max(target, 1);
  const pow = Math.pow(10, Math.floor(Math.log10(raw)));
  const n = raw / pow;
  const nice = n < 1.5 ? 1 : n < 3 ? 2 : n < 7 ? 5 : 10;
  return nice * pow;
}

function ticks(min, max, target) {
  const step = niceStep(max - min, target);
  const out = [];
  for (let v = Math.ceil(min / step) * step; v <= max + step * 1e-9; v += step) {
    out.push(Math.abs(v) < step * 1e-9 ? 0 : Number(v.toPrecision(12)));
  }
  return out;
}

function zoomViewport(vp, factor, cx, cy) {
  const x0 = cx ?? (vp.xMin + vp.xMax) / 2;
  const y0 = cy ?? (vp.yMin + vp.yMax) / 2;
  return {
    xMin: x0 - (x0 - vp.xMin) * factor,
    xMax: x0 + (vp.xMax - x0) * factor,
    yMin: y0 - (y0 - vp.yMin) * factor,
    yMax: y0 + (vp.yMax - y0) * factor,
  };
}

const POINT_KINDS = [
  ['roots', 'root'],
  ['maxima', 'max'],
  ['minima', 'min'],
  ['inflections', 'inflection'],
];

/**
 * props:
 *   functions: [{ key, f, color, analysis }]  (f: x → number, analysis from functionAnalysis)
 *   intersections: [{ x, y }]
 *   viewport: initial { xMin, xMax, yMin, yMax }
 *   resetKey: changes when the functions change (resets view + selection)
 *   height, onInteractionStart, onInteractionEnd (e.g. to lock a parent ScrollView while dragging)
 */
export default function FunctionGraph({
  functions,
  intersections = [],
  viewport: initialViewport,
  resetKey,
  height = 300,
  onInteractionStart,
  onInteractionEnd,
}) {
  const { colors } = useTheme();
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const [width, setWidth] = useState(0);
  const [vp, setVp] = useState(initialViewport);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    setVp(initialViewport);
    setSelected(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resetKey]);

  const view = vp || initialViewport || { xMin: -10, xMax: 10, yMin: -10, yMax: 10 };
  const W = width || 1;
  const H = height;
  const px = (x) => PADDING + ((x - view.xMin) / (view.xMax - view.xMin)) * (W - 2 * PADDING);
  const py = (y) => PADDING + ((view.yMax - y) / (view.yMax - view.yMin)) * (H - 2 * PADDING);

  // ── Key points (screen positions computed at render time)
  const keyPoints = useMemo(() => {
    const pts = [];
    functions.forEach((fn, fi) => {
      const a = fn.analysis;
      if (!a || !a.ok) return;
      for (const [field, kind] of POINT_KINDS) {
        for (const p of a[field] || []) pts.push({ ...p, kind, color: fn.color, fi });
      }
      if (a.yIntercept) pts.push({ ...a.yIntercept, kind: 'yIntercept', color: fn.color, fi });
    });
    for (const p of intersections) pts.push({ ...p, kind: 'intersection', color: colors.text, fi: -1 });
    // Merge coinciding points (e.g. a root that is also the y-intercept)
    const merged = [];
    for (const p of pts) {
      const same = merged.find((q) => Math.abs(q.x - p.x) < 1e-9 && Math.abs(q.y - p.y) < 1e-9);
      if (same) {
        if (!same.kinds.includes(p.kind)) same.kinds.push(p.kind);
      } else {
        merged.push({ ...p, kinds: [p.kind] });
      }
    }
    return merged;
  }, [functions, intersections, colors.text]);

  const periodic = functions.some((fn) => fn.analysis && fn.analysis.periodic);

  // ── Curves
  const paths = useMemo(() => {
    if (!width) return [];
    const count = Math.min(900, Math.max(200, Math.round(width * 1.5)));
    return functions.map((fn) => {
      const breaks = fn.analysis && fn.analysis.ok ? fn.analysis.verticalAsymptotes : [];
      const segs = sampleSegments(fn.f, view, count, breaks);
      const d = segs
        .map((seg) => seg.map(([x, y], i) => `${i ? 'L' : 'M'}${px(x).toFixed(1)} ${py(y).toFixed(1)}`).join(''))
        .join('');
      return { key: fn.key, d, color: fn.color };
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [functions, view.xMin, view.xMax, view.yMin, view.yMax, width, height]);

  // ── Gestures: drag = pan, two fingers = pinch zoom, short tap = select nearest key point
  const gesture = useRef({ start: null, pinch: null, moved: false, tap: null, origin: null }).current;
  const surfaceRef = useRef(null);
  const latest = useRef({});
  latest.current = { view, W, H, keyPoints, px, py, onInteractionStart, onInteractionEnd };

  const responder = useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: () => true,
        onPanResponderTerminationRequest: () => false,
        onShouldBlockNativeResponder: () => true,
        onPanResponderGrant: (e) => {
          const { view: v, onInteractionStart: start } = latest.current;
          gesture.start = v;
          gesture.pinch = null;
          gesture.moved = false;
          const { pageX, pageY, locationX, locationY } = e.nativeEvent;
          gesture.tap = { pageX, pageY, locationX, locationY };
          gesture.origin = null;
          // Page offset of the plot surface (more reliable than locationX across native/web targets)
          if (surfaceRef.current && surfaceRef.current.measure) {
            surfaceRef.current.measure((x, y, w, h, ox, oy) => {
              if (Number.isFinite(ox) && Number.isFinite(oy)) gesture.origin = { x: ox, y: oy };
            });
          }
          if (start) start();
        },
        onPanResponderMove: (e, g) => {
          const { W: w, H: h } = latest.current;
          const touches = e.nativeEvent.touches || [];
          const s = gesture.start;
          if (!s) return;
          if (touches.length >= 2) {
            const dist = Math.hypot(touches[0].pageX - touches[1].pageX, touches[0].pageY - touches[1].pageY);
            if (!gesture.pinch) {
              gesture.pinch = { dist, view: latest.current.view };
              return;
            }
            const factor = Math.min(20, Math.max(0.05, gesture.pinch.dist / Math.max(dist, 1)));
            gesture.moved = true;
            setVp(zoomViewport(gesture.pinch.view, factor));
            return;
          }
          if (gesture.pinch) return; // ignore the remaining finger after a pinch
          if (Math.abs(g.dx) > 4 || Math.abs(g.dy) > 4) gesture.moved = true;
          if (!gesture.moved) return;
          const dx = (g.dx / w) * (s.xMax - s.xMin);
          const dy = (g.dy / h) * (s.yMax - s.yMin);
          setVp({ xMin: s.xMin - dx, xMax: s.xMax - dx, yMin: s.yMin + dy, yMax: s.yMax + dy });
        },
        onPanResponderRelease: () => {
          const { keyPoints: kp, px: toX, py: toY, onInteractionEnd: end } = latest.current;
          if (!gesture.moved && gesture.tap) {
            const tap = gesture.origin && Number.isFinite(gesture.tap.pageX)
              ? { x: gesture.tap.pageX - gesture.origin.x, y: gesture.tap.pageY - gesture.origin.y }
              : { x: gesture.tap.locationX, y: gesture.tap.locationY };
            let best = null;
            let bestD = TAP_RADIUS;
            for (const p of kp) {
              const d = Math.hypot(toX(p.x) - tap.x, toY(p.y) - tap.y);
              if (d < bestD) {
                bestD = d;
                best = p;
              }
            }
            setSelected((prev) => (best && prev && prev.x === best.x && prev.y === best.y ? null : best));
          }
          gesture.start = null;
          gesture.pinch = null;
          if (end) end();
        },
        onPanResponderTerminate: () => {
          gesture.start = null;
          gesture.pinch = null;
          const { onInteractionEnd: end } = latest.current;
          if (end) end();
        },
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  // ── Grid & axes
  const xTicks = width ? ticks(view.xMin, view.xMax, Math.max(3, Math.floor(W / 64))) : [];
  const yTicks = ticks(view.yMin, view.yMax, Math.max(3, Math.floor(H / 48)));
  const originX = px(0);
  const originY = py(0);
  const xAxisVisible = originY >= 0 && originY <= H;
  const yAxisVisible = originX >= 0 && originX <= W;
  const xLabelY = Math.min(Math.max(originY + 14, 14), H - 4);
  const yLabelOnRight = originX < 36;
  const yLabelX = Math.min(Math.max(originX + (yLabelOnRight ? 5 : -5), 4), W - 4);
  const fmt = (v) => formatNumber(v, lang);
  const fmtX = (v) => formatNumber(v, lang, { pi: periodic });

  const asymptoteLines = [];
  functions.forEach((fn) => {
    const a = fn.analysis;
    if (!a || !a.ok) return;
    for (const x of a.verticalAsymptotes) {
      if (x > view.xMin && x < view.xMax) asymptoteLines.push({ key: `v${fn.key}${x}`, x1: px(x), y1: 0, x2: px(x), y2: H });
    }
    const { left, right } = a.horizontalAsymptotes || {};
    for (const y of [...new Set([left, right].filter((v) => v !== null && v !== undefined))]) {
      if (y > view.yMin && y < view.yMax) asymptoteLines.push({ key: `h${fn.key}${y}`, x1: 0, y1: py(y), x2: W, y2: py(y) });
    }
  });

  const visiblePoints = keyPoints.filter((p) => {
    const X = px(p.x);
    const Y = py(p.y);
    return X >= -4 && X <= W + 4 && Y >= -4 && Y <= H + 4;
  });
  const showInlineLabels = visiblePoints.length <= MAX_INLINE_LABELS;
  const labelSpots = showInlineLabels
    ? placeLabels(visiblePoints.map((p) => ({ X: px(p.x), Y: py(p.y), text: formatPoint(p, lang, { pi: periodic }) })), W, H)
    : [];

  const kindLabel = (k) => t(`graph.point.${k}`);
  const selectedVisible = selected && visiblePoints.some((p) => p.x === selected.x && p.y === selected.y) ? selected : null;

  return (
    <View style={[styles.container, { height, backgroundColor: colors.surface }]}>
      <View
        ref={surfaceRef}
        style={StyleSheet.absoluteFill}
        onLayout={(e) => setWidth(Math.round(e.nativeEvent.layout.width))}
        {...responder.panHandlers}
      >
        {width ? (
          <Svg width={W} height={H} pointerEvents="none">
            {/* grid */}
            <G>
              {xTicks.map((v) => (
                <Line key={`gx${v}`} x1={px(v)} y1={0} x2={px(v)} y2={H} stroke={colors.borderLight} strokeWidth={1} />
              ))}
              {yTicks.map((v) => (
                <Line key={`gy${v}`} x1={0} y1={py(v)} x2={W} y2={py(v)} stroke={colors.borderLight} strokeWidth={1} />
              ))}
            </G>
            {/* axes */}
            {xAxisVisible ? <Line x1={0} y1={originY} x2={W} y2={originY} stroke={colors.textMuted} strokeWidth={1.2} /> : null}
            {yAxisVisible ? <Line x1={originX} y1={0} x2={originX} y2={H} stroke={colors.textMuted} strokeWidth={1.2} /> : null}
            {/* tick labels */}
            <G>
              {xTicks.filter((v) => v !== 0 || !yAxisVisible).map((v) => (
                <SvgText key={`lx${v}`} x={px(v)} y={xLabelY} fontSize={10} fill={colors.textSubtle} textAnchor="middle">
                  {fmtX(v)}
                </SvgText>
              ))}
              {yTicks.filter((v) => v !== 0 || !xAxisVisible).map((v) => (
                <SvgText
                  key={`ly${v}`}
                  x={yLabelX}
                  y={py(v) + 3.5}
                  fontSize={10}
                  fill={colors.textSubtle}
                  textAnchor={yLabelOnRight ? 'start' : 'end'}
                >
                  {fmt(v)}
                </SvgText>
              ))}
              {xAxisVisible && yAxisVisible ? (
                <SvgText x={originX - 4} y={originY + 13} fontSize={10} fill={colors.textSubtle} textAnchor="end">
                  0
                </SvgText>
              ) : null}
            </G>
            {/* asymptotes */}
            {asymptoteLines.map((l) => (
              <Line key={l.key} {...l} stroke={colors.textMuted} strokeWidth={1} strokeDasharray="5,4" />
            ))}
            {/* curves */}
            {paths.map((p) => (
              <Path key={p.key} d={p.d} stroke={p.color} strokeWidth={2.5} fill="none" strokeLinejoin="round" strokeLinecap="round" />
            ))}
            {/* key points */}
            {visiblePoints.map((p, i) => {
              const X = px(p.x);
              const Y = py(p.y);
              const isSel = selectedVisible && selectedVisible.x === p.x && selectedVisible.y === p.y;
              return (
                <G key={`kp${p.fi}${p.kinds.join()}${p.x}${p.y}`}>
                  <Circle cx={X} cy={Y} r={isSel ? 7 : 5} fill={colors.surface} stroke={p.color} strokeWidth={2.5} />
                </G>
              );
            })}
            {/* point labels, placed so they never overlap (drawn after all points) */}
            {visiblePoints.map((p, i) => {
              const spot = labelSpots[i];
              const isSel = selectedVisible && selectedVisible.x === p.x && selectedVisible.y === p.y;
              if (!spot || isSel) return null;
              return (
                <G key={`lb${p.fi}${p.kinds.join()}${p.x}${p.y}`}>
                  <Rect x={spot.box.x} y={spot.box.y} width={spot.box.w} height={spot.box.h} rx={4} fill={colors.surface} opacity={0.85} />
                  <SvgText x={spot.x} y={spot.y} fontSize={LABEL_FONT} fontWeight="600" fill={colors.textSecondary} textAnchor={spot.anchor}>
                    {formatPoint(p, lang, { pi: periodic })}
                  </SvgText>
                </G>
              );
            })}
          </Svg>
        ) : null}
      </View>

      {/* Selected point bubble */}
      {selectedVisible ? (
        <View
          pointerEvents="none"
          style={[
            styles.bubble,
            {
              backgroundColor: colors.inputBg,
              borderColor: colors.border,
              left: Math.min(Math.max(px(selectedVisible.x) - 80, 8), W - 168),
              top: py(selectedVisible.y) > 70 ? py(selectedVisible.y) - 62 : py(selectedVisible.y) + 14,
            },
          ]}
        >
          <Text style={[styles.bubbleKind, { color: selectedVisible.color === colors.text ? colors.textSubtle : selectedVisible.color }]} numberOfLines={1}>
            {selectedVisible.kinds.map(kindLabel).join(' · ')}
          </Text>
          <Text style={[styles.bubbleValue, { color: colors.text }]} numberOfLines={1}>
            {formatPoint(selectedVisible, lang, { pi: periodic })}
          </Text>
        </View>
      ) : null}

      {/* Zoom controls */}
      <View style={[styles.controls, { backgroundColor: colors.inputBg, borderColor: colors.border }]}>
        <ControlButton icon="add" label={t('graph.zoomIn')} color={colors.primary} onPress={() => setVp(zoomViewport(view, 0.5))} />
        <View style={[styles.controlDivider, { backgroundColor: colors.border }]} />
        <ControlButton icon="remove" label={t('graph.zoomOut')} color={colors.primary} onPress={() => setVp(zoomViewport(view, 2))} />
        <View style={[styles.controlDivider, { backgroundColor: colors.border }]} />
        <ControlButton
          icon="scan-outline"
          label={t('graph.resetView')}
          color={colors.primary}
          onPress={() => {
            setVp(initialViewport);
            setSelected(null);
          }}
        />
      </View>
    </View>
  );
}

function ControlButton({ icon, label, color, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.controlBtn}
      activeOpacity={0.6}
      accessibilityRole="button"
      accessibilityLabel={label}
      hitSlop={{ left: 4, right: 4 }}
    >
      <Ionicons name={icon} size={20} color={color} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: BORDER_RADIUS.md,
    overflow: 'hidden',
  },
  controls: {
    position: 'absolute',
    top: SPACING.sm,
    right: SPACING.sm,
    borderRadius: BORDER_RADIUS.sm,
    borderWidth: StyleSheet.hairlineWidth,
    overflow: 'hidden',
  },
  controlBtn: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  controlDivider: {
    height: StyleSheet.hairlineWidth,
  },
  bubble: {
    position: 'absolute',
    width: 160,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm - 2,
    borderRadius: BORDER_RADIUS.sm,
    borderWidth: StyleSheet.hairlineWidth,
    alignItems: 'center',
  },
  bubbleKind: {
    ...TYPOGRAPHY.small,
    fontWeight: '600',
  },
  bubbleValue: {
    ...TYPOGRAPHY.footnote,
    fontWeight: '600',
    marginTop: 1,
  },
});
