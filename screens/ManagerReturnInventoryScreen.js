import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import StationBox from 'components/StationBox';
import DrinkBox from 'components/DrinkBox';
import InventoryTopBox from 'components/InventoryTopBox';
import ReturnInventoryModal from 'components/ReturnInventoryModal';
import { getGlobalStations } from 'model/Station';
import { globalInventory } from 'model/Inventory';
import Job from 'model/Job';

export default class ManagerReturnInventoryScreen extends React.Component {
    state = {
        inventorySelected: null,
        scrollViewHeight: 0,
        elementHeight: 0,
        stationModalVisible: false,
        stations: {},
        drinks: [],
        pairItems: [],
        availableDrinkType: [],
        curStation: null,
        stationSelected: null,
        totalValue: 0,
        returnInventoryModalVisible: false,
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

    onReturnInvModalSave(drink) {
        var selectedStation = this.state.stations[this.state.stationSelected];
        var drinkToUpdate = selectedStation.drinks.find(drink => {
            return drink.name === this.state.drinks[this.state.inventorySelected].name;
        });
        drinkToUpdate.subtract(drink);
        selectedStation.updateDrink(drinkToUpdate);
        Job.createNewJob(drink, this.state.stations[this.state.stationSelected].key, this.state.pairItems, "Return");
        this.setState({
            returnInventoryModalVisible: false,
            inventorySelected: null,
            stationSelected: null,
            availableDrinkType: [],
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
                onPress={() => this.setState({
                    inventorySelected: null,
                    stationSelected: null,
                    availableDrinkType: [],
                })}>
                <ReturnInventoryModal
                    ref={m => {this.returnInventoryModal = m}}
                    visible={this.state.returnInventoryModalVisible} 
                    onSave={this.onReturnInvModalSave.bind(this)} />
                <InventoryTopBox return inventory={"Return"} touchable onPress={() => this.props.navigation.navigate("Return Inventory Detailed Data")}/>
                <View style={styles.scrollsContainer}>
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
                                        verb={"Return from"}
                                        key={index}
                                        station={station}
                                        totalValue={this.state.totalValue}
                                        inventorySelected={this.state.stationSelected === station.key ? this.state.stationSelected : null}
                                        greyed={this.state.stationSelected !== null && this.state.stationSelected !== station.key}
                                        onPressStats={() => {
                                            this.setState({
                                                stationSelected: station.key,
                                                curStation: station,
                                                availableDrinkType: station.drinks.map(drink => drink.name)
                                            });
                                        }}
                                        />
                                );
                            })}
                        </ScrollView>
                    </View>
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
                                var disabled = this.state.availableDrinkType.length == 0 || 
                                                !this.state.availableDrinkType.includes(drink.name);
                                var onPress = () => {
                                    var station = this.state.stations[this.state.stationSelected];
                                    var selectedDrink = station.findDrinkWithDrinkType(this.state.drinks[index].name);
                                    this.returnInventoryModal.inputDrinkAndStation(selectedDrink, station.name);
                                    this.setState({
                                        returnInventoryModalVisible: true,
                                        inventorySelected: index
                                    });
                                };
                                return (
                                    <DrinkBox
                                        key={index}
                                        onPress={disabled ? null : onPress}
                                        drink={drink}
                                        greyed={disabled}
                                        onLayout={this.onDrinkBoxLayout.bind(this)}/>
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