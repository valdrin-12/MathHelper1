import React, { useEffect, useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import Slider from '../ui/Slider';
import { tr, useVisualColors } from './common';
import { formatNumber } from '../utils/formatNumber';
import { parseTyped } from './params';

/**
 * One parameter of an interactive visual: "n =" + a number field + a slider.
 * The student can drag the slider or type a value; typed values are kept inside [min, max].
 */
export default function ParamControl({ slider, value, lang, onChange }) {
  const vc = useVisualColors();
  const [text, setText] = useState(formatNumber(value, lang));
  const [editing, setEditing] = useState(false);

  // Follow the slider while the field is not being edited
  useEffect(() => { if (!editing) setText(formatNumber(value, lang)); }, [value, lang, editing]);

  const commit = () => {
    setEditing(false);
    const v = parseTyped(text);
    if (Number.isFinite(v)) onChange(Math.min(slider.max, Math.max(slider.min, v)));
    else setText(formatNumber(value, lang));
  };

  const name = slider.label ? tr(slider.label, lang) : slider.name;
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, paddingHorizontal: 8, marginTop: 6 }}>
      <Text style={{ color: vc.ink, fontWeight: '700', minWidth: 28 }}>{name} =</Text>
      <TextInput
        value={text}
        onFocus={() => setEditing(true)}
        onChangeText={(t) => {
          setText(t);
          const v = parseTyped(t);
          if (Number.isFinite(v)) onChange(Math.min(slider.max, Math.max(slider.min, v)));
        }}
        onBlur={commit}
        onSubmitEditing={commit}
        keyboardType="numbers-and-punctuation"
        returnKeyType="done"
        selectTextOnFocus
        accessibilityLabel={name}
        style={{
          width: 64, paddingVertical: 4, paddingHorizontal: 6, borderRadius: 8, borderWidth: 1,
          borderColor: vc.grid, color: vc.ink, fontWeight: '700', textAlign: 'center',
        }}
      />
      <Slider
        style={{ flex: 1 }}
        value={value}
        min={slider.min}
        max={slider.max}
        step={slider.step}
        onValueChange={onChange}
        accessibilityLabel={name}
      />
    </View>
  );
}
