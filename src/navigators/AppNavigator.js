import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import LoginNav from '../containers/LoginNav/';
import MainTab from '../containers/MainTab/';


export const AppNavigator = StackNavigator({
  MainScreen: { screen: MainTab ,navigationOptions: {
      gesturesEnabled: false
  }},
  LoginScreen: { screen: LoginNav },
}, {
    headerMode: 'none'
});

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
