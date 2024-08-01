
import React, { useRef, useEffect } from 'react';
import { StyleSheet, Text, View, Animated, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ButtonCustom from '../components/ButtonCustom.js';
import Card from '../components/Card.js';

export default function Homepage(){
  return(
  <View style={styles.container}>
      <Card/> 
  </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingBottom: 100,
  },
}); 
