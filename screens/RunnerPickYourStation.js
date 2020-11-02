import { StyleSheet, Text, View, Image, TouchableHighlight, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import ShadowedBox from 'components/ShadowedBox';
import Station from 'model/Station';


export default function ServerPickYourStation({route, navigation }) {
	
	const [stations, setstations] = useState([]);

	useEffect(() => {
		const stations = Station.getPickYourStationData();
		setstations(stations);
	}, [])
	
	
	
	const stationList = stations.map((item, index) => {
		return (
			<ShadowedBox 
				width={'40%'} 
				height={'20%'}
				//square 
				margin={5}
				touchable
				onPress={() => navigation.navigate('Pick Your Runner', {stationId: item.id})}>
				<View style={{
					width: '100%',
					aspectRatio: 1,
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'center'
				}}>
					<Image
						source={require('assets/PickYourStations.png')}
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
								Station {item.stationkey}
							</Text>
							<Text style={{
								fontSize: 8, 
								fontWeight: 'bold',
							}}>
								{item.name}
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
			<ShadowedBox width={'80%'} height={'15%'} margin={10}>
				<View style={styles.rowView}>

					<Text style={{
						fontSize: 17, 
						fontWeight:"bold",
						margin: 8,
					}}>
						Pick Your Station
					</Text>

				</View>
			</ShadowedBox>
			<View style={{
				flexWrap: 'wrap',
				flexDirection: 'row',
				width: '100%',
				height: '100%',
				paddingLeft: '2%',
				marginLeft: '14%'
			}}>
				{stationList}		
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