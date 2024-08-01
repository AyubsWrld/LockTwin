import React, { useRef, useEffect } from 'react';
import { StyleSheet, Text, View, Animated, Button } from 'react-native';

export default function Card(){
  return(
  <View style={styles.container}>

      <View style={styles.heading}>

        <View style={styles.logo}>

        </View>

        <View>

          <Text style={styles.Hello}>
            Hello world
          </Text>

        </View>

      </View>

  </View>
  )
}



const styles = StyleSheet.create({
  container: {
    maxWidth: 327,
    width: 327,
    maxHeight: 200, 
    height: 200, 
    flex: 1, 
    borderRadius: 28, 
    flexDirection: 'column' , 
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F1F5FF',
    padding: 10
  },
  heading: { 
    backgroundColor: 'red',
    width : 280,
    height : 100 , 
    maxWidth : 280,
    maxHeight : 100 , 
    flex : 1 , 
    flexDirection: 'row' , 
    justifyContent: 'flex-start',
    alignItems: 'center',

  }, 
  logo: {
    backgroundColor : '#618BFF' , 
    width : 56,
    height : 56, 
    maxWidth : 56,
    maxHeight : 56, 
    borderRadius: 939, 
  }

}); 
