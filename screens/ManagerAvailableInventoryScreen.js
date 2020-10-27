import { StyleSheet, Text, View, Image, TouchableHighlight, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import ConfirmDeliveryModal from 'components/ConfirmDeliveryModal';
import InputBlankInventoryModal from 'components/InputBlankInventoryModal';
import ShadowedBox from 'components/ShadowedBox';
import Station from 'model/Station';
import Event, { globalEvent } from 'model/Event';
import Manager from 'model/Manager';
import Job from 'model/Job';
//import console = require('console');

export default function ManagerAvailableInventoryScreen({ navigation }) {
	const [additionalInventoryModal, setAdditionalInventoryModal] = useState(false);
	const [imageSelected, setImageSelected] = useState(null);
	const [drinkSelected, setDrinkSelected] = useState(null);
	const [stations, setStations] = useState([]);
	const [inputBlkUpdateModalVisible, setInputBlkUpdateModalVisible] = useState(false);
	const [availItems, setAvail] = useState([]);
	const [soldItems, setSold] = useState([]);
	const [totalItems, setTotal] = useState([]);
	const [manager, setManager] = useState([]);

	

	useEffect(() => {
		Event.getInstance()
			.then(event => Station.getStations(event.stations))
			.then(stas => {
				var [avail, sold, total] = Station.getTotalAvailableInventoryData(stas);
				setAvail(avail);
				setSold(sold);
				setTotal(total);
				var stationKeys = [];
				sold.map(station => {
					stationKeys.push(station.stationKey);
				});
				
				setStations(stationKeys);
			})
		Manager.getInstance().then(manager => { setManager(manager); });
		// Event.getInstance().then(event => { setEvent(event); });
		// Manager.getInstance().then(manager => { setManager(manager); });
	}, [])
	
	//console.log(availItems)

	const data = availItems.map(function(e, i) {
		e.total = totalItems[i];
		return e
	  });

	console.log(data)

	const imageList = [
		{img:require('assets/event-logo.png'), maxCapacity:8016, currentCapacity:2004, name:'BudLight'},
		{img:require('assets/coorslight.jpg'), maxCapacity:8016, currentCapacity:4008, name:'Coorslight'},
		{img:require('assets/terrapin.png'), maxCapacity:8016, currentCapacity:7214, name:'Terrapin'},
		{img:require('assets/truly.jpeg'), maxCapacity:8016, currentCapacity:7214, name:'Truly'},
		{img:require('assets/smartwater.png'), maxCapacity:8016, currentCapacity:8016, name:'smartWater'},
		{img:require('assets/cup.jpg'), maxCapacity:10000, currentCapacity:9500, name:'Cups'}
	]

	

	const textColor = (text) => {
		let rate = Number(text);
        if (rate < 26) {
			return '#F71E0C';
		} else if (rate < 70) {
			return '#E8BD38';
		}
        return '#1CD338';
	}

	const total = (text) => {
		let res = 0;
		if (text == 'total') {
			totalItems.map(num => res += num);
		} else if (text == 'avail') {
			availItems.map(item => res += item.avail);
		} else if (text == 'sold') {
			soldItems.map(station => {
				station.sold.map(item => res += item.sold);
			});
		} else {
			soldItems.map(station => {
				if (station.stationKey == text) {
					station.sold.map(item => res += item.sold);
				}
			});
		}
		return res;
	}

	const percent = (a, b) => {
		if (Number(b) == 0) {
			return 0
		}
		return  Math.round(a * 100 / b);
	}

	const formatNum = (num) => {
		if (num != null) {
			return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
		}
	}

	

	const iconList = data.map((item, index) => {
		return (
			<ShadowedBox 
				key={index}
				width={'43%'}  
				square 
				margin={5}
                touchable
				onPress={() => {
					setImageSelected({uri: item.icon});
					setDrinkSelected(item.name);
					setAdditionalInventoryModal(true);
				}}>

				<View style={{
					flexDirection: 'row',
					margin: 3,
					height: '80%',
					alignItems: 'center',
					// borderWidth: 1,
				}}>

					<Image 
						source={{uri: item.icon}}
						style={{
							width: '60%',
							height: '100%',
							justifyContent: 'flex-start',
							alignItems: 'flex-start',
							borderRadius: 15,
							overflow: 'hidden',
							resizeMode: 'contain',
							marginHorizontal: 2
							// borderWidth: 5
						}} />



					<View style={{
						width: '40%',
						height: '50%',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
					}}>
						<Text style={{fontSize: 7.5, fontWeight: 'bold', color: 'gray', justifyContent: 'flex-start'}}> {item.name}</Text>
						<View style={{...styles.sectionTitle, justifyContent: 'center', alignItems: 'center',}}>
							<Text style={{
								...styles.percentageSmallboxTextSize, 
								color: textColor(percent(item.avail, item.total))
							}}>
								{percent(item.avail, item.total)}%
							</Text>
						</View>
						<Text style={{fontSize: 6, color: 'gray'}}> {item.avail} of {item.total}</Text>
					</View>
					
				</View>


			</ShadowedBox>
		);
	});

	return (
		<View style={styles.container}>
			<InputBlankInventoryModal
				visible={inputBlkUpdateModalVisible}
				onSave={() => setInputBlkUpdateModalVisible(false)}
			>
			</InputBlankInventoryModal>
			<ConfirmDeliveryModal
                sourceImg={imageSelected} 
                drinkName={drinkSelected}
                pairedItems={[
                    "12 ounce cup"
                ]}
				visible={additionalInventoryModal} 
				onSave={() => setAdditionalInventoryModal(false)}/>
			<ShadowedBox width={'80%'} height={'15%'} margin={10} touchable onPress={() => navigation.navigate('Manager Available Inventory Detailed Data List')}>
				<View style={styles.rowView}>

					<Text style={{
						fontSize: 17, 
						fontWeight:"bold",
						margin: 8,
					}}>
						Available Inventory:
					</Text>

					<View style={{
							width: '30%',
							height: '80%',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							marginRight: 20,
							color: 'dodgerblue'
					}}>
						<Text style={{
							...styles.percentageHeaderBoxTextSize, 
							color: textColor(percent(total('avail'), total('total'))),
						}}>
							{percent(total('avail'), total('total'))}%
						</Text>
					</View>
				</View>
			</ShadowedBox>
			<View style={{
				justifyContent:'center', 
			}}>
				<ScrollView style={{width:'100%',maxHeight:'100%',marginLeft:20}}>
					<View style={{
						flexWrap: 'wrap',
						flexDirection: 'row',
						width: '100%',
						//height: '60%',
						paddingLeft: '2%',
					}}>
						{iconList}
						<ShadowedBox 
							width={'43%'} 
							square 
							margin={5}
							touchable
							onPress={() => setInputBlkUpdateModalVisible(true)}>
							<View style={{
								width: '100%',
								aspectRatio: 1,
								alignItems: 'center',
								justifyContent: 'center'
							}}>
								<Image
									source={require('assets/add.png')}
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
				</ScrollView>
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
	},
    sectionTitle: {
        color: "lightgrey",
        fontFamily: "Arial-BoldMT",
        fontSize: 20,
        fontWeight: "bold",
		textAlign: "left",
        borderBottomColor: "grey",
        borderBottomWidth: 1,
        width: "100%"
    },
	rowView: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 2
	},
	percentageSmallboxTextSize: {
		fontSize: 16, 
    },

	maxCapacityText: {
        color: 'dodgerblue'
    },
    sixtyText: {
        color: 'limegreen'
    },
    thirtyText: {
        color: 'darkkhaki'
	},
	criticalText: {
        color: 'red'
	},
	percentageHeaderBoxTextSize: {
		fontSize: 24,  
		fontWeight: 'bold', 
		fontFamily: 'Arial'
	},
	HeaderBoxTextSize: {
		fontSize: 13,  
	}
});