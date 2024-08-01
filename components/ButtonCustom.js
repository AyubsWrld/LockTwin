import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

const ButtonCustom = ({ width, message, height, backgroundColor, color, fontSize, onPress, borderRadius, imgURL , fontWeight }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { width, height, backgroundColor, borderRadius  }]}
      onPress={onPress}
    >
      {imgURL && <Image source={imgURL} style={styles.image} />}
      <Text style={[styles.text, { color, fontSize  , fontWeight }]}>{message}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    margin: 10,
    flexDirection: 'row',
  },
  text: {
    textAlign: 'center',
  },
  image: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
});

export default ButtonCustom;
