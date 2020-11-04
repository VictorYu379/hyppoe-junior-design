import { StyleSheet, Text, View, Image, TouchableHighlight, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import ShadowedBox from 'components/ShadowedBox';
import ConfirmInventoryModal from 'components/ConfirmInventoryModal';
import Station from 'model/Station';
import Event, { globalEvent } from 'model/Event';
import { globalInventory } from 'model/Inventory';
import Manager from 'model/Manager';
import Job from 'model/Job';

export default function ManagerPendingInventoryScreen({ navigation }) {
	const [confirmInventoryModal, setConfirmInventoryModal] = useState(false);
	const [confirmInventoryModalVisible, setConfirmInventoryModalVisible] = useState(false);
	const [taskSelected, setTaskSelected] = useState(null);
	const [taskIndexSelected, setTaskIndexSelected] = useState(0);
	const [isRunnerSelected, setIsRunnerSelected] = useState(false);
	const [JobList, setJobList] = useState([]);
	const [pairItems, setPairItems] = useState([]);

	useEffect(() => {
		const JobList = Job.getJobs()
		setJobList(JobList);

		const pairItems = globalInventory.pairItems;
		setPairItems(pairItems);
	}, [])

	//console.log(JobList)


	const filterStation = () => {
		let StationJobList = []
		JobList.map(item => {
			if(item.status == "Complete"){
				StationJobList.push(item)
			}
		});
		return StationJobList
	}

	const filterRunner = () => {
		let StationJobList = []
		JobList.map(item => {
			if(item.status == "Unstarted" || item.status == "In transit"){
				StationJobList.push(item)
			}
		});
		return StationJobList
	}

	const runnerJobs = filterRunner()

	const onConfirmInvModalSave = (drink) => {
		if (drink == null) {
			setConfirmInventoryModalVisible(false);
			return;
		}
		const curTask = taskSelected;
		let curStatus = "";
		if (taskSelected.status === "Completed") {
			curStatus = "Confirmed";
		} else {
			curStatus = taskSelected.status;
		}
		Job.updateJob(drink, taskSelected.type === "Return" ? taskSelected.from : taskSelected.to, curStatus, null);
		curTask.drink = drink;
		if (isRunnerSelected) {
			runnerJobs[taskIndexSelected] = curTask;
		} else {
			StationJobsList[taskIndexSelected] = curTask;
		}
		setConfirmInventoryModalVisible(false);
	}

	const runnerList = runnerJobs.map((item, index) => {
		return (
			<ShadowedBox width={'40%'} height={100} key={index} margin={5} touchable onPress={() => {
				setConfirmInventoryModalVisible(true);
				setTaskSelected(runnerJobs[index]);
				setTaskIndexSelected(index);
				setIsRunnerSelected(true);
				confirmInventoryModal.inputDrinkAndStation(
					runnerJobs[index].drink, 
					runnerJobs[index].type === "Return" ? runnerJobs[index].from : runnerJobs[index].to,
					pairItems
				);
				confirmInventoryModal.inputJobType(runnerJobs[index].type);
				confirmInventoryModal.inputStatus(runnerJobs[index].status);
			}}>

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

	const stationList = StationJobsList.map((item, index) => {
		return (
			<ShadowedBox width={'40%'} height={100} key={index} margin={5} touchable onPress={() => {
				setConfirmInventoryModalVisible(true);
				setTaskSelected(StationJobsList[index]);
				setTaskIndexSelected(index);
				setIsRunnerSelected(false);
				console.log(StationJobsList[index]);
				confirmInventoryModal.inputDrinkAndStation(
					StationJobsList[index].drink, 
					StationJobsList[index].type === "Return" ? StationJobsList[index].from : StationJobsList[index].to,
					pairItems
				);
				confirmInventoryModal.inputStatus(StationJobsList[index].status);
				confirmInventoryModal.inputJobType(StationJobsList[index].type);
			}}>

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
							{item.to}
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
				ref={m => {setConfirmInventoryModal(m)}}
				managerMode={true}
				serverMode={true}
				visible={confirmInventoryModalVisible}
				onSave={(drink) => onConfirmInvModalSave(drink)}
			/>
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