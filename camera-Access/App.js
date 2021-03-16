import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

export default function App() {

  const pickFormGallery = async ()=>{
    const {granted} = await Permissions.askAsync(Permissions.CAMERA_ROLL)
    if(granted){
      let data = await ImagePicker.launchImageLibraryAsync({
        mediaTypes:ImagePicker.MediaTypeOptions.Images,
        allowsEditing:true,
        aspect:[1,1],
        quality: 0.5
      })
      console.log(data)
    }else{
       Alert.alert("you need to give up permission to work")
    }
  }

  
  const pickFormCamera = async ()=>{
    const {granted} = await Permissions.askAsync(Permissions.CAMERA)
    if(granted){
      let data = await ImagePicker.launchCameraAsync({
        mediaTypes:ImagePicker.MediaTypeOptions.Images,
        allowsEditing:true,
        aspect:[1,1],
        quality: 0.5
      })
      console.log(data)
    }else{
       Alert.alert("you need to give up permission to work")
    }
  }
  return (
    <View style={styles.container}>
      <Button icon="camera"
      theam={theme}
      mode ="contained"
      onPress={()=> pickFormCamera()}>Camera</Button>
      <Button icon="camera"
      theam={theme}
      mode ="contained"
      onPress={()=> pickFormGallery()}>Camera</Button>
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
