import { StyleSheet, Text, View, Image, TouchableHighlight, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import ShadowedBox from 'components/ShadowedBox';
import Station, {getGlobalStations}from 'model/Station';

export default function ManagerIndividualStationDataScreen({ route, navigation }) {
	const [stationModalVisible, setStationModalVisible] = useState(false);

	//const stationId = navigation.state
	const stationId = route.params['stationId'];
	//const stationID = JSON.stringify(stationId)
	console.log(Station.getStationDrinksDataByID(stationId))
	
	const stationData = Station.getStationInventoryDataByID(stationId)
	
	const drinksData = Station.getStationDrinksDataByID(stationId)
	// console.log(drinksData)

	const textColor = (text) => {
		let rate = Number(text);
        if (rate < 26) {
			return '#F71E0C';
		} else if (rate < 70) {
			return '#E8BD38';
		}
        return '#1CD338';
	}

	const percent = (a, b) => {
		if (Number(b) == 0) {
			return 0
		}
		return  Math.round(a * 100 / b);
	}

	const iconList = drinksData.map(item => {
		return (
			<ShadowedBox 
				width={'43%'}  
				square 
				margin={5}
                touchable>

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
						<Text style={{fontSize: 7.5, fontWeight: 'bold', color: 'gray', justifyContent: 'flex-start'}}> 
							{item.name}
						</Text>
						<View style={{
							...styles.sectionTitle,
							justifyContent: 'center', 
							alignItems: 'center',
						}}>
							<Text style={{
								...styles.percentageSmallboxTextSize, 
								color: textColor(percent(item.avail, item.total)),
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
			<ShadowedBox width={'80%'} height={'20%'} margin={10} touchable onPress={() => navigation.navigate("Individual Station Inventory Detailed Data Screen", {
				stationId: stationId,
			})}>


				<View style={{
							flexDirection: 'row',
							justifyContent: 'center',
							alignItems: 'center',
				}}>


					<View style={{
							width: '70%',
							//height: '40%',
							marginVertical: 15,
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							margin: 10
					}}>
						<View style={{
							width: '70%',
							height: '50%',
							flexDirection: 'column',
							justifyContent: 'flex-start',
							alignItems: 'flex-start',
						}}>
							<View  style={styles.sectionTitle}>
							<Text style={{fontSize: 20, fontWeight:"bold"}}>Station {stationData.key}:</Text>
							</View>
							<Text style={{fontSize: 10, color: 'gray'}}>{stationData.avail} of {stationData.total}</Text>
							<Text style={{fontSize: 10, color: 'gray'}}>Qty ${stationData.value}</Text>
						</View>


						<View style={{
							width: '70%',
							height: '50%',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'flex-start',
						}}>
							<Text style={{fontSize: 11, color: 'gray'}}>Servers:      {stationData.serverNum}</Text>
							<Text style={{fontSize: 11, color: 'gray'}}>Runners:      {stationData.runnerNum}</Text>
						</View>
					</View>








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
							color: textColor(percent(stationData.avail, stationData.total))
						}}>
							{percent(stationData.avail, stationData.total)}%
						</Text>
						<Text style={{
							...styles.HeaderBoxTextSize, 
							color: textColor(percent(stationData.avail, stationData.total))
						}}>
								Available Inventory
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