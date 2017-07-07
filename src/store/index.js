import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'remote-redux-devtools';
import RootReducer from '../reducers';

const store = createStore(RootReducer,composeWithDevTools(
    applyMiddleware(thunk,logger)
));

export default store;