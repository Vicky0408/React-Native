import React from 'react';
import {Linking,Text, TouchableOpacity,Alert} from 'react-native';
import QRCodeScaner from 'react-native-qrcode-scanner';

export default class App extends React.Component{
  ifScaned = e=>{
    Linking.openURL(e.data).catch(
      err=>
      Alert.alert("Invalid QRCode",e.data)
    );
  }
  render(){
    return(
      <QRCodeScaner
      containerStyle={{backgroundColor: "#fff"}}
      reactivate={true}
      permissionDialogMessage="Need Permission to Access Camera"
      reactivateTimeout={10}
      showMarker={true}
      markerStyle={{backgroundColor:"#fff",borderRadius:10}}
        onRead={this.ifScaned}
        bottomContent={
          <TouchableOpacity>
            <Text style={{fontSize:21,color:"red"}}>Scan</Text>
          </TouchableOpacity>
        }
      />
    )
  }
  
}