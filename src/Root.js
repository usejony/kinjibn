/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import AppReducer from './reducers';
import AppWithNavigationState from './navigators/AppNavigator';
import store from './store'

EStyleSheet.build({
    $themeColor: '#3fd47f',
    $themeBg: '#f9f9f9'
});

class Root extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AppWithNavigationState />
            </Provider>
        );
    }
}

export default Root;
