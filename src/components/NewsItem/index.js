import React, { Component } from 'react';
import {
    Dimensions,
    ScrollView,
    TouchableHighlight,
    View,
    Text,
    Image
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
const { width } = Dimensions.get('window');

// export default class extends Component {
//     constructor(props) {
//         super(props);

//     }

//     render() {
//         const data = this.props.data;
//         return (
//             <View styles={styles.touch}>
//                 <View style={styles.header}>
//                     <Text style={styles.title}>{data.title}</Text>
//                     <Image style={styles.img} source={{ url: data.thumbnail }}  />
//                 </View>
//                 <View style={styles.footer}>
//                     <Text style={styles.footText}>来源：data.source</Text>
//                     <Text style={styles.footText}>{data.date}</Text>
//                 </View>
//             </View>
//         );
//     }
// }

export default newsItem = ( item ) => (
    <TouchableHighlight underlayColor="#f0f0f0" onPress={() => null}>
    <View style={styles.touch}>
        <View style={styles.header}>
            <Text style={styles.title}>{item.title}</Text>
            <Image style={styles.img} source={{ url: item.img }} style={styles.thumbnail}/>
        </View>
        <View style={styles.footer}>
            <Text style={styles.footText}>来源：{item.source}</Text>
            <Text style={styles.footText}>{item.date}</Text>
        </View>
    </View>
    </TouchableHighlight>
)

const styles = EStyleSheet.create({
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