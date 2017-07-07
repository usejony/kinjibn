import React, { Component } from 'react';
import {
    View,
    Text,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icons from 'react-native-vector-icons/Ionicons';

import commonStyle from '../../../common/commonStyle';
import Header from '../../../components/Header'

export default class Account extends Component {
    static navigationOptions = ({navigation}) => ({
        tabBarLabel: '我的',
        tabBarIcon: ({tintColor, focused}) => (
            <Icons name={focused ? 'ios-person' : 'ios-person-outline'} color={tintColor} size={30}/>
        )
    });
    render() {
        return (
            <View style={commonStyle.container}>
                <Header title="我的" style={styles.header}/>
                
            </View>
        );
    }
}

const styles = EStyleSheet.create({
    header: {
        backgroundColor: '$themeColor'
    }
});