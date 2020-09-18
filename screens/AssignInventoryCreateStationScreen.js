import React, { useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ShadowedBox from '../components/ShadowedBox';
import InventoryTopBox from '../components/InventoryTopBox';
import BottomBlueButton from '../components/BottomBlueButton';
import StationModal from '../components/StationModal';

export default function AssignInventoryCreateStationScreen() {
    const _scrollView1 = useRef(null);
    var [inventorySelected, setInventorySelected] = React.useState(null);
    var [scrollViewHeight, setScrollViewHeight] = React.useState(0);
    var [elementHeight, setElementHeight] = React.useState(0);
    var [stationModalVisible, setStationModalVisible] = React.useState(false);

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
                    style={{
                        width: '100%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    onLayout={(event) => {
                        setElementHeight(event.nativeEvent.layout.height);
                    }}>
                    <Image
                        source={img}
                        style={{
                            width: '80%',
                            height: '80%',
                            borderRadius: 15,
                            overflow: 'hidden',
                            resizeMode: 'contain'
                        }} />
                </View>
            </ShadowedBox>
        );
    });

    const stations = [
        {
            id: 1,
            percentage: 100,
            totalAvailable: '$480,960'
        },
        {
            id: 2,
            percentage: 0,
            totalAvailable: '$0'
        }
    ];
    const stationsElements = stations.map((station, index) => {
        var color = 'green';
        if (station.percentage < 26) {
            color = 'red';
        } else if (station.percentage < 70) {
            color = 'yellow';
        }
        return (
            <ShadowedBox key={index} width={'80%'} square margin={5}>
                {inventorySelected !== null &&
                    <TouchableOpacity style={{
                        position: 'absolute',
                        width: '80%',
                        height: '80%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'white'
                    }}>
                        <Text style={{fontSize: 20}}>Add to</Text>
                        <Text style={{fontSize: 20}}>Stations {station.id}</Text>
                    </TouchableOpacity>
                }
                {inventorySelected === null &&
                    <TouchableOpacity style={{
                        width: '70%',
                        justifyContent: 'center',
                        backgroundColor: 'white'
                    }}>
                        <View style={{
                            height: '20%',
                            alignItems: 'center',
                            justifyContent: 'flex-end'
                        }}>
                            <Text style={{
                                fontSize: 20,
                                fontWeight: '600'
                            }}>Station {station.id}</Text>
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
                            }}>{station.percentage}%</Text>
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
                            <Text>{station.totalAvailable}</Text>
                        </View>
                    </TouchableOpacity>
                }
            </ShadowedBox>
        );
    });


    return (
        <TouchableOpacity
            activeOpacity={1}
            style={styles.container}
            touchable
            onPress={() => setInventorySelected(null)}>
            <BottomBlueButton
                text={"Finish Stations"}
                onPress={() => console.log("haha")}
                disable={inventorySelected !== null} />
            <InventoryTopBox inventory={"Assign"} />
            <StationModal
                visible={stationModalVisible}
                onSave={() => setStationModalVisible(false)} />
            <View style={{
                height: '68%',
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-around'
            }}>
                <View
                    style={{
                        width: '40%',
                    }}
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
                <View style={{
                    width: '50%',
                }}>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{
                            alignItems: 'center'
                        }}>
                        {stationsElements}
                        <ShadowedBox
                            width={'80%'}
                            square
                            margin={5}
                            touchable
                            onPress={() => {
                                setInventorySelected(null);
                                setStationModalVisible(true);
                            }}
                            disabled={inventorySelected !== null}
                            greyed={inventorySelected !== null}>
                            <View style={{
                                aspectRatio: 1,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <Image
                                    source={require('../assets/add.png')}
                                    style={{
                                        width: '60%',
                                        height: '60%',
                                        overflow: 'hidden',
                                        resizeMode: 'contain',
                                        margin: 10
                                    }} />
                                <Text>Add Item</Text>
                            </View>
                        </ShadowedBox>
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
    }
});