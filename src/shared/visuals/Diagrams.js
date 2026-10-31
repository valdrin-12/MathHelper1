import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Line, Circle, Polygon, G, Text as SvgText, Rect } from 'react-native-svg';
import { Frame, VIEW_W, tr, useVisualColors, pickColor, wrapList } from './common';

/**
 * Probability tree (two stages).
 * spec: { branches: [{ label, p, children?: [{ label, p }] }] }   p is shown as given ("1/2", 0.3 …)
 */
export function TreeDiagram({ spec, lang }) {
  const vc = useVisualColors();
  const first = spec.branches || [];
  const leaves = first.reduce((n, b) => n + Math.max(1, (b.children || []).length), 0);
  const H = Math.max(120, leaves * 30 + 16);
  const x0 = 14; const x1 = 128; const x2 = 248;
  const out = [];
  let leaf = 0;
  const leafY = (k) => 16 + (k + 0.5) * ((H - 32) / leaves);
  first.forEach((b, i) => {
    const kids = b.children || [];
    const ys = kids.length ? kids.map((_, j) => leafY(leaf + j)) : [leafY(leaf)];
    const y1 = ys.reduce((s, v) => s + v, 0) / ys.length;
    const color = pickColor(b.color, vc, i);
    out.push(<Line key={`b${i}`} x1={x0} y1={H / 2} x2={x1 - 8} y2={y1} stroke={color} strokeWidth={2} />);
    out.push(<SvgText key={`bp${i}`} x={(x0 + x1) / 2 - 4} y={(H / 2 + y1) / 2 - 5} fontSize={10} fill={vc.muted} textAnchor="middle">{tr(b.p, lang)}</SvgText>);
    out.push(<SvgText key={`bl${i}`} x={x1} y={y1 + 4} fontSize={12} fontWeight="700" fill={color}>{tr(b.label, lang)}</SvgText>);
    kids.forEach((c, j) => {
      const y2 = ys[j];
      out.push(<Line key={`c${i}${j}`} x1={x1 + 30} y1={y1} x2={x2 - 8} y2={y2} stroke={vc.axis} strokeWidth={1.5} />);
      out.push(<SvgText key={`cp${i}${j}`} x={(x1 + 30 + x2) / 2} y={(y1 + y2) / 2 - 4} fontSize={10} fill={vc.muted} textAnchor="middle">{tr(c.p, lang)}</SvgText>);
      out.push(<SvgText key={`cl${i}${j}`} x={x2} y={y2 + 4} fontSize={12} fontWeight="600" fill={vc.ink}>{tr(c.label, lang)}</SvgText>);
    });
    leaf += Math.max(1, kids.length);
  });
  out.push(<Circle key="root" cx={x0} cy={H / 2} r={4} fill={vc.ink} />);
  return <Frame h={H}>{out}</Frame>;
}

/**
 * Venn diagram of two sets inside a universe.
 * spec: { a: { label, only }, b: { label, only }, both, outside?, universe? }  (counts or element lists as text)
 */
export function VennDiagram({ spec, lang }) {
  const vc = useVisualColors();
  const r = 70; const cxA = 118; const cxB = 202; const cy = 112; const H = cy + r + 22;
  const ca = vc.palette[0]; const cb = vc.palette[1];
  // several lines when a region lists many elements
  const block = (text, x, maxChars, key) => {
    const lines = wrapList(tr(text, lang), maxChars);
    const top = cy - ((lines.length - 1) * 15) / 2 + 4;
    return lines.map((ln, k) => (
      <SvgText key={`${key}${k}`} x={x} y={top + k * 15} fontSize={12.5} fontWeight="700" fill={vc.ink} textAnchor="middle">{ln}</SvgText>
    ));
  };
  return (
    <Frame h={H}>
      <Rect x={6} y={6} width={VIEW_W - 12} height={H - 12} rx={8} fill="none" stroke={vc.axis} strokeWidth={1.2} />
      {spec.universe !== undefined && <SvgText x={16} y={22} fontSize={11} fontWeight="700" fill={vc.muted}>{tr(spec.universe, lang)}</SvgText>}
      <Circle cx={cxA} cy={cy} r={r} fill={ca + vc.fillAlpha} stroke={ca} strokeWidth={2} />
      <Circle cx={cxB} cy={cy} r={r} fill={cb + vc.fillAlpha} stroke={cb} strokeWidth={2} />
      <SvgText x={cxA - 20} y={cy - r - 8} fontSize={12} fontWeight="700" fill={ca} textAnchor="middle">{tr(spec.a.label, lang)}</SvgText>
      <SvgText x={cxB + 20} y={cy - r - 8} fontSize={12} fontWeight="700" fill={cb} textAnchor="middle">{tr(spec.b.label, lang)}</SvgText>
      {block(spec.a.only, cxA - 32, 9, 'a')}
      {block(spec.both, (cxA + cxB) / 2, 7, 'ab')}
      {block(spec.b.only, cxB + 32, 9, 'b')}
      {spec.outside !== undefined && <SvgText x={VIEW_W - 18} y={H - 16} fontSize={13} fontWeight="700" fill={vc.ink} textAnchor="end">{tr(spec.outside, lang)}</SvgText>}
    </Frame>
  );
}

