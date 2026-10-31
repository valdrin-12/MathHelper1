import React, { useMemo, useState } from 'react';
import { View, Text } from 'react-native';
import { Line, Path, Circle, G, Text as SvgText } from 'react-native-svg';
import { compile } from 'mathjs';
import Slider from '../ui/Slider';
import { Frame, VIEW_W, tr, useVisualColors, pickColor, makeScale, stepTicks } from './common';
import { formatNumber } from '../utils/formatNumber';

const niceStep = (span) => {
  const raw = span / 8; const pow = 10 ** Math.floor(Math.log10(raw)); const n = raw / pow;
  return (n < 1.5 ? 1 : n < 3 ? 2 : n < 7 ? 5 : 10) * pow;
};

/**
 * Graph of one or more functions (mathjs expressions in x and slider parameters).
 * spec: { view: { xMin, xMax, yMin, yMax }, height?,
 *         functions: [{ expr: '2*x + 1', color?, label?, domain?: [a, b], dashed? }],
 *         points?: [{ at: [x, y], label?, color? }],
 *         shade?: { expr, from, to, color? }          (area between the curve and the x-axis),
 *         sliders?: [{ name: 'a', min, max, step, value, label? }] }
 */
export default function FunctionPlot({ spec, lang }) {
  const vc = useVisualColors();
  const [params, setParams] = useState(() => Object.fromEntries((spec.sliders || []).map((s) => [s.name, s.value])));
  const view = spec.view;
  const H = spec.height || 220;
  const s = makeScale(view, VIEW_W, H, 14);
  const fns = useMemo(() => (spec.functions || []).map((f) => ({ ...f, code: compile(f.expr) })), [spec.functions]);
  const shade = useMemo(() => (spec.shade ? { ...spec.shade, code: compile(spec.shade.expr) } : null), [spec.shade]);
  const xStep = spec.xStep || niceStep(view.xMax - view.xMin);
  const yStep = spec.yStep || niceStep(view.yMax - view.yMin);

  const evalAt = (code, x) => { try { const v = code.evaluate({ x, ...params }); return typeof v === 'number' ? v : NaN; } catch { return NaN; } };
  const pathFor = (code, from = view.xMin, to = view.xMax) => {
    let d = ''; let pen = false; const N = 240;
    for (let i = 0; i <= N; i++) {
      const x = from + ((to - from) * i) / N; const y = evalAt(code, x);
      const ok = Number.isFinite(y) && y > view.yMin - (view.yMax - view.yMin) && y < view.yMax + (view.yMax - view.yMin);
      if (!ok) { pen = false; continue; }
      d += `${pen ? 'L' : 'M'} ${s.x(x).toFixed(1)} ${s.y(y).toFixed(1)} `; pen = true;
    }
    return d;
  };

  const out = [];
  stepTicks(view.xMin, view.xMax, xStep).forEach((v) => out.push(<Line key={`gx${v}`} x1={s.x(v)} y1={s.y(view.yMin)} x2={s.x(v)} y2={s.y(view.yMax)} stroke={vc.grid} strokeWidth={1} />));
  stepTicks(view.yMin, view.yMax, yStep).forEach((v) => out.push(<Line key={`gy${v}`} x1={s.x(view.xMin)} y1={s.y(v)} x2={s.x(view.xMax)} y2={s.y(v)} stroke={vc.grid} strokeWidth={1} />));
  const y0 = Math.min(Math.max(0, view.yMin), view.yMax); const x0 = Math.min(Math.max(0, view.xMin), view.xMax);
  out.push(<Line key="ax" x1={s.x(view.xMin)} y1={s.y(y0)} x2={s.x(view.xMax)} y2={s.y(y0)} stroke={vc.axis} strokeWidth={1.5} />);
  out.push(<Line key="ay" x1={s.x(x0)} y1={s.y(view.yMin)} x2={s.x(x0)} y2={s.y(view.yMax)} stroke={vc.axis} strokeWidth={1.5} />);
  stepTicks(view.xMin, view.xMax, xStep).filter((v) => v !== 0).forEach((v) => out.push(<SvgText key={`tx${v}`} x={s.x(v)} y={s.y(y0) + 12} fontSize={9} fill={vc.muted} textAnchor="middle">{formatNumber(v, lang)}</SvgText>));
  stepTicks(view.yMin, view.yMax, yStep).filter((v) => v !== 0).forEach((v) => out.push(<SvgText key={`ty${v}`} x={s.x(x0) - 4} y={s.y(v) + 3} fontSize={9} fill={vc.muted} textAnchor="end">{formatNumber(v, lang)}</SvgText>));

  if (shade) {
    const color = pickColor(shade.color, vc, 0); const N = 120; let d = `M ${s.x(shade.from)} ${s.y(0)} `;
    for (let i = 0; i <= N; i++) { const x = shade.from + ((shade.to - shade.from) * i) / N; const y = evalAt(shade.code, x); if (Number.isFinite(y)) d += `L ${s.x(x).toFixed(1)} ${s.y(y).toFixed(1)} `; }
    d += `L ${s.x(shade.to)} ${s.y(0)} Z`;
    out.push(<Path key="shade" d={d} fill={color + vc.fillAlpha} stroke="none" />);
  }
  fns.forEach((f, i) => {
    const color = pickColor(f.color, vc, i);
    out.push(<Path key={`f${i}`} d={pathFor(f.code, f.domain?.[0], f.domain?.[1])} stroke={color} strokeWidth={2.5} fill="none" strokeDasharray={f.dashed ? '6,4' : undefined} />);
    if (f.label !== undefined) {
      // label near the right end of the visible curve
      let lx = view.xMax - (view.xMax - view.xMin) * 0.08; let ly = evalAt(f.code, lx);
      for (let k = 0; k < 20 && !(ly < view.yMax && ly > view.yMin); k++) { lx -= (view.xMax - view.xMin) / 25; ly = evalAt(f.code, lx); }
      if (Number.isFinite(ly)) out.push(<SvgText key={`fl${i}`} x={s.x(lx)} y={s.y(ly) - 8} fontSize={11} fontWeight="700" fill={color} textAnchor="end">{tr(f.label, lang)}</SvgText>);
    }
  });
  (spec.points || []).forEach((p, i) => {
    const color = pickColor(p.color, vc, i);
    out.push(
      <G key={`p${i}`}>
        <Circle cx={s.x(p.at[0])} cy={s.y(p.at[1])} r={4} fill={color} />
        {p.label !== undefined && <SvgText x={s.x(p.at[0]) + 6} y={s.y(p.at[1]) - 6} fontSize={11} fontWeight="700" fill={color}>{tr(p.label, lang)}</SvgText>}
      </G>,
    );
  });

  return (
    <View>
      <Frame h={H}>{out}</Frame>
      {(spec.sliders || []).map((sl) => (
        <View key={sl.name} style={{ flexDirection: 'row', alignItems: 'center', gap: 10, paddingHorizontal: 8, marginTop: 6 }}>
          <Text style={{ color: vc.ink, fontWeight: '700', width: 64 }}>{sl.label ? tr(sl.label, lang) : sl.name} = {formatNumber(params[sl.name], lang)}</Text>
          <Slider
            style={{ flex: 1 }}
            value={params[sl.name]}
            min={sl.min}
            max={sl.max}
            step={sl.step}
            onValueChange={(v) => setParams((p) => ({ ...p, [sl.name]: v }))}
            accessibilityLabel={sl.name}
          />
        </View>
      ))}
    </View>
  );
}
