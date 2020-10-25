import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import ShadowedBox from 'components/ShadowedBox';

export default function DrinkBox(props) {
    return (
        <ShadowedBox
            key={props.key}
            width={'80%'}
            square
            margin={5}
            touchable
            onPress={props.onPress}
            greyed={props.greyed}>
            <View
                style={styles.iconBox}
                onLayout={props.onLayout}>
                <Image source={{uri: props.drink.icon}} style={styles.icon} />
            </View>
        </ShadowedBox>
    )
}


const styles = StyleSheet.create({
    iconBox: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: '80%',
        height: '80%',
        borderRadius: 15,
        overflow: 'hidden',
        resizeMode: 'contain'
    },
});