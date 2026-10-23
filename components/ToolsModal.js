// Offline math tools (Photomath / Symbolab style): calculators with step-by-step solutions and a
// formula sheet. Everything runs on the device through services/solver — no network calls.
import { useState, useMemo } from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { SPACING, BORDER_RADIUS, TYPOGRAPHY } from '../theme/constants';
import { ListSection, ListRow, Button, SegmentedControl, Card, Pill } from './ui';
import { solveWithTool } from '../services/mathCalculatorService';
import { formulaSections, localizedFormula } from '../data/formulas';

// Matrix text "1 2; 3 4" or one row per line → [[1,2],[3,4]] (entries may be fractions like 1/2)
const parseMatrix = (text) => String(text || '')
  .split(/[;\n]/)
  .map((row) => row.trim())
  .filter(Boolean)
  .map((row) => row.split(/[\s,]+/).filter(Boolean));

// Numbers separated by commas, semicolons or spaces
const parseNumberList = (text) => String(text || '').split(/[;,\s]+/).filter(Boolean);

// Each tool: which fields to ask for and how to turn the values into solveWithTool input
const TOOLS = [
  {
    id: 'quadratic', icon: 'git-branch', colorKey: 'primary',
    fields: [
      { key: 'a', type: 'number', placeholder: '1' },
      { key: 'b', type: 'number', placeholder: '−5' },
      { key: 'c', type: 'number', placeholder: '6' },
    ],
    build: (v) => ({ a: v.a, b: v.b || 0, c: v.c || 0 }),
  },
  {
    id: 'system', icon: 'apps', colorKey: 'primary',
    fields: [{ key: 'equations', type: 'multiline', placeholder: '2x + y = 5\nx − y = 1' }],
    build: (v) => ({ equations: String(v.equations || '').split('\n').filter((e) => e.trim()) }),
  },
  {
    id: 'inequality', icon: 'swap-horizontal', colorKey: 'primary',
    fields: [{ key: 'expression', type: 'text', placeholder: '−2x + 1 > 7' }],
    build: (v) => ({ expression: v.expression }),
  },
  {
    id: 'algebra', icon: 'construct', colorKey: 'purple',
    fields: [
      { key: 'mode', type: 'segment', options: ['simplify', 'expand', 'factor'], default: 'factor' },
      { key: 'expression', type: 'text', placeholder: 'x² − 5x + 6' },
    ],
    tool: (v) => v.mode || 'factor',
    build: (v) => ({ expression: v.expression }),
  },
  {
    id: 'fraction', icon: 'pie-chart', colorKey: 'purple',
    fields: [{ key: 'expression', type: 'text', placeholder: '1/3 + 1/6' }],
    build: (v) => ({ expression: v.expression }),
  },
  {
    id: 'derivative', icon: 'trending-up', colorKey: 'success',
    fields: [{ key: 'expression', type: 'text', placeholder: 'x³ · sin(x)' }],
    build: (v) => ({ expression: v.expression }),
  },
  {
    id: 'integral', icon: 'analytics', colorKey: 'success',
    fields: [
      { key: 'expression', type: 'text', placeholder: '3x² − 4x + 1' },
      { key: 'from', type: 'number', optional: true, placeholder: '0' },
      { key: 'to', type: 'number', optional: true, placeholder: '2' },
    ],
    build: (v) => ({ expression: v.expression, from: v.from, to: v.to }),
  },
  {
    id: 'percent', icon: 'pricetag', colorKey: 'secondary',
    fields: [
      { key: 'kind', type: 'segment', options: ['of', 'whatPercent', 'change'], default: 'of' },
      { key: 'a', type: 'number', placeholder: '15' },
      { key: 'b', type: 'number', placeholder: '80' },
    ],
    build: (v) => ({ kind: v.kind || 'of', a: v.a, b: v.b }),
  },
  {
    id: 'gcdlcm', icon: 'grid', colorKey: 'secondary',
    fields: [{ key: 'numbers', type: 'text', keyboard: 'numbers-and-punctuation', placeholder: '36, 48' }],
    build: (v) => ({ numbers: parseNumberList(v.numbers) }),
  },
  {
    id: 'primeFactors', icon: 'cube', colorKey: 'secondary',
    fields: [{ key: 'n', type: 'number', placeholder: '360' }],
    build: (v) => ({ n: v.n }),
  },
  {
    id: 'matrix', icon: 'keypad', colorKey: 'accent',
    fields: [
      { key: 'op', type: 'segment', options: ['det', 'inverse', 'transpose'], default: 'det' },
      { key: 'A', type: 'multiline', placeholder: '1 2\n3 4' },
    ],
    build: (v) => ({ op: v.op || 'det', A: parseMatrix(v.A) }),
  },
  {
    id: 'statistics', icon: 'stats-chart', colorKey: 'accent',
    fields: [{ key: 'data', type: 'multiline', placeholder: '2, 4, 4, 4, 5, 5, 7, 9' }],
    build: (v) => ({ data: parseNumberList(v.data) }),
  },
];

