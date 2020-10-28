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

	// The second argument [] is to make useEffect run only once (like componentDidMount)
	useEffect(() => {
		// Get inventory details (avail of total qty, total available percentage, total value)
		// console.log(Inventory.getInventorySummary());

		// Get station inventory details (avail of total qty, total available percentage)
		// console.log(Station.getStationInventorySummary()); // All stations
		// console.log(Station.getStationInventorySummary("P7HFuidmDgcaRRovoRjK")); // Station 1
		// console.log(Station.getStationInventorySummary("eloF9YmvIfMXKvUZDa9m")); // Station 2

		// Get number of stations;
		// console.log(Station.getNumOfStations()); 

		// Get number of stations below inventory;
		// console.log(Station.getNumOfStationBelowInventory());

		// Get [number of pending jobs, total qty, total value]
		// console.log(Job.getNumOfJobsInTransit()); // All stations
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
	}, [])
  
	const [activeSections, setSections] = useState([0]);
	const [activeStations, setActiveStations] = useState([0]);
	const [stations, setStations] = useState([]);
	//const [availItems, setAvail] = useState([]);
	//const [soldItems, setSold] = useState([]);
	//const [totalItems, setTotal] = useState([]);
	const sections = ['avail', 'sold']; 
	//console.log(Job.getReturnJobsDetailedData())
	// Reading event and manager from global storage
	// const [event, setEvent] = useState();
	// const [manager, setManager] = useState();
	// The second argument [] is to make useEffect run only once (like componentDidMount)
	// console.log(event);
	// console.log(manager);
	//console.log(Inventory.getDetailedData())

	const [pendingStat, count] = Job.getPendingJobsDetailedData()
	const [availItems,soldItems,totalItems] = Station.getTotalDetailedData()


	const textColor = (text) => {
		let rate = Number(text);
        if (rate < 26) {
			return '#F71E0C';
		} else if (rate < 70) {
			return '#E8BD38';
		}
        return '#1CD338';
	}

	const total = (text) => {
		let res = 0;
		if (text == 'total') {
			totalItems.map(num => res += num);
		} else if (text == 'avail') {
			availItems.map(item => res += item.avail);
		} else if (text == 'sold') {
			soldItems.map(station => {
				station.sold.map(item => res += item.sold);
			});
		} else {  
			soldItems.map(station => {
				if (station.stationKey == text) {
					station.sold.map(item => res += item.sold);
				}
			});
		}
		return res;  
	}

	const totalPendingQtyandValue = () => {
		let qty = 0;
		let value = 0;
		pendingStat.map(item => qty += item.count)
		pendingStat.map(item => value += item.count * item.price)
		return [qty,value]
	}
	

	const totalValue = (text) => {
		let res = 0;
		if (text == 'total') {
			availItems.map(item => res += total[item.key] * item.price);
		} else if (text == 'avail') {
			availItems.map(item => res += item.avail * item.price);
		} else if (text == 'sold') {
			soldItems.map(station => {
				station.sold.map(item => res += item.sold * item.price);
			});
		} else {
			soldItems.map(station => {
				if (station.stationKey == text) {
					station.sold.map(item => res += item.sold * item.price);
				}
			});
		}
		return res;
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
									color: textColor(percent(total('avail'), total('total'))),
								}}>
									{percent(total('avail'), total('total'))}%
								</Text>
								<Text style={{
									...styles.HeaderBoxTextSize, 
									color: textColor(percent(total('avail'), total('total'))),
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
								{total('avail')} of
						</Text>
							<Text style={{ fontSize: 12, color: 'gray' }}>
								{total('total')} Qty
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
								{formatNum(totalValue('avail'))}$
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
									{count}
								</Text>
								<Text style={{ ...styles.HeaderBoxTextSize, color: 'gold' }}>
									Total Pending
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
								{totalPendingQtyandValue()[0]} Qty
							</Text>
						</View>

						<View style={{
							...styles.sectionTitle,
							width: '40%',
						}}>
							<Text style={{ fontSize: 12, color: 'gray' }}>
								{totalPendingQtyandValue()[1]}$
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
									color: textColor(percent(total('avail'), total('total'))),
								}}>
									{percent(total('avail'), total('total'))}%
								</Text>
								<Text style={{
									...styles.HeaderBoxTextSize, 
									color: textColor(percent(total('avail'), total('total'))),
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
								{total('avail')} of
							</Text>
							<Text style={{ fontSize: 12, color: 'gray' }}>
								{total('total')} Qty
							</Text>
						</View>

						<View style={{
							...styles.sectionTitle,
							width: '40%',
							alignItems: 'center',
						}}>
							<Text style={{ fontSize: 12, color: 'gray' }}>
								{totalItems.length}
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
									1200$
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
								100
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
								1
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
									Pending Tasks:2
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
								2
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
								6
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