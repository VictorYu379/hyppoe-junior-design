import { StyleSheet, Text, View, Image, TouchableHighlight, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import ShadowedBox from 'components/ShadowedBox';

export default function DummyScreen({ navigation }) {
	const [stationModalVisible, setStationModalVisible] = useState(false);

	const stationStats = {stationCapacity:40080, currentValue:28055, value:43286, server:4, runners:2}

	return (
		<View style={styles.container}>
			<ShadowedBox width={'80%'} height={'10%'} margin={10}>



					<View style={{
							marginVertical: 20,
							width: '100%',
							height: '100%',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'flex-start',
							margin: 10
					}}>
							
						<Text style={{fontSize: 16, fontWeight:"bold", margin:4, marginLeft:12}}>Pending Inventory:</Text>
						
						
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
				
				<ShadowedBox width={'40%'} height={'40%'}  margin={5} touchable>

					<View style={{
						flexDirection: 'column',
						margin: 3,
						height: '90%',
						width: '90%',
						alignItems: 'flex-start',
						//borderWidth: 1,
					}}>

						<View style={styles.sectionTitle}>
							<View style={{...styles.rowView, width:'90%'}}>
								<Text style={{fontSize: 10, fontWeight: 'bold', color: 'gray', justifyContent: 'flex-start'}}> 
									Runner 1:
								</Text>
								<Text style={{fontSize: 10, color: 'gray', justifyContent: 'flex-start'}}> 
									Bud Light
								</Text>
							</View>
						</View>
							
						<View style={styles.rowView}>
							<Text style={{fontSize: 10, fontWeight: 'bold', color: 'gray', justifyContent: 'flex-start'}}> 
								Pick Up:
							</Text>
						</View>

						<View style={styles.rowView}>
							<Text style={{fontSize: 10, color: 'gray', justifyContent: 'flex-start'}}> 
								Inventory
							</Text>
							<Text style={{fontSize: 10, fontWeight: 'bold', color: 'gold'}}>
									Pending
							</Text>
						</View>

						<View style={styles.rowView}>
							<Text style={{fontSize: 10, fontWeight: 'bold', color: 'gray', justifyContent: 'flex-start'}}> 
								Drop off:
							</Text>
						</View>

						<View style={styles.rowView}>
							<Text style={{fontSize: 10, color: 'gray', justifyContent: 'flex-start'}}> 
								Station 1
							</Text>
							<Text style={{fontSize: 10, fontWeight: 'bold', color: 'gold'}}>
									Pending
							</Text>
						</View>
					</View>


				</ShadowedBox>

				<ShadowedBox width={'40%'} height={'40%'}  margin={5} touchable>

					<View style={{
						flexDirection: 'column',
						margin: 3,
						height: '90%',
						width: '90%',
						alignItems: 'flex-start',
						//borderWidth: 1,
					}}>

						<View style={styles.sectionTitle}>
							<View style={{...styles.rowView, width:'90%'}}>
								<Text style={{fontSize: 10, fontWeight: 'bold', color: 'gray', justifyContent: 'flex-start'}}> 
									Station 1:
								</Text>
								<Text style={{fontSize: 10, color: 'gray', justifyContent: 'flex-start'}}> 
									Bud Light
								</Text>
							</View>
						</View>
							
						<View style={styles.rowView}>
							<Text style={{fontSize: 10, fontWeight: 'bold', color: 'gray', justifyContent: 'flex-start'}}> 
								Pick Up:
							</Text>
						</View>

						<View style={styles.rowView}>
							<Text style={{fontSize: 10, color: 'gray', justifyContent: 'flex-start'}}> 
								Inventory
							</Text>
							<Text style={{fontSize: 10, fontWeight: 'bold', color: 'green'}}>
									Completed
							</Text>
						</View>

						<View style={styles.rowView}>
							<Text style={{fontSize: 10, fontWeight: 'bold', color: 'gray', justifyContent: 'flex-start'}}> 
								Drop off:
							</Text>
						</View>

						<View style={styles.rowView}>
							<Text style={{fontSize: 10, color: 'gray', justifyContent: 'flex-start'}}> 
								Station 1
							</Text>
							<Text style={{fontSize: 10, fontWeight: 'bold', color: 'gold'}}>
									Pending
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
	completedText:{
		fontSize: 10, 
		fontWeight: 'bold', 
		color: 'green'
	},
	pendingText:{
		fontSize: 10, 
		fontWeight: 'bold', 
		color: 'gold'
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
	},
	rowViewclose: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "flex-start",
        padding: 2
	},
	rowViewnormal: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 2
    },
});