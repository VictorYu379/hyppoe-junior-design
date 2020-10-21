import { StyleSheet, Text, View, A } from 'react-native';
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { dbManager } from 'model/DBManager';


export default function DummyScreen({ navigation }) {

	dbManager.getRunnerWithId("GsvETNQP29tOOH9iwBRA")
		.onSnapshot(docSnapshot => {console.log(docSnapshot.data()["name"]);});

	useEffect(() => {
		dbManager.getRunners().then(querySnapshot => {
			console.log("Total runners: ", querySnapshot.size);
			querySnapshot.forEach(docSnapshot => {
				console.log("Runner ID: ", docSnapshot.id, docSnapshot.data());
			})
		})
	})
	
	// Now a literal string, eventId should be passed in by page before landing at user dashboard
	dbManager.setStorage('@eventId', "8PcZqNLJ34eS2iO6ojRf");

	return (
		<View style={styles.container}>
			<TouchableOpacity
				onPress={() => navigation.navigate('Total Inventory')}>
				<Text>Open up App.js to start working on your app!</Text>
			</TouchableOpacity>
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