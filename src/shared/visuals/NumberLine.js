import React, { useMemo, useRef, useState } from 'react';
import { View, Text, PanResponder } from 'react-native';
import { Line, Circle, Path, G, Text as SvgText, Polygon } from 'react-native-svg';
import { Frame, VIEW_W, tr, useVisualColors, pickColor, stepTicks } from './common';
import { formatNumber } from '../utils/formatNumber';

/**
 * Number line.
 * spec: { min, max, step = 1, labelEvery = 1 (label every n-th tick), tickLabels = true,
 *         points?: [{ x, label?, color?, open?, below? }]   (below: label under the axis, clear of arcs),
 *         intervals?: [{ from (null = −∞), to (null = +∞), fromOpen?, toOpen?, color? }],
 *         jumps?: [{ from, to, label?, color? }]   (arcs: "+3", "−5" …),
 *         drag?: { value, label? }                  (a point the student can drag; snaps to step) }
 */
export default function NumberLine({ spec, lang }) {
  const vc = useVisualColors();
  const { min, max, step = 1, labelEvery = 1, tickLabels = true, points = [], intervals = [], jumps = [], drag } = spec;
  const hasJumps = jumps.length > 0;
  const belowRow = points.some((p) => p.below) && tickLabels ? 14 : 0;
  const H = (hasJumps ? 96 : 66) + belowRow;
  const axisY = hasJumps ? 62 : 32;
  const pad = 18;
  const x = (v) => pad + ((v - min) / (max - min)) * (VIEW_W - 2 * pad);
  const ticks = useMemo(() => stepTicks(min, max, step), [min, max, step]);
  const [dragValue, setDragValue] = useState(drag ? drag.value : null);
  const box = useRef({ width: 1 });

  const pan = useMemo(() => (drag ? PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderTerminationRequest: () => false,
    onPanResponderGrant: (e) => move(e.nativeEvent.locationX),
    onPanResponderMove: (e) => move(e.nativeEvent.locationX),
  }) : null), [drag, min, max, step]); // eslint-disable-line react-hooks/exhaustive-deps

  function move(px) {
    if (!Number.isFinite(px)) return;
    const u = (px / box.current.width) * VIEW_W;
    const raw = min + ((u - pad) / (VIEW_W - 2 * pad)) * (max - min);
    const snapped = Math.min(max, Math.max(min, Math.round(raw / step) * step));
    setDragValue(Number(snapped.toFixed(10)));
  }

  const intervalShapes = intervals.map((iv, i) => {
    const color = pickColor(iv.color, vc, 0);
    const from = iv.from === null || iv.from === undefined ? min : iv.from;
    const to = iv.to === null || iv.to === undefined ? max : iv.to;
    const y = axisY - 9;
    return (
      <G key={`iv${i}`}>
        <Line x1={x(from)} y1={y} x2={x(to)} y2={y} stroke={color} strokeWidth={4} strokeLinecap="round" />
        {(iv.from === null || iv.from === undefined) && <Polygon points={`${x(min) - 6},${y} ${x(min) + 2},${y - 5} ${x(min) + 2},${y + 5}`} fill={color} />}
        {(iv.to === null || iv.to === undefined) && <Polygon points={`${x(max) + 6},${y} ${x(max) - 2},${y - 5} ${x(max) - 2},${y + 5}`} fill={color} />}
        {iv.from !== null && iv.from !== undefined && <Circle cx={x(iv.from)} cy={y} r={5} fill={iv.fromOpen ? vc.surface : color} stroke={color} strokeWidth={2} />}
        {iv.to !== null && iv.to !== undefined && <Circle cx={x(iv.to)} cy={y} r={5} fill={iv.toOpen ? vc.surface : color} stroke={color} strokeWidth={2} />}
      </G>
    );
  });

  const jumpShapes = jumps.map((j, i) => {
    const color = pickColor(j.color, vc, 1 + i);
    const x1 = x(j.from); const x2 = x(j.to);
    const top = axisY - 22 - Math.min(26, Math.abs(x2 - x1) / 4);
    const mid = (x1 + x2) / 2;
    const dir = x2 >= x1 ? 1 : -1;
    return (
      <G key={`j${i}`}>
        <Path d={`M ${x1} ${axisY - 4} Q ${mid} ${top} ${x2} ${axisY - 4}`} stroke={color} strokeWidth={2} fill="none" />
        <Polygon points={`${x2},${axisY - 3} ${x2 - dir * 7},${axisY - 9} ${x2 - dir * 2},${axisY - 11}`} fill={color} />
        {j.label !== undefined && <SvgText x={mid} y={top + 4} fontSize={11} fontWeight="700" fill={color} textAnchor="middle">{tr(j.label, lang)}</SvgText>}
      </G>
    );
  });

  const allPoints = [...points];
  if (drag && dragValue !== null) allPoints.push({ x: dragValue, label: drag.label ?? dragValue, color: 'secondary', isDrag: true });

  return (
    <View>
      <View
        onLayout={(e) => { box.current.width = e.nativeEvent.layout.width || 1; }}
        {...(pan ? pan.panHandlers : {})}
      >
        <Frame h={H}>
          <Line x1={pad - 8} y1={axisY} x2={VIEW_W - pad + 8} y2={axisY} stroke={vc.axis} strokeWidth={1.5} />
          <Polygon points={`${VIEW_W - pad + 12},${axisY} ${VIEW_W - pad + 4},${axisY - 4} ${VIEW_W - pad + 4},${axisY + 4}`} fill={vc.axis} />
          {ticks.map((t, i) => (
            <G key={`t${t}`}>
              <Line x1={x(t)} y1={axisY - 5} x2={x(t)} y2={axisY + 5} stroke={vc.axis} strokeWidth={t === 0 ? 2 : 1} />
              {tickLabels && i % labelEvery === 0 && (
                <SvgText x={x(t)} y={axisY + 18} fontSize={10} fill={vc.muted} textAnchor="middle">{formatNumber(t, lang)}</SvgText>
              )}
            </G>
          ))}
          {intervalShapes}
          {jumpShapes}
          {allPoints.map((p, i) => {
            const color = pickColor(p.color, vc, i);
            return (
              <G key={`p${i}`}>
                <Circle cx={x(p.x)} cy={axisY} r={p.isDrag ? 7 : 5} fill={p.open ? vc.surface : color} stroke={color} strokeWidth={2} />
                {p.label !== undefined && (
                  <SvgText x={x(p.x)} y={p.below ? axisY + (tickLabels ? 32 : 18) : axisY - 12} fontSize={11} fontWeight="700" fill={color} textAnchor="middle">{tr(p.label, lang)}</SvgText>
                )}
              </G>
            );
          })}
        </Frame>
      </View>
      {drag && (
        <Text style={{ textAlign: 'center', color: vc.muted, fontSize: 13, marginTop: 2 }}>
          {tr(drag.hint || { al: 'Tërhiqni pikën', en: 'Drag the point', de: 'Ziehen Sie den Punkt' }, lang)}: {formatNumber(dragValue, lang)}
        </Text>
      )}
    </View>
  );
}
