import { StyleSheet, Text, View, Image, TouchableHighlight, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import ShadowedBox from 'components/ShadowedBox';
import Station, {getGlobalStations}from 'model/Station';



export default function ManagerStationInventoryScreen({ navigation }) {
	const [stationModalVisible, setStationModalVisible] = useState(false);

	// TODO: When clicking on the box and navigate to Individual Station Inventory, 
	// the stationID of the directed station need to be set as below.
	Station.setInstance("P7HFuidmDgcaRRovoRjK"); // substitute the literal string with stationID towards the target station
	console.log(getGlobalStations())
	const StationDataList = Station.getStationInventoryData()
	const [availItems,soldItems,totalItems] = Station.getTotalDetailedData()

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

	const totalValue = (text) => {
		let res = 0;
		if (text == 'total') {
			availItems.map(item => res += total[item.key] * item.price);
		} else if (text == 'avail') {
			availItems.map(item => res += item.avail * item.price);
		} else if (text == 'sold') {
			soldItems.map(station => {
				station.sold.map(item => res += item.sold * item.price);
			});
		} else {
			soldItems.map(station => {
				if (station.stationKey == text) {
					station.sold.map(item => res += item.sold * item.price);
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


	const stationList = StationDataList.map(item => {
		return (
			<ShadowedBox width={'40%'} height = {100}  margin={5} touchable onPress={() => navigation.navigate("Manager Individual Station Inventory", {stationId: item.id})}>

				<View style={{
					flexDirection: 'row',
					margin: 3,
					height: '40%',
					alignItems: 'center',
					// borderWidth: 1,
				}}>


					<View style={{
						width: '60%',
						height: '100%',
						flexDirection: 'row',
						justifyContent: 'center',
						alignItems: 'center',
					}}>
							<View style={{
								width: '100%',
								height: '50%',
								justifyContent: 'center',
								alignItems: 'center',
							}}>
								<Text style={{fontSize: 14, fontWeight: 'bold', color: 'gray', justifyContent: 'flex-start'}}> 
									Station {item.key}:
								</Text>
								<Text style={{fontSize: 14, fontWeight: 'bold', color: 'gray', justifyContent: 'flex-start'}}> 
									{item.name}
								</Text>
							</View>
						<View style={{
							width: '60%',
							height: '100%',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
						}}>
							<Text style={{
								...styles.percentageHeaderBoxTextSize, 
								color: textColor(percent(item.avail, item.total)),
							}}>
								{percent(item.avail, item.total)}%
							</Text>
							<Text style={{
								...styles.HeaderBoxTextSize, 
								color: textColor(percent(item.avail, item.total)),
							}}>
								Total Available
							</Text>
						</View>

					</View>

				
					

				</View>

				<View style={{
					flexDirection: 'row',
					margin: 3,
					height: '40%',
					alignItems: 'center',
					// borderWidth: 1,
				}}>
					<View style={{
						width: '50%',
						marginLeft: 10,
					}}>
						<Text style={{fontSize: 12, color: 'gray'}}> 
							{item.avail} of
						</Text>
						<Text style={{fontSize: 12, color: 'gray'}}> 
							{item.total} Qty
						</Text>
					</View>

					<View style={{...styles.sectionTitle,
						width: '40%',
					}}>
						<Text style={{fontSize: 12, color: 'gray'}}> 
						 {item.value}$
						</Text>
					</View>
					
				</View>


			</ShadowedBox>
		);
	});







	return (
		<View style={styles.container}>
			<ShadowedBox width={'80%'} height={'15%'} margin={10} touchable onPress={() => navigation.navigate("Manager Total Station Inventory Detailed Data")}>
				<View style={{...styles.rowView}}>

					<Text style={{
						fontSize: 17, 
						fontWeight:"bold",
						margin: 8,
						marginTop: 0,
					}}>
						Station Inventory:
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
						<Text style={{
							...styles.HeaderBoxTextSize, 
							color: textColor(percent(total('avail'), total('total')))
						}}>
							Available Inventory
						</Text>
					</View>
				</View>
			</ShadowedBox>

			<ScrollView style={{width:'100%',maxHeight:'100%',marginLeft:20}}>			
				<View style={{
					flexWrap: 'wrap',
					flexDirection: 'row',
					justifyContent: 'flex-start',
					width: '100%',
					//height: '60%',
					paddingLeft: '5%',
				}}>
					{stationList}
				</View>
			</ScrollView>	
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
        borderLeftColor: "grey",
        borderLeftWidth: 1,
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
		fontSize: 20,  
		fontWeight: 'bold', 
		fontFamily: 'Arial'
	},
	HeaderBoxTextSize: {
		fontSize: 9,  
	},
	Boundingbox:{
		fontSize: 20, 
		fontWeight: 'bold',  
		justifyContent: 'center',
		alignItems: 'center',
		color: "dodgerblue",
        borderBottomColor: "dodgerblue",
		borderBottomWidth: 1,
		borderTopColor: "dodgerblue",
		borderTopWidth: 1,
		borderLeftColor: "dodgerblue",
		borderLeftWidth: 1,
		borderRightColor: "dodgerblue",
		borderRightWidth: 1,
        width: "100%"
	}
});