import { StyleSheet, Text, View, Image, TouchableHighlight, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import ShadowedBox from 'components/ShadowedBox';
import Station from 'model/Station';
import Event, { globalEvent } from 'model/Event';
import Manager from 'model/Manager';
import Job from 'model/Job';
import Inventory from 'model/Inventory';
import {globalServers} from 'model/Server';


export default function PickYourRole({ navigation }) {
	

	const [serverCount, setServerCount] = useState(0);
	const [runnerCount, setRunnerCount] = useState(0);
	const [managerCount, setManagerCount] = useState(0);

	useEffect(() => {
		var serverCount = Station.getNumOfServers();
		setServerCount(serverCount);
		var runnerCount = Station.getNumOfRunners();
		setRunnerCount(runnerCount);
		var managerCount = Event.getNumOfManagers();
		setManagerCount(managerCount);
	}, [])
	
	return (
		<View style={styles.container}>
			<ShadowedBox width={'80%'} height={'15%'} margin={10}>
				<View style={styles.rowView}>

					<Text style={{
						fontSize: 17, 
						fontWeight:"bold",
						margin: 8,
					}}>
						Pick Your Role:
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
				<ShadowedBox 
					width={'40%'} 
					height={'20%'}
					//square 
					margin={5}
					touchable
					onPress={() => navigation.navigate('Server Pick Your Station')}>
					<View style={{
						width: '100%',
						aspectRatio: 1,
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'center'
					}}>
						<Image
							source={require('assets/Server.png')}
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
									marginBottom: 10,
								}}>
									Server
								</Text>

								<View style={styles.sectionTitle}>
									<Text style={{
										fontSize: 10, 
									}}>
										Servers: {serverCount}
									</Text>
								</View>
							</View>
						</View>
						
					</View>
				</ShadowedBox>

				<ShadowedBox 
					width={'40%'} 
					height={'20%'}
					//square 
					margin={5}
					touchable
					onPress={() => navigation.navigate('Runner Pick Your Station')}>
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
									marginBottom: 10,
								}}>
									Runner
								</Text>

								<View style={styles.sectionTitle}>
									<Text style={{
										fontSize: 10, 
									}}>
										Runners: {runnerCount}
									</Text>
								</View>
							</View>
						</View>
						
					</View>
				</ShadowedBox>


				<ShadowedBox 
					width={'40%'} 
					height={'20%'}
					//square 
					margin={5}
					touchable
					onPress={() => navigation.navigate('Manager Dashboard')}>
					<View style={{
						width: '100%',
						aspectRatio: 1,
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'center'
					}}>
						<Image
							source={require('assets/Manager.png')}
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
									marginBottom: 10,
								}}>
									Manager
								</Text>

								<View style={styles.sectionTitle}>
									<Text style={{
										fontSize: 9, 
									}}>
										Managers: {managerCount}
									</Text>
								</View>
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
		alignItems: 'center',
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