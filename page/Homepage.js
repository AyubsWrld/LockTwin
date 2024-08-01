import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button } from 'react-native';
import Card from '../components/Card.js';
import CardSmall from '../components/CardSmall.js';
import ProfileImage from '../assets/icons/Profile.png';
import Snapchat from '../assets/icons/Snapchat.png';
import Instagram from '../assets/icons/Instagram.png';
import TikTok from '../assets/icons/TikTok.png';

// Get current date formatted as "Thursday, 08 July"
const getFormattedDate = () => {
  const options = { weekday: 'long', day: '2-digit', month: 'long' };
  return new Intl.DateTimeFormat('en-GB', options).format(new Date());
};

export default function Homepage() {
  const [lockedApps, setLockedApps] = useState([
    { appName: 'Instagram', icon: Instagram },
    { appName: 'Snapchat', icon: Snapchat },
    { appName: 'TikTok', icon: TikTok },
    { appName: 'Behance' },
    { appName: 'Instagram' },
  ]);

  // Function to add a new CardSmall component
  const addCardSmall = () => {
    const newApp = { appName: 'New App' }; // Placeholder for new app
    setLockedApps([...lockedApps, newApp]);
  };

  const currentDate = getFormattedDate();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* ------------------------------------------------------------------- Heading --------------------------------------------------------------------------  */}
      <View style={styles.heading}>
        <Image source={ProfileImage} style={styles.image} />
        <Text style={styles.headingText}>
          Hello Capo! {'\n'}
          <Text style={styles.headingSubtext}>{currentDate}</Text>
        </Text>
        <Image source={ProfileImage} style={styles.image} />
      </View>
      {/* ------------------------------------------------------------------- Heading --------------------------------------------------------------------------  */}

      {/* ------------------------------------------------------------------- Row One --------------------------------------------------------------------------  */}
      <View style={styles.rowOne}>
        <Text style={styles.rowOneHeading}>Tasks</Text>
        <Card />
      </View>
      {/* ------------------------------------------------------------------- Row One --------------------------------------------------------------------------  */}

      {/* ------------------------------------------------------------------- Row Two --------------------------------------------------------------------------  */}
      <View style={styles.rowTwo}>
        <Text style={styles.rowTwoHeading}>Locked Applications</Text>
        <View style={styles.lockedCardsContainer}>
          {lockedApps.map((app, index) => (
            <CardSmall
              key={index}
              appName={app.appName}
              icon={app.icon}
            />
          ))}
        </View>
        <Button title="Add Application" onPress={addCardSmall} />
      </View>
      {/* ------------------------------------------------------------------- Row Two --------------------------------------------------------------------------  */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 24,
    paddingTop: 64,
    gap: 64,
  },
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 330,
    height: 60,
  },
  image: {
    width: 58,
    height: 58,
  },
  headingText: {
    color: '#7F7F7F',
    fontSize: 14,
  },
  headingSubtext: {
    fontSize: 18,
    color: 'black',
  },
  rowOne: {
    width: 330,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    gap: 24,
  },
  rowOneHeading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  rowTwo: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    gap: 24,
  },
  rowTwoHeading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  lockedCardsContainer: {
    width: 330,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

