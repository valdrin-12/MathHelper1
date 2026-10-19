/**
 * GraphModal — renders a function graph inside a full-screen modal.
 * Native: self-contained WebView page with pinned d3 + function-plot from jsDelivr.
 * Web: iframe pointing to the backend /graph endpoint.
 */
import React, { useMemo, useState } from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import WebView from 'react-native-webview';
import { useTranslation } from 'react-i18next';
import { Ionicons } from '@expo/vector-icons';
import { SPACING, TYPOGRAPHY } from '../theme/constants';
import { useTheme } from '../context/ThemeContext';
import { Button } from './ui';
import { normalizeFunction } from '../services/graphService';

// Pinned CDN builds (same versions/SRI hashes as the backend /graph endpoint)
const GRAPH_CDN_SCRIPTS = [
  {
    src: 'https://cdn.jsdelivr.net/npm/d3@7.9.0/dist/d3.min.js',
    integrity: 'sha384-CjloA8y00+1SDAUkjs099PVfnY2KmDC2BZnws9kh8D/lX1s46w6EPhpXdqMfjK6i',
  },
  {
    src: 'https://cdn.jsdelivr.net/npm/function-plot@1.22.2/dist/function-plot.js',
    integrity: 'sha384-UilSOASrT7yOa5JE6wuicoPA1pUNIESPx2lUHG+jmeU0o/P0Rcs8Dwy5tA9JpsUM',
  },
];

// The WebView may only show the inline document and load the pinned CDN scripts
const GRAPH_ORIGIN_WHITELIST = ['about:blank', 'https://cdn.jsdelivr.net'];

