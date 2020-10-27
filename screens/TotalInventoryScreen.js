import { StyleSheet, Text, View, Image, TouchableHighlight, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import ShadowedBox from 'components/ShadowedBox';
import BottomBlueBUtton from 'components/BottomBlueButton';
import InputUpdateInventoryModal from 'components/InputUpdateInventoryModal';
import InputBlankInventoryModal from 'components/InputBlankInventoryModal';
import Inventory from 'model/Inventory';
import Event from 'model/Event';
import { dbManager } from 'model/DBManager';


export default class TotalInventory extends React.Component {
	state = {
        inputInvUpdateModalVisible: false,
		inputBlkUpdateModalVisible: false,
		selectedDrink: 0,
		inventoryId: null,
        drinks: []
	};
	
	parseDrink(drink) {
        const obj = {
            details: drink.details === undefined ? "" : drink.details,
            drinkType: drink.drinkType.id,
            pack: drink.pack, 
            quantity: drink.quantity
        }
        return obj;
    }


	onInvModalSave(drink) {
		console.log(drink.drinkType);
		var newDrinks = this.state.drinks;
		newDrinks[this.state.selectedDrink] = drink;
		this.setState({
			inputInvUpdateModalVisible: false,
			drinks: newDrinks
		});
		const drinkObj = this.parseDrink(drink);
		console.log("INV ID: ", this.state.inventoryId);
		dbManager.updateDrinkTypeInfo(drink.drinkType)
					.catch(e => {console.log(e)});
		dbManager.updateDrinkInventoryByType(this.state.inventoryId, 
			drinkObj
		);
	}

	onBlkModalSave(drink) {
		// upload image here
		// create a new drinkType here
		let url = dbManager.uploadImage(this.state.inventoryId, drink.drinkType.icon);
		drink.drinkType.icon = url;

		let newDrinks = this.state.drinks
		newDrinks.push(drink);
		
		this.setState({
			inputBlkUpdateModalVisible: false,
			drinks: newDrinks
		});
		console.log("OK\n");
		const drinkObj = this.parseDrink(drink);
		
		dbManager.createDrinkTypeInfo(drink.drinkType);
		dbManager.createDrinkInventory(this.state.inventoryId, drinkObj)
	}

	componentDidMount() {
		async function queryDrinks(self) {
			var event = await Event.getInstance();
			var totalInventory = new Inventory(event.inventory);
			console.log("id: ", totalInventory.id);
			await totalInventory.getData();
			self.setState({
				inventoryId: totalInventory.id,
				drinks: totalInventory.drinks,
				eventId: event.id
			});
		}
		queryDrinks(this);
	}

	render() {
		var drinkList = this.state.drinks.map((item, index) => {
			return (
				<ShadowedBox key={index} width={'30%'} square margin={5}>
					<TouchableOpacity key={item.name} onPress={() => {
						this.setState({
							inputInvUpdateModalVisible: true,
							selectedDrink: index
						});
						this.inputUpdateInventoryModal.inputDrink(this.state.drinks[index]);					
					}}>
						<Image 
							source={{uri: item.icon}}
							style={{
								width: 100,
								height: 100,
								borderRadius: 15,
								overflow: 'hidden',
								resizeMode: 'contain'
							}}/>
					</TouchableOpacity>
				</ShadowedBox>
			);
		});
		return (
			<View style={styles.container}>
				<BottomBlueBUtton text={"Complete Inventory and Add Stations"}
					onPress={() => this.props.navigation.navigate('Assign Inventory Create Station')} />
				<InputUpdateInventoryModal
					key={this.state.inputDrinkName}
					ref={m => {this.inputUpdateInventoryModal = m}}
					visible={this.state.inputInvUpdateModalVisible} 
					onSave={this.onInvModalSave.bind(this)}>
				</InputUpdateInventoryModal>
				<InputBlankInventoryModal
					visible={this.state.inputBlkUpdateModalVisible}
					onSave={this.onBlkModalSave.bind(this)}
				>
				</InputBlankInventoryModal>
				<ShadowedBox width={'80%'} height={'20%'} margin={10}>
					<View style={{
						width: '90%',
						height: '40%',
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}>
						<Text style={{fontSize: 20, fontWeight: 'bold', fontFamily: 'Arial'}}>
							Total Inventory:
						</Text>
						<Text style={{fontSize: 30, color: 'red'}}>0%</Text>
					</View>
					<View style={{
						width: '90%',
						height: '40%',
					}}>
						<View style={{
							flexDirection: 'row',
							justifyContent: 'space-between',
						}}>
							<Text style={styles.normalText}>Total Inventory Value:</Text>
							<Text style={styles.normalText}>$0.00</Text>
						</View>
						<View style={{
							flexDirection: 'row',
							justifyContent: 'space-between',
						}}>
							<Text style={styles.normalText}>Total Units:</Text>
							<Text style={styles.normalText}>0 of 0</Text>
						</View>
					</View>
				</ShadowedBox>
				<View style={{
					flexWrap: 'wrap',
					flexDirection: 'row',
					justifyContent: 'flex-start',
					width: '100%',
					paddingLeft: '2%'
				}}>
					{drinkList}
					<ShadowedBox width={'30%'} square margin={5}>
						<View style={{
							width: '100%',
							aspectRatio: 1,
							alignItems: 'center',
							justifyContent: 'center'
						}}>
							<TouchableOpacity onPress={() => {
								this.setState({inputBlkUpdateModalVisible: true});
							}}>
								<Image
									source={require('assets/add.png')}
									style={{
										width: 40,
										height: 40,
										overflow: 'hidden',
										resizeMode: 'contain',
										margin: 15
									}} 
								/>
								<Text> Add Item </Text>
							</TouchableOpacity>
						</View>
					</ShadowedBox>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f2f2f2',
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
	normalText: {
		fontSize: 17,
		fontFamily: 'Arial'
	}
});