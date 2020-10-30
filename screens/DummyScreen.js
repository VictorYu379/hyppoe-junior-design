import { StyleSheet, Text, View, A } from 'react-native';
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Event from 'model/Event';
import Manager from 'model/Manager';
import Server from 'model/Server';
import Runner from 'model/Runner';


export default function DummyScreen({ navigation }) {

	useEffect(() => {
		Event.setInstance("8PcZqNLJ34eS2iO6ojRf");
		Manager.setInstance("zkFgVQFflujVuC9kJt9d");
		Runner.setInstance("GsvETNQP29tOOH9iwBRA");
		Server.setInstance("g3RRJbReQ5C4ReFV2duM");
	})

	return (
		<View style={styles.container}>
			<TouchableOpacity
				onPress={() => navigation.navigate('Manager Dashboard')}>
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