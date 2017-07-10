import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icons from 'react-native-vector-icons/Ionicons';

import Header from '../../../components/Header';
import commonStyle from '../../../common/commonStyle';

export default class Orders extends Component {
    static navigationOptions = ({navigation}) => ({
        headerTitle: '订单',
        tabBarLabel: '订单',
        tabBarIcon: ({tintColor, focused}) => (
            <Icons name={focused ? 'ios-paper' : 'ios-paper-outline'} color={tintColor} size={28}/>
        )
    });
    render() {
        return (
            <View style={commonStyle.container}>
                {/*<Header title="订单" style={styles.header}/>*/}
                
            </View>
        );
    }
}

const styles = EStyleSheet.create({
    header: {
        backgroundColor: '$themeColor'
    }
});