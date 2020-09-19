import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ShadowedBox from '../components/ShadowedBox';
import StationBox from '../components/StationBox';
import InventoryTopBox from '../components/InventoryTopBox';

export default function RunnerReturnInventoryScreen(props) {
    var [inventorySelected, setInventorySelected] = React.useState(null);
    var [scrollViewHeight, setScrollViewHeight] = React.useState(0);
    var [elementHeight, setElementHeight] = React.useState(0);
    const stations = [{
        id: 1,
        percentage: 100,
        totalAvailable: '$480,960' 
    }]
    const _scrollView1 = React.createRef();

    const imageList = [
        require('../assets/event-logo.png'),
        require('../assets/coorslight.jpg'),
        require('../assets/SweetWater.png'),
        require('../assets/terrapin.png'),
        require('../assets/truly.jpeg'),
        require('../assets/smartwater.png'),
        require('../assets/cup.jpg'),
        require('../assets/table.jpg'),
        require('../assets/ice.png')
    ]
    const iconList = imageList.map((img, index) => {
        return (
            <ShadowedBox
                key={index}
                width={'80%'}
                square
                margin={5}
                touchable
                onPress={() => {
                    setInventorySelected(index);
                    _scrollView1.current.scrollTo({ y: (elementHeight * 1.1) * index - 0.3 * scrollViewHeight });
                }}
                greyed={inventorySelected !== null && inventorySelected !== index}>
                <View
                    style={styles.iconBox}
                    onLayout={(event) => {
                        setElementHeight(event.nativeEvent.layout.height);
                    }}>
                    <Image source={img} style={styles.icon} />
                </View>
            </ShadowedBox>
        );
    });

    return (
        <TouchableOpacity
            activeOpacity={1}
            style={styles.container}
            touchable
            onPress={() => {
                setInventorySelected(null);
            }}>
            <InventoryTopBox inventory={"Return"} />
            <View style={styles.scrollsContainer}>
                <View
                    style={{width: '40%'}}
                    onLayout={(event) => {
                        setScrollViewHeight(event.nativeEvent.layout.height);
                    }}>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{
                            alignItems: 'center'
                        }}
                        ref={_scrollView1}>
                        {iconList}
                    </ScrollView>
                </View>
                <View style={{width: '50%'}}>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{
                            alignItems: 'center'
                        }}>
                        {stations.map((station, index) => {
                            return (
                                <StationBox
                                    key={index}
                                    station={station}
                                    inventorySelected={inventorySelected}
                                    onPressStats={() => props.navigation.navigate("Total Inventory Station Overview")}
                                    />
                            );
                        })}
                    </ScrollView>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    boldText: {
        fontSize: 18,
        fontWeight: 'bold'
    },
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
    scrollsContainer: {
        height: '80%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
});