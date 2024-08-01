import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ButtonCustom = ({ width, message, height, backgroundColor, color, fontSize, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { width, height, backgroundColor }]}
      onPress={onPress}
    >
      <Text style={[styles.text, { color, fontSize }]}>{message}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    margin: 10,
  },
  text: {
    textAlign: 'center',
  },
});

export default ButtonCustom;
