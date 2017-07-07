import React, { Component } from 'react';
import { 
    View,
    PixelRatio
 } from 'react-native';

 export default class  extends Component {
     render() {
         return (
             <View style={{height: 1 / PixelRatio.get(),backgroundColor: '#e6ebe7',marginHorizontal: 15}}/>
         );
     }
 }