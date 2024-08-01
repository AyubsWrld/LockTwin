import React, { useRef, useEffect } from 'react';
import { StyleSheet, Text, View, Animated, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ButtonCustom from '../components/ButtonCustom.js';

const Divider = () => {
  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.content, { opacity: fadeAnim }]}>
        <Text style={styles.headingOne}>
          Every Moment{'\n'}
          <Text style={styles.grey}>Accounted For</Text>
        </Text>
        <View style={styles.buttonContainer}>
          <ButtonCustom 
            width={320} 
            message={'Create account'} 
            height={50} 
            backgroundColor="#618BFF" 
            color="white" 
            fontSize={18} 
            onPress={() => navigation.navigate('Homepage')}
            borderRadius={8}
          /> 
          <View style={styles.textContainer}>
            <Text style={styles.login}>Already have an account?</Text>
            <ButtonCustom 
              width={52} 
              message={'Login'} 
              height={40} 
              backgroundColor="transparent" 
              color="#8c63d2" 
              fontSize={12} 
              onPress={() => navigation.navigate('Onboarding')}
              borderRadius={18}
            /> 
          </View>
        </View>
      </Animated.View>
    </View>
  );
}

export default Divider;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingBottom: 100,
  },
  content: {
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: 320,
  },
  headingOne: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 32,
    paddingBottom: 32,
    lineHeight: 40,
    textAlign: 'center',
  },
  grey: {
    color: '#959595',
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  login: {
    color: 'white',
    textAlign: 'center',
    fontSize: 12,
    marginRight: 0,
  },
});
