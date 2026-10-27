import React, { useRef, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, Animated } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../shared/theme/ThemeContext';
import { isPlottableFunction } from '../graph/graphService';
import MathKeyboard from '../solver/MathKeyboard';
import { Card, Button, SegmentedControl } from '../../shared/ui';
import { useDashboardStyles } from './dashboardStyles';

const KEYBOARD_KEY = '@mathhelper_math_keyboard';

// Keyboard / Camera switch with the problem field (or photo) and the Calculate / Analyze with AI buttons.
export default function SolveCard({
  inputMode, onChangeMode, text, onChangeText, image, isAnalyzing,
  onCalculate, onAnalyzeAI, onOpenGraph, onPickImage, onTakePhoto, onRemoveImage,
}) {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const styles = useDashboardStyles();
  const canSubmit = !!text.trim() && !isAnalyzing;

  // The math keyboard takes half the screen: closed until asked for, and the choice is remembered
  const [showKeyboard, setShowKeyboard] = useState(false);
  useEffect(() => {
    AsyncStorage.getItem(KEYBOARD_KEY).then((v) => { if (v === 'open') setShowKeyboard(true); }).catch(() => {});
  }, []);
  const toggleKeyboard = () => {
    setShowKeyboard((open) => {
      AsyncStorage.setItem(KEYBOARD_KEY, open ? 'closed' : 'open').catch(() => {});
      return !open;
    });
  };

  // ── Micro-animations ─────────────────────────────────────────────────────────
  const galleryAnim = useRef(new Animated.Value(1)).current;
  const cameraAnim  = useRef(new Animated.Value(1)).current;

  const pressIn  = (a) => Animated.spring(a, { toValue: 0.95, useNativeDriver: true, friction: 20, tension: 350 }).start();
  const pressOut = (a) => Animated.spring(a, { toValue: 1,    useNativeDriver: true, friction: 20, tension: 350 }).start();

  const solveButtons = (disabled) => (
    <View style={styles.actionRow}>
      <Button
        style={styles.actionButton}
        icon={isAnalyzing ? 'hourglass' : 'calculator'}
        title={t('dashboard.calculate')}
        onPress={onCalculate}
        disabled={disabled}
      />
      <Button
        style={styles.actionButton}
        variant="tinted"
        icon={isAnalyzing ? 'hourglass' : 'sparkles'}
        title={t('dashboard.analyzeAI')}
        onPress={onAnalyzeAI}
        disabled={disabled}
      />
    </View>
  );

  return (
    <Card style={styles.block}>
      <SegmentedControl
        style={styles.segmented}
        value={inputMode}
        onChange={onChangeMode}
        segments={[
          { value: 'keyboard', icon: 'keypad', label: t('dashboard.keyboard') },
          { value: 'camera', icon: 'camera', label: t('dashboard.camera') },
        ]}
      />

      {inputMode === 'keyboard' ? (
        <View>
          <TextInput
            style={styles.mathTextInput}
            value={text}
            onChangeText={onChangeText}
            placeholder={t('dashboard.inputPlaceholder')}
            placeholderTextColor={colors.textMuted}
            multiline
            numberOfLines={4}
            textAlignVertical="top"
          />

          {solveButtons(!canSubmit)}

          {/* Graph — shown only when input contains a plottable function */}
          {isPlottableFunction(text) && (
            <Button
              style={styles.graphButton}
              variant="tinted"
              tone="warning"
              icon="stats-chart"
              title={t('dashboard.graphButton')}
              onPress={onOpenGraph}
            />
          )}

          <TouchableOpacity
            style={styles.keyboardToggle}
            onPress={toggleKeyboard}
            activeOpacity={0.7}
            accessibilityRole="button"
            accessibilityState={{ expanded: showKeyboard }}
          >
            <Ionicons name="calculator-outline" size={17} color={colors.primary} />
            <Text style={styles.keyboardToggleText}>{showKeyboard ? t('mathKeyboard.hide') : t('mathKeyboard.show')}</Text>
            <Ionicons name={showKeyboard ? 'chevron-up' : 'chevron-down'} size={16} color={colors.textSubtle} />
          </TouchableOpacity>

          {showKeyboard && (
            <MathKeyboard
              onKeyPress={(value) => onChangeText((prev) => prev + value)}
              onBackspace={() => onChangeText((prev) => prev.slice(0, -1))}
              onClear={() => onChangeText('')}
            />
          )}
        </View>
      ) : image ? (
        <View>
          <Image source={{ uri: image }} style={styles.imagePreview} />
          {solveButtons(isAnalyzing)}
          <Button
            variant="plain"
            tone="destructive"
            icon="close"
            title={t('dashboard.remove')}
            onPress={onRemoveImage}
          />
        </View>
      ) : (
        <View style={styles.uploadRow}>
          {[
            { onPress: onPickImage, anim: galleryAnim, icon: 'images', color: colors.primary, label: t('dashboard.uploadPhoto'), sub: t('dashboard.fromGallery') },
            { onPress: onTakePhoto, anim: cameraAnim, icon: 'camera', color: colors.success, label: t('dashboard.takePhoto'), sub: t('dashboard.useCamera') },
          ].map((tile) => (
            <TouchableOpacity
              key={tile.icon}
              style={styles.uploadTile}
              onPress={tile.onPress}
              onPressIn={() => pressIn(tile.anim)}
              onPressOut={() => pressOut(tile.anim)}
              activeOpacity={1}
            >
              <Animated.View style={[styles.uploadTileInner, { transform: [{ scale: tile.anim }] }]}>
                <Ionicons name={tile.icon} size={30} color={tile.color} />
                <Text style={styles.uploadLabel}>{tile.label}</Text>
                <Text style={styles.uploadSub}>{tile.sub}</Text>
              </Animated.View>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </Card>
  );
}
