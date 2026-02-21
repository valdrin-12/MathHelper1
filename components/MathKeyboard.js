import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Modal,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import { COLORS, SHADOWS } from '../theme/constants';

// ─── Keyboard Type Definitions ───
const KEYBOARD_TYPES = [
  { id: 'basic', icon: 'add', translationKey: 'mathKeyboard.basicMath' },
  { id: 'preAlgebra', icon: 'swap-horizontal', translationKey: 'mathKeyboard.preAlgebra' },
  { id: 'algebra', icon: 'code-working', translationKey: 'mathKeyboard.algebra' },
  { id: 'trigonometry', icon: 'triangle', translationKey: 'mathKeyboard.trigonometry' },
  { id: 'precalculus', icon: 'pulse', translationKey: 'mathKeyboard.precalculus' },
  { id: 'calculus', icon: 'infinite', translationKey: 'mathKeyboard.calculus' },
  { id: 'statistics', icon: 'bar-chart', translationKey: 'mathKeyboard.statistics' },
  { id: 'finiteMath', icon: 'git-branch', translationKey: 'mathKeyboard.finiteMath' },
  { id: 'linearAlgebra', icon: 'grid', translationKey: 'mathKeyboard.linearAlgebra' },
  { id: 'chemistry', icon: 'flask', translationKey: 'mathKeyboard.chemistry' },
  { id: 'physics', icon: 'planet', translationKey: 'mathKeyboard.physics' },
  { id: 'graphing', icon: 'analytics', translationKey: 'mathKeyboard.graphing' },
];

