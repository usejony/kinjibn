import queryString from 'query-string';
import _ from 'lodash';
import Mock from 'mockjs';
import config from './fetchConfig';

export const GET = (url,params) => {
    if(params) {
        url += '?' + queryString.stringify(params);
    }
    return fetch(url).then(
        res => res.json()
    ).then(
        json => Mock.mock(json)
    )
}

export const POST = (url, body) => {
    const options = _.assign(config.header, {
        body: JSON.stringify(body)
    });
    return fetch(url,options).then(
        res => res.json()
    ).then(
        json => Mock.mock(json)
    )
}