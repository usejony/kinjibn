import React, { Component } from 'react';
import {
    View,
    Text,
    ActivityIndicator,
    StatusBar,
    Button
} from 'react-native';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icons from 'react-native-vector-icons/Ionicons';

import Header from '../../../components/Header';
import commonStyle from '../../../common/commonStyle';
import NewsList from './subpages/NewsList';


export default class Home extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerTitle: '行业新闻',
        tabBarLabel: '新闻',
        tabBarIcon: ({ tintColor, focused }) => (
            <Icons name={focused ? 'ios-globe' : 'ios-globe-outline'} color={tintColor} size={28} />
        )
    });
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <View style={commonStyle.container}>
                <StatusBar animated={true} barStyle="light-content" />
                <NewsList/>
            </View>
        );
    }
}

const styles = EStyleSheet.create({
    header: {
        backgroundColor: '$themeColor'
    }
});