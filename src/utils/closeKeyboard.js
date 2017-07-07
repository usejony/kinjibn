import {
    Keyboard,
} from 'react-native';

export default () => {
    if (Keyboard) {
        Keyboard.dismiss();
    }
}