import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Animated from 'react-native-reanimated'
import { StyleSheet, Text, View } from 'react-native';

const Logo = () => {
  return (
    <Animated.View style={{...styles.logo}}> 
        <Text styles={{fontWeight: "400", fontSize: 36}}>Ubar</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  logo:{
      backgroundColor: 'white',
      height: 120,
      width: 120,
      padding: 10,
      alignItems: "center",
      justifyContent: "center",
  }
});
export default Logo;