import React, { useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ShadowedBox from '../components/ShadowedBox';
import InventoryTopBox from '../components/InventoryTopBox';
import BottomBlueButton from '../components/BottomBlueButton';
import StationModal from '../components/StationModal';
import { Ionicons } from '@expo/vector-icons';
import update from 'immutability-helper';

export default class AssignInventoryCreateStationScreen extends React.Component {
    state = {
        inventorySelected: null,
        scrollViewHeight: 0,
        elementHeight: 0,
        stationModalVisible: false,
        stations: {
            1: {
                id: 1,
                percentage: 100,
                totalAvailable: '$480,960' 
            },
            2: {
                id: 2,
                percentage: 0,
                totalAvailable: '$0'
            },
        },
        stationId: 3
    };
    _scrollView1 = React.createRef();

    render() {
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
                        this.setState(update(this.state, {inventorySelected: {$set: index}}));
                        // this.setState({inventorySelected: index});
                        this._scrollView1.current.scrollTo({ y: (this.state.elementHeight * 1.1) * index - 0.3 * this.state.scrollViewHeight });
                    }}
                    greyed={this.state.inventorySelected !== null && this.state.inventorySelected !== index}>
                    <View
                        style={{
                            width: '100%',
                            height: '100%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        onLayout={(event) => {
                            this.setState({elementHeight: event.nativeEvent.layout.height});
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

        return (
            <TouchableOpacity
                activeOpacity={1}
                style={styles.container}
                touchable
                onPress={() => {
                    this.setState({inventorySelected: null});
                }}>
                <BottomBlueButton
                    text={"Finish Stations"}
                    onPress={() => console.log("haha")}
                    disable={this.state.inventorySelected !== null} />
                <InventoryTopBox inventory={"Assign"} />
                <StationModal
                    visible={this.state.stationModalVisible}
                    onSave={() => {
                        var newStation = {
                            id: this.state.stationId,
                            percentage: 0,
                            totalAvailable: "$0"
                        };
                        this.setState(update(this.state, {
                            stations: {
                                $merge: {
                                    [this.state.stationId]: newStation
                                }}}));
                        this.setState({stationId: this.state.stationId + 1});
                        this.setState({stationModalVisible: false});
                    }} />
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
                            this.setState({scrollViewHeight: event.nativeEvent.layout.height});
                        }}>
                        <ScrollView
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={{
                                alignItems: 'center'
                            }}
                            ref={this._scrollView1}>
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
                            {Object.keys(this.state.stations).map(stationId => {
                                var station = this.state.stations[stationId];
                                if (station.deleted === true) {
                                    return;
                                }
                                var color = 'green';
                                if (station.percentage < 26) {
                                    color = 'red';
                                } else if (station.percentage < 70) {
                                    color = 'yellow';
                                }
                                return (
                                    <ShadowedBox
                                        key={station.id}
                                        width={'80%'}
                                        square
                                        margin={5}>
                                        {this.state.inventorySelected !== null &&
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
                                        {this.state.inventorySelected === null &&
                                            <TouchableOpacity
                                                style={{
                                                    width: '70%',
                                                    justifyContent: 'center',
                                                    backgroundColor: 'white'
                                                }}
                                                onPress={() => this.props.navigation.navigate("Total Inventory Station Overview")}>
                                                <TouchableOpacity
                                                    style={{
                                                        position: 'absolute',
                                                        right: '-15%',
                                                        top: '-5%',
                                                    }}
                                                    onPress={() => {
                                                        this.setState(update(
                                                            this.state,
                                                            {
                                                                stations: {
                                                                    [station.id]: {
                                                                        $merge: {
                                                                            deleted: true
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        ));
                                                    }}>
                                                    <Ionicons name="md-close-circle-outline" size={20} color="black"/>
                                                </TouchableOpacity>
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
                            })}
                            <ShadowedBox
                                width={'80%'}
                                square
                                margin={5}
                                touchable
                                onPress={() => {
                                    this.setState({stationModalVisible: true});
                                }}
                                disabled={this.state.inventorySelected !== null}
                                greyed={this.state.inventorySelected !== null}>
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
                                    <Text>Add Station</Text>
                                </View>
                            </ShadowedBox>
                        </ScrollView>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
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