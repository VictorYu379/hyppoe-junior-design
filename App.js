//
//  App.js
//  Hyppoe
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import * as Font from "expo-font"
import AdminAddStandsAndAssignInventory from "./App/AdminAddStandsAndAssignInventory/AdminAddStandsAndAssignInventory"
import AdminAddTotalInventoryAndSupplies from "./App/AdminAddTotalInventoryAndSupplies/AdminAddTotalInventoryAndSupplies"
import AdminAddress from "./App/AdminAddress/AdminAddress"
import AdminAlerts from "./App/AdminAlerts/AdminAlerts"
import AdminAssignStationInventory from "./App/AdminAssignStationInventory/AdminAssignStationInventory"
import AdminConfirmedInventory from "./App/AdminConfirmedInventory/AdminConfirmedInventory"
import AdminConfirmedStationAndTablet from "./App/AdminConfirmedStationAndTablet/AdminConfirmedStationAndTablet"
import AdminConfirmedStationAndTablet1 from "./App/AdminConfirmedStationAndTablet1/AdminConfirmedStationAndTablet1"
import AdminContact from "./App/AdminContact/AdminContact"
import AdminCreateEvent from "./App/AdminCreateEvent/AdminCreateEvent"
import AdminCreatePreorderMenu from "./App/AdminCreatePreorderMenu/AdminCreatePreorderMenu"
import AdminCreatePreorderMenu1 from "./App/AdminCreatePreorderMenu1/AdminCreatePreorderMenu1"
import AdminDashboard from "./App/AdminDashboard/AdminDashboard"
import AdminDrawEventLocation from "./App/AdminDrawEventLocation/AdminDrawEventLocation"
import AdminError from "./App/AdminError/AdminError"
import AdminEventRevenueAnalysis from "./App/AdminEventRevenueAnalysis/AdminEventRevenueAnalysis"
import AdminEvents from "./App/AdminEvents/AdminEvents"
import AdminForgotPassword from "./App/AdminForgotPassword/AdminForgotPassword"
import AdminHowToGuide from "./App/AdminHowToGuide/AdminHowToGuide"
import AdminInformation from "./App/AdminInformation/AdminInformation"
import AdminInitialInputOfTotalInventoryAndSupplies from "./App/AdminInitialInputOfTotalInventoryAndSupplies/AdminInitialInputOfTotalInventoryAndSupplies"
import AdminInitialInputOfTotalInventoryAndSupplies1 from "./App/AdminInitialInputOfTotalInventoryAndSupplies1/AdminInitialInputOfTotalInventoryAndSupplies1"
import AdminInputStationSupplies from "./App/AdminInputStationSupplies/AdminInputStationSupplies"
import AdminLogin from "./App/AdminLogin/AdminLogin"
import AdminMenu from "./App/AdminMenu/AdminMenu"
import AdminModalInputOfInventory from "./App/AdminModalInputOfInventory/AdminModalInputOfInventory"
import AdminPreorderConfirmed1Item from "./App/AdminPreorderConfirmed1Item/AdminPreorderConfirmed1Item"
import AdminPreorderConfirmed2Items from "./App/AdminPreorderConfirmed2Items/AdminPreorderConfirmed2Items"
import AdminPreorderConfirmed3Items from "./App/AdminPreorderConfirmed3Items/AdminPreorderConfirmed3Items"
import AdminPreorderQue from "./App/AdminPreorderQue/AdminPreorderQue"
import AdminPrivacyPolicy from "./App/AdminPrivacyPolicy/AdminPrivacyPolicy"
import AdminProfileAndSettings from "./App/AdminProfileAndSettings/AdminProfileAndSettings"
import AdminRunnerScreen from "./App/AdminRunnerScreen/AdminRunnerScreen"
import AdminSignUp from "./App/AdminSignUp/AdminSignUp"
import AdminSignUpInformation from "./App/AdminSignUpInformation/AdminSignUpInformation"
import AdminStationKioskInventory from "./App/AdminStationKioskInventory/AdminStationKioskInventory"
import AdminTotalAssignedAndConfirmedInventory from "./App/AdminTotalAssignedAndConfirmedInventory/AdminTotalAssignedAndConfirmedInventory"
import AdminTotalAvailableInventory from "./App/AdminTotalAvailableInventory/AdminTotalAvailableInventory"
import AdminTotalInventoryAndSetAlerts from "./App/AdminTotalInventoryAndSetAlerts/AdminTotalInventoryAndSetAlerts"
import AdminTotalInventoryHomeAlternative from "./App/AdminTotalInventoryHomeAlternative/AdminTotalInventoryHomeAlternative"
import AdminTotalResignedAndDamaged from "./App/AdminTotalResignedAndDamaged/AdminTotalResignedAndDamaged"
import AdminTotalStationInventory from "./App/AdminTotalStationInventory/AdminTotalStationInventory"
import AdminUpdateStationSupplies from "./App/AdminUpdateStationSupplies/AdminUpdateStationSupplies"
import React from "react"
import UserAddNewCard from "./App/UserAddNewCard/UserAddNewCard"
import UserAddYourCard from "./App/UserAddYourCard/UserAddYourCard"
import UserContact from "./App/UserContact/UserContact"
import UserEnterPhoneNumber from "./App/UserEnterPhoneNumber/UserEnterPhoneNumber"
import UserError from "./App/UserError/UserError"
import UserExplanation from "./App/UserExplanation/UserExplanation"
import UserHowToGuide from "./App/UserHowToGuide/UserHowToGuide"
import UserMenu from "./App/UserMenu/UserMenu"
import UserMyInformationAndNotifications from "./App/UserMyInformationAndNotifications/UserMyInformationAndNotifications"
import UserPastOrders from "./App/UserPastOrders/UserPastOrders"
import UserPaymentMethod from "./App/UserPaymentMethod/UserPaymentMethod"
import UserPhoneVerification from "./App/UserPhoneVerification/UserPhoneVerification"
import UserPreorderMenu from "./App/UserPreorderMenu/UserPreorderMenu"
import UserPrivacyPolicy from "./App/UserPrivacyPolicy/UserPrivacyPolicy"
import UserProfileAndSettings from "./App/UserProfileAndSettings/UserProfileAndSettings"
import UserSearch from "./App/UserSearch/UserSearch"
import UserWelcome from "./App/UserWelcome/UserWelcome"
import UserYourPreorder1Item from "./App/UserYourPreorder1Item/UserYourPreorder1Item"
import UserYourPreorder2Items from "./App/UserYourPreorder2Items/UserYourPreorder2Items"
import UserYourPreorder3Items from "./App/UserYourPreorder3Items/UserYourPreorder3Items"
import { AppLoading, DangerZone } from "expo"
import { createAppContainer, createStackNavigator } from "react-navigation"

const PushRouteOne = createStackNavigator({
	AdminCreatePreorderMenu1: {
		screen: AdminCreatePreorderMenu1,
	},
}, {
	initialRouteName: "AdminCreatePreorderMenu1",
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
