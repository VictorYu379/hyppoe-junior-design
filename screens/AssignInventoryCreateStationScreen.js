import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ShadowedBox from 'components/ShadowedBox';
import StationBox from 'components/StationBox';
import InventoryTopBox from 'components/InventoryTopBox';
import BottomBlueButton from 'components/BottomBlueButton';
import StationModal from 'components/StationModal';
import update from 'immutability-helper';
import Inventory from 'model/Inventory';
import Event from 'model/Event';
import Station from '../model/Station';

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
        drinks: [],
        stationId: 3
    };
    _scrollView1 = React.createRef();

    componentDidMount() {
        new Event("8PcZqNLJ34eS2iO6ojRf").init()
            .then(event => {
                var promises = [];
                var totalInventory = new Inventory(event.inventory);
                promises.push(totalInventory.getData());
                promises.push(Station.getStations(event.stations));
                return Promise.all(promises);
            })
            .then(([totalInventory, stations]) => {
                this.setState({ drinks: totalInventory.drinks });
                var newStations = {}
                stations.map(station => {
                    newStations[station.id] = station;
                });
                this.setState({ stations: newStations });
                console.log(newStations);
            });
    }

    render() {
        var drinkList = this.state.drinks.map((drink, index) => {
            return (
                <ShadowedBox
                    key={index}
                    width={'80%'}
                    square
                    margin={5}
                    touchable
                    onPress={() => {
                        this.setState({ inventorySelected: index });
                        this._scrollView1.current.scrollTo({ y: (this.state.elementHeight * 1.1) * index - 0.3 * this.state.scrollViewHeight });
                    }}
                    greyed={this.state.inventorySelected !== null && this.state.inventorySelected !== index}>
                    <View
                        style={styles.iconBox}
                        onLayout={(event) => {
                            this.setState({ elementHeight: event.nativeEvent.layout.height });
                        }}>
                        <Image source={{ uri: drink.icon }} style={styles.icon} />
                    </View>
                </ShadowedBox>
            );
        })
        return (
            <TouchableOpacity
                activeOpacity={1}
                style={styles.container}
                touchable
                onPress={() => {
                    this.setState({ inventorySelected: null });
                }}>
                <BottomBlueButton
                    text={"Finish Stations"}
                    onPress={() => this.props.navigation.navigate("Manager Dashboard")}
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
                                }
                            }
                        }));
                        this.setState({ stationId: this.state.stationId + 1 });
                        this.setState({ stationModalVisible: false });
                    }} />
                <View style={styles.scrollsContainer}>
                    <View
                        style={{ width: '50%' }}
                        onLayout={(event) => {
                            this.setState({ scrollViewHeight: event.nativeEvent.layout.height });
                        }}>
                        <ScrollView
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={{
                                alignItems: 'center'
                            }}
                            ref={this._scrollView1}>
                            {drinkList}
                        </ScrollView>
                    </View>
                    <View style={{ width: '50%' }}>
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
                                return (
                                    <StationBox
                                        verb={"Add to"}
                                        station={station}
                                        inventorySelected={this.state.inventorySelected}
                                        onPressStats={() => this.props.navigation.navigate("Total Inventory Station Overview")}
                                        enableDelete={true}
                                        onDelete={() => {
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
                                        }}
                                    />
                                );
                            })}
                            <ShadowedBox
                                width={'80%'}
                                square
                                margin={5}
                                touchable
                                onPress={() => {
                                    this.setState({ stationModalVisible: true });
                                }}
                                disabled={this.state.inventorySelected !== null}
                                greyed={this.state.inventorySelected !== null}>
                                <View style={{
                                    aspectRatio: 1,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                    <Image
                                        source={require('assets/add.png')}
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
        height: '68%',
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'center'
    }
});