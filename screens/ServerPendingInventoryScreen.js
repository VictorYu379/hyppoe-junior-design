import { StyleSheet, Text, View, Image, TouchableHighlight, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import ShadowedBox from 'components/ShadowedBox';
import ConfirmInventoryModal from 'components/ConfirmInventoryModal';
import Station, {getGlobalStation} from 'model/Station';
import Event, { globalEvent } from 'model/Event';
import Manager from 'model/Manager';
import Job from 'model/Job';

export default function ServerPendingInventoryScreen({ route, navigation }) {
	const [additionalInventoryModal, setAdditionalInventoryModal] = useState(false);
	const [JobList, setJobList] = useState([]);
	const {stationId} = route.params;

	useEffect(() => {
		const JobList = Job.getJobs()
		setJobList(JobList);
	}, [])

	//console.log(JobList)

	const getstationKey = () => {
		return getGlobalStation(stationId).key
	}

	const filterStation = () => {
		let StationJobList = []
		JobList.map(item => {
			if(item.key == getstationKey() && (item.status == "Complete")){
				StationJobList.push(item)
			}
		});
		return StationJobList
	}

	const filterRunner = () => {
		let StationJobList = []
		JobList.map(item => {
			if(item.key == getstationKey() && (item.status == "Unstarted" || item.status == "In transit")){
				StationJobList.push(item)
			}
		});
		return StationJobList
	}

	const runnerJobs = filterRunner()

	const runnerList = runnerJobs.map(item => {
		return (
			<ShadowedBox width={'40%'} height={100}  margin={5} touchable onPress={() => setAdditionalInventoryModal(true)}>

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
								{item.runner}:
							</Text>
							<Text style={{
								fontSize: 10, 
								color: 'gray', 
								justifyContent: 'flex-start',
							}}> 
								{item.item < 16
                					? `${item.item}`
                					: `${item.item.substring(0, 15)}...`}
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
							{item.from}
						</Text>
						<Text style={[item.status != "Unstarted"?styles.completedText : styles.pendingText]}>
								{item.status != "Unstarted"? "Complete":"Pending"}
						</Text>
					</View>

					<View style={styles.rowView}>
						<Text style={{fontSize: 10, fontWeight: 'bold', color: 'gray', justifyContent: 'flex-start'}}> 
							Drop off:
						</Text>
					</View>

					<View style={styles.rowView}>
						<Text style={{fontSize: 10, color: 'gray', justifyContent: 'flex-start'}}> 
							{item.to}
						</Text>
						<Text style={[item.status != "Unstarted"? 
							item.status != "In transit"? 
								styles.completedText 
								: styles.pendingText 
							: styles.pendingText]}>
								{item.status != "Unstarted"? 
							item.status != "In transit"? 
								"Complete" 
								: "Pending" 
							: "Pending"}
						</Text>
					</View>
				</View>


			</ShadowedBox>
		);
	});

	const StationJobsList = filterStation()
	//console.log(StationJobsList)

	const stationList = StationJobsList.map(item => {
		return (
			<ShadowedBox width={'40%'} height={100}  margin={5} touchable onPress={() => setAdditionalInventoryModal(true)}>

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
								{item.to}:
							</Text>
							<Text style={{fontSize: 10, color: 'gray', justifyContent: 'flex-start'}}> 
								{item.item < 16
                					? `${item.item}`
                					: `${item.item.substring(0, 15)}...`}		
							</Text>
						</View>
					</View>
						
					<View style={styles.rowView}>
						<Text style={{fontSize: 10, fontWeight: 'bold', color: 'gray', justifyContent: 'flex-start'}}> 
							Drop off:
						</Text>
					</View>

					<View style={styles.rowView}>
						<Text style={{fontSize: 10, color: 'gray', justifyContent: 'flex-start'}}> 
							{item.from}
						</Text>
						<Text style={[styles.completedText]}>
							Complete
						</Text>
					</View>

					<View style={styles.rowView}>
						<Text style={{fontSize: 10, fontWeight: 'bold', color: 'gray', justifyContent: 'flex-start'}}> 
							Confirmed:
						</Text>
					</View>

					<View style={styles.rowView}>
						<Text style={{fontSize: 10, color: 'gray', justifyContent: 'flex-start'}}> 
							{item.to}
						</Text>
						<Text style={[item.status == "Confirmed"? styles.completedText:styles.pendingText]}>
								{item.status == "Confirmed"? "Complete":"Pending"}
						</Text>
					</View>
				</View>


			</ShadowedBox>
		);
	});



	return (
		<View style={styles.container}>
			<ConfirmInventoryModal
				sourceImg={require('assets/event-logo.png')} 
				drinkName={'BudLight'}
				pairedItems={[
					"12 ounce cup"
				]}
				visible={additionalInventoryModal} 
				onSave={() => setAdditionalInventoryModal(false)}/>
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
				justifyContent: 'flex-start',
				width: '100%',
				//height: '60%',
				paddingLeft: '2%',
				marginLeft:50,
			}}>
				{runnerList}
			</View>
			<View style={{
				flexWrap: 'wrap',
				flexDirection: 'row',
				justifyContent: 'flex-start',
				width: '100%',
				//height: '60%',
				paddingLeft: '2%',
				marginLeft:50,
			}}>
				{stationList}
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