export default function ToolsModal({ visible, onClose, onOpenGraph }) {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const { language } = useLanguage();
  const styles = useMemo(() => makeStyles(colors), [colors]);

  const [tab, setTab] = useState('tools');
  const [activeTool, setActiveTool] = useState(null);
  const [values, setValues] = useState({});
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [busy, setBusy] = useState(false);

  const openTool = (tool) => {
    const defaults = {};
    tool.fields.forEach((f) => { if (f.default) defaults[f.key] = f.default; });
    setActiveTool(tool);
    setValues(defaults);
    setResult(null);
    setError(null);
  };

  const backToList = () => {
    setActiveTool(null);
    setResult(null);
    setError(null);
  };

  const handleClose = () => {
    backToList();
    onClose();
  };

  const missingRequired = activeTool
    ? activeTool.fields.some((f) => f.type !== 'segment' && !f.optional && !String(values[f.key] ?? '').trim()
      // quadratic only needs a; b and c default to 0
      && !(activeTool.id === 'quadratic' && f.key !== 'a'))
    : true;

  const solve = async () => {
    if (!activeTool || missingRequired) return;
    setBusy(true);
    setError(null);
    setResult(null);
    try {
      const toolId = activeTool.tool ? activeTool.tool(values) : activeTool.id;
      const res = await solveWithTool(toolId, activeTool.build(values), language);
      if (res?.success) setResult(res);
      else setError(t('tools.couldNotSolve'));
    } catch {
      setError(t('tools.couldNotSolve'));
    } finally {
      setBusy(false);
    }
  };

  const renderField = (field) => {
    const label = t(`tools.fields.${activeTool.id}.${field.key}`);
    if (field.type === 'segment') {
      return (
        <SegmentedControl
          key={field.key}
          style={styles.segment}
          value={values[field.key] || field.default}
          onChange={(v) => { setValues((p) => ({ ...p, [field.key]: v })); setResult(null); }}
          segments={field.options.map((o) => ({ value: o, label: t(`tools.options.${o}`) }))}
        />
      );
    }
    return (
      <View key={field.key} style={styles.fieldBlock}>
        <Text style={styles.fieldLabel}>
          {label}{field.optional ? ` · ${t('tools.optional')}` : ''}
        </Text>
        <TextInput
          style={[styles.input, field.type === 'multiline' && styles.inputMultiline]}
          value={values[field.key] ?? ''}
          onChangeText={(text) => setValues((p) => ({ ...p, [field.key]: text }))}
          placeholder={field.placeholder}
          placeholderTextColor={colors.textPlaceholder}
          multiline={field.type === 'multiline'}
          keyboardType={field.type === 'number' ? 'numbers-and-punctuation' : (field.keyboard || 'default')}
          autoCapitalize="none"
          autoCorrect={false}
          accessibilityLabel={label}
        />
      </View>
    );
  };

  const renderResult = () => (
    <>
      <Card style={styles.answerCard}>
        <View style={styles.answerHeader}>
          <Text style={styles.answerLabel}>{t('tools.answer')}</Text>
          <Pill icon="calculator" label={t('tools.offline')} color={colors.success} />
        </View>
        <Text style={styles.answerText} selectable>{result.answer}</Text>
      </Card>
      {Array.isArray(result.steps) && result.steps.length > 0 && (
        <View style={styles.stepsCard}>
          <Text style={styles.stepsTitle}>{t('tools.steps')}</Text>
          {result.steps.map((step, i) => (
            <View key={i} style={[styles.stepRow, i > 0 && styles.stepDivider]}>
              <View style={styles.stepNumber}>
                <Text style={styles.stepNumberText}>{i + 1}</Text>
              </View>
              <Text style={styles.stepText} selectable>{String(step)}</Text>
            </View>
          ))}
        </View>
      )}
      {!!result.explanation && (
        <Card style={styles.explanationCard}>
          <Text style={styles.explanationText}>{result.explanation}</Text>
        </Card>
      )}
    </>
  );

  return (
    <Modal visible={visible} animationType="slide" presentationStyle="fullScreen" onRequestClose={activeTool ? backToList : handleClose}>
      <SafeAreaView style={styles.safeArea} edges={['top', 'bottom', 'left', 'right']}>
        <View style={styles.header}>
          <View style={styles.headerSide}>
            {activeTool && (
              <TouchableOpacity onPress={backToList} hitSlop={10} accessibilityRole="button" accessibilityLabel={t('a11y.back')}>
                <Ionicons name="chevron-back" size={26} color={colors.primary} />
              </TouchableOpacity>
            )}
          </View>
          <Text style={styles.headerTitle} numberOfLines={1}>
            {activeTool ? t(`tools.items.${activeTool.id}.title`) : t('tools.title')}
          </Text>
          <View style={[styles.headerSide, styles.headerSideRight]}>
            <TouchableOpacity onPress={handleClose} hitSlop={10} accessibilityRole="button" accessibilityLabel={t('a11y.close')}>
              <Ionicons name="close" size={24} color={colors.textSecondary} />
            </TouchableOpacity>
          </View>
        </View>

        <KeyboardAvoidingView style={styles.flex} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
          <ScrollView style={styles.flex} contentContainerStyle={styles.scrollContent} keyboardShouldPersistTaps="handled">
            {!activeTool && (
              <>
                <SegmentedControl
                  style={styles.segment}
                  value={tab}
                  onChange={setTab}
                  segments={[
                    { value: 'tools', icon: 'calculator', label: t('tools.tabCalculators') },
                    { value: 'formulas', icon: 'book', label: t('tools.tabFormulas') },
                  ]}
                />
                <Text style={styles.subtitle}>{t(tab === 'tools' ? 'tools.subtitle' : 'tools.formulasSubtitle')}</Text>
              </>
            )}

            {!activeTool && tab === 'tools' && (
              <ListSection style={styles.listSection}>
                {onOpenGraph && (
                  <ListRow
                    icon="pulse"
                    iconColor={colors.primary}
                    title={t('tools.items.graph.title')}
                    subtitle={t('tools.items.graph.desc')}
                    onPress={() => { handleClose(); onOpenGraph(); }}
                  />
                )}
                {TOOLS.map((tool) => (
                  <ListRow
                    key={tool.id}
                    icon={tool.icon}
                    iconColor={colors[tool.colorKey] || colors.primary}
                    title={t(`tools.items.${tool.id}.title`)}
                    subtitle={t(`tools.items.${tool.id}.desc`)}
                    onPress={() => openTool(tool)}
                  />
                ))}
              </ListSection>
            )}

            {!activeTool && tab === 'formulas' && formulaSections.map((section) => (
              <ListSection key={section.id} title={section.title[language] || section.title.al} style={styles.formulaSection}>
                {section.items.map((item, i) => (
                  <View key={i} style={[styles.formulaRow, i > 0 && styles.formulaDivider]}>
                    <Text style={styles.formulaName}>{item.name[language] || item.name.al}</Text>
                    <Text style={styles.formulaText} selectable>{localizedFormula(item, language)}</Text>
                  </View>
                ))}
              </ListSection>
            ))}

            {activeTool && (
              <>
                <Text style={styles.subtitle}>{t(`tools.items.${activeTool.id}.desc`)}</Text>
                <Card style={styles.formCard}>
                  {activeTool.fields.map(renderField)}
                </Card>
                <Button
                  title={t('tools.solve')}
                  icon="checkmark-circle"
                  onPress={solve}
                  disabled={missingRequired || busy}
                  style={styles.solveButton}
                />
                {busy && <ActivityIndicator style={styles.busy} color={colors.primary} />}
                {!!error && (
                  <View style={styles.errorBox}>
                    <Ionicons name="alert-circle" size={18} color={colors.error} />
                    <Text style={styles.errorText}>{error}</Text>
                  </View>
                )}
                {result && renderResult()}
              </>
            )}
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </Modal>
  );
}

