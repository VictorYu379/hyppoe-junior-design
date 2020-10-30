import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ShadowedBox from 'components/ShadowedBox';
import StationBox from 'components/StationBox';
import DrinkBox from 'components/DrinkBox';
import InventoryTopBox from 'components/InventoryTopBox';
import BottomBlueButton from 'components/BottomBlueButton';
import StationModal from 'components/StationModal';
import ConfirmInventoryModal from 'components/ConfirmInventoryModal';
import update from 'immutability-helper';
import { globalInventory } from 'model/Inventory';
import { getGlobalStations } from 'model/Station';

export default class AssignInventoryCreateStationScreen extends React.Component {
    state = {
        inventorySelected: null,
        scrollViewHeight: 0,
        elementHeight: 0,
        stationModalVisible: false,
        stations: {},
        drinks: [],
        stationSelected: null,
        totalValue: 0,
        assignInventoryModalVisible: false
    };
    _scrollView1 = React.createRef();

    componentDidMount() {
        this.updateData();
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
        this.setState(update(this.state, {
            stations: {
                $merge: {
                    [station.key]: station
                }
            }
        }));
        this.setState({ stationModalVisible: false });
    }

    onConfirmDelivery(station, drink) {
        //////
        // create job
        //////
        this.setState({
            assignInventoryModalVisible: false,
            inventorySelected: null,
        });
        this.updateData();
    }

    updateData() {
        var stations = getGlobalStations();
        var newStations = {};
        var newTotalValue = 0;
        stations.map(station => {
            newTotalValue += station.getTotalValue();
            newStations[station.key] = station;
        });
        this.setState({
            drinks: globalInventory.drinks,
            stations: newStations,
            totalValue: newTotalValue
        });
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
                <ConfirmInventoryModal
                    drink={this.state.drinks[this.state.inventorySelected]}
                    visible={this.state.assignInventoryModalVisible}
                    ref={m => {this.ConfirmInventoryModal = m}}
                    onSave={this.onConfirmDelivery.bind(this)}/>
                <BottomBlueButton
                    text={"Finish Stations"}
                    onPress={() => this.props.navigation.navigate("Manager Dashboard")}
                    disable={this.state.inventorySelected !== null} />
                <InventoryTopBox inventory={"Assign"} />
                <StationModal
                    visible={this.state.stationModalVisible}
                    onSave={this.onStationModalSave.bind(this)} />
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
                                        drink={drink}
                                        onPress={this.onDrinkBoxPressed.bind(this, index)}
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
                            {Object.keys(this.state.stations).map((stationId, index) => {
                                var station = this.state.stations[stationId];
                                if (station.deleted === true) {
                                    return;
                                }
                                return (
                                    <StationBox
                                        key={index}
                                        verb={"Add to"}
                                        station={station}
                                        inventorySelected={this.state.inventorySelected}
                                        onPressStats={() => this.props.navigation.navigate("Total Inventory Station Overview", { stationId: station.id })}
                                        onAdd={() => {
                                            this.ConfirmInventoryModal.inputDrinkAndStation(
                                                this.state.drinks[this.state.inventorySelected],
                                                this.state.stations[station.key]
                                            );
                                            this.setState({ assignInventoryModalVisible: true });
                                        }}
                                        enableDelete={true}
                                        totalValue={this.state.totalValue}
                                        onDelete={() => {
                                            this.setState(update(
                                                this.state,
                                                {
                                                    stations: {
                                                        [station.key]: {
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