import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Logo from './components/Logo'
export default function App() {
  return (
    <View style={styles.container}>
      <View style={{...styles.logoContener}}>
        <Logo />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2289d6',
  },
  logoContener:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
