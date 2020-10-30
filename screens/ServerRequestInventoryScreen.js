import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import StationBox from 'components/StationBox';
import DrinkBox from 'components/DrinkBox';
import InventoryTopBox from 'components/InventoryTopBox';
import RequestInventoryModal from 'components/RequestInventoryModal';
import { getGlobalStations } from 'model/Station';
import { globalInventory } from 'model/Inventory';
import Job from '../model/Job';

export default class ServerRequestInventoryScreen extends React.Component {
    state = {
        inventorySelected: null,
        scrollViewHeight: 0,
        elementHeight: 0,
        stationModalVisible: false,
        stations: {},
        drinks: [],
        stationSelected: null,
        totalValue: 0,
        requestInventoryModalVisible: false
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

    onRequestInvModalSave(drink) {
        this.setState({requestInventoryModalVisible: false});
        Job.createNewJob(drink, this.state.curStation.key, this.state.pairItems, "Transfer");
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
            pairItems: globalInventory.pairItems,
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
                onPress={() => this.setState({inventorySelected: null})}>
                <RequestInventoryModal
                    ref={m => {this.requestInventoryModal = m}}
                    visible={this.state.requestInventoryModalVisible} 
                    onSave={this.onRequestInvModalSave.bind(this)} />
                <InventoryTopBox inventory={"Request"} touchable onPress={() => this.props.navigation.navigate("Return Inventory Detailed Data")}/>
                <View style={styles.scrollsContainer}>
                    <View
                        style={{width: '50%'}}
                        onLayout={(event) => this.setState({scrollViewHeight: event.nativeEvent.layout.height})}>
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
                    <View style={{width: '50%'}}>
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
                                        verb={"Request to"}
                                        key={index}
                                        station={station}
                                        totalValue={this.state.totalValue}
                                        inventorySelected={this.state.inventorySelected}
                                        onPressStats={() => this.props.navigation.navigate("Total Inventory Station Overview", { stationId: station.id })}
                                        onAdd={() => {
                                            this.setState({
                                                requestInventoryModalVisible: true,
                                                curStation: station
                                            });
                                            this.requestInventoryModal.inputDrinkAndStation(
                                                this.state.drinks[this.state.inventorySelected],
                                                station.name,
                                                this.state.pairItems
                                            );
                                        }}
                                        />
                                );
                            })}
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
        height: '80%',
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'center'
    }
});