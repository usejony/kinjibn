import React, { Component } from 'react';
import {
    View,
    ScrollView,
    Text,
    Image,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import commonStyle from '../../../../common/commonStyle';
import Comments from './Comment';

const NewsCont = ({ data }) => {
    return (
    <View style={[commonStyle.container]}>
        <ScrollView contentContainerStyle={styles.content}>
            <Text style={styles.title}>{data.title}</Text>
            <View style={styles.source}>
                <Text style={styles.sourceText}>{data.source}</Text>
                <Text style={styles.extra}>{data.date} {data.comments.length}评</Text>
            </View>
            <Text style={styles.desc}>{data.description}</Text>
            <Comments data={data.comments}/>
        </ScrollView>
    </View>
)};

const styles = EStyleSheet.create({
    content: {
        padding: 15,
    },
    title: {
        fontSize: 22,
        color: '#000',
        lineHeight: 25
    },
    source: {
        marginTop: 10,
    },
    sourceText: {
        fontSize: 12,
        color: '#333',
    },
    extra: {
        fontSize: 10,
        color: '#888',
        marginTop: 3,
    },
    desc: {
        marginTop: 15,
        color: '#222',
        fontSize: 16,
        lineHeight: 25,
    }
});

export default NewsCont;