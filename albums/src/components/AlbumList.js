import React, { Component } from 'react';
import {View, Text} from 'react-native';

class AlbumList extends Component { 
    componentWillUnmount(){
        console.log('componentWillUnmount is Album List');
        debugger;
    }
    render(){
        return( 
           <View>
               <Text>Albums List</Text>
           </View>
        );
    }
};
export default AlbumList;