import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ShadowedBox from 'components/ShadowedBox';

export default function InventoryTopBox(props) {
    return (
        <ShadowedBox width={'80%'} height={'15%'} margin={10}>
            <View style={{
                height: '60%',
            }}>
                <View style={{
                    height: '50%',
                    marginHorizontal: 10,
                }}>
                    <Text style={styles.boldText}>{props.inventory} Inventory:</Text>
                </View>
                <View style={{
                    height: '50%',
                    flexDirection: 'row'
                }}>
                    <View style={{
                        width: '50%',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={styles.boldText}>Inventory</Text>
                    </View>
                    <View style={{
                        width: '50%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderLeftWidth: 1
                    }}>
                        <Text style={styles.boldText}>Stations</Text>
                    </View>
                </View>
            </View>
        </ShadowedBox>
    )
}

const styles = StyleSheet.create({
    boldText: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});