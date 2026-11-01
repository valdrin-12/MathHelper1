import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Line, Path, Circle, G, Text as SvgText } from 'react-native-svg';
import { Frame, VIEW_W, tr, useVisualColors, pickColor } from './common';
import ParamControl from './ParamControl';
import { showNum } from './params';

const R = 92; // radius in px
const H = 230;

/**
 * Unit circle with an angle slider: the ray, the point (cos α, sin α), the sine (vertical) and the cosine
 * (horizontal), the tangent value, and for angles over 360° the reduction 390° = 360° + 30°.
 * spec: { angle, min?: -360, max?: 720, step?: 5, marks?: [degrees…] (extra rays, e.g. the second solution),
 *         label?: { al, en, de } (slider name, default α) }
 */
export default function UnitCircle({ spec, lang }) {
  const vc = useVisualColors();
  const [deg, setDeg] = useState(spec.angle ?? 30);
  const cx = VIEW_W / 2; const cy = H / 2;
  const rad = (d) => (d * Math.PI) / 180;
  const px = (d) => cx + R * Math.cos(rad(d)); const py = (d) => cy - R * Math.sin(rad(d));
  const sin = Math.sin(rad(deg)); const cos = Math.cos(rad(deg));
  const near0 = (v) => (Math.abs(v) < 1e-9 ? 0 : v);
  const tanDefined = Math.abs(cos) > 1e-9;
  const sinColor = pickColor('secondary', vc, 0); const cosColor = pickColor('success', vc, 0); const rayColor = pickColor('primary', vc, 0);

  // the arc of the angle (one full turn drawn as a dashed circle, the rest as an arc)
  const turns = Math.trunc(deg / 360); const rest = deg - turns * 360;
  const arcR = 26;
  const arc = (from, to) => {
    if (Math.abs(to - from) < 0.5) return '';
    const large = Math.abs(to - from) > 180 ? 1 : 0; const sweep = to > from ? 0 : 1;
    return `M ${cx + arcR * Math.cos(rad(from))} ${cy - arcR * Math.sin(rad(from))} A ${arcR} ${arcR} 0 ${large} ${sweep} ${cx + arcR * Math.cos(rad(to))} ${cy - arcR * Math.sin(rad(to))}`;
  };

  const out = [
    <Line key="ax" x1={cx - R - 18} y1={cy} x2={cx + R + 18} y2={cy} stroke={vc.axis} strokeWidth={1.5} />,
    <Line key="ay" x1={cx} y1={cy - R - 12} x2={cx} y2={cy + R + 12} stroke={vc.axis} strokeWidth={1.5} />,
    <Circle key="c" cx={cx} cy={cy} r={R} stroke={vc.grid} strokeWidth={2} fill="none" />,
    <SvgText key="l1" x={cx + R + 4} y={cy + 13} fontSize={10} fill={vc.muted}>1</SvgText>,
    <SvgText key="l2" x={cx + 5} y={cy - R - 3} fontSize={10} fill={vc.muted}>1</SvgText>,
  ];
  (spec.marks || []).forEach((m, i) => out.push(
    <G key={`m${i}`}>
      <Line x1={cx} y1={cy} x2={px(m)} y2={py(m)} stroke={vc.muted} strokeWidth={1.5} strokeDasharray="4,4" />
      <SvgText x={px(m) + (Math.cos(rad(m)) >= 0 ? 4 : -4)} y={py(m) - 4} fontSize={10} fill={vc.muted} textAnchor={Math.cos(rad(m)) >= 0 ? 'start' : 'end'}>{showNum(m, lang)}°</SvgText>
    </G>,
  ));
  if (turns !== 0) out.push(<Circle key="turn" cx={cx} cy={cy} r={arcR - 6} stroke={rayColor} strokeWidth={1.5} fill="none" strokeDasharray="3,3" />);
  out.push(<Path key="arc" d={arc(0, rest)} stroke={rayColor} strokeWidth={2} fill="none" />);
  // cos along the x-axis, sin as the vertical drop to the x-axis
  out.push(<Line key="cos" x1={cx} y1={cy} x2={px(deg)} y2={cy} stroke={cosColor} strokeWidth={4} />);
  out.push(<Line key="sin" x1={px(deg)} y1={cy} x2={px(deg)} y2={py(deg)} stroke={sinColor} strokeWidth={4} />);
  out.push(<Line key="ray" x1={cx} y1={cy} x2={px(deg)} y2={py(deg)} stroke={rayColor} strokeWidth={2.5} />);
  out.push(<Circle key="pt" cx={px(deg)} cy={py(deg)} r={5} fill={rayColor} />);

  const reduce = turns !== 0 ? ` = ${showNum(turns * 360, lang)}° + ${showNum(rest, lang)}°` : '';
  const tanText = tanDefined ? showNum(near0(sin / cos), lang) : '—';
  const name = spec.label ? tr(spec.label, lang) : 'α';
  return (
    <View>
      <Frame h={H}>{out}</Frame>
      <Text style={{ color: vc.ink, fontWeight: '700', textAlign: 'center', marginTop: 6 }}>{name} = {showNum(deg, lang)}°{reduce}</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap', gap: 14, marginTop: 4 }}>
        <Text style={{ color: sinColor, fontWeight: '700' }}>sin = {showNum(near0(sin), lang)}</Text>
        <Text style={{ color: cosColor, fontWeight: '700' }}>cos = {showNum(near0(cos), lang)}</Text>
        <Text style={{ color: vc.ink, fontWeight: '700' }}>{lang === 'al' ? 'tg' : 'tan'} = {tanText}</Text>
      </View>
      <ParamControl
        slider={{ name: 'α', label: spec.label, min: spec.min ?? -360, max: spec.max ?? 720, step: spec.step ?? 5 }}
        value={deg}
        lang={lang}
        onChange={setDeg}
      />
    </View>
  );
}
