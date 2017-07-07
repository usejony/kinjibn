import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';

import Home from './Home';
import Account from './Account'
import Orders from './Orders'

const MainTab = TabNavigator({
    HomeScreen: {
        screen: Home
    },
    OrdersScreen: {
        screen: Orders
    },
    AccountScreen: {
        screen: Account
    },
},{
    tabBarOptions: {
        activeTintColor: '#3fd47f',
        inactiveTintColor: '#aeaeae'
    }
});

export default MainTab;