// ─── Keyboard Layouts ───
const KEYBOARD_LAYOUTS = {
  basic: {
    tabs: [],
    rows: [
      [{ label: '(', value: '(' }, { label: ')', value: ')' }, { label: '%', value: '%' }, { label: '÷', value: '÷', highlight: true }],
      [{ label: '7', value: '7' }, { label: '8', value: '8' }, { label: '9', value: '9' }, { label: '×', value: '×', highlight: true }],
      [{ label: '4', value: '4' }, { label: '5', value: '5' }, { label: '6', value: '6' }, { label: '−', value: '−', highlight: true }],
      [{ label: '1', value: '1' }, { label: '2', value: '2' }, { label: '3', value: '3' }, { label: '+', value: '+', highlight: true }],
      [{ label: '+/−', value: '±', small: true }, { label: '0', value: '0' }, { label: '.', value: '.' }, { label: '=', value: '=', highlight: true }],
    ],
  },
  preAlgebra: {
    tabs: [{ label: 'x²', value: 'x²' }, { label: 'xⁿ', value: '^' }],
    rows: [
      [{ label: 'x', value: 'x', variable: true }, { label: '(', value: '(' }, { label: ')', value: ')' }, { label: '÷', value: '÷', highlight: true }, { label: '√', value: '√' }],
      [{ label: 'y', value: 'y', variable: true }, { label: '7', value: '7' }, { label: '8', value: '8' }, { label: '9', value: '9' }, { label: '×', value: '×', highlight: true }],
      [{ label: '|x|', value: '|', small: true }, { label: '4', value: '4' }, { label: '5', value: '5' }, { label: '6', value: '6' }, { label: '−', value: '−', highlight: true }],
      [{ label: 'π', value: 'π', variable: true }, { label: '1', value: '1' }, { label: '2', value: '2' }, { label: '3', value: '3' }, { label: '+', value: '+', highlight: true }],
      [{ label: '+/−', value: '±', small: true }, { label: '0', value: '0' }, { label: '.', value: '.' }, { label: '/', value: '/' }, { label: '=', value: '=', highlight: true }],
    ],
  },
  algebra: {
    tabs: [{ label: 'f(x)', value: 'f(x)' }, { label: 'y', value: 'y' }, { label: 'x²', value: 'x²' }],
    rows: [
      [{ label: '(', value: '(' }, { label: ')', value: ')' }, { label: '|', value: '|' }, { label: '√', value: '√' }, { label: '∛', value: '∛' }, { label: '≥', value: '≥' }],
      [{ label: 'x', value: 'x', variable: true }, { label: '7', value: '7' }, { label: '8', value: '8' }, { label: '9', value: '9' }, { label: '÷', value: '÷', highlight: true }, { label: '≤', value: '≤' }],
      [{ label: 'y', value: 'y', variable: true }, { label: '4', value: '4' }, { label: '5', value: '5' }, { label: '6', value: '6' }, { label: '×', value: '×', highlight: true }, { label: 'ln', value: 'ln(' }],
      [{ label: 'z', value: 'z', variable: true }, { label: '1', value: '1' }, { label: '2', value: '2' }, { label: '3', value: '3' }, { label: '−', value: '−', highlight: true }, { label: 'log', value: 'log(' }],
      [{ label: '^', value: '^' }, { label: '0', value: '0' }, { label: '.', value: '.' }, { label: '+', value: '+', highlight: true }, { label: '=', value: '=' }, { label: 'π', value: 'π', variable: true }],
    ],
  },
  trigonometry: {
    tabs: [{ label: 'sin', value: 'sin(' }, { label: 'cos', value: 'cos(' }, { label: 'tan', value: 'tan(' }],
    rows: [
      [{ label: 'sin', value: 'sin(', small: true }, { label: 'cos', value: 'cos(', small: true }, { label: 'tan', value: 'tan(', small: true }, { label: '(', value: '(' }, { label: ')', value: ')' }, { label: 'π', value: 'π', variable: true }],
      [{ label: 'sin⁻¹', value: 'arcsin(', small: true }, { label: 'cos⁻¹', value: 'arccos(', small: true }, { label: 'tan⁻¹', value: 'arctan(', small: true }, { label: '7', value: '7' }, { label: '8', value: '8' }, { label: '9', value: '9' }],
      [{ label: 'csc', value: 'csc(', small: true }, { label: 'sec', value: 'sec(', small: true }, { label: 'cot', value: 'cot(', small: true }, { label: '4', value: '4' }, { label: '5', value: '5' }, { label: '6', value: '6' }],
      [{ label: '°', value: '°' }, { label: 'rad', value: 'rad', small: true }, { label: 'θ', value: 'θ', variable: true }, { label: '1', value: '1' }, { label: '2', value: '2' }, { label: '3', value: '3' }],
      [{ label: '√', value: '√' }, { label: '^', value: '^' }, { label: 'x', value: 'x', variable: true }, { label: '0', value: '0' }, { label: '.', value: '.' }, { label: '=', value: '=', highlight: true }],
    ],
  },
  precalculus: {
    tabs: [{ label: 'f(x)', value: 'f(x)' }, { label: 'lim', value: 'lim ' }],
    rows: [
      [{ label: 'lim', value: 'lim ', small: true }, { label: '∞', value: '∞' }, { label: '(', value: '(' }, { label: ')', value: ')' }, { label: '√', value: '√' }, { label: 'ln', value: 'ln(' }],
      [{ label: 'x', value: 'x', variable: true }, { label: '7', value: '7' }, { label: '8', value: '8' }, { label: '9', value: '9' }, { label: '÷', value: '÷', highlight: true }, { label: 'log', value: 'log(' }],
      [{ label: 'y', value: 'y', variable: true }, { label: '4', value: '4' }, { label: '5', value: '5' }, { label: '6', value: '6' }, { label: '×', value: '×', highlight: true }, { label: 'eˣ', value: 'e^', small: true }],
      [{ label: 'n', value: 'n', variable: true }, { label: '1', value: '1' }, { label: '2', value: '2' }, { label: '3', value: '3' }, { label: '−', value: '−', highlight: true }, { label: 'π', value: 'π', variable: true }],
      [{ label: '^', value: '^' }, { label: '0', value: '0' }, { label: '.', value: '.' }, { label: '+', value: '+', highlight: true }, { label: '=', value: '=' }, { label: '|', value: '|' }],
    ],
  },
  calculus: {
    tabs: [{ label: 'd/dx', value: 'd/dx ' }, { label: '∫', value: '∫' }, { label: 'Σ', value: 'Σ' }],
    rows: [
      [{ label: 'd/dx', value: 'd/dx ', small: true }, { label: '∫', value: '∫' }, { label: 'Σ', value: 'Σ' }, { label: 'lim', value: 'lim ', small: true }, { label: '∞', value: '∞' }, { label: 'dx', value: 'dx', small: true }],
      [{ label: 'x', value: 'x', variable: true }, { label: '7', value: '7' }, { label: '8', value: '8' }, { label: '9', value: '9' }, { label: '÷', value: '÷', highlight: true }, { label: 'ln', value: 'ln(' }],
      [{ label: 'y', value: 'y', variable: true }, { label: '4', value: '4' }, { label: '5', value: '5' }, { label: '6', value: '6' }, { label: '×', value: '×', highlight: true }, { label: 'eˣ', value: 'e^', small: true }],
      [{ label: 'n', value: 'n', variable: true }, { label: '1', value: '1' }, { label: '2', value: '2' }, { label: '3', value: '3' }, { label: '−', value: '−', highlight: true }, { label: 'π', value: 'π', variable: true }],
      [{ label: '^', value: '^' }, { label: '0', value: '0' }, { label: '.', value: '.' }, { label: '+', value: '+', highlight: true }, { label: '=', value: '=' }, { label: '√', value: '√' }],
    ],
  },
  statistics: {
    tabs: [{ label: 'P()', value: 'P(' }, { label: 'C()', value: 'C(' }],
    rows: [
      [{ label: 'P()', value: 'P(', small: true }, { label: 'C', value: 'C(', small: true }, { label: 'n!', value: '!', small: true }, { label: 'μ', value: 'μ', variable: true }, { label: 'σ', value: 'σ', variable: true }, { label: 'x̄', value: 'x̄', variable: true }],
      [{ label: 'nCr', value: 'nCr', small: true }, { label: '7', value: '7' }, { label: '8', value: '8' }, { label: '9', value: '9' }, { label: '÷', value: '÷', highlight: true }, { label: 'Σ', value: 'Σ' }],
      [{ label: 'nPr', value: 'nPr', small: true }, { label: '4', value: '4' }, { label: '5', value: '5' }, { label: '6', value: '6' }, { label: '×', value: '×', highlight: true }, { label: '√', value: '√' }],
      [{ label: '(', value: '(' }, { label: '1', value: '1' }, { label: '2', value: '2' }, { label: '3', value: '3' }, { label: '−', value: '−', highlight: true }, { label: '^', value: '^' }],
      [{ label: ')', value: ')' }, { label: '0', value: '0' }, { label: '.', value: '.' }, { label: '+', value: '+', highlight: true }, { label: '=', value: '=' }, { label: ',', value: ',' }],
    ],
  },
  finiteMath: {
    tabs: [{ label: '∩', value: '∩' }, { label: '∪', value: '∪' }],
    rows: [
      [{ label: '∩', value: '∩' }, { label: '∪', value: '∪' }, { label: '⊂', value: '⊂' }, { label: '∈', value: '∈' }, { label: '∅', value: '∅' }, { label: '¬', value: '¬' }],
      [{ label: '{', value: '{' }, { label: '7', value: '7' }, { label: '8', value: '8' }, { label: '9', value: '9' }, { label: '÷', value: '÷', highlight: true }, { label: '∧', value: '∧' }],
      [{ label: '}', value: '}' }, { label: '4', value: '4' }, { label: '5', value: '5' }, { label: '6', value: '6' }, { label: '×', value: '×', highlight: true }, { label: '∨', value: '∨' }],
      [{ label: '(', value: '(' }, { label: '1', value: '1' }, { label: '2', value: '2' }, { label: '3', value: '3' }, { label: '−', value: '−', highlight: true }, { label: '→', value: '→' }],
      [{ label: ')', value: ')' }, { label: '0', value: '0' }, { label: '.', value: '.' }, { label: '+', value: '+', highlight: true }, { label: '=', value: '=' }, { label: ',', value: ',' }],
    ],
  },
  linearAlgebra: {
    tabs: [{ label: '[M]', value: '[' }, { label: 'det', value: 'det(' }],
    rows: [
      [{ label: '[', value: '[' }, { label: ']', value: ']' }, { label: 'det', value: 'det(', small: true }, { label: 'T', value: 'ᵀ' }, { label: '→', value: '→' }, { label: '|', value: '|' }],
      [{ label: 'x', value: 'x', variable: true }, { label: '7', value: '7' }, { label: '8', value: '8' }, { label: '9', value: '9' }, { label: '÷', value: '÷', highlight: true }, { label: 'λ', value: 'λ', variable: true }],
      [{ label: 'y', value: 'y', variable: true }, { label: '4', value: '4' }, { label: '5', value: '5' }, { label: '6', value: '6' }, { label: '×', value: '×', highlight: true }, { label: '·', value: '·' }],
      [{ label: 'z', value: 'z', variable: true }, { label: '1', value: '1' }, { label: '2', value: '2' }, { label: '3', value: '3' }, { label: '−', value: '−', highlight: true }, { label: '⁻¹', value: '⁻¹', small: true }],
      [{ label: '^', value: '^' }, { label: '0', value: '0' }, { label: '.', value: '.' }, { label: '+', value: '+', highlight: true }, { label: '=', value: '=' }, { label: ',', value: ',' }],
    ],
  },
  chemistry: {
    tabs: [{ label: '→', value: '→' }, { label: '⇌', value: '⇌' }],
    rows: [
      [{ label: '→', value: '→' }, { label: '⇌', value: '⇌' }, { label: '↑', value: '↑' }, { label: '↓', value: '↓' }, { label: '(', value: '(' }, { label: ')', value: ')' }],
      [{ label: 'H', value: 'H', variable: true }, { label: '7', value: '7' }, { label: '8', value: '8' }, { label: '9', value: '9' }, { label: 'O', value: 'O', variable: true }, { label: 'N', value: 'N', variable: true }],
      [{ label: 'C', value: 'C', variable: true }, { label: '4', value: '4' }, { label: '5', value: '5' }, { label: '6', value: '6' }, { label: 'S', value: 'S', variable: true }, { label: 'Cl', value: 'Cl', variable: true }],
      [{ label: 'Fe', value: 'Fe', variable: true }, { label: '1', value: '1' }, { label: '2', value: '2' }, { label: '3', value: '3' }, { label: 'Na', value: 'Na', variable: true }, { label: 'K', value: 'K', variable: true }],
      [{ label: '+', value: '+', highlight: true }, { label: '0', value: '0' }, { label: '.', value: '.' }, { label: '−', value: '−', highlight: true }, { label: '=', value: '=' }, { label: '²', value: '²' }],
    ],
  },
  physics: {
    tabs: [{ label: 'F=ma', value: 'F=ma' }, { label: 'Δ', value: 'Δ' }],
    rows: [
      [{ label: 'Δ', value: 'Δ' }, { label: 'α', value: 'α', variable: true }, { label: 'β', value: 'β', variable: true }, { label: 'γ', value: 'γ', variable: true }, { label: 'ω', value: 'ω', variable: true }, { label: 'θ', value: 'θ', variable: true }],
      [{ label: 'F', value: 'F', variable: true }, { label: '7', value: '7' }, { label: '8', value: '8' }, { label: '9', value: '9' }, { label: '÷', value: '÷', highlight: true }, { label: 'μ', value: 'μ', variable: true }],
      [{ label: 'v', value: 'v', variable: true }, { label: '4', value: '4' }, { label: '5', value: '5' }, { label: '6', value: '6' }, { label: '×', value: '×', highlight: true }, { label: '√', value: '√' }],
      [{ label: 'a', value: 'a', variable: true }, { label: '1', value: '1' }, { label: '2', value: '2' }, { label: '3', value: '3' }, { label: '−', value: '−', highlight: true }, { label: '^', value: '^' }],
      [{ label: 't', value: 't', variable: true }, { label: '0', value: '0' }, { label: '.', value: '.' }, { label: '+', value: '+', highlight: true }, { label: '=', value: '=' }, { label: 'π', value: 'π', variable: true }],
    ],
  },
  graphing: {
    tabs: [{ label: 'y=', value: 'y=' }, { label: 'f(x)', value: 'f(x)=' }],
    rows: [
      [{ label: 'y=', value: 'y=', small: true }, { label: '<', value: '<' }, { label: '>', value: '>' }, { label: '≤', value: '≤' }, { label: '≥', value: '≥' }, { label: '≠', value: '≠' }],
      [{ label: 'x', value: 'x', variable: true }, { label: '7', value: '7' }, { label: '8', value: '8' }, { label: '9', value: '9' }, { label: '÷', value: '÷', highlight: true }, { label: 'sin', value: 'sin(', small: true }],
      [{ label: 'y', value: 'y', variable: true }, { label: '4', value: '4' }, { label: '5', value: '5' }, { label: '6', value: '6' }, { label: '×', value: '×', highlight: true }, { label: 'cos', value: 'cos(', small: true }],
      [{ label: '|x|', value: '|', small: true }, { label: '1', value: '1' }, { label: '2', value: '2' }, { label: '3', value: '3' }, { label: '−', value: '−', highlight: true }, { label: 'log', value: 'log(' }],
      [{ label: '^', value: '^' }, { label: '0', value: '0' }, { label: '.', value: '.' }, { label: '+', value: '+', highlight: true }, { label: '=', value: '=' }, { label: '√', value: '√' }],
    ],
  },
};

