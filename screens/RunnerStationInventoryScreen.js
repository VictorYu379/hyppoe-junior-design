import { StyleSheet, Text, View, Image, TouchableHighlight, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import ShadowedBox from '../components/ShadowedBox';

export default function DummyScreen({ navigation }) {
	const [stationModalVisible, setStationModalVisible] = useState(false);

	const stationStats = {stationCapacity:40080, currentValue:28055, value:43286, server:4, runners:2}

	const imageList = [
		{img:require('../assets/event-logo.png'), maxCapacity:8016, currentCapacity:2004, name:'BudLight'},
		{img:require('../assets/coorslight.jpg'), maxCapacity:8016, currentCapacity:4008, name:'Coorslight'},
		{img:require('../assets/terrapin.png'), maxCapacity:8016, currentCapacity:7214, name:'Terrapin'},
		{img:require('../assets/truly.jpeg'), maxCapacity:8016, currentCapacity:7214, name:'Truly'},
		{img:require('../assets/smartwater.png'), maxCapacity:8016, currentCapacity:8016, name:'smartWater'},
		{img:require('../assets/cup.jpg'), maxCapacity:10000, currentCapacity:9500, name:'Cups'}
	]
	const iconList = imageList.map(item => {
		return (
			<ShadowedBox width={'40%'} height={'25%'}  margin={5}>

				<View style={{
					flexDirection: 'row',
					margin: 3,
					height: '80%',
					alignItems: 'center',
					// borderWidth: 1,
				}}>

					<Image 
						source={item.img}
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
						<Text style={[styles.percentageSmallboxTextSize, item.currentCapacity/item.maxCapacity == 1 
							? styles.maxCapacityText : item.currentCapacity/item.maxCapacity >= 0.6 
							? styles.sixtyText : item.currentCapacity/item.maxCapacity >= 0.3 
							? styles.thirtyText : styles.criticalText]}>{(item.currentCapacity*100/item.maxCapacity).toFixed(0)}%</Text>
						</View>
						<Text style={{fontSize: 6, color: 'gray'}}> {item.currentCapacity} of {item.maxCapacity}</Text>
					</View>
					
				</View>


			</ShadowedBox>
		);
	});

	return (
		<View style={styles.container}>
			<ShadowedBox width={'80%'} height={'20%'} margin={10}>


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
							<Text style={{fontSize: 20, fontWeight:"bold"}}>Station 1:</Text>
							</View>
							<Text style={{fontSize: 10, color: 'gray'}}>{stationStats.currentValue} of {stationStats.stationCapacity}</Text>
							<Text style={{fontSize: 10, color: 'gray'}}>Qty ${stationStats.value}</Text>
						</View>


						<View style={{
							width: '70%',
							height: '50%',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'flex-start',
						}}>
							<Text style={{fontSize: 11, color: 'gray'}}>Servers:      {stationStats.server}</Text>
							<Text style={{fontSize: 11, color: 'gray'}}>Runners:      {stationStats.runners}</Text>
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
						<Text style={[styles.percentageHeaderBoxTextSize, stationStats.currentValue/stationStats.stationCapacity == 1 
							? styles.maxCapacityText : stationStats.currentValue/stationStats.stationCapacity >= 0.6 
							? styles.sixtyText : stationStats.currentValue/stationStats.stationCapacity >= 0.3 
							? styles.thirtyText : styles.criticalText]}>
							{(stationStats.currentValue*100/stationStats.stationCapacity).toFixed(0)}%
						</Text>
						<Text style={[styles.HeaderBoxTextSize, stationStats.currentValue/stationStats.stationCapacity == 1 
							? styles.maxCapacityText : stationStats.currentValue/stationStats.stationCapacity >= 0.6 
							? styles.sixtyText : stationStats.currentValue/stationStats.stationCapacity >= 0.3 
							? styles.thirtyText : styles.criticalText]}>
								Available Inventory
						</Text>
					</View>

		

				</View>



			</ShadowedBox>


			<View style={{
				flexWrap: 'wrap',
				flexDirection: 'row',
				justifyContent: 'center',
				width: '100%',
				//height: '60%',
				paddingLeft: '2%'
			}}>
				{iconList}

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