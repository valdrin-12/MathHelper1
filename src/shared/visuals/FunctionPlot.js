import React, { useMemo, useState } from 'react';
import { View, Text } from 'react-native';
import { Line, Path, Circle, G, Text as SvgText } from 'react-native-svg';
import { compile } from 'mathjs';
import { Frame, VIEW_W, tr, useVisualColors, pickColor, makeScale, stepTicks } from './common';
import { formatNumber } from '../utils/formatNumber';
import ParamControl from './ParamControl';
import { evalNum, fillTemplate, pickReadout } from './params';

const niceStep = (span) => {
  const raw = span / 8; const pow = 10 ** Math.floor(Math.log10(raw)); const n = raw / pow;
  return (n < 1.5 ? 1 : n < 3 ? 2 : n < 7 ? 5 : 10) * pow;
};

/**
 * Graph of one or more functions (mathjs expressions in x and slider parameters).
 * spec: { view: { xMin, xMax, yMin, yMax }, height?, equal?: true (same unit on both axes, circles look round),
 *         functions: [{ expr: '2*x + 1', color?, label?, domain?: [a, b], dashed? }],
 *         curves?: [{ x: 'p + r*cos(t)', y: 'q + r*sin(t)', t?: [0, 2*pi], color?, label?, dashed? }]  (parametric),
 *         points?: [{ at: [x, y], label?, color? }],
 *         segments?: [{ from: [x, y], to: [x, y], color?, label?, dashed? }],
 *         shade?: { expr, from, to, lower?, color? }   (area between the curve and the x-axis, or the curve `lower`),
 *         sliders?: [{ name: 'a', min, max, step, value, label? }],
 *         readouts?: [{ text } | { cases: [{ when?, text }] }] }   (live lines under the graph)
 * Coordinates, domains, shade limits may be expressions in the slider parameters ('a', 'p + r');
 * labels and readouts may hold {expressions} that are replaced by their current value.
 */