// ─── Keyboard Type Selector Modal ───
function KeyboardTypeSelector({ visible, onClose, onSelect, currentType }) {
  const { t } = useTranslation();

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <TouchableOpacity style={selectorStyles.overlay} activeOpacity={1} onPress={onClose}>
        <View style={selectorStyles.container}>
          <View style={selectorStyles.handle} />
          <Text style={selectorStyles.title}>{t('mathKeyboard.selectKeyboard')}</Text>
          <ScrollView showsVerticalScrollIndicator={false} style={selectorStyles.list}>
            {KEYBOARD_TYPES.map((type) => (
              <TouchableOpacity
                key={type.id}
                style={[
                  selectorStyles.option,
                  currentType === type.id && selectorStyles.optionActive,
                ]}
                onPress={() => {
                  onSelect(type.id);
                  onClose();
                }}
              >
                <Ionicons
                  name={type.icon}
                  size={22}
                  color={currentType === type.id ? COLORS.primarySoft : COLORS.textSubtle}
                />
                <Text
                  style={[
                    selectorStyles.optionText,
                    currentType === type.id && selectorStyles.optionTextActive,
                  ]}
                >
                  {t(type.translationKey)}
                </Text>
                {currentType === type.id && (
                  <Ionicons name="checkmark-circle" size={22} color={COLORS.primarySoft} />
                )}
              </TouchableOpacity>
            ))}
            <View style={{ height: 20 }} />
          </ScrollView>
        </View>
      </TouchableOpacity>
    </Modal>
  );
}

