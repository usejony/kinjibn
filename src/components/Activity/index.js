import React, { Component } from 'react';
import { 
    View,
 } from 'react-native';
 
import EStyleSheet from 'react-native-extended-stylesheet';
import Spinkit from 'react-native-spinkit';

 export default class Activity extends Component {
     render() {
         return (
             <View style={styles.container}>
                 <Spinkit type="Circle" color="#3fd47f" size={25}/>
             </View>
         );
     }
 }

 const styles = EStyleSheet.create({
     container: {
         flex: 1,
         justifyContent: 'center',
         alignItems: 'center'
     }
 });