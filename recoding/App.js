import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {addScreenshotListener, usePreventScreenCapture} from 'expo-screen-capture'
import * as Permissions from 'expo-permissions';

export default function App() {
  //usePreventScreenCapture();

  async function getCameraPermission(){
    const {status} = await Permissions.askAsync(
      Permissions.CAMERA_ROLL
    )
    if(status =='granted')
    {
      addScreenshotListener(() => {
      alert("you took a screenshort!")
      })
    }
  }
  useEffect(() => {
    getCameraPermission()
  },[])
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