// ─── Main MathKeyboard Component ───
export default function MathKeyboard({ onKeyPress, onBackspace, onClear }) {
  const { t } = useTranslation();
  const [keyboardType, setKeyboardType] = useState('basic');
  const [showSelector, setShowSelector] = useState(false);

  const layout = KEYBOARD_LAYOUTS[keyboardType];
  const currentTypeInfo = KEYBOARD_TYPES.find((k) => k.id === keyboardType);

  const handleKeyPress = (key) => {
    if (onKeyPress) onKeyPress(key.value);
  };

  const renderKey = (key, index, totalInRow) => {
    const isHighlight = key.highlight;
    const isVariable = key.variable;
    const isSmall = key.small;

    return (
      <TouchableOpacity
        key={`${key.label}-${index}`}
        style={[
          styles.key,
          isHighlight && styles.keyHighlight,
          isVariable && styles.keyVariable,
          { flex: 1 },
        ]}
        onPress={() => handleKeyPress(key)}
        activeOpacity={0.6}
      >
        <Text
          style={[
            styles.keyText,
            isHighlight && styles.keyTextHighlight,
            isVariable && styles.keyTextVariable,
            isSmall && styles.keyTextSmall,
          ]}
          numberOfLines={1}
          adjustsFontSizeToFit
        >
          {key.label}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {/* Keyboard Type Selector Bar */}
      <TouchableOpacity
        style={styles.selectorBar}
        onPress={() => setShowSelector(true)}
      >
        <Ionicons
          name={currentTypeInfo?.icon || 'add'}
          size={18}
          color={COLORS.primarySoft}
        />
        <Text style={styles.selectorText}>
          {t(currentTypeInfo?.translationKey || 'mathKeyboard.basicMath')}
        </Text>
        <Ionicons name="chevron-down" size={18} color={COLORS.textSubtle} />
      </TouchableOpacity>

      {/* Quick Tabs (if keyboard has them) */}
      {layout.tabs.length > 0 && (
        <View style={styles.tabsRow}>
          {layout.tabs.map((tab, i) => (
            <TouchableOpacity
              key={i}
              style={styles.tabButton}
              onPress={() => onKeyPress && onKeyPress(tab.value)}
            >
              <Text style={styles.tabText}>{tab.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      {/* Keyboard Grid */}
      <View style={styles.keysContainer}>
        {layout.rows.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((key, keyIndex) => renderKey(key, keyIndex, row.length))}
          </View>
        ))}

        {/* Bottom Action Row */}
        <View style={styles.row}>
          <TouchableOpacity
            style={[styles.key, styles.keyAction]}
            onPress={onClear}
          >
            <Text style={styles.keyTextAction}>{t('mathKeyboard.clearAll')}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.key, styles.keyAction, { flex: 0.5 }]} onPress={() => onKeyPress && onKeyPress(' ')}>
            <Ionicons name="space-outline" size={18} color={COLORS.textSubtle} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.key, styles.keyNavigation]}
            onPress={onBackspace}
          >
            <Ionicons name="backspace-outline" size={22} color={COLORS.primarySoft} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Keyboard Type Selector Modal */}
      <KeyboardTypeSelector
        visible={showSelector}
        onClose={() => setShowSelector(false)}
        onSelect={setKeyboardType}
        currentType={keyboardType}
      />
    </View>
  );
}

