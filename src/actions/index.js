/**
 * all actions
 */
import Mock from 'mockjs';

import TYPES from '../constants/index';
import { GET, POST } from '../utils/request';

export function login() {
    return {
        type: TYPES.LOGIN
    }
}

function fetchRequest() {
    return {
        type: TYPES.FETCH_REQUEST
    }
}

function fetchSuccess(data) {
    return {
        type: TYPES.FETCH_RECEIVE,
        data
    }
}

function fetchPosts(url) {
    return dispatch => {
        dispatch(fetchRequest());
        return GET(url).then(
            data => dispatch(fetchSuccess(data))
        ).catch(
            e => console.log(e.message)
        );
    }
}

function shouldFetch(state) {
    const items = state.newsData.items;
    if( items.length == 0) {
        return true;
    } else {
        return false;
    }
}

export function fetchIfNeeded(url) {
    return (dispatch,getState) => {
        if(shouldFetch(getState())) {
            return dispatch(fetchPosts(url));
        } else {
            return Promise.resolve();
        }
    }
}
