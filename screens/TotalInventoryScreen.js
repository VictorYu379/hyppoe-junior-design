import { StyleSheet, Text, View, Image, TouchableHighlight, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import ShadowedBox from '../components/ShadowedBox';
import StationModal from '../components/StationModal';

export default function DummyScreen({ navigation }) {
	const [stationModalVisible, setStationModalVisible] = useState(false);

	const onSave = function() {
		setStationModalVisible(false);
	}

	const imageList = [
		require('../assets/event-logo.png'),
		require('../assets/coorslight.jpg'),
		require('../assets/SweetWater.png'),
		require('../assets/terrapin.png'),
		require('../assets/truly.jpeg'),
		require('../assets/smartwater.png'),
		require('../assets/cup.jpg'),
		require('../assets/table.jpg'),
		require('../assets/ice.png')
	]
	const iconList = imageList.map(img => {
		return (
			<ShadowedBox width={'30%'} square margin={5}>
				<Image 
					source={img}
					style={{
						width: '85%',
						height: '85%',
						borderRadius: 15,
						overflow: 'hidden',
						resizeMode: 'contain'
					}} />
			</ShadowedBox>
		);
	});

	return (
		<View style={styles.container}>
			<StationModal visible={stationModalVisible} onSave={onSave} />
			<TouchableOpacity
				style={{
					position: 'absolute',
					bottom: 20,
					width: '85%',
					height: '10%',
					justifyContent: 'center',
					alignItems: 'center',
					borderRadius: 25,
					shadowColor: "#000",
					shadowOffset: {
						width: 0,
						height: 4,
					},
					shadowOpacity: 0.32,
					shadowRadius: 5.46,
					elevation: 9,
					backgroundColor: 'blue',
					zIndex: 1
				}}
				onPress={() => setStationModalVisible(true)}>
				<Text style={{color: 'white', fontWeight: 'bold', fontFamily: 'Arial'}}>Complete Inventory and Add Stations</Text>
			</TouchableOpacity>
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
						<Image
							source={require('../assets/add.png')}
							style={{
								width: '40%',
								height: '40%',
								overflow: 'hidden',
								resizeMode: 'contain',
								margin: 5
							}} />
							<Text>Add Item</Text>
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