// ─── Styles ───
const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.surface,
    borderTopWidth: 1,
    borderTopColor: COLORS.borderLight,
    ...SHADOWS.medium,
  },
  selectorBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    gap: 8,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.borderLight,
  },
  selectorText: {
    flex: 1,
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.text,
  },
  tabsRow: {
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingVertical: 6,
    gap: 6,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.borderLight,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 8,
    backgroundColor: COLORS.inputBg,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.inputBorder,
  },
  tabText: {
    fontSize: 15,
    fontWeight: '600',
    color: COLORS.textSecondary,
    fontStyle: 'italic',
  },
  keysContainer: {
    padding: 4,
    gap: 4,
  },
  row: {
    flexDirection: 'row',
    gap: 4,
  },
  key: {
    height: 46,
    borderRadius: 8,
    backgroundColor: COLORS.inputBg,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.inputBorder,
    minWidth: 0,
  },
  keyHighlight: {
    backgroundColor: COLORS.primaryBg,
    borderColor: COLORS.primarySoft,
  },
  keyVariable: {
    backgroundColor: COLORS.primaryBg,
  },
  keyText: {
    fontSize: 18,
    fontWeight: '500',
    color: COLORS.text,
  },
  keyTextHighlight: {
    color: COLORS.primarySoft,
    fontWeight: '700',
  },
  keyTextVariable: {
    color: COLORS.primarySoft,
    fontStyle: 'italic',
    fontWeight: '600',
  },
  keyTextSmall: {
    fontSize: 13,
    fontWeight: '600',
  },
  keyAction: {
    flex: 1,
    backgroundColor: COLORS.background,
    borderColor: COLORS.borderLight,
  },
  keyTextAction: {
    fontSize: 12,
    fontWeight: '700',
    color: COLORS.textSubtle,
  },
  keyNavigation: {
    flex: 0.8,
    backgroundColor: COLORS.background,
    borderColor: COLORS.borderLight,
  },
});

const selectorStyles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'flex-end',
  },
  container: {
    backgroundColor: COLORS.surface,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    maxHeight: '70%',
    paddingBottom: 20,
  },
  handle: {
    width: 40,
    height: 4,
    borderRadius: 2,
    backgroundColor: COLORS.borderLight,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    color: COLORS.text,
    paddingHorizontal: 20,
    marginBottom: 12,
  },
  list: {
    paddingHorizontal: 12,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 12,
    gap: 14,
    marginBottom: 2,
  },
  optionActive: {
    backgroundColor: COLORS.primaryBg,
  },
  optionText: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.text,
  },
  optionTextActive: {
    color: COLORS.primarySoft,
    fontWeight: '700',
  },
});
