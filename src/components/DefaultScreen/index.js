import React, { Component } from 'react';
import { 
    View,
    Image
 } from 'react-native';
 import Spinkit from 'react-native-spinkit';
 import EStyleSheet from 'react-native-extended-stylesheet';

 import commonStyle from '../../common/commonStyle.js';

 export default class DefaultScreen extends Component {
     render() {
         return (
             <View style={[commonStyle.container,commonStyle.center]}>
                <Image source={require('./imgs/baineng.png')} style={styles.img}/>
                <Spinkit type="Wave" color="#3fd47f" size={30}/>
             </View>
         );
     }
 }

 const styles = EStyleSheet.create({
     container: {
         flex: 1,
         justifyContent: 'center',
         alignItems: 'center',
         backgroundColor: '#f0f0f0'
     },
     img: {
         width: '25%',
         height: '15%'
     }
 });