const HAIRLINE = StyleSheet.hairlineWidth;

const makeStyles = (colors) => StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: colors.background },
  flex: { flex: 1 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.sm + 2,
    borderBottomWidth: HAIRLINE,
    borderBottomColor: colors.border,
    backgroundColor: colors.surface,
  },
  headerSide: { width: 44, justifyContent: 'center' },
  headerSideRight: { alignItems: 'flex-end' },
  headerTitle: { ...TYPOGRAPHY.headline, color: colors.text, flex: 1, textAlign: 'center' },
  scrollContent: { padding: SPACING.lg, paddingBottom: SPACING.massive },
  segment: { marginBottom: SPACING.md },
  subtitle: { ...TYPOGRAPHY.subhead, color: colors.textSubtle, marginBottom: SPACING.sm },
  listSection: { marginHorizontal: 0, marginTop: SPACING.sm },
  formulaSection: { marginHorizontal: 0 },
  formulaRow: { paddingHorizontal: SPACING.lg, paddingVertical: SPACING.md },
  formulaDivider: { borderTopWidth: HAIRLINE, borderTopColor: colors.border },
  formulaName: { ...TYPOGRAPHY.footnote, color: colors.textSubtle, marginBottom: 2 },
  formulaText: { ...TYPOGRAPHY.body, color: colors.text, fontWeight: '500' },
  formCard: { marginTop: SPACING.sm },
  fieldBlock: { marginBottom: SPACING.md },
  // No uppercase: labels contain math like "f(x) =" where case matters
  fieldLabel: { ...TYPOGRAPHY.footnote, fontWeight: '600', color: colors.textSubtle, marginBottom: SPACING.xs },
  input: {
    ...TYPOGRAPHY.body,
    fontSize: 18,
    color: colors.text,
    backgroundColor: colors.inputBg,
    borderRadius: BORDER_RADIUS.md,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm + 2,
    minHeight: 46,
    outlineStyle: 'none',
  },
  inputMultiline: { minHeight: 96, textAlignVertical: 'top' },
  solveButton: { marginTop: SPACING.lg },
  busy: { marginTop: SPACING.md },
  errorBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.sm,
    marginTop: SPACING.md,
    padding: SPACING.md,
    borderRadius: BORDER_RADIUS.md,
    backgroundColor: colors.errorLight,
  },
  errorText: { ...TYPOGRAPHY.subhead, color: colors.text, flex: 1 },
  answerCard: { marginTop: SPACING.lg, backgroundColor: colors.primaryBg },
  answerHeader: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: SPACING.xs },
  answerLabel: { ...TYPOGRAPHY.footnote, color: colors.primary, fontWeight: '600', textTransform: 'uppercase' },
  answerText: { ...TYPOGRAPHY.h3, color: colors.text },
  stepsCard: { marginTop: SPACING.md, backgroundColor: colors.surface, borderRadius: BORDER_RADIUS.lg, overflow: 'hidden' },
  stepsTitle: { ...TYPOGRAPHY.headline, color: colors.text, paddingHorizontal: SPACING.lg, paddingTop: SPACING.md, paddingBottom: SPACING.xs },
  stepRow: { flexDirection: 'row', gap: SPACING.md, paddingHorizontal: SPACING.lg, paddingVertical: SPACING.md },
  stepDivider: { borderTopWidth: HAIRLINE, borderTopColor: colors.border },
  stepNumber: {
    width: 24, height: 24, borderRadius: 12, backgroundColor: colors.primaryBg, alignItems: 'center', justifyContent: 'center', marginTop: 1,
  },
  stepNumberText: { ...TYPOGRAPHY.footnote, fontWeight: '700', color: colors.primary },
  stepText: { ...TYPOGRAPHY.subhead, color: colors.text, flex: 1 },
  explanationCard: { marginTop: SPACING.md },
  explanationText: { ...TYPOGRAPHY.subhead, color: colors.text },
});
