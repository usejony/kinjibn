import React, { Component } from 'react';
import { 
    View,
    Text,
    PixelRatio
 } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

 export default class NewsComments extends Component {
     static navigationOptions = ({navigation}) => ({
         headerTitle: '评论'
     })
     render() {
         console.log('comment:',this.props.navigation.state.params.data.comments)
         return (
             <View style={{flex: 1}}>
                 <View style={styles.commentTitle}>
                     <View style={styles.line}/>
                     <Text style={styles.title}>精彩评论</Text>
                     <View style={styles.line}/>
                 </View>
             </View>
         );
     }
 }

 const styles = EStyleSheet.create({
     commentTitle: {
         flexDirection: 'row',
         justifyContent: 'center',
         alignItems: 'center'
     },
     title: {
         fontSize: 14,
         color: '#222',
         fontWeight: 'bold',
         marginHorizontal: 10
     },
     line: {
        width: '20%',
        height: 1 / PixelRatio.get(),
        backgroundColor: '#aaa'
     }
 });