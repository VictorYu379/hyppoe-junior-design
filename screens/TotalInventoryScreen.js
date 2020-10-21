import { StyleSheet, Text, View, Image, TouchableHighlight, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import ShadowedBox from 'components/ShadowedBox';
import BottomBlueBUtton from 'components/BottomBlueButton';
import InputUpdateInventoryModal from 'components/InputUpdateInventoryModal';
import InputBlankInventoryModal from 'components/InputBlankInventoryModal';
import { dbManager } from 'model/DBManager';

export default class TotalInventory extends React.Component {
	state = {
        inputInvUpdateModalVisible: false,
        inputBlkUpdateModalVisible: false,
        inputImgSource: false,
        inputDrinkName: false,
        drinks: []
    };

	onInvModalSave() {
		this.setState({inputInvUpdateModalVisible: false});
	}

	onBlkModalSave() {
		this.setState({inputBlkUpdateModalVisible: false});
	}

	componentDidMount() {
		async function queryDrinks(self) {
			var totalInventory = await dbManager.getTotalInventory();
			var drinkTypes = totalInventory.docs.map(doc => {
				var data = doc.data();
				return dbManager.getDrinkType(data.drinkType);
			});
			var types = await Promise.all(drinkTypes);
			var elements = types.map(function(type) {
				var drinkTypeData = type.data();
				return self.toElement({
					image: {
						uri: drinkTypeData.icon
					},
					drinkName: drinkTypeData.name
				});
			});
			self.setState({drinks: elements});
		}
		queryDrinks(this);
	}

	toElement(item) {
		return (
			<ShadowedBox width={'30%'} square margin={5}>
				<TouchableOpacity key={item.drinkName} onPress={() => {
					this.setState({
						inputInvUpdateModalVisible: true,
						inputImgSource: item.image,
						inputDrinkName: item.drinkName
					});
				}}>
					<Image 
						source={item.image}
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
	};

	render() {
		return (
			<View style={styles.container}>
				<BottomBlueBUtton text={"Complete Inventory and Add Stations"} onPress={() => navigation.navigate('Assign Inventory Create Station')} />
				<InputUpdateInventoryModal
					key={this.state.inputDrinkName} 
					sourceImg={this.state.inputImgSource} 
					drinkName={this.state.inputDrinkName}
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
					{this.state.drinks}
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