import React from 'react';
import { Line, Circle, Path, Polygon, G, Text as SvgText, Rect } from 'react-native-svg';
import { Frame, VIEW_W, tr, useVisualColors, pickColor, makeScale, stepTicks } from './common';
import { formatNumber } from '../utils/formatNumber';

/**
 * Geometric figure, optionally on a coordinate grid. Coordinates are math units (y up).
 * spec: { view: { xMin, xMax, yMin, yMax }, grid?: true, axes?: true, axisLabels?: true, height?: number,
 *         shapes: [
 *           { kind: 'point', at: [x, y], label?, color?, labelPos?: 'n'|'s'|'e'|'w'|'ne'|'nw'|'se'|'sw' },
 *           { kind: 'segment', from, to, label?, color?, dashed?, ticks?: n (equal-length marks), arrow? },
 *           { kind: 'line', through: [p, q], label?, color?, dashed? }   (drawn across the view),
 *           { kind: 'ray', from, through, label?, color? },
 *           { kind: 'polygon', points: [p…], fill?: true, color?, dashed?, label?: { at, text } },
 *           { kind: 'circle', center, r, color?, fill?, dashed? },
 *           { kind: 'angle', vertex, from, to, label?, right?: true, color?, r? },
 *           { kind: 'label', at, text, color?, size? },
 *         ] }
 * Geometry views keep equal units on both axes.
 */
