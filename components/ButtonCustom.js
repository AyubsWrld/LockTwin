import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function ButtonCustom(props) {
  const buttonStyle = [styles.button, {
    width: props.width,
    height: props.height,
    backgroundColor: props.backgroundColor || 'white',
  }];

  const buttonTextStyle = [styles.buttonText, {
    color: props.color || 'black',
    fontSize: props.fontSize || 16,
  }];

  return (
    <TouchableOpacity style={buttonStyle} onPress={props.onClick}>
      <View style={styles.buttonContent}>
        <Text style={buttonTextStyle}>{props.message}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
