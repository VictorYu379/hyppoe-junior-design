import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Header } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import { AppLoading } from 'expo';
import DummyScreen from './screens/DummyScreen';
import TotalInventoryScreen from './screens/TotalInventoryScreen';
import TotalInventoryStationOverviewScreen from './screens/TotalInventoryStationOverviewScreen';
import AssignInventoryCreateStationScreen from './screens/AssignInventoryCreateStationScreen';
import RunnerRequestInventoryScreen from './screens/RunnerRequestInventoryScreen';
import RunnerReturnInventoryScreen from './screens/RunnerReturnInventoryScreen';
import HyppoeHeader from './components/HyppoeHeader';
import ManagerReturnInventoryScreen from './screens/ManagerReturnInventoryScreen';
import ManagerAssignInventoryScreen from './screens/ManagerAssignInventoryScreen';
import ServerConfirmInventoryScreen from './screens/ServerConfirmInventoryScreen';
import ServerRequestInventoryScreen from './screens/ServerRequestInventoryScreen';
import ServerReturnInventoryScreen from './screens/ServerReturnInventoryScreen';
import ServerDashBoardScreen from './screens/ServerDashBoardScreen';
import ServerPendingInventoryScreen from './screens/ServerPendingInventoryScreen';
import ServerPendingInventoryHistory from './screens/ServerPendingInventoryHistory';
import ServerIndividualDataScreen from './screens/ServerIndividualStationDataScreen';
import ServerStationInventoryScreen from './screens/ServerIndividualStationDataScreen';
import StationRunnersScreen from './screens/StationRunnersScreen';
import StationAlertsScreen from './screens/StationAlertsScreen';
import IndividualStationInventoryScreen from './screens/IndividualStationInventoryDetailedDataScreen';

const Stack = createStackNavigator();

export default function App() {
	let [fontsLoaded] = useFonts({
		'Arial-BoldMT': require('./assets/fonts/ArialBold.ttf'),
		'Arial': require('./assets/fonts/Arial.ttf')
	});
	if (!fontsLoaded) {
		return <AppLoading />;
	} else {
		return (
			<View style={styles.container}>
				{Platform.OS === 'ios' && <StatusBar barStyle="default" />}
				<NavigationContainer>
					<Stack.Navigator>
						<Stack.Screen
							name="Server Dashboard Screen"
							component={ServerDashBoardScreen}
							options={{
								header: ({ navigation, props }) => {
									return <HyppoeHeader navigation={navigation} mode="full"/>;
								}
							}}/>
						<Stack.Screen
							name="Server Pending Inventory Screen"
							component={ServerPendingInventoryScreen}
							options={{
								header: ({ navigation, props }) => {
									return <HyppoeHeader navigation={navigation} mode="full"/>;
								}
							}}/>
						<Stack.Screen
							name="Server Station Inventory Screen"
							component={ServerStationInventoryScreen}
							options={{
								header: ({ navigation, props }) => {
									return <HyppoeHeader navigation={navigation} mode="full"/>;
								}
							}}/>
						<Stack.Screen
							name="Station Runners Screen"
							component={StationRunnersScreen}
							options={{
								header: ({ navigation, props }) => {
									return <HyppoeHeader navigation={navigation} mode="full"/>;
								}
							}}/>
						<Stack.Screen
							name="Station Alerts Screen"
							component={StationAlertsScreen}
							options={{
								header: ({ navigation, props }) => {
									return <HyppoeHeader navigation={navigation} mode="full"/>;
								}
							}}/>
						<Stack.Screen
							name="Server Request Inventory Screen"
							component={ServerRequestInventoryScreen}
							options={{
								header: ({ navigation, props }) => {
									return <HyppoeHeader navigation={navigation} mode="full"/>;
								}
							}}/>
						<Stack.Screen
							name="Server Confirm Inventory Screen"
							component={ServerConfirmInventoryScreen}
							options={{
								header: ({ navigation, props }) => {
									return <HyppoeHeader navigation={navigation} mode="full"/>;
								}
							}}/>
						<Stack.Screen
							name="Server Return Inventory Screen"
							component={ServerReturnInventoryScreen}
							options={{
								header: ({ navigation, props }) => {
									return <HyppoeHeader navigation={navigation} mode="full"/>;
								}
							}}/>
						<Stack.Screen
							name="Server Individual Data Screen"
							component={ServerIndividualDataScreen}
							options={{
								header: ({ navigation, props }) => {
									return <HyppoeHeader navigation={navigation} mode="full"/>;
								}
							}}/>
						<Stack.Screen
							name="Total Inventory Station Overview"
							component={TotalInventoryStationOverviewScreen}
							options={{
								header: ({ navigation, props }) => {
									return <HyppoeHeader navigation={navigation} mode="full"/>;
								}
							}}/>
						<Stack.Screen
							name="Individual Inventory Station Overview"
							component={IndividualStationInventoryScreen}
							options={{
								header: ({ navigation, props }) => {
									return <HyppoeHeader navigation={navigation} mode="full"/>;
								}
							}}/>
					</Stack.Navigator>
				</NavigationContainer>
			</View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});