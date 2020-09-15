import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Header } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import { AppLoading } from 'expo';
import DummyScreen from './screens/DummyScreen';
import TotalInventoryStationOverviewScreen from './screens/TotalInventoryStationOverviewScreen';
import HyppoeHeader from './components/HyppoeHeader';

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
					<Stack.Screen name="Dummy" component={DummyScreen} />
					<Stack.Screen
						name="Total Inventory"
						component={TotalInventoryStationOverviewScreen}
						options={{
							header: ({ navigation, props }) => {
								return <HyppoeHeader navigation={navigation} mode="full"/>;
              },
              headerStyle: {
                zIndex: 0
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