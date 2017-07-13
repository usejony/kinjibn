import React, { Component } from 'react';
import {
    TouchableHighlight,
    View,
    Text,
    FlatList,
    ListView,
    ActivityIndicator,
    Button,
    Image,
    Dimensions,
} from 'react-native';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';

import { fetchIfNeeded, toLogin, toNewsTab } from '../../../../actions';
import Separator from '../../../../components/Separator';
import Activity from '../../../../components/Activity';
import config from '../../../../utils/fetchConfig';

const { width } = Dimensions.get('window');
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

    toLogin = () => {
        this.props.toLogin()
    }

    newsItem = ({ item, index }) => (
        <TouchableHighlight underlayColor="#f0f0f0" onPress={() => this.props.toNewsTab(index)}>
            <View style={styles.touch}>
                <View style={styles.header}>Ï
                    <Text style={styles.title}>{item.data.title}</Text>
                    <Image style={styles.img} source={{ url: item.data.img }} style={styles.thumbnail} />
                </View>
                <View style={styles.footer}>
                    <Text style={styles.footText}>来源：{item.data.source}</Text>
                    <Text style={styles.footText}>{item.data.date}</Text>
                </View>
            </View>
        </TouchableHighlight>
    )

    render() {
        const data = this.props.items;
        console.log(data)
        return (
            <View style={styles.container}>
                {
                    data
                        ? <FlatList
                            refreshing={this.props.isFetching}
                            ItemSeparatorComponent={Separator}
                            data={data}
                            renderItem={this.newsItem}
                            onRefresh={this._onRefresh}
                        />
                        : <Activity />
                }
            </View>
        );
    }
    componentDidMount() {
        const url = config.api.base + config.api.newsList;
        this.props.getData(url, { page: 0 });
    }
}
const styles = EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    touch: {
        marginHorizontal: 15,
        paddingVertical: 10,
    },
    header: {
        flexDirection: 'row',
    },
    title: {
        flex: 1,
        fontSize: 18,
        color: '#111',
        lineHeight: 25,
        marginRight: 10
    },
    thumbnail: {
        height: width * 0.3 * 0.56,
        width: width * 0.3,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    footText: {
        color: '#999',
        fontSize: 10
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
        getData: (url, params) => dispatch(fetchIfNeeded(url, params)),
        toNewsTab: (index) => dispatch(toNewsTab(index))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(NewsList);