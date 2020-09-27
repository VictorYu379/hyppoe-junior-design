import { StyleSheet, Text, View, Image, TouchableHighlight, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import ShadowedBox from '../components/ShadowedBox';

export default function RunnerDashBoardScreen({ navigation }) {
	const [stationModalVisible, setStationModalVisible] = useState(false);
	const stationStats = {stationCapacity:40080, currentValue:28055, value:43286, server:4, runners:2}

	return (
		<View style={styles.container}>
			<ShadowedBox 
				width={'80%'} 
				height={'20%'} 
				margin={10}
			>
					<View style={{
							marginVertical: 20,
							width: '100%',
							height: '100%',
							flexDirection: 'column',
							justifyContent: 'flex-start',
							alignItems: 'flex-start',
							margin: 10
					}}>	
						<Text style={{fontSize: 16, fontWeight:"bold", margin:10, marginTop:20, marginLeft:20}}>Runner DashBoard</Text>
						<Text style={{fontSize: 12, color: 'gray', margin:10, marginTop:8, marginLeft:20}}>Station1:Big Tent</Text>
						<Text style={{fontSize: 12, color: 'gray', margin:10, marginTop:8, marginLeft:20}}>Runner: 1</Text>
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
				<ShadowedBox 
					width={'40%'} 
					height={'23%'}  
					margin={5}
					touchable
					onPress={() => {navigation.navigate("Runner Task Screen");}}
				>
					<View style={{
						flexDirection: 'row',
						margin: 3,
						height: '100%',
						alignItems: 'center',
						// borderWidth: 1,
					}}>
						<View style={{
							width: '50%',
							height: '100%',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
						}}>
							<View style={{
								width: '100%',
								height: '50%',
								justifyContent: 'center',
								alignItems: 'center',
							}}>
								<Text style={{fontSize: 15, fontWeight: 'bold', color: 'gray', justifyContent: 'flex-start'}}> 
									Tasks
								</Text>
							</View>
							<View style={{
								width: '100%',
								height: '50%',
								justifyContent: 'center',
								alignItems: 'center',
							}}>
								<Text style={{fontSize: 9, color: 'gray'}}> 
									Qty:19032
								</Text>
							</View>
						</View>
						<View style={{
							width: '50%',
							height: '100%',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
						}}>
							<Text style={{fontSize: 20, fontWeight: 'bold', color: 'red', justifyContent: 'center'}}> 
								2
							</Text>
							<Text style={{...styles.HeaderBoxTextSize, color: 'red'}}> 
								Pending
							</Text>
						</View>
					</View>
				</ShadowedBox>

				<ShadowedBox 
					width={'40%'} 
					height={'23%'}  
					margin={5} 
					touchable
					onPress={() => {navigation.navigate("Runner Station Inventory");}}
				>
					<View style={{
						flexDirection: 'row',
						margin: 3,
						height: '100%',
						alignItems: 'center',
						// borderWidth: 1,
					}}>
						<View style={{
							width: '60%',
							height: '100%',
							flexDirection: 'column',
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
									Station
								</Text>
								<Text style={{fontSize: 14, fontWeight: 'bold', color: 'gray', justifyContent: 'flex-start'}}> 
									Inventory
								</Text>
							</View>

							<View style={{
								width: '100%',
								height: '50%',
								justifyContent: 'center',
								alignItems: 'center',
							}}>
								<Text style={{fontSize: 9, color: 'gray'}}> 
									Qty:
								</Text>
								<Text style={{fontSize: 9, color: 'gray'}}> 
									{stationStats.currentValue} of {stationStats.stationCapacity}
								</Text>
							</View>
						</View>
						<View style={{
							width: '40%',
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
				</ShadowedBox>

				<ShadowedBox 
					width={'40%'} 
					height={'23%'} 
					margin={5} 
					touchable
					onPress={() => {navigation.navigate("Runner Request Inventory");}}
				>
					<View style={{
						flexDirection: 'row',
						margin: 3,
						height: '100%',
						alignItems: 'center',
						// borderWidth: 1,
					}}>
						<View style={{
							width: '60%',
							height: '100%',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
						}}>
							<View style={{
								width: '100%',
								height: '50%',
								justifyContent: 'center',
								alignItems: 'center',
							}}>
								<Text style={{fontSize: 15, fontWeight: 'bold', color: 'gray', justifyContent: 'flex-start'}}> 
									Request
								</Text>
							</View>
							<View style={{
								width: '100%',
								height: '50%',
								justifyContent: 'center',
								alignItems: 'center',
							}}>
								<Text style={{fontSize: 9, color: 'gray'}}> 
									Qty:2400
								</Text>
							</View>
						</View>
						<View style={{
							width: '40%',
							height: '100%',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
						}}>
							<Text style={{fontSize: 20, fontWeight: 'bold', color: 'dodgerblue', justifyContent: 'center'}}> 
								2
							</Text>
							<Text style={{...styles.HeaderBoxTextSize, color: 'dodgerblue'}}> 
								Request
							</Text>
							<Text style={{...styles.HeaderBoxTextSize, color: 'dodgerblue'}}> 
								Pending
							</Text>
						</View>
					</View>
				</ShadowedBox>

				<ShadowedBox 
					width={'40%'} 
					height={'23%'}  
					margin={5} 
					touchable
					onPress={() => {navigation.navigate("Runner Return Inventory");}}
				>
					<View style={{
						flexDirection: 'row',
						margin: 3,
						height: '100%',
						alignItems: 'center',
						// borderWidth: 1,
					}}>
						<View style={{
							width: '60%',
							height: '100%',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
						}}>
							<View style={{
								width: '100%',
								height: '50%',
								justifyContent: 'center',
								alignItems: 'center',
							}}>
								<Text style={{fontSize: 15, fontWeight: 'bold', color: 'gray', justifyContent: 'center'}}> 
									Return
								</Text>
								<Text style={{fontSize: 15, fontWeight: 'bold', color: 'gray', justifyContent: 'center'}}> 
									Inventory
								</Text>
							</View>
							<View style={{
								width: '100%',
								height: '50%',
								justifyContent: 'center',
								alignItems: 'center',
							}}>
								<Text style={{fontSize: 9, color: 'gray'}}> 
									$1200
								</Text>
							</View>
						</View>
						<View style={{
							width: '40%',
							height: '100%',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
						}}>
							<Text style={{fontSize: 20, fontWeight: 'bold', color: 'dodgerblue', justifyContent: 'center'}}> 
								100
							</Text>
							<Text style={{...styles.HeaderBoxTextSize, color: 'dodgerblue'}}> 
								Total
							</Text>
							<Text style={{...styles.HeaderBoxTextSize, color: 'dodgerblue'}}> 
								Returned Items
							</Text>
						</View>
					</View>
				</ShadowedBox>

				<ShadowedBox 
					width={'40%'} 
					height={'23%'}  
					margin={5} 
					touchable
					onPress={() => {navigation.navigate("Station Alerts Screen");}}
				>
					<View style={{
						flexDirection: 'row',
						margin: 3,
						height: '100%',
						alignItems: 'center',
						// borderWidth: 1,
					}}>
						<View style={{
							width: '60%',
							height: '100%',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
						}}>
							<Text style={{fontSize: 15, fontWeight: 'bold', color: 'gray', justifyContent: 'center'}}> 
								Alerts
							</Text>
						</View>
						<View style={{
							width: '40%',
							height: '100%',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
						}}>
							<Text style={{fontSize: 20, fontWeight: 'bold', color: 'dodgerblue', justifyContent: 'center'}}> 
								6
							</Text>
							<Text style={{...styles.HeaderBoxTextSize, color: 'dodgerblue'}}> 
								Total
							</Text>
							<Text style={{...styles.HeaderBoxTextSize, color: 'dodgerblue'}}> 
								Set Alerts
							</Text>
						</View>
					</View>
				</ShadowedBox>

				<ShadowedBox 
					width={'40%'} 
					height={'23%'}  
					margin={5} 
					touchable
					onPress={() => {navigation.navigate("Runner History Screen");}}
				>
					<View style={{
						flexDirection: 'row',
						margin: 3,
						height: '100%',
						alignItems: 'center',
						// borderWidth: 1,
					}}>
						<View style={{
							width: '60%',
							height: '100%',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
						}}>
							<View style={{
								width: '100%',
								height: '50%',
								justifyContent: 'center',
								alignItems: 'center',
							}}>
								<Text style={{fontSize: 15, fontWeight: 'bold', color: 'gray', justifyContent: 'center'}}> 
									History
								</Text>
							</View>

							<View style={{
								width: '100%',
								height: '50%',
								justifyContent: 'center',
								alignItems: 'center',
							}}>
								<Text style={{fontSize: 9, color: 'gray'}}> 
									Pending:2
								</Text>
							</View>
						</View>
						<View style={{
							width: '40%',
							height: '100%',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
						}}>
							<Text style={{fontSize: 20, fontWeight: 'bold', color: 'dodgerblue', justifyContent: 'center'}}> 
								1
							</Text>
							<Text style={{...styles.HeaderBoxTextSize, color: 'dodgerblue'}}> 
								Total
							</Text>
							<Text style={{...styles.HeaderBoxTextSize, color: 'dodgerblue'}}> 
								Inventory
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
		fontSize: 20,  
		fontWeight: 'bold', 
		fontFamily: 'Arial'
	},
	HeaderBoxTextSize: {
		fontSize: 6,  
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