/** @format */

import {AppRegistry,Text,View} from 'react-native';
import React from 'react';
import {name as appName} from './app.json';
import AlbumList from './src/components/AlbumList';
import Header from './src/components/header'

const App = ()=>(
    <View style={{flex:1}}>
        <Header headerText={'Albums'}/>
        <AlbumList/>
    </View>
);
AppRegistry.registerComponent(appName, () => App);
