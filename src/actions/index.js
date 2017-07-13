/**
 * all actions
 */
import Mock from 'mockjs';

import TYPES from '../constants/index';
import { GET, POST } from '../utils/request';

/**
 * 呼出登录页面
 */

export function toLogin() {
    return {
        type: TYPES.TO_LOGIN
    }
}

/**
 * 去到新闻详情页面
 */
export function toNewsTab(index) {
    return {
        type: TYPES.TO_NEWS_TAB,
        index
    }
}

/**
 * 去到新闻详情页面 
 */
export function toNewsDetail() {
    return {
        type: TYPES.TO_NEWS_DETAIL
    }
}

/**
 * 去到评论页面
 */
export function toComment() {
    return {
        type: TYPES.TO_COMMENT
    }
}

/**
 * 登录
 */
export function login() {
    return {
        type: TYPES.LOGIN
    }
}

/**
 * 请求开始
 */
function fetchRequest() {
    return {
        type: TYPES.FETCH_REQUEST
    }
}

function goNewsDetail(data) {
    return {
        type: TYPES.GONEWSDETAIL,
        data
    }
}

/**
 * 
 * @param {data} 请求成功后获得的数据 
 */
function fetchSuccess(data) {
    return {
        type: TYPES.FETCH_RECEIVE,
        data
    }
}

/**
 * 
 * 请求失败  
 */
function fetchErr() {
    return {
        type: TYPES.FETCH_ERR
    }
}

/**
 * 
 * @param {url} 请求地址 
 */
function fetchPosts(url, params) {
    return dispatch => {
        dispatch(fetchRequest());
        return GET(url, params).then(
            data => dispatch(fetchSuccess(data))
        ).catch(
            e => dispatch(fetchErr())
            );
    }
}

/**
 * 
 * @param {state} 在请求的时候的state状态 
 */
function shouldFetch(state) {
    const items = state.newsData.isFetching;
    if (items) {
        return false;
    }
    return true;
}

/**
 * 
 * @param {url} 请求地址
 * @param {params} 请求的参数（对象leixng）
 */
export function fetchIfNeeded(url, params) {
    return (dispatch, getState) => {
        if (shouldFetch(getState())) {
            return dispatch(fetchPosts(url, params));
        } else {
            return Promise.resolve();
        }
    }
}
