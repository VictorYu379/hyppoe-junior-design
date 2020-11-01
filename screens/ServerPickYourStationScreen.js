import { StyleSheet, Text, View, Image, TouchableHighlight, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import ShadowedBox from '../components/ShadowedBox';

export default function DummyScreen({ navigation }) {
	const [stationModalVisible, setStationModalVisible] = useState(false);

	const stationStats = {stationCapacity:40080, currentValue:28055, value:43286, server:4, runners:2}

	return (
		<View style={styles.container}>
			<ShadowedBox width={'80%'} height={'12%'} margin={10}>



					<View style={{
							marginVertical: 20,
							width: '100%',
							height: '100%',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'flex-start',
							margin: 10,
							marginTop: 10,
					}}>
							
						<Text style={{fontSize: 16, fontWeight:"bold", margin:4, marginLeft:12}}>Pick Your Station:</Text>
						
						
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

					<View style={{
							width: '50%',
							height: '100%',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							marginLeft: 60
						}}>
							<View style={{
								width: '100%',
								height: '50%',
								justifyContent: 'center',
								alignItems: 'center',
								marginTop: 20
							}}>
								<Text style={{fontSize: 12, fontWeight: 'bold', color: "#5C5A5A", justifyContent: 'flex-start'}}> 
									Station 1
								</Text>
								<Text style={{fontSize: 12, fontWeight: 'bold', color: "#5C5A5A", justifyContent: 'flex-start'}}> 
									Big Tent
								</Text>
								<View  style={styles.sectionTitle}></View>
							</View>

							<View style={{
								width: '100%',
								height: '50%',
								justifyContent: 'center',
								alignItems: 'center',
							}}>
							</View>
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
						marginTop: 3
					}}>
					
					<View style={{
							width: '50%',
							height: '100%',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							marginLeft: 60
						}}>
							<View style={{
								width: '100%',
								height: '50%',
								justifyContent: 'center',
								alignItems: 'center',
							}}>
								<Text style={{fontSize: 12, fontWeight: 'bold', color: "#5C5A5A", justifyContent: 'flex-start'}}> 
									Station 2
								</Text>
								<Text style={{fontSize: 12, fontWeight: 'bold', color: "#5C5A5A", justifyContent: 'flex-start'}}> 
									Main
								</Text>
								<Text style={{fontSize: 12, fontWeight: 'bold', color: "#5C5A5A", justifyContent: 'flex-start'}}> 
									Stage
								</Text>
							</View>

							<View style={{
								width: '100%',
								height: '50%',
								justifyContent: 'center',
								alignItems: 'center',
							}}>
							</View>
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
        borderBottomColor: "#B8C4BB",
        borderBottomWidth: 1,
		width: "80%",
		marginTop: 30
    },
	rowView: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
		padding: 2,
		marginLeft: 60
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