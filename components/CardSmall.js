import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


export default function CardSmall({time , subtext , appName , icon}) {
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Image source={icon} style={styles.image} />
        <Text style={styles.headingText}> {appName} </Text>
      </View>
      <View style={styles.subtext}>
        <Text style={styles.subtextNumber}>
          45:28 {'\n'}
          <Text style={styles.subtextMetric}>minutes</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 155, // Width of the card
    height: 125,
    borderRadius: 16,
    borderStyle: 'solid',
    borderColor: '#BFBFBF',
    borderWidth: 1,
    padding: 16,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginRight: 10, 
    marginBottom : 10, 
  },
  heading: {
    width: '100%',
    height: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subtext: {
    width: '100%',
    height: 44,
    justifyContent: 'flex-start',
  },
  image: {
    width: 16,
    height: 16,
    marginRight: 8,
  },
  headingText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 12,
  },
  subtextNumber: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  subtextMetric: {
    fontWeight: 'normal',
    fontSize: 14,
    color: '#7F7F7F',
  },
});
