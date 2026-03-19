/**
 * GraphModal — renders a function graph inside a full-screen modal.
 * Uses a self-contained WebView with function-plot.js + KaTeX loaded from CDN.
 */
import React, { useMemo, useEffect, useRef } from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Platform,
} from 'react-native';
import WebView from 'react-native-webview';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SPACING, BORDER_RADIUS, TYPOGRAPHY, SHADOWS } from '../theme/constants';
import { normalizeFunction } from '../services/graphService';

function buildGraphHtml(expr) {
  // Escape for embedding in JS string literal
  const safeExpr = expr.replace(/\\/g, '\\\\').replace(/'/g, "\\'");

  return `<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css">
  <script src="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/d3@7/dist/d3.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/function-plot@1/lib/index.js"></script>
  <style>
    *{box-sizing:border-box;margin:0;padding:0}
    html,body{
      background:#FDF6EC;
      font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;
      height:100%;
      overflow:hidden;
    }
    #graph-container{
      width:100%;
      height:calc(100% - 60px);
    }
    /* override function-plot background */
    .function-plot {
      background: #FDF6EC !important;
    }
    .function-plot .graph-canvas {
      fill: #FDF6EC !important;
    }
    #legend{
      height:60px;
      display:flex;
      align-items:center;
      justify-content:center;
      padding: 0 16px;
      background:#FDF6EC;
      border-top:1px solid #E8D5B0;
    }
    #legend .katex { font-size: 1.1em; }
    #error{
      display:none;
      position:absolute;
      inset:0;
      align-items:center;
      justify-content:center;
      flex-direction:column;
      background:#FDF6EC;
      color:#8B6914;
      font-size:14px;
      text-align:center;
      padding:32px;
    }
    #error.show{ display:flex; }
  </style>
</head>
<body>
  <div id="graph-container"></div>
  <div id="legend"></div>
  <div id="error" class="error-box">
    <span style="font-size:32px">⚠️</span>
    <p id="error-msg" style="margin-top:12px"></p>
  </div>
  <script>
  (function() {
    var expr = '${safeExpr}';

    function showError(msg) {
      var el = document.getElementById('error');
      document.getElementById('error-msg').textContent = msg;
      el.classList.add('show');
    }

    function safeEval(x) {
      // Very lightweight evaluator for preview only — main rendering is function-plot
      try {
        var fn = new Function('x', 'with(Math){return (' + expr + ')}');
        return fn(x);
      } catch(e) { return NaN; }
    }

    function computeRange() {
      // Sample the function to find a sensible domain/range
      var xMin = -10, xMax = 10;
      var yVals = [];
      for (var xi = xMin; xi <= xMax; xi += 0.25) {
        var y = safeEval(xi);
        if (isFinite(y)) yVals.push(y);
      }
      if (yVals.length === 0) return { xDomain: [-10,10], yDomain: [-10,10] };

      var yMin = Math.min.apply(null, yVals);
      var yMax = Math.max.apply(null, yVals);
      var pad = Math.max((yMax - yMin) * 0.2, 1);

      // Extend x domain if function is mostly out of range
      return {
        xDomain: [xMin, xMax],
        yDomain: [yMin - pad, yMax + pad],
      };
    }

    function findCriticalPoints() {
      var points = [];
      // Roots (zero crossings)
      var prev = safeEval(-10);
      for (var xi = -9.5; xi <= 10; xi += 0.5) {
        var curr = safeEval(xi);
        if (isFinite(prev) && isFinite(curr) && prev * curr < 0) {
          points.push({ x: xi - 0.25, y: 0, label: 'root' });
        }
        // Local minimum/maximum (sign change in derivative)
        prev = curr;
      }
      // Vertex-like: find the single minimum or maximum
      var minY = Infinity, maxY = -Infinity, minX = 0, maxX = 0;
      for (var xj = -10; xj <= 10; xj += 0.1) {
        var yj = safeEval(xj);
        if (isFinite(yj)) {
          if (yj < minY) { minY = yj; minX = xj; }
          if (yj > maxY) { maxY = yj; maxX = xj; }
        }
      }
      if (isFinite(minY)) points.push({ x: minX, y: minY, label: 'min' });
      if (isFinite(maxY) && Math.abs(maxY - minY) > 0.5) {
        points.push({ x: maxX, y: maxY, label: 'max' });
      }
      return points;
    }

    function renderLegend() {
      var el = document.getElementById('legend');
      try {
        katex.render('y = ' + expr.replace(/\*/g, '\\\\cdot '), el, {
          throwOnError: false,
          displayMode: false,
        });
      } catch(e) {
        el.textContent = 'y = ' + expr;
      }
    }

    function renderGraph() {
      try {
        var range = computeRange();
        var critPts = findCriticalPoints();

        var annotations = critPts.slice(0, 4).map(function(p) {
          return { x: p.x, text: p.label };
        });

        functionPlot({
          target: '#graph-container',
          width: window.innerWidth,
          height: window.innerHeight - 60,
          xAxis: { domain: range.xDomain },
          yAxis: { domain: range.yDomain },
          grid: true,
          disableZoom: false,
          background: '#FDF6EC',
          data: [{
            fn: expr,
            color: '#6C47FF',
            graphType: 'polyline',
          }],
          annotations: annotations,
        });

        // Override SVG background fill
        var svg = document.querySelector('#graph-container svg');
        if (svg) {
          svg.style.background = '#FDF6EC';
          var rect = svg.querySelector('rect.background');
          if (rect) rect.style.fill = '#FDF6EC';
        }

        renderLegend();
      } catch(e) {
        showError('Could not plot: ' + e.message);
      }
    }

    // function-plot is synchronous after d3 loads; wait for all scripts
    window.addEventListener('load', function() {
      try {
        renderGraph();
      } catch(e) {
        showError('Failed to render graph. Please check the expression.');
      }
    });
  })();
  </script>
</body>
</html>`;
}

// ── Web-only component: loads D3 + function-plot from CDN and renders in a div
function WebGraphModal({ visible, expr, onClose }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!visible || !expr) return;

    function loadScript(src, id) {
      return new Promise((resolve) => {
        if (document.getElementById(id)) { resolve(); return; }
        const s = document.createElement('script');
        s.id = id;
        s.src = src;
        s.onload = resolve;
        s.onerror = resolve;
        document.head.appendChild(s);
      });
    }

    async function renderGraph() {
      await loadScript('https://cdn.jsdelivr.net/npm/d3@7/dist/d3.min.js', 'fp-d3');
      await loadScript('https://cdn.jsdelivr.net/npm/function-plot@1/lib/index.js', 'fp-lib');

      const container = containerRef.current;
      if (!container || typeof window.functionPlot === 'undefined') return;

      // Clear previous render
      container.innerHTML = '';

      try {
        // Sample function to auto-scale
        const fn = new Function('x', `with(Math){return (${expr})}`);
        let yMin = Infinity, yMax = -Infinity;
        for (let xi = -10; xi <= 10; xi += 0.2) {
          const y = fn(xi);
          if (isFinite(y)) { yMin = Math.min(yMin, y); yMax = Math.max(yMax, y); }
        }
        const pad = Math.max((yMax - yMin) * 0.2, 1);

        window.functionPlot({
          target: container,
          width: container.offsetWidth || window.innerWidth,
          height: container.offsetHeight || window.innerHeight - 120,
          xAxis: { domain: [-10, 10] },
          yAxis: { domain: [yMin - pad, yMax + pad] },
          grid: true,
          data: [{ fn: expr, color: '#6C47FF', graphType: 'polyline' }],
        });

        // Cream background
        const svg = container.querySelector('svg');
        if (svg) svg.style.background = '#FDF6EC';
      } catch (e) {
        container.innerHTML = `<p style="padding:24px;color:#8B6914">Could not plot: ${e.message}</p>`;
      }
    }

    renderGraph();
  }, [visible, expr]);

  if (!visible) return null;

  return React.createElement(Modal, { visible, animationType: 'slide', onRequestClose: onClose },
    React.createElement(SafeAreaView, { style: styles.safeArea },
      React.createElement(View, { style: styles.header },
        React.createElement(View, { style: styles.headerLeft },
          React.createElement(Ionicons, { name: 'stats-chart', size: 20, color: COLORS.primary, style: { marginRight: 8 } }),
          React.createElement(Text, { style: styles.headerTitle }, 'Grafik')
        ),
        React.createElement(TouchableOpacity, { onPress: onClose, style: styles.closeBtn },
          React.createElement(Ionicons, { name: 'close', size: 24, color: COLORS.textSecondary })
        )
      ),
      React.createElement('div', {
        ref: containerRef,
        style: { flex: 1, background: '#FDF6EC', overflow: 'hidden' },
      }),
      React.createElement(View, { style: styles.legend },
        React.createElement(Text, { style: styles.legendText }, `y = ${expr.replace(/\*/g, '·')}`)
      )
    )
  );
}

