import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import ShadowedBox from 'components/ShadowedBox';
import BottomBlueBUtton from 'components/BottomBlueButton';
import InputUpdateInventoryModal from 'components/InputUpdateInventoryModal';
import InputBlankInventoryModal from 'components/InputBlankInventoryModal';
import { globalInventory } from 'model/Inventory';
import { globalEvent } from 'model/Event';
import { dbManager } from '../model/DBManager';


export default class TotalInventory extends React.Component {
	state = {
        inputInvUpdateModalVisible: false,
		inputBlkUpdateModalVisible: false,
		selectedDrink: 0,
		drinks: [],
		percentage: 0,
		totalValue: 0.00,
		totalUnits: 0,
		inventoryId: null,
	};

	onInvModalSave(drink) {
		var newDrinks = this.state.drinks;
		newDrinks[this.state.selectedDrink] = drink;
		console.log(drink);
		this.setState({
			inputInvUpdateModalVisible: false,
			drinks: newDrinks
		});
		globalInventory.updateDrink(drink).then(r => this.updateData());
	}

	onBlkModalSave(drink) {
		// upload image here
		// create a new drinkType here
		//let url = dbManager.uploadImage(this.state.inventoryId, drink.drinkType.icon);
		//drink.drinkType.icon = url;
		console.log("Icon: ", drink.drinkType.icon);
		//dbManager.uploadImage(globalEvent.id, drink.drinkType.icon)

		let newDrinks = this.state.drinks
		newDrinks.push(drink);

		this.setState({
			inputBlkUpdateModalVisible: false,
			drinks: newDrinks
		});

		console.log("OK\n");
		globalInventory.addDrinkType(drink).then(r => {
			console.log("Return value:", r[0].id);
			let newDrink = {typeId: r[0].id, ...drink};
			console.log("Type: ", newDrink.typeId);
			globalInventory.addDrink(newDrink).catch(e => console.log(e));
			this.updateData();
		}).catch(e => console.log(e));
	}

	componentDidMount() {
		this.updateData();
	}

	updateData() {
		var [quantity, value] = globalInventory.getTotalInventory();
		console.log(globalInventory.drinks);
		this.setState({
			drinks: globalInventory.drinks,
			percentage: quantity > 0 ? 100 : 0,
			totalValue: value,
			totalUnits: quantity,
			inventoryId: globalInventory.id,
			eventId: globalEvent.id
		});
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
						<Text style={{fontSize: 30, color: 'red'}}>{this.state.percentage}%</Text>
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
							<Text style={styles.normalText}>${this.state.totalValue}</Text>
						</View>
						<View style={{
							flexDirection: 'row',
							justifyContent: 'space-between',
						}}>
							<Text style={styles.normalText}>Total Units:</Text>
							<Text style={styles.normalText}>{this.state.totalUnits} of {this.state.totalUnits}</Text>
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