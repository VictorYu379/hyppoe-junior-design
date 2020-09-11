import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Header } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DummyScreen from './screens/DummyScreen';
import TotalInventoryScreen from './screens/TotalInventoryScreen';
import HyppoeHeader from './components/HyppoeHeader';

const Stack = createStackNavigator();

export default function App() {
	return (
		<View style={styles.container}>
			{Platform.OS === 'ios' && <StatusBar barStyle="default" />}
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen name="Dummy" component={DummyScreen} />
					<Stack.Screen
						name="Total Inventory"
						component={TotalInventoryScreen}
						options={{
							header: ({ navigation, props }) => {
								return <HyppoeHeader navigation={navigation} mode="simple"/>;
							}
						}}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</View>
	);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
