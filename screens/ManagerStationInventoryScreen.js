import { StyleSheet, Text, View, Image, TouchableHighlight, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import ShadowedBox from 'components/ShadowedBox';

export default function ManagerStationInventoryScreen({ navigation }) {
	const [stationModalVisible, setStationModalVisible] = useState(false);

	const stationStats = {number: 1, name: "Big Tent", stationCapacity:40080, currentValue:28055, value:43286, server:4, runners:2}
	const stationStats2 = {number: 2, name: "Main Stg", stationCapacity:40080, currentValue:0, value:0, server:4, runners:2}



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
						<Text style={[styles.percentageHeaderBoxTextSize, (stationStats.currentValue/stationStats.stationCapacity).toFixed(2) == 1 
							? styles.maxCapacityText : (stationStats.currentValue/stationStats.stationCapacity).toFixed(2) >= 0.7 
							? styles.sixtyText : (stationStats.currentValue/stationStats.stationCapacity).toFixed(2) >= 0.25 
							? styles.thirtyText : styles.criticalText]}>
							{(stationStats.currentValue*100/stationStats.stationCapacity).toFixed(0)}%
						</Text>
						<Text style={[styles.HeaderBoxTextSize, (stationStats.currentValue/stationStats.stationCapacity).toFixed(2) == 1 
							? styles.maxCapacityText : (stationStats.currentValue/stationStats.stationCapacity).toFixed(2) >= 0.7 
							? styles.sixtyText : (stationStats.currentValue/stationStats.stationCapacity).toFixed(2) >= 0.25 
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

		
				<ShadowedBox width={'40%'} height={'45%'}  margin={5} touchable onPress={() => navigation.navigate("Manager Individual Station Inventory")}>

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
									Station {stationStats.number}:
								</Text>
								<Text style={{fontSize: 14, fontWeight: 'bold', color: 'gray', justifyContent: 'flex-start'}}> 
									{stationStats.name}
								</Text>
							</View>
						<View style={{
							width: '60%',
							height: '100%',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
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
							{stationStats.currentValue} of
						</Text>
						<Text style={{fontSize: 12, color: 'gray'}}> 
							{stationStats.stationCapacity} Qty
						</Text>
					</View>

					<View style={{...styles.sectionTitle,
						width: '40%',
					}}>
						<Text style={{fontSize: 12, color: 'gray'}}> 
						 {"  "}{stationStats.value}$
						</Text>
					</View>
					
				</View>


				</ShadowedBox>
				
				<ShadowedBox width={'40%'} height={'45%'}  margin={5} touchable onPress={() => navigation.navigate("Manager Individual Station Inventory")}>

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
										Station {stationStats2.number}:
									</Text>
									<Text style={{fontSize: 14, fontWeight: 'bold', color: 'gray', justifyContent: 'flex-start'}}> 
										{stationStats2.name}
									</Text>
								</View>
							<View style={{
								width: '60%',
								height: '100%',
								flexDirection: 'column',
								justifyContent: 'center',
								alignItems: 'center',
							}}>
								<Text style={[styles.percentageHeaderBoxTextSize, stationStats2.currentValue/stationStats2.stationCapacity == 1 
								? styles.maxCapacityText : stationStats2.currentValue/stationStats2.stationCapacity >= 0.6 
								? styles.sixtyText : stationStats2.currentValue/stationStats2.stationCapacity >= 0.3 
								? styles.thirtyText : styles.criticalText]}>
									{(stationStats2.currentValue*100/stationStats2.stationCapacity).toFixed(0)}%
								</Text>
								<Text style={[styles.HeaderBoxTextSize, stationStats2.currentValue/stationStats2.stationCapacity == 1 
								? styles.maxCapacityText : stationStats2.currentValue/stationStats2.stationCapacity >= 0.6 
								? styles.sixtyText : stationStats2.currentValue/stationStats2.stationCapacity >= 0.3 
								? styles.thirtyText : styles.criticalText]}>
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
								{stationStats.currentValue} of
							</Text>
							<Text style={{fontSize: 12, color: 'gray'}}> 
								{stationStats.stationCapacity} Qty
							</Text>
						</View>

						<View style={{...styles.sectionTitle,
							width: '40%',
							alignItems: 'center',
						}}>
							<Text style={{fontSize: 12, color: 'gray'}}> 
								{stationStats2.value}$
							</Text>
							
						</View>
						
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