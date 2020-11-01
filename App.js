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
import RunnerStationInventoryScreen from './screens/RunnerStationInventoryScreen';
import HyppoeHeader from './components/HyppoeHeader';
import ManagerReturnInventoryScreen from './screens/ManagerReturnInventoryScreen';
import ManagerAssignInventoryScreen from './screens/ManagerAssignInventoryScreen';
import ServerConfirmInventoryScreen from './screens/ServerConfirmInventoryScreen';
import ServerRequestInventoryScreen from './screens/ServerRequestInventoryScreen';
import ServerReturnInventoryScreen from './screens/ServerReturnInventoryScreen';
import ServerPickYourStationScreen from './screens/ServerPickYourStationScreen';
import IndividualStationInventoryDetailedDataScreen from './screens/IndividualStationInventoryDetailedDataScreen';
import StationAlertsScreen from './screens/StationAlertsScreen';
// import ManagerServerInventoryScreen from './screens/ManagerServerInventoryScreen';
import RunnerHistoryScreen from './screens/RunnerHistoryScreen';
import ReturnInventoryDetailedDataScreen from './screens/ReturnInventoryDetailedDataScreen';
import TotalStationInventoryDetailedDataScreen from './screens/TotalStationInventoryDetailedDataScreen';
import ManagerPendingInventoryScreen from './screens/TotalStationInventoryDetailedDataScreen';
import ManagerIndividualStationDataScreen from './screens/ManagerIndividualStationDataScreen';
import ManagerAvailableInventoryScreen from './screens/ManagerAvailableInventoryScreen';
import ManagerDashBoardScreen from './screens/ManagerDashBoardScreen';
import RunnerDashBoardScreen from './screens/RunnerDashBoardScreen';
import RunnerTaskScreen from './screens/RunnerTaskScreen';
import ServerDashBoardScreen from './screens/ServerDashBoardScreen';
import ServerIndividualStationDataScreen from './screens/ServerIndividualStationDataScreen';
import ServerPendingInventoryScreen from './screens/ServerPendingInventoryScreen';

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
						<Stack.Screen name="RunnerTaskScreen" component={RunnerTaskScreen} />
						<Stack.Screen
							name="Server Return Inventory"
							component={ServerReturnInventoryScreen}
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
