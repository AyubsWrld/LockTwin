import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ButtonCustom from '../components/ButtonCustom.js';

const Onboarding = () => {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Implement sign up logic here
    console.log('Sign up pressed');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign up</Text>
      <Text style={styles.subtitle}>Please fill out the following fields</Text>

      <View style={styles.socialButtonsContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialButtonText}>G Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialButtonText}>Apple</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>

{/* ------------------------------------------------------------------- Smaller Buttons -------------------------------------------------------------------------- */}

        <View style={styles.smallerButtons}>

{/* ------------------------------------------------------------------- First Name -------------------------------------------------------------------------- */}

          <View style={styles.inputOuter}>
            <Text style={styles.upperText}>
              First Name
            </Text>
            <TextInput
              style={styles.smallerInputs}
              placeholder="eg. John"
              placeholderTextColor="#999"
              value={firstName}
              onChangeText={setFirstName}
            />
          </View>

{/* ------------------------------------------------------------------- Last Name -------------------------------------------------------------------------- */}

          <View style={styles.inputOuter}>
            <Text style={styles.upperText}>
              Last Name
            </Text>
            <TextInput
              style={styles.smallerInputs}
              placeholder="eg. Francisco"
              placeholderTextColor="#999"
              value={lastName}
              onChangeText={setLastName}
            />
          </View>

        </View>

{/* ------------------------------------------------------------------- Smaller Buttons -------------------------------------------------------------------------- */}

{/* ------------------------------------------------------------------- Rest of the buttons -------------------------------------------------------------------------- */}

        <View style={styles.inputOuter}>
          <Text style={styles.upperText}>
            Email 
          </Text>
          <TextInput
            style={styles.input}
            placeholder="eg. johndoe@gmail.com"
            placeholderTextColor="#999"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.inputOuter}>
          <Text style={styles.upperText}>
            Email 
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            placeholderTextColor="#999"
            value={password}
            onChangeText={setPassword}
          />
        </View>
      </View>

      <ButtonCustom 
        width={320} 
        message={'Sign up'} 
        height={50} 
        backgroundColor="#8c63d2" 
        color="white" 
        fontSize={18} 
        onPress={handleSignUp}
      />

      <Text style={styles.loginText}>
        Already have an account? <Text style={styles.loginLink} onPress={() => navigation.navigate('Divider')}>Log in</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#999',
    marginBottom: 20,
  },

  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: '100%',
  },
  socialButton: {
    backgroundColor: 'black',
    borderColor : '#2A2A2A' , 
    borderWidth : 1 , 
    padding: 10,
    height : 45 , 
    borderRadius: 8,
    width: '48%',
    alignItems: 'center',
    textAling : 'center' , 
    justifyContent : 'center'  , 
    fontWeight : 'bold' , 
  },
  socialButtonText: {
    color: 'white',
    fontWeight : 'bold' , 
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#222',
    height : 45 , 
    color: 'white',
    padding: 20,
    borderRadius: 10,
    marginBottom: 30,
    width: '100%',
  },
  loginText: {
    color: '#999',
    marginTop: 20,
  },
  loginLink: {
    color: 'white',
    fontWeight: 'bold',
  },
  upperText : {
    color : 'white', 
    paddingBottom : 8 , 
  },  
  smallerButtons : {
    flexDirection  : 'row' , 
    justifyContent : 'space-between' , 
  } , 
  smallerInputs : {
    backgroundColor: '#222',
    height : 45 , 
    width : 170 , 
    color: 'white',
    padding: 20,
    borderRadius: 10,
    marginBottom: 30,
    width: 160,
  } ,

});


export default Onboarding;
