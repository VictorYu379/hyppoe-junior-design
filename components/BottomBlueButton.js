import * as React from 'react';
import { Text, TouchableOpacity } from 'react-native';

export default function ButtonBlueButton(props) {
    return (
        <TouchableOpacity
            style={{
                position: 'absolute',
                bottom: 20,
                width: '85%',
                height: '10%',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 25,
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 4,
                },
                shadowOpacity: 0.32,
                shadowRadius: 5.46,
                elevation: 9,
                backgroundColor: props.disable ? 'grey' : 'blue',
                zIndex: 1
            }}
            onPress={props.onPress}
            disabled={props.disable}>
            <Text style={{color: 'white', fontWeight: 'bold', fontFamily: 'Arial'}}>{props.text}</Text>
        </TouchableOpacity>
    )
}