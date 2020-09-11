import React from 'react';
import StationModal from "./App/TotalInventoryInputFlow/StationModal"
import PairItemModal from "./App/TotalInventoryInputFlow/PairItemModal"
import { AppLoading } from "expo"
import * as Font from "expo-font"
import { createAppContainer, createStackNavigator } from "react-navigation"

const PushRouteOne = createStackNavigator({
  StationModal: {
      screen: StationModal,
    },
  }, {
    initialRouteName: "StationModal",
})

const RootNavigator = createStackNavigator({
    PushRouteOne: {
      screen: PushRouteOne,
    },
  }, {
    mode: "modal",
    headerMode: "none",
    initialRouteName: "PushRouteOne",
})

const AppContainer = createAppContainer(RootNavigator)

export default class App extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			fontsReady: false,
		}
	}

	componentDidMount() {
		this.initProjectFonts()
	}

	async initProjectFonts() {
		await Font.loadAsync({
			"Arial-BoldMT": require("./assets/fonts/ArialBold.ttf"),
			"ArialMT": require("./assets/fonts/Arial.ttf"),
		})
		this.setState({
			fontsReady: true,
		})
	}

	render() {
		if (!this.state.fontsReady) { return (<AppLoading />); }
		return <AppContainer/>
	}
}