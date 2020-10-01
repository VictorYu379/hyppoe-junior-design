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
import TotalStationInventoryDetailedDataScreen from './screens/TotalStationInventoryDetailedDataScreen';
import AssignInventoryCreateStationScreen from './screens/AssignInventoryCreateStationScreen';
import RunnerRequestInventoryScreen from './screens/RunnerRequestInventoryScreen';
import RunnerReturnInventoryScreen from './screens/RunnerReturnInventoryScreen';
import StationRunnersScreen from './screens/StationRunnersScreen';
import RunnerHistoryScreen from './screens/RunnerHistoryScreen';
import HyppoeHeader from './components/HyppoeHeader';
import ManagerReturnInventoryScreen from './screens/ManagerReturnInventoryScreen';
import ManagerAssignInventoryScreen from './screens/ManagerAssignInventoryScreen';
import ManagerStationInventoryScreen from './screens/ManagerStationInventoryScreen';
import IndividualStationInventoryDetailedDataScreen from './screens/IndividualStationInventoryDetailedDataScreen';
import ServerConfirmInventoryScreen from './screens/ServerConfirmInventoryScreen';
import ServerRequestInventoryScreen from './screens/ServerRequestInventoryScreen';
import ServerReturnInventoryScreen from './screens/ServerReturnInventoryScreen';
import ManagerDashBoardScreen from './screens/ManagerDashBoardScreen';
import ManagerAvailableInventoryScreen from './screens/ManagerAvailableInventoryScreen';
import ManagerAvailableInventoryDetailedDataScreen from './screens/ManagerAvailableInventoryDetailedDataScreen';
import ManagerPendingInventoryScreen from './screens/ManagerPendingInventoryScreen';
import ManagerIndivitualStationDataScreen from './screens/ManagerIndividualStationDataScreen';
import ReturnInventoryDetailedDataScreen from './screens/ReturnInventoryDetailedDataScreen';
import StationAlertsScreen from './screens/StationAlertsScreen';


const Stack = createStackNavigator();

export default function App() {
	console.disableYellowBox = true;
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
						<Stack.Screen name="Dummy" component={DummyScreen} />
						<Stack.Screen
							name="Manager Dashboard"
							component={ManagerDashBoardScreen}
							options={{
								header: ({ navigation, props }) => {
									return <HyppoeHeader navigation={navigation} mode="full"/>;
								}
							}}/>
						<Stack.Screen
							name="Manager Available Inventory"
							component={ManagerAvailableInventoryScreen}
							options={{
								header: ({ navigation, props }) => {
									return <HyppoeHeader navigation={navigation} mode="full"/>;
								}
							}}/>
						<Stack.Screen
							name="Manager Available Inventory Detailed Data List"
							component={ManagerAvailableInventoryDetailedDataScreen}
							options={{
								header: ({ navigation, props }) => {
									return <HyppoeHeader navigation={navigation} mode="full"/>;
								}
							}}/>
						<Stack.Screen
							name="Manager Pending Inventory"
							component={ManagerPendingInventoryScreen}
							options={{
								header: ({ navigation, props }) => {
									return <HyppoeHeader navigation={navigation} mode="full"/>;
								}
							}}/>
						<Stack.Screen
							name="Manager Station Inventory"
							component={ManagerStationInventoryScreen}
							options={{
								header: ({ navigation, props }) => {
									return <HyppoeHeader navigation={navigation} mode="full"/>;
								}
							}}/>
						<Stack.Screen
							name="Manager Total Station Inventory Detailed Data"
							component={TotalStationInventoryDetailedDataScreen}
							options={{
								header: ({ navigation, props }) => {
									return <HyppoeHeader navigation={navigation} mode="full"/>;
								}
							}}/>
						<Stack.Screen
							name="Runner Task Screen"
							component={StationRunnersScreen}
							options={{
								header: ({ navigation, props }) => {
									return <HyppoeHeader navigation={navigation} mode="full"/>;
								}
							}}/>
						<Stack.Screen
							name="Runner History Screen"
							component={RunnerHistoryScreen}
							options={{
								header: ({ navigation, props }) => {
									return <HyppoeHeader navigation={navigation} mode="full"/>;
								}
							}}/>
						<Stack.Screen
							name="Manager Individual Station Inventory"
							component={ManagerIndivitualStationDataScreen}
							options={{
								header: ({ navigation, props }) => {
									return <HyppoeHeader navigation={navigation} mode="full"/>;
								}
							}}/>
						<Stack.Screen
							name="Manager Individual Station Inventory Detailed Data"
							component={IndividualStationInventoryDetailedDataScreen}
							options={{
								header: ({ navigation, props }) => {
									return <HyppoeHeader navigation={navigation} mode="full"/>;
								}
							}}/>
						<Stack.Screen
							name="Return Inventory Detailed Data"
							component={ReturnInventoryDetailedDataScreen}
							options={{
								header: ({ navigation, props }) => {
									return <HyppoeHeader navigation={navigation} mode="full"/>;
								}
							}}/>
						<Stack.Screen
							name="Alerts"
							component={StationAlertsScreen}
							options={{
								header: ({ navigation, props }) => {
									return <HyppoeHeader navigation={navigation} mode="full"/>;
								}
							}}/>
						<Stack.Screen
							name="Server Request Inventory"
							component={ServerRequestInventoryScreen}
							options={{
								header: ({ navigation, props }) => {
									return <HyppoeHeader navigation={navigation} mode="full"/>;
								}
							}}/>
						<Stack.Screen
							name="Server Confirm Inventory"
							component={ServerConfirmInventoryScreen}
							options={{
								header: ({ navigation, props }) => {
									return <HyppoeHeader navigation={navigation} mode="full"/>;
								}
							}}/>
						<Stack.Screen
							name="Manager Assign Inventory"
							component={ManagerAssignInventoryScreen}
							options={{
								header: ({ navigation, props }) => {
									return <HyppoeHeader navigation={navigation} mode="full"/>;
								}
							}}/>
						<Stack.Screen
							name="Manager Return Inventory"
							component={ManagerReturnInventoryScreen}
							options={{
								header: ({ navigation, props }) => {
									return <HyppoeHeader navigation={navigation} mode="full"/>;
								}
							}}/>
						<Stack.Screen
							name="Runner Request Inventory"
							component={RunnerRequestInventoryScreen}
							options={{
								header: ({ navigation, props }) => {
									return <HyppoeHeader navigation={navigation} mode="full"/>;
								}
							}}/>
						<Stack.Screen
							name="Runner Return Inventory"
							component={RunnerReturnInventoryScreen}
							options={{
								header: ({ navigation, props }) => {
									return <HyppoeHeader navigation={navigation} mode="full"/>;
								}
							}}/>
						<Stack.Screen
							name="Total Inventory"
							component={TotalInventoryScreen}
							options={{
								header: ({ navigation, props }) => {
									return <HyppoeHeader navigation={navigation} mode="full"/>;
								}
							}}
						/>
						<Stack.Screen
							name="Assign Inventory Create Station"
							component={AssignInventoryCreateStationScreen}
							options={{
								header: ({ navigation, props }) => {
									return <HyppoeHeader navigation={navigation} mode="full"/>;
								}
							}}
						/>
						<Stack.Screen
							name="Total Inventory Station Overview"
							component={TotalInventoryStationOverviewScreen}
							options={{
								header: ({ navigation, props }) => {
									return <HyppoeHeader navigation={navigation} mode="full"/>;
								}
							}}
						/>
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
