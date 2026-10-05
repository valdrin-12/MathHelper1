/**
 * GraphModal — renders a function graph inside a full-screen modal.
 * Uses a self-contained WebView with function-plot.js + KaTeX loaded from CDN.
 */
import React, { useMemo, useState } from 'react';
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
import { SPACING, TYPOGRAPHY } from '../theme/constants';
import { useTheme } from '../context/ThemeContext';
import { Button } from './ui';
import { normalizeFunction } from '../services/graphService';

function buildGraphHtml(expr, palette) {
  const p = palette;
  // Escape for embedding in JS string literal
  const safeExpr = expr.replace(/\\/g, '\\\\').replace(/'/g, "\\'");

  return `<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css">
  <style>
    *{box-sizing:border-box;margin:0;padding:0}
    html,body{
      background:${p.surface};
      color:${p.text};
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
      background: ${p.surface} !important;
    }
    .function-plot .graph-canvas {
      fill: ${p.surface} !important;
    }
    .function-plot .axis path,
    .function-plot .axis line,
    .function-plot .origin {
      stroke: ${p.border} !important;
    }
    .function-plot .grid .tick line {
      stroke: ${p.borderLight} !important;
    }
    .function-plot .tick text,
    .function-plot text {
      fill: ${p.textSubtle} !important;
      font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;
    }
    .function-plot .annotations line,
    .function-plot .annotations path {
      stroke: ${p.textSubtle} !important;
    }
    #legend{
      height:60px;
      display:flex;
      align-items:center;
      justify-content:center;
      padding: 0 16px;
      background:${p.surface};
      color:${p.text};
      border-top:0.5px solid ${p.border};
    }
    #legend .katex { font-size: 1.1em; }
    #error{
      display:none;
      position:absolute;
      inset:0;
      align-items:center;
      justify-content:center;
      flex-direction:column;
      background:${p.surface};
      color:${p.textSubtle};
      font-size:14px;
      text-align:center;
      padding:32px;
    }
    #error.show{ display:flex; }
    #offline{
      display:none;
      position:absolute;
      inset:0;
      align-items:center;
      justify-content:center;
      flex-direction:column;
      background:${p.surface};
      color:${p.text};
      font-size:15px;
      text-align:center;
      padding:32px;
      gap:12px;
    }
    #offline.show{ display:flex; }
  </style>
</head>
<body>
  <div id="graph-container"></div>
  <div id="legend"></div>
  <div id="error" class="error-box">
    <span style="font-size:32px">⚠️</span>
    <p id="error-msg" style="margin-top:12px"></p>
  </div>
  <div id="offline">
    <span style="font-size:48px">📶</span>
    <strong style="font-size:16px">No internet connection</strong>
    <p style="font-size:13px;color:${p.textSubtle}">The graph requires an internet connection to load the rendering library. Please check your connection and try again.</p>
  </div>
  <script>
  var _scriptsLoaded = 0;
  var _scriptsNeeded = 3;
  function _onScriptError() {
    document.getElementById('offline').classList.add('show');
  }
  function _onScriptLoad() {
    _scriptsLoaded++;
    if (_scriptsLoaded === _scriptsNeeded) { renderGraph(); }
  }
  </script>
  <script src="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.js" onload="_onScriptLoad()" onerror="_onScriptError()"></script>
  <script src="https://cdn.jsdelivr.net/npm/d3@7/dist/d3.min.js" onload="_onScriptLoad()" onerror="_onScriptError()"></script>
  <script src="https://cdn.jsdelivr.net/npm/function-plot@1/lib/index.js" onload="_onScriptLoad()" onerror="_onScriptError()"></script>
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
          background: '${p.surface}',
          data: [{
            fn: expr,
            color: '${p.primary}',
            graphType: 'polyline',
          }],
          annotations: annotations,
        });

        // Override SVG background fill
        var svg = document.querySelector('#graph-container svg');
        if (svg) {
          svg.style.background = '${p.surface}';
          var rect = svg.querySelector('rect.background');
          if (rect) rect.style.fill = '${p.surface}';
        }

        renderLegend();
      } catch(e) {
        showError('Could not plot: ' + e.message);
      }
    }

    // renderGraph is called by _onScriptLoad() once all 3 CDN scripts are loaded
  })();
  </script>
</body>
</html>`;
}

// Shared iOS sheet header: centered headline title, plain close button, hairline separator
function SheetHeader({ styles, colors, onClose }) {
  return (
    <View style={styles.header}>
      <View style={styles.headerSide} />
      <Text style={styles.headerTitle} numberOfLines={1}>Grafik</Text>
      <View style={[styles.headerSide, styles.headerSideRight]}>
        <TouchableOpacity
          onPress={onClose}
          style={styles.closeBtn}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          accessibilityRole="button"
          accessibilityLabel="Close"
        >
          <Ionicons name="close" size={24} color={colors.textSecondary} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

// ── Web-only component: iframe pointing to /graph?expr=... backend endpoint
function WebGraphModal({ visible, expr, onClose, styles, colors }) {
  if (!visible) return null;

  const src = `/graph?expr=${encodeURIComponent(expr)}`;

  return (
    <Modal visible={visible} animationType="slide" onRequestClose={onClose}>
      <SafeAreaView style={styles.safeArea}>
        <SheetHeader styles={styles} colors={colors} onClose={onClose} />
        {React.createElement('iframe', {
          src,
          style: { flex: 1, width: '100%', height: '100%', border: 'none', background: colors.surface },
        })}
      </SafeAreaView>
    </Modal>
  );
}

export default function GraphModal({ visible, functionText, onClose }) {
  const { colors } = useTheme();
  const styles = useMemo(() => makeStyles(colors), [colors]);
  const [webViewError, setWebViewError] = useState(false);

  const expr = useMemo(
    () => normalizeFunction(functionText || ''),
    [functionText]
  );

  const html = useMemo(() => buildGraphHtml(expr, colors), [expr, colors]);

  if (!visible) return null;

  // Web: iframe pointing to backend /graph endpoint
  if (Platform.OS === 'web') {
    return <WebGraphModal visible={visible} expr={expr} onClose={onClose} styles={styles} colors={colors} />;
  }

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <SafeAreaView style={styles.safeArea}>
        <SheetHeader styles={styles} colors={colors} onClose={onClose} />

        {webViewError ? (
          <View style={styles.offlineFallback}>
            <Ionicons name="cloud-offline-outline" size={48} color={colors.textSubtle} />
            <Text style={styles.offlineTitle}>No internet connection</Text>
            <Text style={styles.offlineDesc}>
              The graph requires an internet connection to load. Please check your connection and try again.
            </Text>
            <Button
              title="Try Again"
              variant="tinted"
              onPress={() => setWebViewError(false)}
              style={styles.retryButton}
            />
          </View>
        ) : (
          <WebView
            source={{ html }}
            style={styles.webView}
            scrollEnabled={false}
            originWhitelist={['*']}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            bounces={false}
            onError={() => setWebViewError(true)}
            onHttpError={() => setWebViewError(true)}
          />
        )}
      </SafeAreaView>
    </Modal>
  );
}

const makeStyles = (colors) => StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.surface,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 52,
    paddingHorizontal: SPACING.lg,
    backgroundColor: colors.surface,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.border,
  },
  headerSide: {
    width: 44,
    justifyContent: 'center',
  },
  headerSideRight: {
    alignItems: 'flex-end',
  },
  headerTitle: {
    ...TYPOGRAPHY.headline,
    flex: 1,
    textAlign: 'center',
    color: colors.text,
  },
  closeBtn: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  webView: {
    flex: 1,
    backgroundColor: colors.surface,
  },
  offlineFallback: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.surface,
    padding: SPACING.xxxl,
    gap: SPACING.md,
  },
  offlineTitle: {
    ...TYPOGRAPHY.headline,
    color: colors.text,
    textAlign: 'center',
  },
  offlineDesc: {
    ...TYPOGRAPHY.subhead,
    color: colors.textSubtle,
    textAlign: 'center',
  },
  retryButton: {
    marginTop: SPACING.sm,
    alignSelf: 'stretch',
  },
});
