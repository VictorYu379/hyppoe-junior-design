import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import StationBox from 'components/StationBox';
import DrinkBox from 'components/DrinkBox';
import InventoryTopBox from 'components/InventoryTopBox';
import ReturnInventoryModal from 'components/ReturnInventoryModal';
import Inventory from 'model/Inventory';
import Event from 'model/Event';
import Station from '../model/Station';

export default class ManagerReturnInventoryScreen extends React.Component {
    state = {
        inventorySelected: null,
        scrollViewHeight: 0,
        elementHeight: 0,
        returnInventoryModalVisible: false,
        stations: [],
        drinks: [],
        stationId: 3
    };

     _scrollView1 = React.createRef();

    componentDidMount() {
        Event.getInstance()
            .then(event => {
                var promises = [];
                var totalInventory = new Inventory(event.inventory);
                promises.push(totalInventory.getData());
                promises.push(Station.getStations(event.stations));
                return Promise.all(promises);
            })
            .then(([totalInventory, stations]) => {
                this.setState({ drinks: totalInventory.drinks });
                this.setState({ stations });
                console.log(newStations);
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

    render() {
        return (
            <TouchableOpacity
                activeOpacity={1}
                style={styles.container}
                touchable
                onPress={() => this.setState({inventorySelected: null})}>
                <ReturnInventoryModal
                    sourceImg={null} 
                    drinkName={null}
                    visible={this.state.returnInventoryModalVisible} 
                    onSave={() => this.setState({returnInventoryModalVisible: false})} />
                <InventoryTopBox inventory={"Return"} touchable onPress={() => this.props.navigation.navigate("Return Inventory Detailed Data")}/>
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
                            {this.state.stations.map((station, index) => {
                                return (
                                    <StationBox
                                        verb={"Return to"}
                                        key={index}
                                        station={station}
                                        inventorySelected={this.state.inventorySelected}
                                        onPressStats={() => this.props.navigation.navigate("Total Inventory Station Overview")}
                                        onAdd={() => this.setState({returnInventoryModalVisible: true})}
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