
import EStyleSheet from 'react-native-extended-stylesheet';

const commonStyle = EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '$themeBg',
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginBtn: {
        backgroundColor: '$themeColor',
        width: '60%',
        height: 30,
        alignSelf: 'center',
        marginTop: 35,
    }
});

export default commonStyle;

