/**
 * MathText — renders text containing $...$ and $$...$$ LaTeX math expressions
 * using KaTeX via WebView (native) or dangerouslySetInnerHTML (web).
 */
import React, { useState, useCallback } from 'react';
import { View, Platform } from 'react-native';
import WebView from 'react-native-webview';

// Escape HTML entities to prevent injection
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// Build a self-contained HTML page that renders KaTeX from CDN
function buildKatexHtml({ content, fontSize, color, background }) {
  const escapedContent = escapeHtml(content);
  return `<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css">
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.js"></script>
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/contrib/auto-render.min.js"
    onload="doRender()"></script>
  <style>
    *{box-sizing:border-box;margin:0;padding:0}
    html,body{
      background:${background || 'transparent'};
      font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;
      font-size:${fontSize || 16}px;
      color:${color || '#1C1C1E'};
      line-height:1.65;
      word-wrap:break-word;
      overflow-wrap:break-word;
    }
    .katex{font-size:1.05em}
    .katex-display{margin:6px 0;overflow-x:auto}
  </style>
</head>
<body>
  <span>${escapedContent}</span>
  <script>
    function doRender(){
      renderMathInElement(document.body,{
        delimiters:[
          {left:'$$',right:'$$',display:true},
          {left:'$',right:'$',display:false}
        ],
        throwOnError:false
      });
      sendHeight();
    }
    function sendHeight(){
      setTimeout(function(){
        var h=document.documentElement.scrollHeight||document.body.scrollHeight;
        if(window.ReactNativeWebView) window.ReactNativeWebView.postMessage(String(h));
      },80);
    }
    if(typeof renderMathInElement!=='undefined') doRender();
  </script>
</body>
</html>`;
}

// ── Web implementation — KaTeX via CDN stylesheet + auto-render script injected once
let katexInjected = false;
function injectKatexForWeb() {
  if (katexInjected || typeof document === 'undefined') return;
  katexInjected = true;

  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css';
  document.head.appendChild(link);

  const katexScript = document.createElement('script');
  katexScript.defer = true;
  katexScript.src = 'https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.js';
  document.head.appendChild(katexScript);

  const arScript = document.createElement('script');
  arScript.defer = true;
  arScript.src = 'https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/contrib/auto-render.min.js';
  document.head.appendChild(arScript);
}

function WebMathText({ content, style }) {
  injectKatexForWeb();

  const ref = React.useRef(null);

  React.useEffect(() => {
    if (!ref.current) return;
    function tryRender() {
      if (typeof renderMathInElement !== 'undefined') {
        renderMathInElement(ref.current, {
          delimiters: [
            { left: '$$', right: '$$', display: true },
            { left: '$', right: '$', display: false },
          ],
          throwOnError: false,
        });
      } else {
        setTimeout(tryRender, 200);
      }
    }
    tryRender();
  }, [content]);

  const webStyle = {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    fontSize: style?.fontSize || 16,
    color: style?.color || '#1C1C1E',
    lineHeight: 1.65,
    ...(style || {}),
  };

  return React.createElement('div', {
    ref,
    style: webStyle,
    dangerouslySetInnerHTML: { __html: content },
  });
}

// ── Native implementation — WebView with auto-adjusting height
function NativeMathText({ content, fontSize, color, background, minHeight }) {
  const [height, setHeight] = useState(minHeight || 40);

  const html = buildKatexHtml({ content, fontSize, color, background });

  const onMessage = useCallback((e) => {
    const h = parseFloat(e.nativeEvent.data);
    if (!isNaN(h) && h > 0) setHeight(h);
  }, []);

  return (
    <WebView
      source={{ html }}
      scrollEnabled={false}
      style={{ height, backgroundColor: 'transparent' }}
      onMessage={onMessage}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      originWhitelist={['*']}
    />
  );
}

// ── Public component
export default function MathText({
  children,
  style,
  fontSize,
  color,
  background,
  minHeight,
}) {
  const content = String(children || '');
  const resolvedFontSize = fontSize || style?.fontSize || 16;
  const resolvedColor = color || style?.color || '#1C1C1E';

  if (Platform.OS === 'web') {
    return (
      <WebMathText
        content={content}
        style={{ fontSize: resolvedFontSize, color: resolvedColor, ...style }}
      />
    );
  }

  return (
    <View style={{ overflow: 'hidden' }}>
      <NativeMathText
        content={content}
        fontSize={resolvedFontSize}
        color={resolvedColor}
        background={background}
        minHeight={minHeight}
      />
    </View>
  );
}
