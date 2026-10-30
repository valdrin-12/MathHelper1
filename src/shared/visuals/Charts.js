import React from 'react';
import { Line, Rect, Path, Circle, G, Text as SvgText } from 'react-native-svg';
import { Frame, VIEW_W, tr, useVisualColors, pickColor, stepTicks, makeScale } from './common';
import { formatNumber } from '../utils/formatNumber';

const niceMax = (v) => {
  const pow = 10 ** Math.floor(Math.log10(Math.max(v, 1e-9))); const n = v / pow;
  return (n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10) * pow;
};
const niceStepFor = (max) => { const s = niceMax(max) / 5; return s >= 1 ? Math.max(1, Math.round(s)) : s; };

/** Vertical value axis with grid lines; returns elements and the y scale. */
function valueAxis({ max, top, bottom, left, right, vc, lang, step }) {
  const y = (v) => bottom - (v / max) * (bottom - top);
  const els = stepTicks(0, max, step).map((v) => (
    <G key={`v${v}`}>
      <Line x1={left} y1={y(v)} x2={right} y2={y(v)} stroke={vc.grid} strokeWidth={1} />
      <SvgText x={left - 5} y={y(v) + 3} fontSize={9} fill={vc.muted} textAnchor="end">{formatNumber(v, lang)}</SvgText>
    </G>
  ));
  return { y, els };
}

/**
 * Bar chart. spec: { bars: [{ label, value, color? }], max?, step?, showValues?: true, yLabel? }
 */
export function BarChart({ spec, lang }) {
  const vc = useVisualColors();
  const bars = spec.bars || [];
  const H = 190; const left = 32; const right = VIEW_W - 8; const top = 16; const bottom = H - 26;
  const max = spec.max || niceMax(Math.max(...bars.map((b) => b.value)));
  const step = spec.step || niceStepFor(max);
  const { y, els } = valueAxis({ max, top, bottom, left, right, vc, lang, step });
  const slot = (right - left) / bars.length; const bw = Math.min(42, slot * 0.62);
  return (
    <Frame h={H}>
      {els}
      <Line x1={left} y1={bottom} x2={right} y2={bottom} stroke={vc.axis} strokeWidth={1.5} />
      {bars.map((b, i) => {
        const cx = left + slot * (i + 0.5); const color = pickColor(b.color, vc, spec.multiColor ? i : 0);
        return (
          <G key={i}>
            <Rect x={cx - bw / 2} y={y(b.value)} width={bw} height={bottom - y(b.value)} rx={3} fill={color} />
            {spec.showValues !== false && <SvgText x={cx} y={y(b.value) - 4} fontSize={10} fontWeight="700" fill={vc.ink} textAnchor="middle">{formatNumber(b.value, lang)}</SvgText>}
            <SvgText x={cx} y={bottom + 14} fontSize={10} fill={vc.muted} textAnchor="middle">{tr(b.label, lang)}</SvgText>
          </G>
        );
      })}
      {spec.yLabel !== undefined && <SvgText x={4} y={10} fontSize={9} fill={vc.muted}>{tr(spec.yLabel, lang)}</SvgText>}
    </Frame>
  );
}

const arc = (cx, cy, r, a0, a1) => {
  const p = (a) => [cx + r * Math.sin(a), cy - r * Math.cos(a)];
  const [x0, y0] = p(a0); const [x1, y1] = p(a1);
  return `M ${cx} ${cy} L ${x0} ${y0} A ${r} ${r} 0 ${a1 - a0 > Math.PI ? 1 : 0} 1 ${x1} ${y1} Z`;
};

/** Pie chart with a legend. spec: { slices: [{ label, value, color? }], showPercent?: true } */
export function PieChart({ spec, lang }) {
  const vc = useVisualColors();
  const slices = spec.slices || [];
  const total = slices.reduce((s, x) => s + x.value, 0) || 1;
  const H = Math.max(150, 30 + slices.length * 22); const r = 62; const cx = 82; const cy = H / 2;
  let a = 0;
  return (
    <Frame h={H}>
      {slices.map((sl, i) => {
        const a0 = a; const a1 = a + (sl.value / total) * 2 * Math.PI; a = a1;
        const color = pickColor(sl.color, vc, i);
        return slices.length === 1
          ? <Circle key={i} cx={cx} cy={cy} r={r} fill={color} />
          : <Path key={i} d={arc(cx, cy, r, a0, a1)} fill={color} stroke={vc.surface} strokeWidth={1.5} />;
      })}
      {slices.map((sl, i) => {
        const ly = cy - ((slices.length - 1) * 22) / 2 + i * 22;
        const pct = (sl.value / total) * 100;
        return (
          <G key={`l${i}`}>
            <Rect x={170} y={ly - 8} width={12} height={12} rx={2} fill={pickColor(sl.color, vc, i)} />
            <SvgText x={188} y={ly + 2} fontSize={11} fill={vc.ink}>
              {tr(sl.label, lang)}{spec.showPercent !== false ? ` (${formatNumber(Math.round(pct * 10) / 10, lang)}%)` : ''}
            </SvgText>
          </G>
        );
      })}
    </Frame>
  );
}

