import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import your screens
import Divider from './page/Divider.js';
import Onboarding from './page/Onboarding.js'; // Make sure to create this file
import Homepage from './page/Homepage.js'; // Make sure to create this file

// Define the Stack Navigator
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Divider">
        <Stack.Screen
          name="Divider"
          component={Divider}
          options={{ headerShown: false }} // This hides the header
        />
        {/* <Stack.Screen */}
        {/*   name="Onboarding" */}
        {/*   component={Onboarding} */}
        {/*   options={{ headerShown: false }} // This hides the header */}
        {/* /> */}
        <Stack.Screen
          name="Homepage"
          component={Homepage}
          options={{ headerShown: false }} // This hides the header
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
