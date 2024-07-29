import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const LoginPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Login Page</Text>
    </View>
  );
}

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    color: 'black',
    fontSize: 24,
  },
});
