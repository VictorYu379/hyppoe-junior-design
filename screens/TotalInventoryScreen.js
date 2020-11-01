import { StyleSheet, Text, View, Image, TouchableHighlight, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import ShadowedBox from '../components/ShadowedBox';
import BottomBlueBUtton from '../components/BottomBlueButton';
import InputUpdateInventoryModal from '../components/InputUpdateInventoryModal';
import InputBlankInventoryModal from '../components/InputBlankInventoryModal';


export default function DummyScreen({ navigation }) {
	const [inputInvUpdateModalVisible, setInputInvUpdateModalVisible] = useState(false);
	const [inputBlkUpdateModalVisible, setInputBlkUpdateModalVisible] = useState(false);
	const [inputImgSource, setInputImgSource] = useState(false);
	const [inputDrinkName, SetInputDrinkName] = useState(false);

	const onInvModalSave = function() {
		setInputInvUpdateModalVisible(false);
	}

	const onBlkModalSave = function() {
		setInputBlkUpdateModalVisible(false);
	}

	const itemList = [
		{image: require('../assets/event-logo.png'), drinkName: "Bud light"},
		{image: require('../assets/coorslight.jpg'), drinkName: "Coors light"},
		{image: require('../assets/SweetWater.png'), drinkName: "Sweet water"},
		{image: require('../assets/terrapin.png'), drinkName: "Terrapin"},
		{image: require('../assets/truly.jpeg'), drinkName: "Truly"},
		{image: require('../assets/smartwater.png'), drinkName: "Smartwater"},
		{image: require('../assets/cup.jpg'), drinkName: "Cup"},
		{image: require('../assets/table.jpg'), drinkName: "Table"},
		{image: require('../assets/ice.png'), drinkName: "Ice"},
	]

	const iconList = itemList.map((item, index) => {
		return (
			<ShadowedBox key={index} width={'30%'} square margin={5}>
				<TouchableOpacity key={item.drinkName} onPress={() => {
					setInputInvUpdateModalVisible(true);
					setInputImgSource(item.image);
					SetInputDrinkName(item.drinkName);
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
	});

	return (
		<View style={styles.container}>
			<BottomBlueBUtton text={"Complete Inventory and Add Stations"} onPress={() => navigation.navigate('Assign Inventory Create Station')} color="red" />
			<InputUpdateInventoryModal
				key={inputDrinkName} 
				sourceImg={inputImgSource} 
				drinkName={inputDrinkName}
				visible={inputInvUpdateModalVisible} 
				onSave={onInvModalSave}>
			</InputUpdateInventoryModal>
			<InputBlankInventoryModal
				visible={inputBlkUpdateModalVisible}
				onSave={onBlkModalSave}
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
				{iconList}
				<ShadowedBox width={'30%'} square margin={5}>
					<View style={{
						width: '100%',
						aspectRatio: 1,
						alignItems: 'center',
						justifyContent: 'center'
					}}>
						<TouchableOpacity onPress={() => {
							setInputBlkUpdateModalVisible(true);
						}}>
							<Image
								source={require('../assets/add.png')}
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