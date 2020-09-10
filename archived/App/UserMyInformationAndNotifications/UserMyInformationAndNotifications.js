//
//  UserMyInformationAndNotifications
//  Hyppoe
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


export default class UserMyInformationAndNotifications extends React.Component {

	static navigationOptions = ({ navigation }) => {
	
		const { params = {} } = navigation.state
		return {
				header: null,
				headerLeft: null,
				headerRight: null,
			}
	}

	constructor(props) {
		super(props)
	}

	componentDidMount() {
	
	}

	render() {
	
		return <View
				style={styles.viewView}>
				<View
					pointerEvents="box-none"
					style={{
						alignSelf: "stretch",
						height: 26,
						marginLeft: 36,
						marginRight: 28,
						marginTop: 53,
						flexDirection: "row",
						alignItems: "flex-start",
					}}>
					<Image
						source={require("./../../assets/images/back-button.png")}
						style={styles.backButtonImage}/>
					<View
						style={{
							flex: 1,
						}}/>
					<Image
						source={require("./../../assets/images/menu-button.png")}
						style={styles.menuButtonImage}/>
					<View
						style={styles.cartButtonView}>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 0,
								right: 0,
								top: 0,
								bottom: 0,
								justifyContent: "center",
							}}>
							<Image
								source={require("./../../assets/images/pocket-2.png")}
								style={styles.pocketImage}/>
						</View>
						<View
							style={styles.ovalView}/>
					</View>
				</View>
				<Text
					style={styles.pageTitleMyInfoText}>My Information</Text>
				<View
					style={styles.myInformationView}>
					<View
						style={styles.infomationAndSettiView}>
						<Text
							style={styles.firstAndLastNameText}>First and Last Name</Text>
						<View
							pointerEvents="box-none"
							style={{
								height: 15,
								marginTop: 3,
							}}>
							<View
								style={styles.seperatorThreeView}/>
							<Text
								style={styles.userNameText}>Frank Reynolds</Text>
						</View>
						<Text
							style={styles.emailText}>Email</Text>
						<View
							pointerEvents="box-none"
							style={{
								height: 15,
								marginTop: 3,
							}}>
							<View
								style={styles.seperatorTwoView}/>
							<Text
								style={styles.userEmailText}>Frank@wolfcola.com</Text>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								height: 17,
								marginLeft: 4,
								marginTop: 22,
							}}>
							<Text
								style={styles.pushSwitchText}>Push Notifications</Text>
							<Text
								style={styles.pushNotificationsText}>Push Notifications</Text>
						</View>
						<View
							style={styles.seperatorView}/>
						<View
							pointerEvents="box-none"
							style={{
								flex: 1,
								marginLeft: 4,
								marginTop: 20,
								marginBottom: 11,
							}}>
							<Text
								style={styles.emaiSwitchText}>Email Receipts</Text>
							<Text
								style={styles.emailReceiptsText}>Email Receipts</Text>
						</View>
						<View
							style={styles.seperatorFourView}/>
						<View
							pointerEvents="box-none"
							style={{
								height: 17,
								marginLeft: 4,
							}}>
							<Text
								style={styles.useLocationText}>Use Location</Text>
							<Text
								style={styles.locationSwitchText}>Location</Text>
						</View>
					</View>
				</View>
			</View>
	}
}

const styles = StyleSheet.create({
	viewView: {
		backgroundColor: "rgb(247, 247, 247)",
		flex: 1,
		alignItems: "center",
	},
	backButtonImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 8,
		height: 14,
		marginTop: 6,
	},
	menuButtonImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 4,
		height: 20,
		marginRight: 35,
		marginTop: 3,
	},
	cartButtonView: {
		backgroundColor: "transparent",
		width: 22,
		height: 26,
	},
	pocketImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 24,
		marginRight: 2,
	},
	ovalView: {
		backgroundColor: "rgb(0, 112, 247)",
		borderRadius: 4,
		position: "absolute",
		left: 14,
		right: 0,
		bottom: 0,
		height: 8,
	},
	pageTitleMyInfoText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 28,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0.36,
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		width: 221,
		marginLeft: 20,
		marginTop: 23,
	},
	myInformationView: {
		backgroundColor: "white",
		borderRadius: 15,
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		width: 317,
		height: 300,
		marginTop: 32,
		justifyContent: "center",
	},
	infomationAndSettiView: {
		backgroundColor: "transparent",
		height: 238,
		marginLeft: 20,
		marginRight: 20,
	},
	firstAndLastNameText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.18,
		backgroundColor: "transparent",
		marginLeft: 4,
	},
	seperatorThreeView: {
		backgroundColor: "rgb(184, 196, 187)",
		position: "absolute",
		left: 0,
		right: 0,
		top: 14,
		height: 1,
	},
	userNameText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.15,
		backgroundColor: "transparent",
		position: "absolute",
		left: 4,
		right: 0,
		top: 0,
	},
	emailText: {
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.18,
		marginLeft: 4,
		marginTop: 22,
	},
	seperatorTwoView: {
		backgroundColor: "rgb(184, 196, 187)",
		position: "absolute",
		left: 0,
		right: 0,
		top: 14,
		height: 1,
	},
	userEmailText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.15,
		backgroundColor: "transparent",
		position: "absolute",
		left: 4,
		right: 0,
		top: 0,
	},
	pushSwitchText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.15,
		backgroundColor: "transparent",
		position: "absolute",
		right: 0,
		width: 111,
		top: 2,
	},
	pushNotificationsText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.18,
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
	},
	seperatorView: {
		backgroundColor: "rgb(184, 196, 187)",
		height: 1,
		marginTop: 17,
	},
	emaiSwitchText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.15,
		backgroundColor: "transparent",
		position: "absolute",
		right: 0,
		width: 111,
		bottom: 0,
	},
	emailReceiptsText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.18,
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
	},
	seperatorFourView: {
		backgroundColor: "rgb(184, 196, 187)",
		height: 1,
		marginBottom: 22,
	},
	useLocationText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.18,
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		right: 0,
		bottom: 0,
	},
	locationSwitchText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.15,
		backgroundColor: "transparent",
		position: "absolute",
		right: 0,
		width: 111,
		bottom: 1,
	},
})
