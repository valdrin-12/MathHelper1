/**
 * GraphModal — offline function graph + Symbolab-style analysis in an iOS sheet.
 * Everything runs on the device (mathjs + react-native-svg): no WebView, no CDN, no network.
 * Up to three functions can be plotted together; their intersection points are listed.
 */
import React, { useEffect, useMemo, useState } from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Platform,
  useWindowDimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import { Ionicons } from '@expo/vector-icons';
import { SPACING, BORDER_RADIUS, TYPOGRAPHY } from '../../shared/theme/constants';
import { useTheme } from '../../shared/theme/ThemeContext';
import { ListSection, IconBadge } from '../../shared/ui';
import FunctionGraph from './FunctionGraph';
import {
  normalizeFunction,
  formatNumber,
  formatPoint,
  formatInterval,
  MAX_GRAPH_FUNCTIONS,
} from './graphService';
import { analyzeFunctions, compileFunction } from './functionAnalysis';

const FUNCTION_NAMES = ['f', 'g', 'h'];
const ANALYSIS_DEBOUNCE_MS = 400;

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

// Analysis row in the inset-grouped style of ListRow, but with multi-line values
function AnalysisRow({ icon, iconColor, title, value, showDivider, styles, colors }) {
  return (
    <View>
      <View style={styles.aRow} accessible accessibilityLabel={`${title}: ${value}`}>
        <IconBadge name={icon} color={iconColor} />
        <View style={styles.aRowText}>
          <Text style={[styles.aRowTitle, { color: colors.text }]}>{title}</Text>
          <Text style={[styles.aRowValue, { color: colors.textSubtle }]} selectable>{value}</Text>
        </View>
      </View>
      {showDivider ? <View style={[styles.aDivider, { backgroundColor: colors.border }]} /> : null}
    </View>
  );
}

// ── Text builders ────────────────────────────────────────────────────────────

function useFormatters(lang, t) {
  return useMemo(() => {
    const listSep = lang === 'en' ? ', ' : '; ';
    const num = (v, pi) => formatNumber(v, lang, { pi });
    const points = (pts, pi, suffix) =>
      pts.length ? pts.map((p) => formatPoint(p, lang, { pi }) + (suffix ? suffix(p) : '')).join(listSep) : t('graph.none');
    const inequality = (iv, pi) => {
      const a = num(iv.from, pi);
      const b = num(iv.to, pi);
      if (!Number.isFinite(iv.from) && Number.isFinite(iv.to)) return `x ${iv.toClosed ? '≤' : '<'} ${b}`;
      if (Number.isFinite(iv.from) && !Number.isFinite(iv.to)) return `x ${iv.fromClosed ? '≥' : '>'} ${a}`;
      return `${a} ${iv.fromClosed ? '≤' : '<'} x ${iv.toClosed ? '≤' : '<'} ${b}`;
    };
    const domain = (d, pi) => {
      if (d.allReal) return t('graph.allReals');
      if (d.intervals.length === 1 && !Number.isFinite(d.intervals[0].from) && !Number.isFinite(d.intervals[0].to)) {
        return `x ≠ ${d.excluded.map((x) => num(x, pi)).join(listSep)}`;
      }
      if (d.intervals.length === 1) return inequality(d.intervals[0], pi);
      return d.intervals.map((iv) => formatInterval(iv, lang, { pi })).join(' ∪ ');
    };
    const intervals = (ivs, pi) => (ivs.length ? ivs.map((iv) => formatInterval(iv, lang, { pi })).join(' ∪ ') : t('graph.none'));
    const xList = (xs, pi) => (xs.length ? xs.map((x) => `x = ${num(x, pi)}`).join(listSep) : t('graph.none'));
    const horizontal = ({ left, right }) => {
      const has = (v) => v !== null && v !== undefined;
      if (has(left) && has(right) && left === right) return `y = ${num(left, true)}`;
      const parts = [];
      if (has(left)) parts.push(`y = ${num(left, true)} (${t('graph.asX', { dir: '−∞' })})`);
      if (has(right)) parts.push(`y = ${num(right, true)} (${t('graph.asX', { dir: '+∞' })})`);
      return parts.length ? parts.join(listSep) : t('graph.none');
    };
    return { num, points, domain, intervals, xList, horizontal };
  }, [lang, t]);
}

