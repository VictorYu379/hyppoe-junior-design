import { StyleSheet, Text, View, Image, TouchableHighlight, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import ShadowedBox from 'components/ShadowedBox';
import Server from 'model/Server';
import Station from 'model/Station';
import Event from 'model/Event';
import Job from 'model/Job';

export default function ServerDashBoardScreen({ navigation }) {
	const [stationModalVisible, setStationModalVisible] = useState(false);

	const stationStats = {stationCapacity:40080, currentValue:28055, value:43286, server:4, runners:2}
	const stationId = "P7HFuidmDgcaRRovoRjK"
	// Reading server from global storage
	const [server, setServer] = useState();
	const [stationInventorySummary, setstationInventorySummary] = useState([]);
	const [pendingInventorySummary, setpendingInventorySummary] = useState([]);
	const [returnInventorySummary, setreturnInventorySummary] = useState([]);
	const [runnersSummary, setrunnersSummary] = useState([]);
	const [alerts, setalerts] = useState([]);
	// The second argument [] is to make useEffect run only once (like componentDidMount)
	useEffect(() => {
		Server.getInstance().then(server => { 
			setServer(server);
			Station.setInstance(server.stationId);
		});
		var stationInventorySummary = Station.getStationInventorySummary(stationId);
		setstationInventorySummary(stationInventorySummary);
		var pendingInventorySummary = Job.getNumOfJobsInTransit(stationId); 
		setpendingInventorySummary(pendingInventorySummary);
		var returnInventorySummary = Job.getNumOfReturnItems(stationId); 
		setreturnInventorySummary(returnInventorySummary);
		var runnersSummary = Station.getNumOfRunners(stationId);
		setrunnersSummary(runnersSummary);
		var alerts = Event.getNumOfAlerts();
		setalerts(alerts);
		// Station.getInstance().then(station => console.log(station.name));
	}, [])
	// console.log(server);

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
			<ShadowedBox width={'80%'} height={'19%'} margin={10}>



					<View style={{
							marginVertical: 20,
							width: '100%',
							height: '100%',
							flexDirection: 'column',
							justifyContent: 'flex-start',
							alignItems: 'flex-start',
							margin: 10
					}}>
							
						<Text style={{fontSize: 16, fontWeight:"bold", margin:10, marginTop:10, marginLeft:20}}>Server DashBoard</Text>
						<Text style={{fontSize: 12, color: 'gray', margin:10, marginTop:5, marginLeft:20}}>Station 1:Big Tent</Text>
						<Text style={{fontSize: 12, color: 'gray', margin:10, marginTop:5, marginLeft:20}}>Server Tablet: 1</Text>
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

		
				<ShadowedBox width={'40%'} height={'19%'}  margin={5} touchable>

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
									Preorder
								</Text>
								<Text style={{fontSize: 15, fontWeight: 'bold', color: 'gray', justifyContent: 'flex-start'}}> 
									Queue
								</Text>
							</View>

							<View style={{
								width: '100%',
								height: '50%',
								justifyContent: 'center',
								alignItems: 'center',
							}}>
								<Text style={{fontSize: 9, color: 'gray'}}> 
									2 Users
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
							<Text style={{fontSize: 20, color: 'dodgerblue',fontWeight: 'bold', justifyContent: 'center'}}> 
								5
							</Text>
							<Text style={{...styles.HeaderBoxTextSize, color: 'dodgerblue'}}> 
								Total items
							</Text>
						</View>
						

					</View>


				</ShadowedBox>
				<ShadowedBox 
					width={'40%'} 
					height={'19%'}  
					margin={5} 
					touchable
					onPress={() => {navigation.navigate("Server Pending Inventory Screen");}}
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
									Pending
								</Text>
								<Text style={{fontSize: 15, fontWeight: 'bold', color: 'gray', justifyContent: 'flex-start'}}> 
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
									{pendingInventorySummary[1]} Qty
								</Text>
								<Text style={{fontSize: 9, color: 'gray'}}> 
									{pendingInventorySummary[2]}$
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
							<Text style={{fontSize: 20, color: 'gold',fontWeight: 'bold', justifyContent: 'center'}}> 
								{pendingInventorySummary[0]}
							</Text>
							<Text style={{...styles.HeaderBoxTextSize, color: 'gold'}}> 
								Total Pending
							</Text>
						</View>
						

					</View>


				</ShadowedBox>
				<ShadowedBox 
					width={'40%'} 
					height={'19%'}  
					margin={5}
					touchable
					onPress={() => navigation.navigate("Server Station Inventory Screen", {
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
								color:  textColor(percent(stationInventorySummary[0],stationInventorySummary[1]))
							}}>
								Total Available
							</Text>
						</View>
						

					</View>


				</ShadowedBox>

				<ShadowedBox 
					width={'40%'} 
					height={'19%'}  
					margin={5}
					touchable
					onPress={() => {navigation.navigate("Server Return Inventory Screen");}}
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
									Return
								</Text>
								<Text style={{fontSize: 15, fontWeight: 'bold', color: 'gray', justifyContent: 'flex-start'}}> 
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
									{returnInventorySummary[1]}$
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
								Total Returned
							</Text>
							<Text style={{...styles.HeaderBoxTextSize, color: 'dodgerblue'}}> 
								Items
							</Text>
						</View>
						

					</View>


				</ShadowedBox>

				<ShadowedBox 
					width={'40%'} 
					height={'19%'}  
					margin={5}
					touchable
					onPress={() => {navigation.navigate("Server Confirm Inventory Screen");}}
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
									Confirm 
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
									2400Qty
								</Text>
								<Text style={{fontSize: 9, color: 'gray'}}> 
									28800$
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
							<Text style={{fontSize: 20, fontWeight: 'bold', color: 'red', justifyContent: 'center'}}> 
								1
							</Text>
							<Text style={{...styles.HeaderBoxTextSize, color: 'red',fontSize:5}}> 
								Need Confirmation
							</Text>
						</View>
						

					</View>


				</ShadowedBox>
				<ShadowedBox 
					width={'40%'} 
					height={'19%'}  
					margin={5}
					touchable
					onPress={() => {navigation.navigate("Station Runners Screen");}}
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
									Runners
								</Text>
							</View>

							<View style={{
								width: '100%',
								height: '50%',
								justifyContent: 'center',
								alignItems: 'center',
							}}>
								<Text style={{fontSize: 9, color: 'gray'}}> 
									Pending Tasks:{pendingInventorySummary[0]}
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
								{runnersSummary}
							</Text>
							<Text style={{...styles.HeaderBoxTextSize, color: 'dodgerblue'}}> 
								Total Runners
							</Text>
						</View>
						

					</View>


				</ShadowedBox>

				<ShadowedBox 
					width={'40%'} 
					height={'19%'}  
					margin={5}
					touchable
					onPress={() => {navigation.navigate("Server Request Inventory Screen");}}
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
									2400 Qty
								</Text>
								<Text style={{fontSize: 9, color: 'gray'}}> 
									10802$
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
								Request Pending
							</Text>
						</View>
						

					</View>


				</ShadowedBox>

				<ShadowedBox 
					width={'40%'} 
					height={'19%'}  
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
							justifyContent: 'flex-start',
							alignItems: 'center',
						}}>
							<Text style={{fontSize: 15, fontWeight: 'bold', color: 'gray',margin:13}}> 
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