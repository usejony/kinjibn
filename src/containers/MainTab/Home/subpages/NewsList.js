import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList,
    ListView,
    ActivityIndicator
} from 'react-native';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import { SwRefreshListView, LoadMoreStatus, end, beginRefresh, setNoMoreData } from 'react-native-swRefresh';

import { fetchIfNeeded } from '../../../../actions';
import NewsItem from '../../../../components/NewsItem';
import Separator from '../../../../components/Separator';
import newsItem from '../../../../components/NewsItem';
import Activity from '../../../../components/Activity';
import config from '../../../../utils/fetchConfig';

class NewsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasMore: false
        };
    }

    /**
     * 下拉刷新
     */
    _onRefresh = () => {
        this.props.getData();
    }

    /**
     * 底部
     */
    _renderFooter = () => (
        <View>
            {
                this.state.hasMore
                    ? <ActivityIndicator />
                    : <Text>没有更多了</Text>
            }
        </View>
    )

    /**
     * 上拉加载
     */
    loadMore = () => {
        this.setState({
            hasMore: true
        })
        setTimeout(() => {
            this.setState({
                hasMore: false
            })
        }, 2000);
    }

    render() {
        const data = this.props.items;
        return (
            <View style={styles.container}>
                {
                    data.length
                        ? <FlatList
                            refreshing={this.props.isFetching}
                            ItemSeparatorComponent={Separator}
                            data={data}
                            renderItem={newsItem}
                            ListFooterComponent={this.state.hasMore ? <View><ActivityIndicator/></View> : <Text>没有更多了</Text>}
                            keyExtractor={(item) => item.id}
                            onEndReached={this.loadMore}
                            onEndReachedThreshold={0.1}
                            onRefresh={this._onRefresh}
                        />
                        : <Activity />
                }
            </View>
        );
    }
    componentDidMount() {
        const url = config.api.base + config.api.newsList;
        this.props.getData();
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
        items: state.newsData.items,
        isFetching: state.newsData.isFetching,
        pageCount: state.newsData.pageCount,
        isErr: state.newsData.isErr,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getData: () => dispatch(fetchIfNeeded(url,params)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(NewsList);