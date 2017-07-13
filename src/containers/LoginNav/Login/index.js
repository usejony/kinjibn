import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    PixelRatio,
    StatusBar,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import CustomBtn from '../../../components/customBtn';
import commonStyle from '../../../common/commonStyle';
import IconBtn from '../../../components/IconBtn'
import closeKeyboard from '../../../utils/closeKeyboard';

export default class Login extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: '登录',
        headerLeft: (
            <IconBtn name="ios-close-outline" color="#3fd47f" onPress={() => {
                closeKeyboard();
                navigation.goBack(null);
            }}/>
        ),
        headerRight: (
            <Button title="注册" onPress={() => navigation.navigate('RegisterScreen')} color="#3fd47f"/>
        )
    })
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            code: false
        }
    }
    nextHandle = () => {
        const { value } = this.state;
        if (value.length !== 11) {
            alert('请输入11位正确的手机号');
            this.setState({
                value: '',
                codeValue: ''
            });
            return false;
        }
        this.setState({
            code: true
        })
    }

    onSubmit = () => {
        alert('send');
    }

    phoneChange = (text) => {
        this.setState({
            value: text,
        });
    }

    codeChange = (text) => {
        this.setState({
            codeValue: text
        });
    }

    /**
     * 获取验证码
     */
    getCode = () => {
        return false
    }

    render() {
        return (
            <View style={commonStyle.container}>
                <StatusBar animated={true} barStyle="default"/>
                <View style={styles.box}>
                    <TextInput
                        style={styles.input}
                        autoFocus={true}
                        maxLength={11}
                        keyboardType="numeric"
                        clearButtonMode='while-editing'
                        value={this.state.value}
                        onChangeText={this.phoneChange}
                        placeholder="请输入您的手机号"
                    />
                </View>
                {
                    this.state.code
                        ? <View style={styles.codeBox}>
                            <TextInput value={this.state.codeValue} onChangeText={this.codeChange} style={styles.code} placeholder="输入验证码" keyboardType="numeric" />
                            <Button title="再次获取" onPress={this.getCode} color="#73d8a5" />
                        </View>
                        : null
                }
                <CustomBtn title={this.state.code ? '登录' : '下一步'} onPress={this.state.code ? this.onSubmit : this.nextHandle} style={commonStyle.loginBtn} tintColor="#fff" />
            </View>
        );
    }

}

const styles = EStyleSheet.create({
    box: {
        marginTop: 50,
        width: '70%',
        borderBottomWidth: 1,
        borderColor: '#aaa',
        height: 35,
        alignSelf: 'center'
    },
    input: {
        flex: 1,
        height: 35,
        color: '#333',
        fontSize: 15,
    },
    codeBox: {
        flexDirection: 'row',
        width: '70%',
        alignSelf: 'center',
        marginTop: 20
    },
    code: {
        flex: 1,
        borderColor: '#aeaeae',
        borderWidth: 1 / PixelRatio.get(),
        textAlign: 'center',
        borderRadius: 5,
        marginRight: 16,
        fontSize: 14
    }
});