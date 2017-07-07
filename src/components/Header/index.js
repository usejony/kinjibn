/**
 * common header from du
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Header extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View style={[styles.container,this.props.style]}>
                {
                    this.props.leftHandle
                        ? <TouchableOpacity onPress={this.props.leftHandle}>
                            <View style={styles.touch}>
                                <Icon name={this.props.leftIconName ? this.props.leftIconName : 'ios-arrow-back'} color={this.props.tintColor ? this.props.tintColor : '#fff'} size={this.props.iconSize ? this.props.iconSize : 28} />
                            </View>
                        </TouchableOpacity>
                        : null
                }
                <Text style={[styles.title, { color: this.props.tintColor ? this.props.tintColor : '#fff' }]}>{this.props.title}</Text>
            </View>
        );
    }
}


Header.propTypes = {
    leftHandle: PropTypes.func,//左边按钮的操作函数
    leftIconName: PropTypes.string,//左边的按钮名称
    iconColor: PropTypes.string,//按钮颜色
    iconSize: PropTypes.number,//按钮大小
}

const styles = EStyleSheet.create({
    container: {
        height: 64,
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    touch: {
        width: 48,
        height: 40,
        position: 'absolute',
        left: 5,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        flex: 1,
        marginBottom: 15,
        color: '#fff',
        marginHorizontal: 60,
        textAlign: 'center',
    },
})