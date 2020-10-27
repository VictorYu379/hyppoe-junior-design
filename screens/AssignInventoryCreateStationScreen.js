import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ShadowedBox from 'components/ShadowedBox';
import StationBox from 'components/StationBox';
import DrinkBox from 'components/DrinkBox';
import InventoryTopBox from 'components/InventoryTopBox';
import BottomBlueButton from 'components/BottomBlueButton';
import StationModal from 'components/StationModal';
import update from 'immutability-helper';
import { globalInventory } from 'model/Inventory';
import { getGlobalStations } from '../model/Station';

export default class AssignInventoryCreateStationScreen extends React.Component {
    state = {
        inventorySelected: null,
        scrollViewHeight: 0,
        elementHeight: 0,
        stationModalVisible: false,
        stations: {},
        drinks: [],
        stationId: 3,
        totalValue: 0,
    };
    _scrollView1 = React.createRef();

    componentDidMount() {
        var stations = getGlobalStations();
        console.log(stations);
        var newStations = {};
        var newTotalValue = 0;
        stations.map(station => {
            newTotalValue += station.getTotalValue();
            newStations[station.id] = station;
        });
        this.setState({
            drinks: globalInventory.drinks,
            stations: newStations,
            totalValue: newTotalValue
        });
    }

    onDrinkBoxLayout(event) {
        this.setState({elementHeight: event.nativeEvent.layout.height});
    }

    onDrinkBoxPressed(index) {
        this.setState({inventorySelected: index});
        this._scrollView1.current.scrollTo({
            y: (this.state.elementHeight * 1.1) * index - 0.3 * this.state.scrollViewHeight
        });
    }

    onStationModalSave(station) {
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
    }

    render() {
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
                            {this.state.drinks.map((drink, index) => {
                                return (
                                    <DrinkBox
                                        key={index}
                                        onPress={this.onDrinkBoxPressed.bind(this, index)}
                                        drink={drink}
                                        greyed={this.state.inventorySelected !== null && this.state.inventorySelected !== index}
                                        onLayout={this.onDrinkBoxLayout.bind(this)}/>
                                );
                            })}
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
                                        totalValue={this.state.totalValue}
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