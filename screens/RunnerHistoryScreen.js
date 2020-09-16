import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import ShadowedBox from '../components/ShadowedBox';

export default function RunnerHistoryScreen({ navigation }) {

	const taskList = [
		{key: 1, item: 'Sweetwater', from: 'Inventory', to: 'Sta. 1 Big Tent', status: 'Not Picked Up'},
		{key: 2, item: 'Coors Light', from: 'Inventory', to: 'Sta. 1 Big Tent', status: 'Pending'},
		{key: 3, item: 'Bud Light', from: 'Inventory', to: 'Sta. 1 Big Tent', status: 'Complete'},
	]

	const runner = '1'

	const textColor = (text) => {
		if (text == 'Complete') {
			return '51A760'
		} else if (text == 'Pending') {
			return '#E9C041'
		} else if (text == 'Not Picked Up') {
			return '#CD594A'
		}
		return 'black'
	}

	const taskHistory = taskList.map(task => {
		return (
			<View style={styles.rowView}>
				<View style={{
					flexDirection: 'column',
				}}>
					<Text style={styles.rowTitle}> {task.item} </Text>
					<Text style={styles.rowText}> {task.from} to {task.to} </Text>
				</View>
				<Text style={{...styles.rowTitle, color: textColor(task.status)}}> {task.status} </Text>
			</View>
		);
	});

	return (
		<View style={styles.container}>
			<ShadowedBox width={'90%'} margin={10}>
				<View style={{
					width: '90%',
					marginTop: 20,
					marginBottom: 10
				}}>
					<Text style={styles.sectionTitle}> Runner {runner}: Task History </Text>
				</View>
				<View style={{
					width: '90%',
					marginBottom: 25
				}}>
					{taskHistory}
				</View>
			</ShadowedBox>
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
	rowView: {
        width: "100%",
        flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "flex-end",
		borderBottomColor: "grey",
        borderBottomWidth: StyleSheet.hairlineWidth,
        padding: 5
	},
	sectionTitle: {
        color: "black",
        fontFamily: "Arial-BoldMT",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "left",
	},
	rowTitle: {
        color: "#5C5A5A",
        fontFamily: "Arial-BoldMT",
        fontSize: 16,
        fontWeight: "bold",
		textAlign: "left",
		marginBottom: 2
	},
	rowText: {
        color: "#5C5A5A",
        fontFamily: "Arial",
		fontSize: 16,
		fontWeight: "normal",
        textAlign: "left",
    }
});