export default function FunctionPlot({ spec, lang }) {
  const vc = useVisualColors();
  const [params, setParams] = useState(() => Object.fromEntries((spec.sliders || []).map((s) => [s.name, s.value])));
  const view = spec.view;
  const H = spec.height || (spec.equal
    ? Math.round(Math.min(320, Math.max(160, (VIEW_W * (view.yMax - view.yMin)) / (view.xMax - view.xMin))))
    : 220);
  const s = makeScale(spec.equal ? { ...view, equal: true } : view, VIEW_W, H, 14);
  const fns = useMemo(() => (spec.functions || []).map((f) => ({ ...f, code: compile(f.expr) })), [spec.functions]);
  const shade = useMemo(() => (spec.shade ? {
    ...spec.shade, code: compile(spec.shade.expr), lowerCode: spec.shade.lower ? compile(spec.shade.lower) : null,
  } : null), [spec.shade]);
  const xStep = spec.xStep || niceStep(view.xMax - view.xMin);
  const yStep = spec.yStep || niceStep(view.yMax - view.yMin);
  const num = (v) => evalNum(v, params);
  const label = (l) => fillTemplate(tr(l, lang), params, lang);

  const evalAt = (code, x) => { try { const v = code.evaluate({ x, ...params }); return typeof v === 'number' ? v : NaN; } catch { return NaN; } };
  const inView = (y) => Number.isFinite(y) && y > view.yMin - (view.yMax - view.yMin) && y < view.yMax + (view.yMax - view.yMin);
  const pathFor = (code, from = view.xMin, to = view.xMax) => {
    let d = ''; let pen = false; const N = 240;
    for (let i = 0; i <= N; i++) {
      const x = from + ((to - from) * i) / N; const y = evalAt(code, x);
      if (!inView(y)) { pen = false; continue; }
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
    const color = pickColor(shade.color, vc, 0); const N = 120;
    const from = num(shade.from); const to = num(shade.to);
    if (Number.isFinite(from) && Number.isFinite(to) && to !== from) {
      const lowerAt = (x) => (shade.lowerCode ? evalAt(shade.lowerCode, x) : 0);
      let d = `M ${s.x(from)} ${s.y(lowerAt(from))} `;
      for (let i = 0; i <= N; i++) { const x = from + ((to - from) * i) / N; const y = evalAt(shade.code, x); if (Number.isFinite(y)) d += `L ${s.x(x).toFixed(1)} ${s.y(y).toFixed(1)} `; }
      for (let i = N; i >= 0; i--) { const x = from + ((to - from) * i) / N; const y = lowerAt(x); if (Number.isFinite(y)) d += `L ${s.x(x).toFixed(1)} ${s.y(y).toFixed(1)} `; }
      out.push(<Path key="shade" d={`${d}Z`} fill={color + vc.fillAlpha} stroke="none" />);
    }
  }
  fns.forEach((f, i) => {
    const color = pickColor(f.color, vc, i);
    const from = f.domain ? num(f.domain[0]) : undefined; const to = f.domain ? num(f.domain[1]) : undefined;
    out.push(<Path key={`f${i}`} d={pathFor(f.code, from, to)} stroke={color} strokeWidth={2.5} fill="none" strokeDasharray={f.dashed ? '6,4' : undefined} />);
    if (f.label !== undefined) {
      // label near the right end of the visible curve
      const right = Math.min(to ?? view.xMax, view.xMax);
      let lx = right - (view.xMax - view.xMin) * 0.08; let ly = evalAt(f.code, lx);
      for (let k = 0; k < 20 && !(ly < view.yMax && ly > view.yMin); k++) { lx -= (view.xMax - view.xMin) / 25; ly = evalAt(f.code, lx); }
      if (Number.isFinite(ly)) out.push(<SvgText key={`fl${i}`} x={s.x(lx)} y={s.y(ly) - 8} fontSize={11} fontWeight="700" fill={color} textAnchor="end">{label(f.label)}</SvgText>);
    }
  });
  (spec.curves || []).forEach((c, i) => {
    const color = pickColor(c.color, vc, i + fns.length);
    const t0 = num(c.t?.[0] ?? 0); const t1 = num(c.t?.[1] ?? 2 * Math.PI); const N = 240;
    let d = ''; let pen = false; let lastIn = null;
    for (let k = 0; k <= N; k++) {
      const t = t0 + ((t1 - t0) * k) / N;
      const x = evalNum(c.x, { ...params, t }); const y = evalNum(c.y, { ...params, t });
      if (!Number.isFinite(x) || !inView(y) || x < view.xMin - 50 || x > view.xMax + 50) { pen = false; continue; }
      d += `${pen ? 'L' : 'M'} ${s.x(x).toFixed(1)} ${s.y(y).toFixed(1)} `; pen = true; lastIn = lastIn || [x, y];
    }
    out.push(<Path key={`c${i}`} d={d} stroke={color} strokeWidth={2.5} fill="none" strokeDasharray={c.dashed ? '6,4' : undefined} />);
    if (c.label !== undefined && lastIn) out.push(<SvgText key={`cl${i}`} x={s.x(lastIn[0]) + 4} y={s.y(lastIn[1]) - 6} fontSize={11} fontWeight="700" fill={color}>{label(c.label)}</SvgText>);
  });
  (spec.segments || []).forEach((g, i) => {
    const color = pickColor(g.color, vc, i);
    const x1 = num(g.from[0]); const y1 = num(g.from[1]); const x2 = num(g.to[0]); const y2 = num(g.to[1]);
    if (![x1, y1, x2, y2].every(Number.isFinite)) return;
    out.push(<Line key={`s${i}`} x1={s.x(x1)} y1={s.y(y1)} x2={s.x(x2)} y2={s.y(y2)} stroke={color} strokeWidth={2} strokeDasharray={g.dashed ? '5,4' : undefined} />);
    if (g.label !== undefined) out.push(<SvgText key={`sl${i}`} x={(s.x(x1) + s.x(x2)) / 2 + 5} y={(s.y(y1) + s.y(y2)) / 2 - 5} fontSize={11} fontWeight="700" fill={color}>{label(g.label)}</SvgText>);
  });
  (spec.points || []).forEach((p, i) => {
    const color = pickColor(p.color, vc, i);
    const px = num(p.at[0]); const py = num(p.at[1]);
    if (!Number.isFinite(px) || !Number.isFinite(py)) return;
    out.push(
      <G key={`p${i}`}>
        <Circle cx={s.x(px)} cy={s.y(py)} r={4} fill={color} />
        {p.label !== undefined && <SvgText x={s.x(px) + 6} y={s.y(py) - 6} fontSize={11} fontWeight="700" fill={color}>{label(p.label)}</SvgText>}
      </G>,
    );
  });

  return (
    <View>
      <Frame h={H}>{out}</Frame>
      {(spec.readouts || []).map((r, i) => {
        const text = pickReadout(r, params);
        return text ? (
          <Text key={`r${i}`} style={{ color: vc.ink, fontWeight: '600', textAlign: 'center', marginTop: 6, paddingHorizontal: 8 }}>
            {label(text)}
          </Text>
        ) : null;
      })}
      {(spec.sliders || []).map((sl) => (
        <ParamControl
          key={sl.name}
          slider={sl}
          value={params[sl.name]}
          lang={lang}
          onChange={(v) => setParams((p) => ({ ...p, [sl.name]: v }))}
        />
      ))}
    </View>
  );
}
