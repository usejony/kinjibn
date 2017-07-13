import React, { Component } from 'react';
import {
    View,
    Text,
    PixelRatio,
    TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';

import EStyleSheet from 'react-native-extended-stylesheet';

import IconBtn from '../../../components/IconBtn';
import { toComment, toNewsDetail } from '../../../actions';

class NewsBottomTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isComment: false
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.inputBox} activeOpacity={0.6} onPress={() => null}>
                    <Text style={styles.comment}>评论一下...</Text>
                </TouchableOpacity>
                {
                    this.state.isComment
                        ? (
                            <TouchableOpacity activeOpacity={0.6} style={styles.formerBox} onPress={() => {
                                this.setState({
                                    isComment: false
                                }, () => {
                                    this.props.toNewsDetail()
                                });
                            }}>
                                <Text style={styles.formerText}>原文</Text>
                                <View style={styles.formerOuter} />
                                <View style={styles.formerInner} />
                            </TouchableOpacity>
                        )
                        : (
                            <TouchableOpacity style={styles.comBox} activeOpacity={0.6} onPress={() => {
                                this.setState({
                                    isComment: true
                                }, () => {
                                    this.props.toComment()
                                });
                            }}>
                                <Text style={styles.comNum}>220</Text>
                                <View style={styles.outer} />
                                <View style={styles.inner} />
                            </TouchableOpacity>
                        )
                }

                <IconBtn name="ios-star-outline" onPress={() => null} color="#666" size={28} />
                <IconBtn name="ios-open-outline" onPress={() => null} color="#555" size={24} />
            </View>
        );
    }
}

const styles = EStyleSheet.create({
    container: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#f0f0f0',
        borderTopWidth: 1 / PixelRatio.get(),
        borderColor: '#ccc'
    },
    inputBox: {
        height: 26,
        width: '50%',
        backgroundColor: '#fff',
        justifyContent: 'center',
        paddingLeft: 8,
        borderRadius: 3,
        borderWidth: 1 / PixelRatio.get(),
        borderColor: '#ccc'
    },
    comment: {
        fontSize: 12,
        color: '#888',
    },
    comBox: {
        padding: 3,
        borderWidth: 1 / PixelRatio.get(),
        borderColor: 'red',
        borderRadius: 2,
        borderBottomLeftRadius: 0
    },
    comNum: {
        fontSize: 10,
        color: 'red'
    },
    outer: {
        borderColor: 'transparent',
        borderWidth: 2,
        position: 'absolute',
        borderLeftColor: 'red',
        borderTopColor: 'red',
        left: -1,
        bottom: -4,
    },
    inner: {
        borderColor: 'transparent',
        borderWidth: 1,
        position: 'absolute',
        borderLeftColor: '#f0f0f0',
        borderTopColor: '#f0f0f0',
        left: 0,
        bottom: -2,
    },
    formerBox: {
        height: 20,
        justifyContent: 'center',
        paddingRight: 4,
        borderWidth: 1 / PixelRatio.get(),
        borderColor: '#aaa',
    },
    formerText: {
        fontSize: 12,
        color: '#666'
    },
    formerOuter: {
        borderWidth: 10,
        borderColor: 'transparent',
        borderRightColor: '#aaa',
        position: 'absolute',
        left: -20
    },
    formerInner: {
        borderWidth: 10,
        borderColor: 'transparent',
        borderRightColor: '#f0f0f0',
        position: 'absolute',
        left: -19
    }
});

const mapStateToProps = state => {
    return {

    }
}
const mapDispatchToProps = dispatch => {
    return {
        toComment: () => dispatch(toComment()),
        toNewsDetail: () => dispatch(toNewsDetail())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsBottomTab)