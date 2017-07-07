import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList,
    ListView,
} from 'react-native';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import { SwRefreshListView, LoadMoreStatus, end, beginRefresh, setNoMoreData } from 'react-native-swRefresh';

import { fetchIfNeeded } from '../../../../actions';
import NewsItem from '../../../../components/NewsItem';
import Separator from '../../../../components/Separator';
import newsItem from '../../../../components/NewsItem';
import Activity from '../../../../components/Activity';

class NewsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newsData: [],
            isFetching: false,
            pageCount: 0,
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            })
        };
    }


    // keyExtractor = (item, index) => item.id;
    renderRow = (data) => (
        <Text>{data.title}</Text>
    );
    _onListRefresh = (end) => {
        setTimeout(() => {
            if (!this.props.isFetching) {
                this.setState({
                    newsData: this.state.newsData.concat(this.props.newsData)
                });
                end();
            }
        }, 2000);
    }

    //上拉加载的函数
    onLoadMore(end) {

    }
    renderRow = (data) => (
        <Text>{data}</Text>
    )
    render() {
        return (
            <View style={styles.container}>
                <SwRefreshListView
                    ref='listRefresh'
                    dataSource={this.state.dataSource.cloneWithRows(this.state.newsData)}
                    renderRow={newsItem}
                    onRefresh={this._onListRefresh}
                    isShowLoadMore={false}
                />
            </View>
        );
    }
    componentDidMount() {
        // this.refs.listRefresh.beginRefresh()
        this.setState({
            newsData: this.props.newsData,
            isFetching: this.props.isFetching,
            pageCount: this.props.pageCount,
        })
    }
}
const styles = EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
});

const mapStateToProps = state => {
    return {
        newsData: state.newsData.items,
        isFetching: state.newsData.isFetching,
        pageCount: state.newsData.pageCount,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getData: () => dispatch(fetchIfNeeded("http://rap.taobao.org/mockjs/16148/api/newsList")),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(NewsList);