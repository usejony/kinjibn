import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';

import { AppNavigator } from '../navigators/AppNavigator';
import TYPES from '../constants';

// Start with two routes: The Main screen, with the Login screen on top.
// const firstAction = AppNavigator.router.getActionForPathAndParams('Main');
// const tempNavState = AppNavigator.router.getStateForAction(firstAction);
// const secondAction = AppNavigator.router.getActionForPathAndParams('Login');
// const initialNavState = AppNavigator.router.getStateForAction(
//   secondAction,
//   tempNavState
// );

function nav(state , action) {
  let nextState;
  switch (action.type) {
    case TYPES.LOGIN:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({routeName: 'MainScreen'}),
        state
      );
      break;
    case TYPES.LOGINOUT:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'LoginScreen' }),
        state
      );
      break;
    case TYPES.GO_NEWS_DETAIL:
        nextState = AppNavigator.router.getStateForAction(
            NavigationActions.navigate({ routeName: 'newsDetailScreen'}),
            state
        );
        break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}

let initNews = {
    items: [],
    isFetching: false,
    pageCount: 0,
    isErr: false
}

/**
 * 
 * @param {state} 新闻信息 
 * @param {action} action状态 
 */
function newsData(state = initNews,action) {
    switch(action.type) {
        case TYPES.FETCH_REQUEST:
            return Object.assign({},state,{
                isFetching: true
            });
        case TYPES.FETCH_RECEIVE:
            return Object.assign({},state,{
                items: action.data.data,
                isFetching: false,
                pageCount: action.data.total
            });
        case TYPES.FETCH_ERR:
            return Object.assign({},state,{
                isFetching: false,
                isErr: true
            })
        default:
            return state;
    }
}

const initialAuthState = { isLoggedIn: false };
function logined(state = initialAuthState, action) {
  switch (action.type) {
    case TYPES.LOGIN:
      return { ...state, isLoggedIn: true };
    case TYPES.LOGINOUT:
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
}

const AppReducer = combineReducers({
  nav,
  logined,
  newsData,
});

export default AppReducer;
