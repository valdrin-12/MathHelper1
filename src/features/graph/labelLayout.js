// Where to draw the labels of the graph's key points so they never overlap (pure, testable).
const LABEL_H = 14;
const POINT_R = 6;

// Candidate spots for a point label, tried in order: above-right, above-left, below-right,
// below-left, right, left, above, below. dx/dy is the offset of the label box from the point.
const LABEL_SPOTS = [
  { dx: 8, dy: -8 - LABEL_H, anchor: 'start' },
  { dx: -8, dy: -8 - LABEL_H, anchor: 'end' },
  { dx: 8, dy: 8, anchor: 'start' },
  { dx: -8, dy: 8, anchor: 'end' },
  { dx: 10, dy: -LABEL_H / 2, anchor: 'start' },
  { dx: -10, dy: -LABEL_H / 2, anchor: 'end' },
  { dx: 0, dy: -10 - LABEL_H, anchor: 'middle' },
  { dx: 0, dy: 10, anchor: 'middle' },
];

const overlaps = (a, b) => a.x < b.x + b.w && b.x < a.x + a.w && a.y < b.y + b.h && b.y < a.y + a.h;

/**
 * Place point labels so they do not overlap each other, the points or the edges.
 * points: [{ X, Y, text }] in screen coordinates. Returns one placement per point:
 * { x, y, anchor, box } or null when there is no free spot (the point stays; a tap shows it).
 */
export function placeLabels(points, W, H) {
  const taken = points.map((p) => ({ x: p.X - POINT_R, y: p.Y - POINT_R, w: POINT_R * 2, h: POINT_R * 2 }));
  return points.map((p) => {
    const w = p.text.length * 5.9 + 6;
    for (const s of LABEL_SPOTS) {
      const left = s.anchor === 'start' ? p.X + s.dx - 3 : s.anchor === 'end' ? p.X + s.dx - w + 3 : p.X - w / 2;
      const box = { x: left, y: p.Y + s.dy, w, h: LABEL_H };
      if (box.x < 1 || box.y < 1 || box.x + box.w > W - 1 || box.y + box.h > H - 1) continue;
      if (taken.some((t) => overlaps(box, t))) continue;
      taken.push(box);
      const tx = s.anchor === 'start' ? box.x + 3 : s.anchor === 'end' ? box.x + box.w - 3 : p.X;
      return { x: tx, y: box.y + LABEL_H - 3.5, anchor: s.anchor, box };
    }
    return null;
  });
}
