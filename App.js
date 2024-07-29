import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Divider from './page/Divider.js'; 

export default function App() {
  return (
    <View style={styles.flows}>
      <Divider /> 
    </View>
  );
}

const styles = StyleSheet.create({
  flows: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    color: 'white',
  },
});
