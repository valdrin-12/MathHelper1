import React, { useMemo } from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../context/ThemeContext';
import { SPACING, BORDER_RADIUS, TYPOGRAPHY } from '../theme/constants';

export default function InfoModal({ visible, title, content, onClose }) {
  const { colors } = useTheme();
  const styles = useMemo(() => makeStyles(colors), [colors]);
  const { t } = useTranslation();

  return (
    <Modal visible={visible} animationType="slide" presentationStyle="pageSheet" onRequestClose={onClose}>
      <SafeAreaView style={styles.safe}>
        {/* Sheet nav bar: centered title, plain close button */}
        <View style={styles.header}>
          <View style={styles.headerSide} />
          <Text style={styles.title} numberOfLines={1}>{title}</Text>
          <View style={[styles.headerSide, styles.headerSideRight]}>
            <TouchableOpacity onPress={onClose} style={styles.closeBtn} hitSlop={8} accessibilityRole="button" accessibilityLabel={t('a11y.close')}>
              <Text style={styles.closeBtnText}>&#x2715;</Text>
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView style={styles.body} contentContainerStyle={styles.bodyContent} showsVerticalScrollIndicator={false}>
          {Array.isArray(content) ? (
            content.map((section, i) => (
              <View key={i} style={[styles.section, section.muted && styles.sectionMuted]}>
                {section.heading ? (
                  <View style={styles.headingRow}>
                    {section.icon ? (
                      <Ionicons name={section.icon} size={16} color={section.iconColor || colors.textSubtle} style={styles.headingIcon} />
                    ) : null}
                    <Text style={styles.heading}>{section.heading}</Text>
                  </View>
                ) : null}
                <Text style={styles.text}>{section.text}</Text>
              </View>
            ))
          ) : (
            <View style={styles.section}>
              <Text style={styles.text}>{content}</Text>
            </View>
          )}
          <View style={{ height: 40 }} />
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
}

const makeStyles = (colors) => StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 56,
    paddingHorizontal: SPACING.sm,
    backgroundColor: colors.surface,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.border,
  },
  headerSide: { width: 56 },
  headerSideRight: { alignItems: 'flex-end' },
  title: { ...TYPOGRAPHY.headline, flex: 1, textAlign: 'center', color: colors.text },
  // 44pt tap target, glyph drawn in a small grey circle like iOS sheet close buttons
  closeBtn: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeBtnText: {
    width: 30,
    height: 30,
    lineHeight: 30,
    borderRadius: 15,
    overflow: 'hidden',
    textAlign: 'center',
    fontSize: 13,
    fontWeight: '700',
    color: colors.textSubtle,
    backgroundColor: colors.inputBg,
  },
  body: { flex: 1 },
  bodyContent: { padding: SPACING.lg },
  section: {
    backgroundColor: colors.surface,
    borderRadius: BORDER_RADIUS.md,
    padding: SPACING.lg,
    marginBottom: SPACING.md,
  },
  sectionMuted: { opacity: 0.6 },
  headingRow: { flexDirection: 'row', alignItems: 'center', marginBottom: SPACING.sm - 2 },
  headingIcon: { marginRight: SPACING.xs + 2 },
  heading: { ...TYPOGRAPHY.headline, color: colors.text, flexShrink: 1 },
  text: { ...TYPOGRAPHY.subhead, lineHeight: 22, color: colors.textSecondary },
});