// Only theme colour tokens (hex / rgba) are interpolated into CSS; anything else falls back
const cssColor = (value, fallback) =>
  typeof value === 'string' && /^(#[0-9a-f]{3,8}|rgba?\([0-9.,\s%]+\))$/i.test(value) ? value : fallback;

/**
 * Build the self-contained graph page. The expression and UI strings are embedded as JSON data
 * (never concatenated into script code) and evaluated only by function-plot's own math parser.
 */
function buildGraphHtml(expr, palette, labels) {
  const p = {
    surface: cssColor(palette.surface, '#FFFFFF'),
    text: cssColor(palette.text, '#000000'),
    textSubtle: cssColor(palette.textSubtle, '#6B7280'),
    border: cssColor(palette.border, '#E5E7EB'),
    borderLight: cssColor(palette.borderLight, '#F3F4F6'),
    primary: cssColor(palette.primary, '#007AFF'),
  };
  // JSON data block (not executed); escape '<' so the content can never close the tag
  const dataJson = JSON.stringify({ expr, color: p.primary, background: p.surface, labels }).replace(/</g, '\\u003c');
  const cdnScripts = GRAPH_CDN_SCRIPTS
    .map((sc) => `<script src="${sc.src}" integrity="${sc.integrity}" crossorigin="anonymous" onload="__graphLoaded()" onerror="__graphFailed()"></script>`)
    .join('\n  ');

  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
  <style>
    *{box-sizing:border-box;margin:0;padding:0}
    html,body{background:${p.surface};color:${p.text};font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;height:100%;overflow:hidden}
    #graph-container{width:100%;height:calc(100% - 60px)}
    .function-plot{background:${p.surface} !important}
    .function-plot .graph-canvas{fill:${p.surface} !important}
    .function-plot .axis path,.function-plot .axis line,.function-plot .origin{stroke:${p.border} !important}
    .function-plot .grid .tick line{stroke:${p.borderLight} !important}
    .function-plot .tick text,.function-plot text{fill:${p.textSubtle} !important;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif}
    #legend{height:60px;display:flex;align-items:center;justify-content:center;padding:0 16px;background:${p.surface};color:${p.text};border-top:0.5px solid ${p.border};font-size:17px;font-style:italic;font-weight:600}
    .overlay{display:none;position:absolute;inset:0;align-items:center;justify-content:center;flex-direction:column;background:${p.surface};text-align:center;padding:32px;gap:12px}
    .overlay.show{display:flex}
    #error{color:${p.textSubtle};font-size:14px}
    #offline{color:${p.text};font-size:15px}
    #offline p{font-size:13px;color:${p.textSubtle}}
  </style>
</head>
<body>
  <div id="graph-container"></div>
  <div id="legend"></div>
  <div id="error" class="overlay"><span style="font-size:32px">⚠️</span><p id="error-msg"></p></div>
  <div id="offline" class="overlay"><span style="font-size:48px">📶</span><strong id="offline-title" style="font-size:16px"></strong><p id="offline-desc"></p></div>
  <script type="application/json" id="graph-data">${dataJson}</script>
  <script>
  var __graph = JSON.parse(document.getElementById('graph-data').textContent);
  var __graphPending = ${GRAPH_CDN_SCRIPTS.length};
  var __graphDone = false;
  document.getElementById('offline-title').textContent = __graph.labels.offlineTitle;
  document.getElementById('offline-desc').textContent = __graph.labels.offlineDesc;
  document.getElementById('legend').textContent = 'y = ' + __graph.expr.replace(/\\*/g, '\\u00b7');
  function __graphFailed() {
    if (__graphDone) return;
    __graphDone = true;
    document.getElementById('offline').classList.add('show');
  }
  function __graphLoaded() {
    __graphPending--;
    if (__graphPending === 0 && !__graphDone) { __graphDone = true; __renderGraph(); }
  }
  function __renderGraph() {
    var expr = __graph.expr;
    try {
      // Sample with function-plot's own evaluator (no eval of the raw expression) to pick a y-range
      var datum = { fn: expr };
      var yMin = Infinity, yMax = -Infinity;
      for (var xi = -10; xi <= 10; xi += 0.2) {
        var y;
        try { y = functionPlot.$eval.builtIn(datum, 'fn', { x: xi }); } catch (e) { y = NaN; }
        if (typeof y === 'number' && isFinite(y)) { yMin = Math.min(yMin, y); yMax = Math.max(yMax, y); }
      }
      var yDomain = [-10, 10];
      if (isFinite(yMin) && isFinite(yMax)) {
        var pad = Math.max((yMax - yMin) * 0.2, 1);
        yDomain = [yMin - pad, yMax + pad];
      }
      functionPlot({
        target: '#graph-container',
        width: window.innerWidth,
        height: window.innerHeight - 60,
        xAxis: { domain: [-10, 10] },
        yAxis: { domain: yDomain },
        grid: true,
        data: [{ fn: expr, color: __graph.color, graphType: 'polyline' }]
      });
      var svg = document.querySelector('#graph-container svg');
      if (svg) svg.style.background = __graph.background;
    } catch (e) {
      document.getElementById('error-msg').textContent = __graph.labels.plotError + ' ' + (e && e.message ? e.message : '');
      document.getElementById('error').classList.add('show');
    }
  }
  </script>
  ${cdnScripts}
</body>
</html>`;
}

// Shared iOS sheet header: centered headline title, plain close button, hairline separator
function SheetHeader({ styles, colors, onClose }) {
  const { t } = useTranslation();
  return (
    <View style={styles.header}>
      <View style={styles.headerSide} />
      <Text style={styles.headerTitle} numberOfLines={1}>{t('graph.title')}</Text>
      <View style={[styles.headerSide, styles.headerSideRight]}>
        <TouchableOpacity
          onPress={onClose}
          style={styles.closeBtn}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          accessibilityRole="button"
          accessibilityLabel={t('a11y.close')}
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
  const { t } = useTranslation();
  const [webViewError, setWebViewError] = useState(false);
  // Bumped by "Try again" so the WebView remounts and reloads the CDN scripts
  const [reloadKey, setReloadKey] = useState(0);

  const expr = useMemo(
    () => normalizeFunction(functionText || ''),
    [functionText]
  );

  const labels = useMemo(() => ({
    offlineTitle: t('graph.noInternet'),
    offlineDesc: t('graph.noInternetDesc'),
    plotError: t('graph.plotError'),
  }), [t]);

  const html = useMemo(() => buildGraphHtml(expr, colors, labels), [expr, colors, labels]);

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
            <Text style={styles.offlineTitle}>{t('graph.noInternet')}</Text>
            <Text style={styles.offlineDesc}>{t('graph.noInternetDesc')}</Text>
            <Button
              title={t('common.retry')}
              variant="tinted"
              onPress={() => { setWebViewError(false); setReloadKey((k) => k + 1); }}
              style={styles.retryButton}
            />
          </View>
        ) : (
          <WebView
            key={reloadKey}
            source={{ html }}
            style={styles.webView}
            scrollEnabled={false}
            originWhitelist={GRAPH_ORIGIN_WHITELIST}
            setSupportMultipleWindows={false}
            javaScriptCanOpenWindowsAutomatically={false}
            allowFileAccess={false}
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
