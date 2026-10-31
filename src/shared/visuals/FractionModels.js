import React from 'react';
import { Rect, Path, Circle, G, Text as SvgText } from 'react-native-svg';
import { Frame, VIEW_W, tr, useVisualColors, pickColor } from './common';

/**
 * Fraction bars, one under the other (good for comparing fractions).
 * spec: { bars: [{ parts, filled, label?, color? }] }   label defaults to "filled/parts"
 */
export function FractionBar({ spec, lang }) {
  const vc = useVisualColors();
  const bars = spec.bars || [];
  const rowH = 34; const gap = 12; const left = 64; const right = 12;
  const H = bars.length * rowH + (bars.length - 1) * gap + 16;
  const w = VIEW_W - left - right;
  return (
    <Frame h={H}>
      {bars.map((b, i) => {
        const y = 8 + i * (rowH + gap);
        const color = pickColor(b.color, vc, i);
        const cell = w / b.parts;
        return (
          <G key={i}>
            <SvgText x={left - 10} y={y + rowH / 2 + 5} fontSize={14} fontWeight="700" fill={vc.ink} textAnchor="end">
              {b.label !== undefined ? tr(b.label, lang) : `${b.filled}/${b.parts}`}
            </SvgText>
            {Array.from({ length: b.parts }).map((_, k) => (
              <Rect
                key={k}
                x={left + k * cell}
                y={y}
                width={cell}
                height={rowH}
                fill={k < b.filled ? color : vc.surface}
                fillOpacity={k < b.filled ? 0.85 : 1}
                stroke={vc.axis}
                strokeWidth={1.2}
              />
            ))}
          </G>
        );
      })}
    </Frame>
  );
}

const slicePath = (cx, cy, r, a0, a1) => {
  const p = (a) => [cx + r * Math.sin(a), cy - r * Math.cos(a)];
  const [x0, y0] = p(a0); const [x1, y1] = p(a1);
  const large = a1 - a0 > Math.PI ? 1 : 0;
  return `M ${cx} ${cy} L ${x0} ${y0} A ${r} ${r} 0 ${large} 1 ${x1} ${y1} Z`;
};

/**
 * Circle (pie) models of fractions, side by side.
 * spec: { pies: [{ parts, filled, label?, color? }] }
 */
export function PieModel({ spec, lang }) {
  const vc = useVisualColors();
  const pies = spec.pies || [];
  const n = Math.max(1, pies.length);
  const r = Math.min(52, (VIEW_W / n) / 2 - 14);
  const H = 2 * r + 44;
  return (
    <Frame h={H}>
      {pies.map((p, i) => {
        const cx = (VIEW_W / n) * (i + 0.5);
        const cy = r + 10;
        const color = pickColor(p.color, vc, i);
        const step = (2 * Math.PI) / p.parts;
        return (
          <G key={i}>
            {p.parts === 1 ? (
              <Circle cx={cx} cy={cy} r={r} fill={p.filled ? color : vc.surface} stroke={vc.axis} strokeWidth={1.2} />
            ) : Array.from({ length: p.parts }).map((_, k) => (
              <Path key={k} d={slicePath(cx, cy, r, k * step, (k + 1) * step)} fill={k < p.filled ? color : vc.surface} fillOpacity={k < p.filled ? 0.85 : 1} stroke={vc.axis} strokeWidth={1.2} />
            ))}
            <SvgText x={cx} y={cy + r + 24} fontSize={14} fontWeight="700" fill={vc.ink} textAnchor="middle">
              {p.label !== undefined ? tr(p.label, lang) : `${p.filled}/${p.parts}`}
            </SvgText>
          </G>
        );
      })}
    </Frame>
  );
}
