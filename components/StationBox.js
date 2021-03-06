import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import ShadowedBox from 'components/ShadowedBox';
import { Ionicons } from '@expo/vector-icons';

export default function StationBox(props) {
    var color = 'green';
    var value = props.station.getTotalValue();
    var percentage = Math.round((1.0 * value / props.totalValue) * 100);
    if (percentage < 26) {
        color = 'red';
    } else if (percentage < 70) {
        color = 'orange';
    }
    return (
        <ShadowedBox
            width={'80%'}
            square
            margin={5}
            greyed={props.greyed}>
            {props.inventorySelected !== null &&
                <TouchableOpacity style={styles.addToStationBox} onPress={props.onAdd}>
                    <Text style={{ fontSize: 20 }}>{props.verb}</Text>
                    <Text
                        numberOfLines={1}
                        adjustsFontSizeToFit
                        style={{ fontSize: 20 }}>
                        {props.station.name}
                    </Text>
                </TouchableOpacity>
            }
            {props.inventorySelected === null &&
                <TouchableOpacity
                    style={styles.stationStatsBox}
                    onPress={props.onPressStats}>
                    {props.enableDelete &&
                        <TouchableOpacity
                            style={{
                                position: 'absolute',
                                right: '-15%',
                                top: '-5%',
                            }}
                            onPress={props.onDelete}>
                            <Ionicons name="md-close-circle-outline" size={20} color="black" />
                        </TouchableOpacity>
                    }
                    <View style={{
                        height: '20%',
                        alignItems: 'center',
                        justifyContent: 'flex-end'
                    }}>
                        <Text
                            numberOfLines={1}
                            adjustsFontSizeToFit
                            style={{
                                fontSize: 20,
                                fontWeight: '600'
                            }}>{props.station.name}</Text>
                    </View>
                    <View style={{
                        height: '35%',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Text style={{
                            fontSize: 30,
                            fontWeight: '300',
                            color
                        }}>{percentage}%</Text>
                    </View>
                    <View style={{
                        height: '15%',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        borderBottomWidth: 1,
                    }}>
                        <Text style={{
                            fontSize: 10,
                            fontWeight: '300',
                            color
                        }}>Total Available</Text>
                    </View>
                    <View style={{
                        height: '20%',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Text>$ {value}</Text>
                    </View>
                </TouchableOpacity>
            }
        </ShadowedBox>
    )
}


const styles = StyleSheet.create({
    addToStationBox: {
        position: 'absolute',
        width: '80%',
        height: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    stationStatsBox: {
        width: '70%',
        justifyContent: 'center',
        backgroundColor: 'white'
    }
});