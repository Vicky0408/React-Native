import React, {useState} from 'react';
import {Text, StyleSheet, Image, Button, View} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import * as ImagePicker from 'expo-image-picker';
import Ocr from 'react-native-tesseract-ocr';


const ImgSelector = props =>{
    const [pickedImage, setPickedImage] = useState();
    const takeImageHandler = async () => {
        const image = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
        });
        setPickedImage(image.uri);
    };  

    return(
        <View style={styles.imagePicker}> 
            <View style={styles.imagePreview}>
                <Text>Not Image picked yet!</Text>
                <Image style={styles.image}  source={{uri: pickedImage}}/>
             </View>
             <Button title="Take Image" color={Colors.primary} onPress={takeImageHandler} />
        </View>
        
    )
}
const styles = StyleSheet.create({
    imagePicker:{
        justifyContent: 'center',
        flex:1,
    },
    imagePreview:{
        height: '80%',
        marginBottom: 10,
        marginLeft:10,
        marginRight:10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#eee',
        borderWidth: 1,
    },
    image:{
        width:'100%',
        height:'100%',
        flex:1,
    },
});

export default ImgSelector;