import { StyleSheet, Text, View, Image, TouchableHighlight, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import ShadowedBox from 'components/ShadowedBox';
import Runner from 'model/Runner';
import Station from 'model/Station';
import Job from 'model/Job';
import Event from 'model/Event';

export default function RunnerDashBoardScreen({ route, navigation }) {
	const [stationModalVisible, setStationModalVisible] = useState(false);
	const stationStats = {stationCapacity:40080, currentValue:28055, value:43286, server:4, runners:2}
<<<<<<< HEAD
	//console.log(route.params)
	const {runnerId, runnerKey, stationId} = route.params
=======
	const {stationId, runnerId} = route.params;
>>>>>>> 86d36d386615caa145a2b4a21e4ff0ad5aab80f4

	// Reading runner from global storage
	// const [runner, setRunner] = useState();
	const [stationInventorySummary, setstationInventorySummary] = useState([]);
	const [returnInventorySummary, setreturnInventorySummary] = useState([]);
	const [runnerTasks, setrunnerTasks] = useState([]);
	const [requestStat, setrequestStat] = useState([]);
	const [runnerHistorySummary, setrunnerHistorySummary] = useState([]);
	const [runnerDashboardHeaderStat, setrunnerDashboardHeaderStat] = useState([]);
	const [alerts, setalerts] = useState([]);
	// The second argument [] is to make useEffect run only once (like componentDidMount)
	useEffect(() => {
		// Runner.getInstance().then(runner => { 
		// 	setRunner(runner);
		// 	Station.setInstance(runner.stationId);
		// });
		var stationInventorySummary = Station.getStationInventorySummary(stationId);
		setstationInventorySummary(stationInventorySummary);
		var returnInventorySummary = Job.getNumOfReturnItems(stationId); 
		setreturnInventorySummary(returnInventorySummary);
		var runnerTasks = Job.getNumOfRunnerJobsPending(stationId);
		setrunnerTasks(runnerTasks);
		var requestStat = Job.getNumOfRequests(stationId);
		setrequestStat(requestStat);
		var runnerHistorySummary = Job.getRunnerHistorySummary(runnerId);
		setrunnerHistorySummary(runnerHistorySummary);
		var runnerDashboardHeaderStat = Station.getServerDashboardHeaderData(stationId);
		setrunnerDashboardHeaderStat(runnerDashboardHeaderStat);
		var alerts = Event.getNumOfAlerts();
		setalerts(alerts);
		// Station.getInstance().then(station => console.log(station.name));
	}, [])
	// console.log(runner);

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
						<Text style={{fontSize: 16, fontWeight:"bold", margin:10, marginTop:20, marginLeft:20}}>
							Runner DashBoard
						</Text>
						<Text style={{fontSize: 12, color: 'gray', margin:10, marginTop:8, marginLeft:20}}>
							Station {runnerDashboardHeaderStat[1]}: {runnerDashboardHeaderStat[2]}
						</Text>
						<Text style={{fontSize: 12, color: 'gray', margin:10, marginTop:8, marginLeft:20}}>
							Runner: {runnerKey}
						</Text>
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
					onPress={() => {navigation.navigate("Runner Task Screen", {
						stationId: stationId,
					});}}
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
									Qty:{runnerTasks[1]}
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
								{runnerTasks[0]}
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
					onPress={() => navigation.navigate("Manager Individual Station Inventory", {
						stationId: stationId,
				})}>
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
									{stationInventorySummary[0]} of {stationInventorySummary[1]}
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
							<Text style={{
								...styles.percentageHeaderBoxTextSize, 
								color: textColor(percent(stationInventorySummary[0],stationInventorySummary[1]))
							}}>
								{percent(stationInventorySummary[0],stationInventorySummary[1])}%
							</Text>
							<Text style={{
								...styles.HeaderBoxTextSize, 
								color: textColor(percent(stationInventorySummary[0],stationInventorySummary[1]))
							}}>
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
					onPress={() => {navigation.navigate("Runner Request Inventory", { stationId });}}
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
									Qty:{requestStat[1]}
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
								{requestStat[0]}
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
					onPress={() => {navigation.navigate("Runner Return Inventory", { stationId });}}
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
									${returnInventorySummary[1]}
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
								{returnInventorySummary[0]}
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
								{alerts}
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
									Pending:{runnerHistorySummary[1]}
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
								{runnerHistorySummary[0]}	
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