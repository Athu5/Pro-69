//import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import BottomTabNavigator from "./Component/BottomTabNavigator";

export default class App extends Component {
  render(){
    return(
        <BottomTabNavigator/>
    );
  }
}

