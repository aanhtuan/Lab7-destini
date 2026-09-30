import React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';

interface ChoiceButtonProps {
  text: string;
  variant: 'choice1' | 'choice2' | 'restart';
  onPress: () => void;
}

export function ChoiceButton({ text, variant, onPress }: ChoiceButtonProps) {
  const getBackgroundColor = (pressed: boolean): string => {
    if (variant === 'choice1') {
      return pressed ? '#B45309' : '#D97706'; // Amber-600 / Amber-500
    }
    if (variant === 'choice2') {
      return pressed ? '#3730A3' : '#4F46E5'; // Indigo-800 / Indigo-600
    }
    return pressed ? '#047857' : '#059669'; // Emerald-700 / Emerald-600
  };

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        { backgroundColor: getBackgroundColor(pressed) },
        pressed && styles.buttonPressed,
      ]}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
  },
  buttonPressed: {
    transform: [{ scale: 0.98 }],
    opacity: 0.92,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
    letterSpacing: 0.5,
    lineHeight: 22,
  },
});