export default function GraphModal({ visible, functionText, onClose }) {
  const expr = useMemo(
    () => normalizeFunction(functionText || ''),
    [functionText]
  );

  const html = useMemo(() => buildGraphHtml(expr), [expr]);

  if (!visible) return null;

  // Web: inject scripts and render graph directly in a div
  if (Platform.OS === 'web') {
    return <WebGraphModal visible={visible} expr={expr} onClose={onClose} />;
  }

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Ionicons name="stats-chart" size={20} color={COLORS.primary} style={{ marginRight: 8 }} />
            <Text style={styles.headerTitle}>Grafik</Text>
          </View>
          <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
            <Ionicons name="close" size={24} color={COLORS.textSecondary} />
          </TouchableOpacity>
        </View>

        <WebView
          source={{ html }}
          style={styles.webView}
          scrollEnabled={false}
          originWhitelist={['*']}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          bounces={false}
        />
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FDF6EC',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SPACING.xl,
    paddingVertical: SPACING.md,
    backgroundColor: '#FDF6EC',
    borderBottomWidth: 1,
    borderBottomColor: '#E8D5B0',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    ...TYPOGRAPHY.h2,
    color: COLORS.textDark,
  },
  closeBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#EDE0C8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  webView: {
    flex: 1,
    backgroundColor: '#FDF6EC',
  },
  legend: {
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.xl,
    backgroundColor: '#FDF6EC',
    borderTopWidth: 1,
    borderTopColor: '#E8D5B0',
    alignItems: 'center',
  },
  legendText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#6C47FF',
    fontStyle: 'italic',
  },
});
