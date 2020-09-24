import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function DummyScreen({ navigation }) {
	return (
		<View style={styles.container}>
			<TouchableOpacity
				onPress={() => navigation.navigate('Server Return Inventory')}>
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