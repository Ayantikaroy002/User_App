import React from 'react';
import { NativeBaseProvider } from 'native-base';
import {StyleSheet, Text } from 'react-native';
import HomeNavigation from './Navigation/HomeNavigation';
import { useFonts } from 'expo-font';


export default function Index() {
  const [fontsLoaded] = useFonts({
    'RowdiesBold': require('../assets/fonts/Rowdies/Rowdies-Bold.ttf'),
    'RowdiesLight': require('../assets/fonts/Rowdies/Rowdies-Light.ttf'),
    'RowdiesRegular': require('../assets/fonts/Rowdies/Rowdies-Regular.ttf'),
    'ubuntuBold': require('../assets/fonts/Ubuntu/Ubuntu-Bold.ttf'),
    'ubuntuRegular': require('../assets/fonts/Ubuntu/Ubuntu-Regular.ttf'),
    'ubuntuMedium': require('../assets/fonts/Ubuntu/Ubuntu-Medium.ttf'),
    'RubikMedium': require('../assets/fonts/Rubik-Medium.ttf'),
    'RubikBold': require('../assets/fonts/Rubik-Bold.ttf'),
    'RubikRegular': require('../assets/fonts/Rubik-Regular.ttf'),
  });
  if (!fontsLoaded) {
    return <Text style={styles.loadingText}>Loading...</Text>;  // Wrap text inside Text component
  }
  return (
    
    <NativeBaseProvider>
      <HomeNavigation />
    </NativeBaseProvider>
  );
}
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#52011D',
  },
});