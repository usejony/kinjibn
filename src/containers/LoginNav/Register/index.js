import React, { Component } from 'react';
import {
    View,
    TextInput,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import CustomBtn from '../../../components/customBtn';
import commonStyle from '../../../common/commonStyle';


export default class Register extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: '注册'
    })
    constructor(props) {
        super(props);
        this.state = {
            phone: ''
        }
    }

    phoneChange = (text) => {
        this.setState({
            phone: text
        });
    }

    onRegister = () => {
        return false
    }

    render() {
        return (
            <View style={commonStyle.container}>
                <View style={styles.registerBox}>
                    <TextInput
                        style={styles.input}
                        value={this.state.phone}
                        keyboardType='numeric'
                        onChangeText={this.phoneChange}
                        placeholder='请输入您的手机号'
                    />
                </View>
                <CustomBtn title="获取验证码" tintColor="#fff" style={commonStyle.loginBtn} onPress={this.onRegister}/>
            </View>
        );
    }
}

const styles = EStyleSheet.create({
    input: {
        height: 35,
        paddingLeft: 15,
        backgroundColor: '#f4f4f4',
        fontSize: 14,
        marginTop: 20
    }
});
