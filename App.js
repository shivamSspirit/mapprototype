import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MapViews from './components/mapview';
import { NavigationContainer } from '@react-navigation/native';

// maps api key
// AIzaSyCBinFiXOV-J9mh1q3x8XBJgGuMEoIKBcU

export default function App() {
  return (
    <NavigationContainer>
      <MapViews />
    </NavigationContainer>
  );
}



