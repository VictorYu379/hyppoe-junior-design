import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { dbManager } from 'model/DBManager';

export default function DummyScreen({ navigation }) {

	const [name, setName] = useState("");

	const ref = dbManager.getRunnerWithId("GsvETNQP29tOOH9iwBRA")
		.onSnapshot(docSnapshot => {setName(docSnapshot.data()["name"]);});

	useEffect(() => {
		dbManager.getRunners().then(querySnapshot => {
			console.log("Total runners: ", querySnapshot.size);
			querySnapshot.forEach(docSnapshot => {
				console.log("Runner ID: ", docSnapshot.id, docSnapshot.data());
			})
		})
	})

	return (
		<View style={styles.container}>
			<TouchableOpacity
				onPress={() => navigation.navigate('Manager Dashboard')}>
				<Text>Open up App.js to start working on your app!</Text>
			</TouchableOpacity>
			<Text>
				name: {name}
			</Text>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});