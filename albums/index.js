import React from 'react';
import { AppRegistry} from 'react-native';
import Header from './src/components/header'
import AlbumList from './src/components/AlbumList';

const App =() => (
       <>
            <Header  headerText={'Albums!'}/>
            <AlbumList />
        </>
    );

AppRegistry.registerComponent('albums',()=> App);