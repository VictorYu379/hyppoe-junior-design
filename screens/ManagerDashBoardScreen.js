import { StyleSheet, Text, View, Image, TouchableHighlight, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import ShadowedBox from 'components/ShadowedBox';
import { NavigationContainer } from '@react-navigation/native';
import Accordion from 'react-native-collapsible/Accordion';
import Station from 'model/Station';
import Inventory from 'model/Inventory';
import Event, { globalEvent } from 'model/Event';
import Manager from 'model/Manager';
import Job from 'model/Job';  



export default function ManagerDashBoardScreen({ navigation }) {
	const [stationModalVisible, setStationModalVisible] = useState(false);

	const stationStats = { stationCapacity: 40080, currentValue: 28055, value: 43286, server: 4, runners: 2 }

	const [inventorySummary, setInventorySummary] = useState([]);
	const [pendingInventorySummary, setpendingInventorySummary] = useState([]);
	const [stationInventorySummary, setstationInventorySummary] = useState([]);
	const [stationNum, setstationNum] = useState([]);
	const [returnInventorySummary, setreturnInventorySummary] = useState([]);
	const [assignInventorySummary, setassignInventorySummary] = useState([]);
	const [runnersSummary, setrunnersSummary] = useState([]);
	const [alertsSummary, setalertsSummary] = useState([]);

	// The second argument [] is to make useEffect run only once (like componentDidMount)
	useEffect(() => {
		// Get inventory details (avail of total qty, total available percentage, total value)
		//console.log(Inventory.getInventorySummary()); all stations

		// Get station inventory details (avail of total qty, total available percentage)
		// console.log(Station.getStationInventorySummary()); // All stations
		// console.log(Station.getStationInventorySummary("P7HFuidmDgcaRRovoRjK")); // Station 1
		// console.log(Station.getStationInventorySummary("eloF9YmvIfMXKvUZDa9m")); // Station 2

		// Get number of stations;
		// console.log(Station.getNumOfStations()); 

		// Get number of stations below inventory;
		// console.log(Station.getNumOfStationBelowInventory());

		// Get [number of pending jobs, total qty, total value]
		//console.log(Job.getNumOfJobsInTransit()); // All stations

		// console.log(Job.getNumOfJobsInTransit("P7HFuidmDgcaRRovoRjK")); // Station 1
		// console.log(Job.getNumOfJobsInTransit("eloF9YmvIfMXKvUZDa9m")); // Station 2

		// Get [number of returned items, total value]
		// console.log(Job.getNumOfReturnItems()); // All stations
		// console.log(Job.getNumOfReturnItems("P7HFuidmDgcaRRovoRjK")); // Station 1
		// console.log(Job.getNumOfReturnItems("eloF9YmvIfMXKvUZDa9m")); // Station 2

		// Get number of runners
		// console.log(Station.getNumOfRunners()); // All stations
		// console.log(Station.getNumOfRunners("P7HFuidmDgcaRRovoRjK")); // Station 1
		// console.log(Station.getNumOfRunners("eloF9YmvIfMXKvUZDa9m")); // Station 2

		// Get number of set alerts;
		// console.log(Event.getNumOfAlerts()); 	
		
		
		var inventorySummary = Inventory.getInventorySummary();
		setInventorySummary(inventorySummary);
		var pendingInventorySummary = Job.getNumOfJobsPending();
		setpendingInventorySummary(pendingInventorySummary);
		var stationInventorySummary = Station.getStationInventorySummary();
		setstationInventorySummary(stationInventorySummary);
		var stationNum = Station.getNumOfStations();
		setstationNum(stationNum);
		var returnInventorySummary = Job.getNumOfReturnItems();
		setreturnInventorySummary(returnInventorySummary);
		var assignInventorySummary = Station.getNumOfStationBelowInventory();
		setassignInventorySummary(assignInventorySummary);
		var runnersSummary = Station.getNumOfRunners();
		setrunnersSummary(runnersSummary);
		var alertsSummary = Event.getNumOfAlerts();
		setalertsSummary(alertsSummary);

		//console.log(Inventory.getDrinksSummary())

	}, [])


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

	const formatNum = (num) => {
		if (num != null) {
			return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
		}
	}

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

					<Text style={{ fontSize: 16, fontWeight: "bold", margin: 10, marginTop: 10, marginLeft: 20 }}>Manager DashBoard</Text>
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


				<ShadowedBox width={'40%'} height={'19%'} margin={5} touchable onPress={() => navigation.navigate('Manager Available Inventory')}>

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
								<Text style={{ fontSize: 14, fontWeight: 'bold', color: 'gray', justifyContent: 'flex-start' }}>
									Available
								</Text>
								<Text style={{ fontSize: 14, fontWeight: 'bold', color: 'gray', justifyContent: 'flex-start' }}>
									Inventory
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
									color: textColor(percent(inventorySummary[0], inventorySummary[1])),
								}}>
									{percent(inventorySummary[0], inventorySummary[1])}%
								</Text>
								<Text style={{
									...styles.HeaderBoxTextSize, 
									color: textColor(percent(inventorySummary[0], inventorySummary[1])),
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
							<Text style={{ fontSize: 12, color: 'gray' }}>
								{formatNum(inventorySummary[0])} of
						</Text>
							<Text style={{ fontSize: 12, color: 'gray' }}>
								{formatNum(inventorySummary[1])} Qty
						</Text>
						</View>

						<View style={{
							...styles.sectionTitle,
							width: '40%',
							flexDirection: 'column',
							justifyContent: 'center',
						}}>
							<Text style={{ 
								fontSize: 12, 
								color: 'gray',
							}}>
								{formatNum(inventorySummary[3])}$
							</Text>
						</View>

					</View>


				</ShadowedBox>
				<ShadowedBox width={'40%'} height={'19%'} margin={5} touchable onPress={() => navigation.navigate('Manager Pending Inventory')}>

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
								<Text style={{ fontSize: 14, fontWeight: 'bold', color: 'gray', justifyContent: 'flex-start' }}>
									Pending
								</Text>
								<Text style={{ fontSize: 14, fontWeight: 'bold', color: 'gray', justifyContent: 'flex-start' }}>
									Inventory
								</Text>
							</View>
							<View style={{
								width: '60%',
								height: '100%',
								flexDirection: 'column',
								justifyContent: 'center',
								alignItems: 'center',
							}}>
								<Text style={{ fontSize: 20, color: 'gold', fontWeight: 'bold', justifyContent: 'center' }}>
									{pendingInventorySummary[0]}
								</Text>
								<Text style={{ ...styles.HeaderBoxTextSize, color: 'gold' }}>
									Total Pending
								</Text>
							</View>

						</View>




					</View>

					<View style={{
						flexDirection: 'row',
						margin: 2,
						height: '40%',
						alignItems: 'center',
						// borderWidth: 1,
					}}>
						<View style={{
							width: '50%',
							marginLeft: 10,
						}}>
							
							<Text style={{ fontSize: 12, color: 'gray' }}>
								{formatNum(pendingInventorySummary[1])} Qty
							</Text>
						</View>

						<View style={{
							...styles.sectionTitle,
							width: '40%',
						}}>
							<Text style={{ fontSize: 12, color: 'gray' }}>
								{formatNum(pendingInventorySummary[2])}$
						</Text>
						</View>

					</View>


				</ShadowedBox>
				<ShadowedBox width={'40%'} height={'19%'} margin={5} touchable onPress={() => navigation.navigate("Manager Station Inventory")}>

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
								<Text style={{ fontSize: 14, fontWeight: 'bold', color: 'gray', justifyContent: 'flex-start' }}>
									Station
									</Text>
								<Text style={{ fontSize: 14, fontWeight: 'bold', color: 'gray', justifyContent: 'flex-start' }}>
									Inventory
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
									color: textColor(percent(stationInventorySummary[0], stationInventorySummary[1])),
								}}>
									{percent(stationInventorySummary[0], stationInventorySummary[1])}%
								</Text>
								<Text style={{
									...styles.HeaderBoxTextSize, 
									color: textColor(percent(stationInventorySummary[0], stationInventorySummary[1])),
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
							<Text style={{ fontSize: 12, color: 'gray' }}>
								{formatNum(stationInventorySummary[0])} of
							</Text>
							<Text style={{ fontSize: 12, color: 'gray' }}>
								{formatNum(stationInventorySummary[1])} Qty
							</Text>
						</View>

						<View style={{
							...styles.sectionTitle,
							width: '40%',
							alignItems: 'center',
						}}>
							<Text style={{ fontSize: 12, color: 'gray' }}>
								{formatNum(stationNum)}
							</Text>
							<Text style={{ fontSize: 12, color: 'gray' }}>
								Stations
							</Text>
						</View>

					</View>


				</ShadowedBox>

				<ShadowedBox width={'40%'} height={'19%'} margin={5} touchable onPress={() => navigation.navigate("Manager Return Inventory")}>

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
								<Text style={{ fontSize: 15, fontWeight: 'bold', color: 'gray', justifyContent: 'flex-start' }}>
									Return
								</Text>
								<Text style={{ fontSize: 15, fontWeight: 'bold', color: 'gray', justifyContent: 'flex-start' }}>
									Inventory
								</Text>
							</View>

							<View style={{
								width: '100%',
								height: '50%',
								justifyContent: 'center',
								alignItems: 'center',
							}}>
								<Text style={{ fontSize: 9, color: 'gray' }}>
									{formatNum(returnInventorySummary[1])}$
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
							<Text style={{ fontSize: 20, fontWeight: 'bold', color: 'dodgerblue', justifyContent: 'center' }}>
								{formatNum(returnInventorySummary[0])}
							</Text>
							<Text style={{ ...styles.HeaderBoxTextSize, color: 'dodgerblue' }}>
								Total Returned
							</Text>
							<Text style={{ ...styles.HeaderBoxTextSize, color: 'dodgerblue' }}>
								Items
							</Text>
						</View>


					</View>


				</ShadowedBox>

				<ShadowedBox width={'40%'} height={'19%'} margin={5} touchable onPress={() => navigation.navigate("Manager Assign Inventory")}>

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
								<Text style={{ fontSize: 15, fontWeight: 'bold', color: 'gray', justifyContent: 'center' }}>
									Assign
								</Text>
								<Text style={{ fontSize: 15, fontWeight: 'bold', color: 'gray', justifyContent: 'center' }}>
									Inventory
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
							<Text style={{ fontSize: 20, fontWeight: 'bold', color: 'red', justifyContent: 'center' }}>
								{formatNum(assignInventorySummary)}
							</Text>
							<Text style={{
								...styles.HeaderBoxTextSize,
								color: 'red',
								fontSize: 5,
								justifyContent: 'center'
							}}>
								Station below
							</Text>
							<Text style={{
								...styles.HeaderBoxTextSize,
								color: 'red',
								fontSize: 5,
								justifyContent: 'center'
							}}>
								Inventory
							</Text>
						</View>


					</View>


				</ShadowedBox>
				<ShadowedBox width={'40%'} height={'19%'} margin={5} touchable onPress={() => navigation.navigate("Runner Task Screen")}>

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
								<Text style={{ fontSize: 15, fontWeight: 'bold', color: 'gray', justifyContent: 'center' }}>
									Runners
								</Text>
							</View>

							<View style={{
								width: '100%',
								height: '50%',
								justifyContent: 'center',
								alignItems: 'center',
							}}>
								<Text style={{ fontSize: 9, color: 'gray' }}>
									Pending Tasks:{formatNum(pendingInventorySummary[0])}
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
							<Text style={{ fontSize: 20, fontWeight: 'bold', color: 'dodgerblue', justifyContent: 'center' }}>
								{formatNum(runnersSummary)}
							</Text>
							<Text style={{ ...styles.HeaderBoxTextSize, color: 'dodgerblue' }}>
								Total Runners
							</Text>
						</View>


					</View>


				</ShadowedBox>

				<ShadowedBox width={'40%'} height={'19%'} margin={5} touchable>

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
								<Text style={{ fontSize: 15, fontWeight: 'bold', color: 'gray', justifyContent: 'center' }}>
									Preorder
								</Text>
								<Text style={{ fontSize: 15, fontWeight: 'bold', color: 'gray', justifyContent: 'center' }}>
									Queue
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
							<Text style={{ fontSize: 20, fontWeight: 'bold', color: 'dodgerblue', justifyContent: 'center' }}>
								5
							</Text>
							<Text style={{ ...styles.HeaderBoxTextSize, color: 'dodgerblue' }}>
								Total Items
							</Text>
						</View>


					</View>


				</ShadowedBox>

				<ShadowedBox width={'40%'} height={'19%'} margin={5} touchable onPress={() => navigation.navigate("Station Alerts Screen")}>

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
							<Text style={{ fontSize: 15, fontWeight: 'bold', color: 'gray', margin: 13 }}>
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
							<Text style={{ fontSize: 20, fontWeight: 'bold', color: 'dodgerblue', justifyContent: 'center' }}>
								{formatNum(alertsSummary)}
							</Text>
							<Text style={{ ...styles.HeaderBoxTextSize, color: 'dodgerblue' }}>
								Total
							</Text>
							<Text style={{ ...styles.HeaderBoxTextSize, color: 'dodgerblue' }}>
								Set Alerts
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
		fontSize: 6,
	},
	Boundingbox: {
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