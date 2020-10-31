import { StyleSheet, Text, View, Image, ScrollView, TouchableHighlight, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import ConfirmInventoryModal from 'components/ConfirmInventoryModal';
import ShadowedBox from 'components/ShadowedBox';
import { getGlobalStations } from 'model/Station';
import { globalInventory } from 'model/Inventory';
import Job, { getGlobalJobs } from '../model/Job';
import Runner, { globalRunner } from '../model/Runner';
import { globalStations } from '../model/Station';


export default class RunnerTaskScreen extends React.Component {
	state = {
		confirmInventoryModalVisible: false,
		taskIndexSelected: 0,
		taskSelected: null,
		taskPickUp: false,
		tasks: [],
		runnerId: "",
		runnerName: "",
		displayJobs: []
	};

	componentDidMount() {
		this.updateData();
	}

	updateData() {
		const jobs = getGlobalJobs();
		let UpdatedJobs = [];
		let cnt = 0;
		for (let job of jobs) {
			UpdatedJobs.push({
				id: job.id,
				type: job.type,
				status: job.status,
				runnerId: job.runner === undefined ? "Unassigned" : job.runner.name,
				stationKey: job.stationKey,
				drink: job.drink
			});
		}
		const runnerJobs = Job.getRunnerJobs(this.state.runnerId);
		// generate station key to name map
		this.keyNameMap = new Map();
		for (let val of Object.values(globalStations)) {
			this.keyNameMap.set(Number(val.key), val.name);
		}
		let displayJobs = runnerJobs.map(job => {
			return {
				station: this.keyNameMap.get(Number(job.to.substring(8))), 
				status: job.status
			}
		});
        this.setState({
			tasks: UpdatedJobs,
			displayJobs: displayJobs,
			runnerId: globalRunner.id,
			runnerName: globalRunner.name,
			pairItems: globalInventory.pairItems
        });
	}

	onConfirmInvModalSave(drink) {
		let curTask = this.state.taskSelected;
		console.log("Cur task: ", curTask.status);
		if (this.state.taskSelected.status === "Unstarted") {
			Job.updateJob(drink, this.state.taskSelected.stationKey, "In transit", this.state.runnerId);
			curTask.status = "In transit";
			curTask.drink = drink;
			curTask.runnerId = this.state.runnerName;
		} else if (this.state.taskSelected.status === "In transit") {
			Job.updateJob(drink, this.state.taskSelected.stationKey, "Complete", null);
			curTask.status = "Complete";
			curTask.drink = drink;
			this.state.displayJobs[this.state.taskIndexSelected].status = "Complete";
		}
		const tasks = this.state.tasks;
		tasks[this.state.taskIndexSelected] = curTask;
		this.setState({
			tasks: tasks,
			confirmInventoryModalVisible: false
		});
    }

	render() {
		const displayJobList = this.state.displayJobs.map((task, index) => {
			return (
				<View key={index} style={styles.rowView}>
					<View style={styles.rowView}>
						<Text style={{fontSize: 12, color: 'gray', justifyContent: 'flex-start'}}> 
							Station { index }: { task.station }
						</Text>
						<Text style={[task.status === "Complete"? styles.completedText : styles.pendingText]}>
								{task.status === "Complete"?"Complete":"Pending"}
						</Text>
					</View>
				</View>
			)
		})
		const taskList = this.state.tasks.map((task, index) => {
			return (
				<ShadowedBox width={'40%'} height={100} key={index} margin={5} touchable onPress={() => {
						this.setState({
							confirmInventoryModalVisible: true,
							taskSelected: this.state.tasks[index],
							taskIndexSelected: index,
							taskPickUp: task.status === "Unstarted" ? true : false
						});
						console.log("Down Cur status: ", this.state.tasks[index].status);
						this.confirmInventoryModal
							.inputDrinkAndStation(
								this.state.tasks[index].drink, 
								this.state.tasks[index].stationKey,
								this.state.pairItems
							 );
						this.confirmInventoryModal
							.inputStatus(this.state.tasks[index].status);
						this.confirmInventoryModal
							.inputJobType(this.state.tasks[index].type);
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
								{ task.runnerId }:
							</Text>
							<Text style={{
								fontSize: 10, 
								color: 'gray', 
								justifyContent: 'flex-start',
							}}> 
								{ task.drink.drinkType.name.length < 16
                					? `${task.drink.drinkType.name}`
                					: `${task.drink.drinkType.name.substring(0, 15)}...`}
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
						<Text style={[task.status !== "Unstarted"? styles.completedText : styles.pendingText]}>
								{ task.status == "Complete" || task.status == "Confirmed" ? "Complete" : "Pending" }
						</Text>
					</View>

					<View style={styles.rowView}>
						<Text style={{fontSize: 10, fontWeight: 'bold', color: 'gray', justifyContent: 'flex-start'}}> 
							Drop off:
						</Text>
					</View>

					<View style={styles.rowView}>
						<Text style={{fontSize: 10, color: 'gray', justifyContent: 'flex-start'}}> 
							Station { task.stationKey }
						</Text>
						<Text style={[task.status == "Complete"? styles.completedText : styles.pendingText]}>
								{task.status == "Complete"?"Complete":"Pending"}
						</Text>
					</View>
				</View>
			</ShadowedBox>
			)
		});
		return (
			<TouchableOpacity 
				activeOpacity={1}
				touchable
				style={styles.container}
				onPress={() => this.setState({taskSelected: null})}>
				<ConfirmInventoryModal
					ref={m => {this.confirmInventoryModal = m}}
					visible={this.state.confirmInventoryModalVisible}
					pickUp={this.state.taskPickUp}
					onSave={this.onConfirmInvModalSave.bind(this)}
				/>
				<ShadowedBox 
					width={'80%'} 
					height={'20%'} 
					margin={10}
					touchable
				>
					<View style={styles.rowView}>
						<View style={{...styles.rowViewclose,width:'60%',margin:8}}>
							<Text style={{fontSize: 18, color: 'black'}}>
								Runner {this.state.runnerName}:
							</Text>
						</View>
					</View>
					{displayJobList}
				</ShadowedBox>

				<View style={{
					justifyContent:'center', 
				}}>
					<ScrollView style={{width:'100%',maxHeight:'100%',marginLeft:20}}>
						<View style={{
							flexWrap: 'wrap',
							flexDirection: 'row',
							width: '100%',
							//height: '60%',
							paddingLeft: '2%',
						}}>
							{taskList}
						</View>
					</ScrollView>
				</View>
				
			</TouchableOpacity>
		);
	}
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
	ShadowedBoxStyle: {

	}
});