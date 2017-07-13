import React, { Component } from 'react';
import {
    View,
    Text,
    InteractionManager,
} from 'react-native';

import DefaultScreen from '../../../components/DefaultScreen';
import NewsCont from './subpages/NewsCont';
export default class NewsDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        }
    }
    componentDidMount() {
        //当专场动画完成后再绑定数据，这样可以让动画更流畅
       InteractionManager.runAfterInteractions(() => {
           this.setState({
               data: this.props.navigation.state.params.data
           });
       })
    }
    render() {
        return (
            <View style={{flex: 1}}>
                {
                    this.state.data
                        ? <NewsCont data={this.state.data}/>
                        : <DefaultScreen />
                }
            </View>
        );
    }
}