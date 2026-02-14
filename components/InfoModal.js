import React from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { COLORS, SPACING, BORDER_RADIUS, TYPOGRAPHY, SHADOWS } from '../theme/constants';

export default function InfoModal({ visible, title, content, onClose }) {
  return (
    <Modal visible={visible} animationType="slide" presentationStyle="pageSheet" onRequestClose={onClose}>
      <SafeAreaView style={styles.safe}>
        <View style={styles.header}>
          <Text style={styles.title}>{title}</Text>
          <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
            <Text style={styles.closeBtnText}>&#x2715;</Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>
          {Array.isArray(content) ? (
            content.map((section, i) => (
              <View key={i} style={styles.section}>
                {section.heading && <Text style={styles.heading}>{section.heading}</Text>}
                <Text style={styles.text}>{section.text}</Text>
              </View>
            ))
          ) : (
            <Text style={styles.text}>{content}</Text>
          )}
          <View style={{ height: 40 }} />
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: COLORS.backgroundAlt },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: SPACING.xl,
    paddingTop: SPACING.xxl,
    backgroundColor: COLORS.primary,
  },
  title: { fontSize: 20, fontWeight: 'bold', color: COLORS.textLight, flex: 1 },
  closeBtn: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: 'rgba(255,255,255,0.25)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeBtnText: { fontSize: 16, color: COLORS.textLight, fontWeight: 'bold' },
  body: { flex: 1, padding: SPACING.xl },
  section: { marginBottom: SPACING.xl },
  heading: { fontSize: 16, fontWeight: 'bold', color: COLORS.textDark, marginBottom: SPACING.sm },
  text: { fontSize: 14, color: COLORS.textSecondary, lineHeight: 22 },
});
