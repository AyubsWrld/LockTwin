import React from 'react';
import { StyleSheet, Text, View , Image} from 'react-native';
import ButtonCustom from './ButtonCustom';
import Arrow from '../assets/icons/DoubleArrow.png'; 
import Math from '../assets/icons/Math.png'; 

export default function Card({ navigation }) {
  return (
    <View style={styles.container}>

      {/* ------------------------------------------------------------------- Heading -------------------------------------------------------------------------- */}
      <View style={styles.heading}>
        {/* Icon And Text */}
        <View style={styles.logo}>
          <Image src={Math} style={styles.image} /> 
        </View>
        
        <View>
          <Text style={styles.textHeader}>
            Heading {'\n'} 
            <Text style={styles.textSubtext}> Subtext </Text>
          </Text>
        </View>
      </View>
      {/* ------------------------------------------------------------------- Heading -------------------------------------------------------------------------- */}

      {/* ------------------------------------------------------------------- Button -------------------------------------------------------------------------- */}
      <View>
        <ButtonCustom 
          width={259} 
          message={'Begin Task'} 
          height={64} 
          borderRadius={16}
          backgroundColor="white" 
          color="black" 
          fontSize={16} 
          onPress={() => navigation.navigate('Divider')}
          imgURL={Arrow} 
          fontWeight ={'bold'} 
        /> 
      </View>
      {/* ------------------------------------------------------------------- Button -------------------------------------------------------------------------- */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    maxWidth: 327,
    width: 327,
    maxHeight: 200, 
    height: 200, 
    flex: 1, 
    borderRadius: 28, 
    flexDirection: 'column', 
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F1F5FF',
    padding: 10,
  },
  heading: { 
    width: 280,
    height: 100, 
    maxWidth: 280,
    maxHeight: 100, 
    gap: 24, 
    flex: 1, 
    flexDirection: 'row', 
    justifyContent: 'flex-start',
    alignItems: 'center',
  }, 
  logo: {
    backgroundColor: '#618BFF', 
    width: 56,
    height: 56, 
    maxWidth: 56,
    maxHeight: 56, 
    borderRadius: 939, 
  },
  textHeader: {
    fontSize: 20, 
    fontWeight: 'bold',
  },
  textSubtext: {
    fontSize: 16, 
    fontWeight: 'normal',
  },
  image: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
});