/**
 * Table of values (x / y rows, or any small table).
 * spec: { rows: [{ head, cells: [...] }], highlight?: [rowIndex, colIndex][] }
 */
export function ValueTable({ spec, lang }) {
  const vc = useVisualColors();
  const hl = new Set((spec.highlight || []).map(([r, c]) => `${r}:${c}`));
  return (
    <View style={[tableStyles.table, { borderColor: vc.axis }]}>
      {(spec.rows || []).map((row, r) => (
        <View key={r} style={[tableStyles.row, r > 0 && { borderTopWidth: 1, borderTopColor: vc.grid }]}>
          <View style={[tableStyles.head, { backgroundColor: vc.primary + '1F', borderRightColor: vc.grid }]}>
            <Text style={[tableStyles.headText, { color: vc.ink }]}>{tr(row.head, lang)}</Text>
          </View>
          {row.cells.map((c, k) => (
            <View key={k} style={[tableStyles.cell, k > 0 && { borderLeftWidth: 1, borderLeftColor: vc.grid }, hl.has(`${r}:${k}`) && { backgroundColor: vc.palette[1] + '33' }]}>
              <Text style={[tableStyles.cellText, { color: vc.ink }]}>{tr(c, lang)}</Text>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
}

const tableStyles = StyleSheet.create({
  table: { borderWidth: 1, borderRadius: 8, overflow: 'hidden', alignSelf: 'stretch', marginVertical: 4 },
  row: { flexDirection: 'row' },
  head: { minWidth: 64, paddingVertical: 8, paddingHorizontal: 8, alignItems: 'center', justifyContent: 'center', borderRightWidth: 1 },
  headText: { fontWeight: '700', fontSize: 14 },
  cell: { flex: 1, paddingVertical: 8, alignItems: 'center' },
  cellText: { fontSize: 14, fontVariant: ['tabular-nums'] },
});

/**
 * A solid drawn in oblique projection: cube / cuboid with edge labels.
 * spec: { kind: 'cuboid', a, b, c, labels?: { a, b, c } }  (a = length, b = depth, c = height; any units)
 */
export function Solid({ spec, lang }) {
  const vc = useVisualColors();
  const { a, b, c } = spec;
  const scale = Math.min(150 / a, 100 / c, 140 / (a + b * 0.5));
  const L = a * scale; const D = b * scale * 0.5; const Hh = c * scale;
  const H = Math.round(Hh + D + 40);
  const ox = (VIEW_W - L - D) / 2; const oy = H - 22;
  // front face corners
  const f = [[ox, oy], [ox + L, oy], [ox + L, oy - Hh], [ox, oy - Hh]];
  const back = f.map(([x, y]) => [x + D, y - D]);
  const color = vc.palette[0];
  const pts = (arr) => arr.map((p) => p.join(',')).join(' ');
  const labels = spec.labels || {};
  return (
    <Frame h={H}>
      <Line x1={back[0][0]} y1={back[0][1]} x2={back[1][0]} y2={back[1][1]} stroke={vc.muted} strokeWidth={1.2} strokeDasharray="4,3" />
      <Line x1={back[0][0]} y1={back[0][1]} x2={back[3][0]} y2={back[3][1]} stroke={vc.muted} strokeWidth={1.2} strokeDasharray="4,3" />
      <Line x1={back[0][0]} y1={back[0][1]} x2={f[0][0]} y2={f[0][1]} stroke={vc.muted} strokeWidth={1.2} strokeDasharray="4,3" />
      <Polygon points={pts([f[3], f[2], back[2], back[3]])} fill={color + '22'} stroke={color} strokeWidth={2} />
      <Polygon points={pts([f[1], back[1], back[2], f[2]])} fill={color + '33'} stroke={color} strokeWidth={2} />
      <Polygon points={pts(f)} fill={color + vc.fillAlpha} stroke={color} strokeWidth={2} />
      {labels.a !== undefined && <SvgText x={ox + L / 2} y={oy + 15} fontSize={11} fontWeight="700" fill={vc.ink} textAnchor="middle">{tr(labels.a, lang)}</SvgText>}
      {labels.b !== undefined && <SvgText x={ox + L + D / 2 + 6} y={oy - D / 2 + 10} fontSize={11} fontWeight="700" fill={vc.ink}>{tr(labels.b, lang)}</SvgText>}
      {labels.c !== undefined && <SvgText x={ox - 6} y={oy - Hh / 2 + 4} fontSize={11} fontWeight="700" fill={vc.ink} textAnchor="end">{tr(labels.c, lang)}</SvgText>}
      <G />
    </Frame>
  );
}