export default function GeoFigure({ spec, lang }) {
  const vc = useVisualColors();
  const view = { ...spec.view, equal: true };
  const spanX = view.xMax - view.xMin; const spanY = view.yMax - view.yMin;
  const H = spec.height || Math.round(Math.min(300, Math.max(140, (VIEW_W * spanY) / spanX)));
  const s = makeScale(view, VIEW_W, H, spec.axisLabels || spec.grid ? 18 : 14);
  const P = (p) => [s.x(p[0]), s.y(p[1])];
  const out = [];

  if (spec.grid) {
    stepTicks(view.xMin, view.xMax, 1).forEach((v) => out.push(<Line key={`gx${v}`} x1={s.x(v)} y1={s.y(view.yMin)} x2={s.x(v)} y2={s.y(view.yMax)} stroke={vc.grid} strokeWidth={1} />));
    stepTicks(view.yMin, view.yMax, 1).forEach((v) => out.push(<Line key={`gy${v}`} x1={s.x(view.xMin)} y1={s.y(v)} x2={s.x(view.xMax)} y2={s.y(v)} stroke={vc.grid} strokeWidth={1} />));
  }
  if (spec.axes) {
    if (view.yMin <= 0 && view.yMax >= 0) out.push(<Line key="ax" x1={s.x(view.xMin)} y1={s.y(0)} x2={s.x(view.xMax)} y2={s.y(0)} stroke={vc.axis} strokeWidth={1.5} />);
    if (view.xMin <= 0 && view.xMax >= 0) out.push(<Line key="ay" x1={s.x(0)} y1={s.y(view.yMin)} x2={s.x(0)} y2={s.y(view.yMax)} stroke={vc.axis} strokeWidth={1.5} />);
    out.push(<SvgText key="axl" x={s.x(view.xMax) - 2} y={s.y(0) - 5} fontSize={11} fontStyle="italic" fill={vc.muted} textAnchor="end">x</SvgText>);
    out.push(<SvgText key="ayl" x={s.x(0) + 6} y={s.y(view.yMax) + 10} fontSize={11} fontStyle="italic" fill={vc.muted}>y</SvgText>);
    if (spec.axisLabels !== false) {
      const every = spanX > 14 ? 2 : 1;
      stepTicks(view.xMin, view.xMax, every).filter((v) => v !== 0).forEach((v) => out.push(
        <SvgText key={`tx${v}`} x={s.x(v)} y={s.y(0) + 12} fontSize={9} fill={vc.muted} textAnchor="middle">{formatNumber(v, lang)}</SvgText>,
      ));
      stepTicks(view.yMin, view.yMax, every).filter((v) => v !== 0).forEach((v) => out.push(
        <SvgText key={`ty${v}`} x={s.x(0) - 4} y={s.y(v) + 3} fontSize={9} fill={vc.muted} textAnchor="end">{formatNumber(v, lang)}</SvgText>,
      ));
      out.push(<SvgText key="t0" x={s.x(0) - 4} y={s.y(0) + 12} fontSize={9} fill={vc.muted} textAnchor="end">0</SvgText>);
    }
  }

  const labelAt = (x, y, text, color, pos = 'ne', key, size = 12) => {
    const d = { n: [0, -8], s: [0, 16], e: [8, 4], w: [-8, 4], ne: [6, -6], nw: [-6, -6], se: [6, 14], sw: [-6, 14] }[pos] || [6, -6];
    const anchor = pos.includes('w') ? 'end' : pos === 'n' || pos === 's' ? 'middle' : 'start';
    return <SvgText key={key} x={x + d[0]} y={y + d[1]} fontSize={size} fontWeight="700" fill={color} textAnchor={anchor}>{text}</SvgText>;
  };

  (spec.shapes || []).forEach((sh, i) => {
    const color = pickColor(sh.color, vc, i);
    const key = `s${i}`;
    if (sh.kind === 'segment' || sh.kind === 'ray' || sh.kind === 'line') {
      let a = sh.from || sh.through[0]; let b = sh.to || sh.through?.[1] || sh.through;
      if (sh.kind === 'ray') b = sh.through;
      let [x1, y1] = P(a); let [x2, y2] = P(b);
      if (sh.kind !== 'segment') {
        // extend: a line both ways, a ray past its second point
        const dx = x2 - x1; const dy = y2 - y1; const len = Math.hypot(dx, dy) || 1; const far = 2 * VIEW_W;
        if (sh.kind === 'line') { x1 -= (dx / len) * far; y1 -= (dy / len) * far; }
        x2 += (dx / len) * far; y2 += (dy / len) * far;
      }
      out.push(<Line key={key} x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth={2} strokeDasharray={sh.dashed ? '5,4' : undefined} />);
      if (sh.kind === 'segment' && sh.ticks) {
        const [ax, ay] = P(a); const [bx, by] = P(b);
        const mx = (ax + bx) / 2; const my = (ay + by) / 2; const len = Math.hypot(bx - ax, by - ay) || 1;
        const nx = -(by - ay) / len; const ny = (bx - ax) / len; const tx = (bx - ax) / len; const ty = (by - ay) / len;
        for (let k = 0; k < sh.ticks; k++) {
          const o = (k - (sh.ticks - 1) / 2) * 4;
          out.push(<Line key={`${key}t${k}`} x1={mx + tx * o - nx * 5} y1={my + ty * o - ny * 5} x2={mx + tx * o + nx * 5} y2={my + ty * o + ny * 5} stroke={color} strokeWidth={1.5} />);
        }
      }
      if (sh.kind === 'segment' && sh.arrow) {
        const [ax, ay] = P(a); const [bx, by] = P(b); const len = Math.hypot(bx - ax, by - ay) || 1;
        const ux = (bx - ax) / len; const uy = (by - ay) / len;
        out.push(<Polygon key={`${key}a`} points={`${bx},${by} ${bx - ux * 9 - uy * 4},${by - uy * 9 + ux * 4} ${bx - ux * 9 + uy * 4},${by - uy * 9 - ux * 4}`} fill={color} />);
      }
      if (sh.label !== undefined) {
        const [ax, ay] = P(a); const [bx, by] = P(sh.kind === 'segment' ? b : (sh.through?.[1] || sh.through || b));
        const len = Math.hypot(bx - ax, by - ay) || 1;
        const side = sh.labelSide === 'right' ? -1 : 1;
        const nx = (-(by - ay) / len) * 11 * side; const ny = ((bx - ax) / len) * 11 * side;
        out.push(<SvgText key={`${key}l`} x={(ax + bx) / 2 - nx} y={(ay + by) / 2 - ny + 4} fontSize={11} fontWeight="600" fill={color} textAnchor="middle">{tr(sh.label, lang)}</SvgText>);
      }
    } else if (sh.kind === 'polygon') {
      const pts = sh.points.map(P).map(([x, y]) => `${x},${y}`).join(' ');
      out.push(<Polygon key={key} points={pts} fill={sh.fill ? color + vc.fillAlpha : 'none'} stroke={color} strokeWidth={2} strokeDasharray={sh.dashed ? '5,4' : undefined} />);
      if (sh.label) { const [x, y] = P(sh.label.at); out.push(<SvgText key={`${key}l`} x={x} y={y + 4} fontSize={12} fontWeight="700" fill={color} textAnchor="middle">{tr(sh.label.text, lang)}</SvgText>); }
    } else if (sh.kind === 'circle') {
      const [cx, cy] = P(sh.center);
      out.push(<Circle key={key} cx={cx} cy={cy} r={sh.r * s.sx} fill={sh.fill ? color + vc.fillAlpha : 'none'} stroke={color} strokeWidth={sh.dashed ? 1.2 : 2} strokeDasharray={sh.dashed ? '4,4' : undefined} />);
    } else if (sh.kind === 'angle') {
      const [vx, vy] = P(sh.vertex); const [ax, ay] = P(sh.from); const [bx, by] = P(sh.to);
      const a0 = Math.atan2(ay - vy, ax - vx); let a1 = Math.atan2(by - vy, bx - vx);
      let sweep = a1 - a0; while (sweep <= -Math.PI) sweep += 2 * Math.PI; while (sweep > Math.PI) sweep -= 2 * Math.PI;
      if (sh.reflex) sweep = sweep > 0 ? sweep - 2 * Math.PI : sweep + 2 * Math.PI;
      a1 = a0 + sweep;
      const r = sh.r || 22;
      if (sh.right) {
        const u = [Math.cos(a0), Math.sin(a0)]; const w = [Math.cos(a1), Math.sin(a1)]; const k = 11;
        out.push(<Path key={key} d={`M ${vx + u[0] * k} ${vy + u[1] * k} L ${vx + (u[0] + w[0]) * k} ${vy + (u[1] + w[1]) * k} L ${vx + w[0] * k} ${vy + w[1] * k}`} stroke={color} strokeWidth={1.5} fill="none" />);
      } else {
        const large = Math.abs(sweep) > Math.PI ? 1 : 0; const dirFlag = sweep > 0 ? 1 : 0;
        out.push(<Path key={key} d={`M ${vx} ${vy} L ${vx + r * Math.cos(a0)} ${vy + r * Math.sin(a0)} A ${r} ${r} 0 ${large} ${dirFlag} ${vx + r * Math.cos(a1)} ${vy + r * Math.sin(a1)} Z`} fill={color + vc.fillAlpha} stroke={color} strokeWidth={1.5} />);
      }
      if (sh.label !== undefined) {
        const am = a0 + sweep / 2; const lr = (sh.right ? 16 : r) + 13;
        out.push(<SvgText key={`${key}l`} x={vx + lr * Math.cos(am)} y={vy + lr * Math.sin(am) + 4} fontSize={11} fontWeight="700" fill={color} textAnchor="middle">{tr(sh.label, lang)}</SvgText>);
      }
    } else if (sh.kind === 'label') {
      const [x, y] = P(sh.at);
      out.push(<SvgText key={key} x={x} y={y + 4} fontSize={sh.size || 12} fontWeight="600" fill={sh.color ? color : vc.ink} textAnchor="middle">{tr(sh.text, lang)}</SvgText>);
    }
  });
  // points last, so they sit on top
  (spec.shapes || []).forEach((sh, i) => {
    if (sh.kind !== 'point') return;
    const color = pickColor(sh.color, vc, i);
    const [x, y] = P(sh.at);
    out.push(<Circle key={`p${i}`} cx={x} cy={y} r={3.5} fill={color} />);
    if (sh.label !== undefined) out.push(labelAt(x, y, tr(sh.label, lang), color, sh.labelPos, `pl${i}`));
  });

  return <Frame h={H}><Rect x={0} y={0} width={VIEW_W} height={H} fill="none" />{out}</Frame>;
}
