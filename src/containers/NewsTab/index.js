import React, { Component } from 'react';
import {
    View,
    Text,
} from 'react-native';
import { TabNavigator } from 'react-navigation';

import NewsDetails from './NewsDetails';
import NewsComments from './NewsComments';
import NewsBottomTab from './NewsBottomTab';


const NewsTab = TabNavigator({
    NewsDetailScreen: {
        screen: NewsDetails
    },
    NewsCommentsScreen: {
        screen: NewsComments
    }
}, {
        tabBarComponent: NewsBottomTab,
        animationEnabled: true
    });

export default NewsTab;