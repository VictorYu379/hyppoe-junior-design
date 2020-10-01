import * as React from 'react';
import { Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function MyCheckBox(props) { 
    return (
        <TouchableOpacity
            onPress={props.handlePress}>
            {
            (props.checked) ? 
            <Image
                source={props.checkedImage}
                style={styles.imgStyle}
            />:
            <Image
                source={props.uncheckedImage}
                style={styles.imgStyle}
            />
            }
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    imgStyle: {
        height: 20, 
        width: 20,
        overflow: 'hidden',
        resizeMode: 'contain'
    }
})