/** Histogram (touching bars over class intervals). spec: { bins: [{ from, to, count }], step? } */
export function Histogram({ spec, lang }) {
  const vc = useVisualColors();
  const bins = spec.bins || [];
  const H = 190; const left = 32; const right = VIEW_W - 10; const top = 14; const bottom = H - 26;
  const max = spec.max || niceMax(Math.max(...bins.map((b) => b.count)));
  const { y, els } = valueAxis({ max, top, bottom, left, right, vc, lang, step: spec.step || niceStepFor(max) });
  const x0 = bins[0]?.from ?? 0; const x1 = bins[bins.length - 1]?.to ?? 1;
  const x = (v) => left + ((v - x0) / (x1 - x0)) * (right - left);
  return (
    <Frame h={H}>
      {els}
      {bins.map((b, i) => (
        <Rect key={i} x={x(b.from)} y={y(b.count)} width={x(b.to) - x(b.from)} height={bottom - y(b.count)} fill={vc.palette[0]} fillOpacity={0.85} stroke={vc.surface} strokeWidth={1.5} />
      ))}
      <Line x1={left} y1={bottom} x2={right} y2={bottom} stroke={vc.axis} strokeWidth={1.5} />
      {[...bins.map((b) => b.from), x1].map((v) => (
        <SvgText key={`b${v}`} x={x(v)} y={bottom + 14} fontSize={9} fill={vc.muted} textAnchor="middle">{formatNumber(v, lang)}</SvgText>
      ))}
    </Frame>
  );
}

/** Box plot on a number axis. spec: { min, q1, median, q3, max, axis: { from, to, step } } */
export function BoxPlot({ spec, lang }) {
  const vc = useVisualColors();
  const H = 110; const left = 18; const right = VIEW_W - 18; const mid = 44;
  const { from, to, step } = spec.axis;
  const x = (v) => left + ((v - from) / (to - from)) * (right - left);
  const color = vc.palette[0];
  return (
    <Frame h={H}>
      <Line x1={x(spec.min)} y1={mid} x2={x(spec.q1)} y2={mid} stroke={color} strokeWidth={2} />
      <Line x1={x(spec.q3)} y1={mid} x2={x(spec.max)} y2={mid} stroke={color} strokeWidth={2} />
      <Line x1={x(spec.min)} y1={mid - 10} x2={x(spec.min)} y2={mid + 10} stroke={color} strokeWidth={2} />
      <Line x1={x(spec.max)} y1={mid - 10} x2={x(spec.max)} y2={mid + 10} stroke={color} strokeWidth={2} />
      <Rect x={x(spec.q1)} y={mid - 18} width={x(spec.q3) - x(spec.q1)} height={36} fill={color + vc.fillAlpha} stroke={color} strokeWidth={2} />
      <Line x1={x(spec.median)} y1={mid - 18} x2={x(spec.median)} y2={mid + 18} stroke={vc.palette[1]} strokeWidth={3} />
      <Line x1={left} y1={H - 30} x2={right} y2={H - 30} stroke={vc.axis} strokeWidth={1.5} />
      {stepTicks(from, to, step).map((v) => (
        <G key={v}>
          <Line x1={x(v)} y1={H - 34} x2={x(v)} y2={H - 26} stroke={vc.axis} strokeWidth={1} />
          <SvgText x={x(v)} y={H - 14} fontSize={9} fill={vc.muted} textAnchor="middle">{formatNumber(v, lang)}</SvgText>
        </G>
      ))}
    </Frame>
  );
}

/** Scatter plot. spec: { view, points: [[x, y]…], trend?: [[x1, y1], [x2, y2]], xLabel?, yLabel? } */
export function ScatterPlot({ spec, lang }) {
  const vc = useVisualColors();
  const H = 200; const view = spec.view;
  const s = makeScale(view, VIEW_W, H, 24);
  const xs = stepTicks(view.xMin, view.xMax, spec.xStep || 1); const ys = stepTicks(view.yMin, view.yMax, spec.yStep || 1);
  return (
    <Frame h={H}>
      {xs.map((v) => <Line key={`gx${v}`} x1={s.x(v)} y1={s.y(view.yMin)} x2={s.x(v)} y2={s.y(view.yMax)} stroke={vc.grid} strokeWidth={1} />)}
      {ys.map((v) => <Line key={`gy${v}`} x1={s.x(view.xMin)} y1={s.y(v)} x2={s.x(view.xMax)} y2={s.y(v)} stroke={vc.grid} strokeWidth={1} />)}
      <Line x1={s.x(view.xMin)} y1={s.y(view.yMin)} x2={s.x(view.xMax)} y2={s.y(view.yMin)} stroke={vc.axis} strokeWidth={1.5} />
      <Line x1={s.x(view.xMin)} y1={s.y(view.yMin)} x2={s.x(view.xMin)} y2={s.y(view.yMax)} stroke={vc.axis} strokeWidth={1.5} />
      {xs.map((v) => <SvgText key={`tx${v}`} x={s.x(v)} y={s.y(view.yMin) + 12} fontSize={9} fill={vc.muted} textAnchor="middle">{formatNumber(v, lang)}</SvgText>)}
      {ys.map((v) => <SvgText key={`ty${v}`} x={s.x(view.xMin) - 4} y={s.y(v) + 3} fontSize={9} fill={vc.muted} textAnchor="end">{formatNumber(v, lang)}</SvgText>)}
      {spec.trend && <Line x1={s.x(spec.trend[0][0])} y1={s.y(spec.trend[0][1])} x2={s.x(spec.trend[1][0])} y2={s.y(spec.trend[1][1])} stroke={vc.palette[1]} strokeWidth={2} strokeDasharray="6,4" />}
      {(spec.points || []).map(([px, py], i) => <Circle key={i} cx={s.x(px)} cy={s.y(py)} r={4} fill={vc.palette[0]} />)}
      {spec.xLabel !== undefined && <SvgText x={VIEW_W - 6} y={H - 2} fontSize={9} fill={vc.muted} textAnchor="end">{tr(spec.xLabel, lang)}</SvgText>}
      {spec.yLabel !== undefined && <SvgText x={6} y={10} fontSize={9} fill={vc.muted}>{tr(spec.yLabel, lang)}</SvgText>}
    </Frame>
  );
}
