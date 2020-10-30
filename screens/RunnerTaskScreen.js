import { StyleSheet, Text, View, Image, ScrollView, TouchableHighlight, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import ConfirmInventoryModal from 'components/ConfirmInventoryModal';
import ShadowedBox from 'components/ShadowedBox';
import { getGlobalStations } from 'model/Station';
import { globalInventory } from 'model/Inventory';
import Job, { getGlobalJobs } from '../model/Job';
import Runner, { globalRunner } from '../model/Runner';


export default class RunnerTaskScreen extends React.Component {
	state = {
		confirmInventoryModalVisible: false,
		taskSelected: null,
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
			for (let drink of job.drinks) {
				cnt++;
				UpdatedJobs.push({
					id: cnt + "",
					type: job.type,
					status: job.status,
					runnerId: job.runner === undefined ? "Unassigned" : job.runner.name,
					stationKey: job.stationKey,
					drink: drink
				});
			}
		}
		const runnerJobs = Job.getRunnerJobs(this.state.runnerId);
		let displayJobs = runnerJobs.map(job => {return {station: job.stationKey, status: job.status}});
        this.setState({
			tasks: UpdatedJobs,
			displayJobs: displayJobs,
			runnerId: globalRunner.id,
			runnerName: globalRunner.name,
			pairItems: globalInventory.pairItems
        });
	}

	onConfirmInvModalSave(drink) {
		this.setState({confirmInventoryModalVisible: false});
		if (this.state.taskSelected.status === "Unstarted") {
			Job.updateJob(drink, this.state.taskSelected.stationKey, "In transit", this.state.runnerId);
		} else if (this.state.taskSelected.status === "In transit") {
			Job.updateJob(drink, this.state.taskSelected.stationKey, "Completed", null);
		}
    }

	render() {
		/*const displayJobList = this.state.displayJobs.map((task, index) => {
			return (
				<View key="task."style={styles.rowView}>
					<View style={{...styles.rowViewclose,width:'60%',margin:8}}>
						<Text style={{fontSize: 12, color: 'grey'}}>
							Station {task.station}
						</Text>
						{
							(task.status === "Unstarted") ? 
							<Text style={{
								fontSize: 12, 
								fontWeight: 'bold', 
								color: 'green', 
								margin:8
							}}>
								Pending
							</Text>
							:  <Text style={{
								fontSize: 12, 
								fontWeight: 'bold', 
								color: 'gold', 
								margin:8
							}}>
								Complete
							</Text>
						}
					</View>
				</View>
			)
		})*/
		const taskList = this.state.tasks.map((task, index) => {
			return (
				<ShadowedBox key={index} width={170} square margin={5}>
					<TouchableOpacity key={index} onPress={() => {
						this.setState({
							confirmInventoryModalVisible: true,
							taskSelected: this.state.tasks[index],
						});
						this.confirmInventoryModal
							.inputDrinkAndStation(
								this.state.tasks[index].drink, 
								this.state.tasks[index].stationKey,
								this.state.pairItems
							 );
						this.confirmInventoryModal
							.inputDropOffPickUp(this.state.tasks[index].status==="In transit");
					}}>
						
						<View>
							<Text style={{fontSize: 13, fontWeight:"bold", margin:4, marginLeft:12}}>
								Runner: {task.runnerId}
							</Text>
							<Text style={{fontSize: 13, fontWeight:"bold", margin:4, marginLeft:12}}>
								Drink: {task.drink.drinkType.name}
							</Text>
							<View style={styles.rowView}>
								<Image
									style={{
										...StyleSheet.absoluteFill,
									}}
									source={require('assets/Seperator.png')}
								/>
							</View>
						</View>
						<View style={styles.rowView}>
							<View style={{...styles.rowViewclose,width:'60%',margin:5}}>
								<Text style={{fontSize: 12, color: 'gray'}}>
									Pick Up: Inventory
								</Text>
								<Text style={{
									fontSize: 12, 
									fontWeight: 'bold', 
									color: 'gray', 
									marginLeft:0}}>
									
								</Text>
							</View>
							<View>
							{
								(task.status === "Unstarted") ? 
									<Text style={{
										fontSize: 12, 
										fontWeight: 'bold', 
										color: 'green', 
										margin:8
									}}>
										Pending
									</Text>
									:  <Text style={{
										fontSize: 12, 
										fontWeight: 'bold', 
										color: 'gold', 
										margin:8
									}}>
										Complete
									</Text>
							}
							</View>
							
						</View>
			
						<View style={styles.rowView}>
							<View style={{...styles.rowViewclose,width:'60%',margin:8}}>
								<Text style={{fontSize: 12, color: 'gray'}}>
									Drop off:
								</Text>
								<Text style={{
									fontSize: 12, 
									fontWeight: 'bold', 
									color: 'gray', 
									marginLeft:0}}>
									{ task.stationKey }
								</Text>
							</View>
							{
								(task.status === "Unstarted" || this.status === "In transit") ? 
									<Text style={{
										fontSize: 12, 
										fontWeight: 'bold', 
										color: 'gold', 
										margin:8
									}}>
										Pending
									</Text>
									:  <Text style={{
										fontSize: 12, 
										fontWeight: 'bold', 
										color: 'gold', 
										margin:8
									}}>
										Complete
									</Text>
							}
						</View>
						
					</TouchableOpacity>
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