function errorMessage(t, analysis) {
  const code = analysis && analysis.error;
  if (!code || code === 'empty') return t('graph.emptyHint');
  return t(`graph.errors.${code}`, { name: analysis.detail || '' });
}

export default function GraphModal({ visible, functionText, onClose }) {
  const { colors } = useTheme();
  const styles = useMemo(() => makeStyles(colors), [colors]);
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const fmt = useFormatters(lang, t);
  const { width: windowWidth } = useWindowDimensions();
  const graphHeight = Math.round(Math.min(380, Math.max(240, Math.min(windowWidth, 700) * 0.72)));

  const [inputs, setInputs] = useState(['']);
  const [committed, setCommitted] = useState(['']);
  const [scrollEnabled, setScrollEnabled] = useState(true);

  // Prefill with the detected function whenever the sheet opens
  useEffect(() => {
    if (!visible) return;
    const initial = functionText ? normalizeFunction(functionText) : '';
    setInputs([initial]);
    setCommitted([initial]);
  }, [visible, functionText]);

  // Re-analyse shortly after typing stops
  useEffect(() => {
    const id = setTimeout(() => setCommitted(inputs), ANALYSIS_DEBOUNCE_MS);
    return () => clearTimeout(id);
  }, [inputs]);

  const fnColors = [colors.primary, colors.secondary, colors.success];

  const result = useMemo(() => (visible ? analyzeFunctions(committed) : null), [visible, committed]);

  const plotted = useMemo(() => {
    if (!result) return [];
    return committed
      .map((text, i) => ({ i, analysis: result.functions[i], compiled: compileFunction(text) }))
      .filter((p) => p.analysis && p.analysis.ok && p.compiled.ok)
      .map((p) => ({ key: String(p.i), index: p.i, f: p.compiled.f, color: fnColors[p.i], analysis: p.analysis }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result, committed, colors]);

  const intersectionPoints = useMemo(
    () => (result ? result.intersections.flatMap((r) => r.points) : []),
    [result]
  );

  if (!visible) return null;

  const setInput = (i, text) => setInputs((prev) => prev.map((v, j) => (j === i ? text : v)));
  const addInput = () => setInputs((prev) => (prev.length < MAX_GRAPH_FUNCTIONS ? [...prev, ''] : prev));
  const removeInput = (i) => {
    setInputs((prev) => prev.filter((_, j) => j !== i));
    setCommitted((prev) => prev.filter((_, j) => j !== i));
  };

  const firstError = result ? result.functions.find((a) => !a.ok && a.error !== 'empty') : null;
  const resetKey = committed.join('|');
  const nameOf = (i) => `${FUNCTION_NAMES[i]}(x)`;

  const renderAnalysis = (p) => {
    const a = p.analysis;
    const pi = a.periodic;
    const touching = (pt) => (pt.touch ? ` (${t('graph.touching')})` : '');
    const rows = [
      { key: 'domain', icon: 'resize-outline', color: colors.purple, value: fmt.domain(a.domain, pi) },
      { key: 'xIntercepts', icon: 'radio-button-off-outline', color: colors.primary, value: fmt.points(a.roots, pi, touching) },
      { key: 'yIntercept', icon: 'locate-outline', color: colors.accent, value: a.yIntercept ? formatPoint(a.yIntercept, lang) : t('graph.none') },
      { key: 'maxima', icon: 'arrow-up-outline', color: colors.success, value: fmt.points(a.maxima, pi) },
      { key: 'minima', icon: 'arrow-down-outline', color: colors.error, value: fmt.points(a.minima, pi) },
      { key: 'inflections', icon: 'git-commit-outline', color: colors.secondary, value: fmt.points(a.inflections, pi) },
      { key: 'increasing', icon: 'trending-up-outline', color: colors.success, value: a.constant ? t('graph.none') : fmt.intervals(a.increasing, pi) },
      { key: 'decreasing', icon: 'trending-down-outline', color: colors.error, value: a.constant ? t('graph.none') : fmt.intervals(a.decreasing, pi) },
      { key: 'verticalAsymptotes', icon: 'reorder-two-outline', color: colors.textMuted, value: fmt.xList(a.verticalAsymptotes, pi) },
      { key: 'horizontalAsymptotes', icon: 'remove-outline', color: colors.textMuted, value: fmt.horizontal(a.horizontalAsymptotes) },
    ];
    const notes = [
      t('graph.rangeNote', { from: fmt.num(a.window.xMin, pi), to: fmt.num(a.window.xMax, pi) }),
      a.truncated ? t('graph.truncatedNote') : null,
    ].filter(Boolean).join(' ');
    return (
      <ListSection
        key={`a${p.key}`}
        title={plotted.length > 1 || committed.length > 1 ? t('graph.analysisOf', { name: nameOf(p.index) }) : t('graph.analysis')}
        footer={notes}
      >
        {rows.map((r) => (
          <AnalysisRow
            key={r.key}
            icon={r.icon}
            iconColor={r.color}
            title={t(`graph.${r.key}`)}
            value={r.value}
            styles={styles}
            colors={colors}
          />
        ))}
      </ListSection>
    );
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle={Platform.OS === 'ios' ? 'pageSheet' : undefined}
      onRequestClose={onClose}
    >
      <SafeAreaView style={styles.safeArea} edges={['top', 'bottom', 'left', 'right']}>
        <SheetHeader styles={styles} colors={colors} onClose={onClose} />

        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          scrollEnabled={scrollEnabled}
        >
          {/* Function inputs */}
          <View style={[styles.inputCard, { backgroundColor: colors.surface }]}>
            {inputs.map((value, i) => {
              const a = result && committed[i] === value ? result.functions[i] : null;
              const showError = value.trim() && a && !a.ok;
              return (
                <View key={`in${i}`}>
                  {i > 0 ? <View style={[styles.inputDivider, { backgroundColor: colors.border }]} /> : null}
                  <View style={styles.inputRow}>
                    <View style={[styles.colorDot, { backgroundColor: fnColors[i] }]} />
                    <Text style={[styles.inputLabel, { color: colors.text }]}>{nameOf(i)} =</Text>
                    <TextInput
                      style={[styles.input, { color: colors.text }]}
                      value={value}
                      onChangeText={(text) => setInput(i, text)}
                      placeholder={t('graph.placeholder')}
                      placeholderTextColor={colors.textMuted}
                      autoCapitalize="none"
                      autoCorrect={false}
                      spellCheck={false}
                      returnKeyType="done"
                      onSubmitEditing={() => setCommitted(inputs)}
                      accessibilityLabel={nameOf(i)}
                    />
                    {i > 0 ? (
                      <TouchableOpacity
                        onPress={() => removeInput(i)}
                        hitSlop={8}
                        accessibilityRole="button"
                        accessibilityLabel={t('graph.removeFunction')}
                      >
                        <Ionicons name="close-circle" size={20} color={colors.textMuted} />
                      </TouchableOpacity>
                    ) : null}
                  </View>
                  {showError ? (
                    <Text style={[styles.inputError, { color: colors.error }]}>{errorMessage(t, a)}</Text>
                  ) : null}
                </View>
              );
            })}
            {inputs.length < MAX_GRAPH_FUNCTIONS ? (
              <>
                <View style={[styles.inputDivider, { backgroundColor: colors.border }]} />
                <TouchableOpacity
                  style={styles.addRow}
                  onPress={addInput}
                  activeOpacity={0.6}
                  accessibilityRole="button"
                  accessibilityLabel={t('graph.addFunction')}
                >
                  <Ionicons name="add-circle" size={20} color={colors.primary} />
                  <Text style={[styles.addText, { color: colors.primary }]}>{t('graph.addFunction')}</Text>
                </TouchableOpacity>
              </>
            ) : null}
          </View>

          {/* Graph */}
          <View style={styles.graphWrap}>
            {plotted.length ? (
              <FunctionGraph
                functions={plotted}
                intersections={intersectionPoints}
                viewport={result.viewport}
                resetKey={resetKey}
                height={graphHeight}
                onInteractionStart={() => setScrollEnabled(false)}
                onInteractionEnd={() => setScrollEnabled(true)}
              />
            ) : (
              <View style={[styles.placeholder, { height: graphHeight, backgroundColor: colors.surface }]}>
                <Ionicons
                  name={firstError ? 'alert-circle-outline' : 'analytics-outline'}
                  size={40}
                  color={colors.textMuted}
                />
                <Text style={[styles.placeholderText, { color: colors.textSubtle }]}>
                  {errorMessage(t, firstError)}
                </Text>
              </View>
            )}
            {plotted.length ? (
              <Text style={[styles.hint, { color: colors.textSubtle }]}>{t('graph.tapHint')}</Text>
            ) : null}
          </View>

          {/* Analysis */}
          {plotted.map(renderAnalysis)}

          {/* Intersections */}
          {plotted.length > 1 ? (
            <ListSection title={t('graph.intersections')}>
              {result.intersections.map((r) => (
                <AnalysisRow
                  key={`x${r.a}${r.b}`}
                  icon="git-merge-outline"
                  iconColor={colors.primary}
                  title={`${FUNCTION_NAMES[r.a]} ∩ ${FUNCTION_NAMES[r.b]}`}
                  value={r.identical ? t('graph.identical') : fmt.points(r.points, plotted.some((p) => p.analysis.periodic))}
                  styles={styles}
                  colors={colors}
                />
              ))}
            </ListSection>
          ) : null}
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
}

const makeStyles = (colors) => StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
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
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingTop: SPACING.lg,
    paddingBottom: SPACING.massive,
    width: '100%',
    maxWidth: 760,
    alignSelf: 'center',
  },
  inputCard: {
    marginHorizontal: SPACING.lg,
    borderRadius: BORDER_RADIUS.md,
    overflow: 'hidden',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 48,
    paddingHorizontal: SPACING.lg,
    gap: SPACING.sm,
  },
  colorDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  inputLabel: {
    ...TYPOGRAPHY.bodyBold,
    fontStyle: 'italic',
  },
  input: {
    ...TYPOGRAPHY.body,
    flex: 1,
    paddingVertical: SPACING.md,
    outlineStyle: 'none',
  },
  inputError: {
    ...TYPOGRAPHY.footnote,
    paddingHorizontal: SPACING.lg,
    paddingBottom: SPACING.sm,
    marginTop: -SPACING.xs,
  },
  inputDivider: {
    height: StyleSheet.hairlineWidth,
    marginLeft: SPACING.lg,
  },
  addRow: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 44,
    paddingHorizontal: SPACING.lg,
    gap: SPACING.sm,
  },
  addText: {
    ...TYPOGRAPHY.body,
  },
  graphWrap: {
    marginHorizontal: SPACING.lg,
    marginTop: SPACING.lg,
  },
  placeholder: {
    borderRadius: BORDER_RADIUS.md,
    alignItems: 'center',
    justifyContent: 'center',
    padding: SPACING.xxxl,
    gap: SPACING.md,
  },
  placeholderText: {
    ...TYPOGRAPHY.subhead,
    textAlign: 'center',
  },
  hint: {
    ...TYPOGRAPHY.footnote,
    marginTop: SPACING.sm,
    marginHorizontal: SPACING.lg,
    textAlign: 'center',
  },
  aRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.sm + 2,
    minHeight: 44,
  },
  aRowText: {
    flex: 1,
    marginLeft: SPACING.md,
  },
  aRowTitle: {
    ...TYPOGRAPHY.subhead,
  },
  aRowValue: {
    ...TYPOGRAPHY.footnote,
    marginTop: 1,
  },
  aDivider: {
    height: StyleSheet.hairlineWidth,
    marginLeft: SPACING.lg + 30 + SPACING.md,
  },
});
