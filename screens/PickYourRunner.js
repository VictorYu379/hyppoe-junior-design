import { StyleSheet, Text, View, Image, TouchableHighlight, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import ConfirmInventoryModal from 'components/ConfirmInventoryModal';
import InputBlankInventoryModal from 'components/InputBlankInventoryModal';
import ShadowedBox from 'components/ShadowedBox';
import Station from 'model/Station';
import Event, { globalEvent } from 'model/Event';
import Manager from 'model/Manager';
import Job from 'model/Job';
import Inventory from 'model/Inventory';


export default function PickYourRunner({route, navigation }) {
	
	const {stationId} = route.params
	const [runners, setrunners] = useState([]);

	useEffect(() => {
		//console.log(Station.getPickYourRunnerData(stationId))
		const runners = Station.getPickYourRunnerData(stationId);
		setrunners(runners);
		
	}, [])
	
	
	
	const runnerList = runners.map((item, index) => {
		return (
			<ShadowedBox 
				width={140} 
				height={110}
				//square 
				margin={5}
				touchable
				onPress={() => navigation.navigate('Runner Dashboard',{stationId: stationId, runnerKey:item.key})}>
				<View style={{
					width: '100%',
					aspectRatio: 1,
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'center'
				}}>
					<Image
						source={require('assets/Runner.png')}
						style={{
							width: '50%',
							height: '50%',
							overflow: 'hidden',
							resizeMode: 'contain',
							margin: 5
						}} />
					
					<View style={{
						width: '40%',
						aspectRatio: 1,
						alignItems: 'center',
						justifyContent: 'center'
					}}>
						<View style={{
							width: '100%',
							aspectRatio: 1,
							alignItems: 'center',
							justifyContent: 'space-around',
							flexWrap: 'wrap',
							flexDirection: 'column',
						}}>
							<Text style={{
								fontSize: 11, 
								fontWeight: 'bold',
							}}>
								Runner {item.key}
							</Text>


							<View style={{
								...styles.sectionTitle,
								alignItems: 'center',
							}}>
								<Text style={{
									fontSize: 10, 
								}}>
									Runner
								</Text>
							</View> 
						</View>
					</View>
					
				</View>
			</ShadowedBox>
		);
	});

	

	
	return (
		<View style={styles.container}>
			<ShadowedBox width={'80%'} height={'15%'} margin={10} touchable onPress={() => navigation.navigate('Manager Available Inventory Detailed Data List')}>
				<View style={styles.rowView}>

					<Text style={{
						fontSize: 17, 
						fontWeight:"bold",
						margin: 8,
					}}>
						Pick Your Runner Number
					</Text>

				</View>
			</ShadowedBox>
			<View style={{
				justifyContent:'center', 
			}}>
				<ScrollView style={{
					width:'100%',
					maxHeight:'100%',
				}}>
					<View style={{
						flexWrap: 'wrap',
						flexDirection: 'row',
						width: '100%',
						//height: '60%',
						paddingLeft: '2%',
					}}>
					{runnerList}
						
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
        borderTopColor: "grey",
        borderTopWidth: 1,
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