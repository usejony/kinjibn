import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import LoginNav from '../containers/LoginNav/';
import MainTab from '../containers/MainTab/';
import NewsTab from '../containers/NewsTab';
import IconBtn from '../components/IconBtn'; 


const MainNav = StackNavigator({
    MainTabScreen: {
        screen: MainTab,
        navigationOptions: {
            gesturesEnabled: false
        }
    },
    NewsTabScreen: {
        screen: NewsTab,
        navigationOptions: ({navigation}) => ({
            headerLeft: (
                <IconBtn size={30} onPress={() => navigation.goBack()}/>
            ),
            headerRight: (
                <IconBtn name="ios-more" size={32} onPress={() => null}/>
            )
        })
    }
}, {
        navigationOptions: {
            headerStyle: { backgroundColor: '#3fd47f' },
            headerTitleStyle: { color: '#fff' }
        }
    });

export const AppNavigator = StackNavigator({
    Main: {
        screen: MainNav
    },
    Login: {
        screen: LoginNav
    },
}, {
        mode: 'modal',
        headerMode: 'none'
    })

const AppWithNavigationState = ({ dispatch, nav }) => (
    <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
