import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import StationBox from 'components/StationBox';
import DrinkBox from 'components/DrinkBox';
import InventoryTopBox from 'components/InventoryTopBox';
import ReturnInventoryModal from 'components/ReturnInventoryModal';
import Station, { getGlobalStations, getGlobalStation } from 'model/Station';
import { globalInventory } from 'model/Inventory';
import Job from 'model/Job';

export default class ServerReturnInventoryScreen extends React.Component {
    state = {
        inventorySelected: null,
        scrollViewHeight: 0,
        elementHeight: 0,
        stationModalVisible: false,
        station: new Station(),
        drinks: [],
        pairItems: [],
        availableDrinkType: [],
        stationSelected: false,
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

    onReturnInvModalSave(drink) {
        var drinkToUpdate = this.state.station.drinks.find(drink => {
            return drink.name === this.state.drinks[this.state.inventorySelected].name;
        });
        drinkToUpdate.subtract(drink);
        this.state.station.updateDrink(drinkToUpdate);
        Job.createNewJob(drink, this.state.station.key, this.state.pairItems, "Transfer");
        this.setState({
            assignInventoryModalVisible: false,
            inventorySelected: null,
            stationSelected: false,
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
            station: getGlobalStation(this.props.route.params.stationId),
            drinks: globalInventory.drinks,
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
                    stationSelected: false,
                    availableDrinkType: [],
                })}>
                <ReturnInventoryModal
                    ref={m => {this.returnInventoryModal = m}}
                    visible={this.state.assignInventoryModalVisible} 
                    onSave={this.onReturnInvModalSave.bind(this)} />
                <InventoryTopBox inventory={"Return"} touchable onPress={() => this.props.navigation.navigate("Return Inventory Detailed Data")}/>
                <View style={styles.scrollsContainer}>
                    <View style={{width: '50%'}}>
                        <ScrollView
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={{
                                alignItems: 'center'
                            }}>
                            <StationBox
                                verb={"Return to"}
                                station={this.state.station}
                                totalValue={this.state.totalValue}
                                inventorySelected={this.state.stationSelected ? "" : null}
                                onPressStats={() => {
                                    this.setState({
                                        stationSelected: true,
                                        availableDrinkType: this.state.station.drinks.map(drink => drink.name)
                                    });
                                }}
                                />
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
                                    var selectedDrink = this.state.station.findDrinkWithDrinkType(this.state.drinks[index].name);
                                    this.returnInventoryModal.inputDrinkAndStation(selectedDrink, this.state.station.name);
                                    this.setState({
                                        assignInventoryModalVisible: true,
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