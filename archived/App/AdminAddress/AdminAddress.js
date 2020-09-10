//
//  AdminAddress
//  Hyppoe
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


export default class AdminAddress extends React.Component {

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
					style={styles.pageTitleAddressText}>Address</Text>
				<View
					style={styles.addressView}>
					<View
						style={styles.addressFieldView}>
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
							<View
								style={styles.stateView}>
								<Text
									style={styles.stateText}>State</Text>
								<View
									style={{
										flex: 1,
									}}/>
								<View
									pointerEvents="box-none"
									style={{
										height: 15,
									}}>
									<View
										style={styles.seperatorTwoView}/>
									<Text
										style={styles.usersInputedStateText}>Georgia</Text>
								</View>
							</View>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 0,
								right: 0,
								top: 0,
								bottom: 0,
							}}>
							<View
								style={styles.addressTwoView}>
								<Text
									style={styles.addressText}>Street Address</Text>
								<View
									style={{
										flex: 1,
									}}/>
								<View
									pointerEvents="box-none"
									style={{
										height: 15,
									}}>
									<View
										style={styles.seperatorFourView}/>
									<Text
										style={styles.userInputedAddressText}>123 Big Money Lane</Text>
								</View>
							</View>
							<View
								style={styles.cityView}>
								<Text
									style={styles.cityText}>City</Text>
								<View
									style={{
										flex: 1,
									}}/>
								<View
									pointerEvents="box-none"
									style={{
										height: 15,
									}}>
									<View
										style={styles.seperatorThreeView}/>
									<Text
										style={styles.usersInputedCityText}>Atlanta</Text>
								</View>
							</View>
							<View
								style={styles.zipCodeView}>
								<Text
									style={styles.zipCodeText}>Zip Code</Text>
								<View
									style={{
										flex: 1,
									}}/>
								<View
									pointerEvents="box-none"
									style={{
										height: 15,
									}}>
									<View
										style={styles.seperatorView}/>
									<Text
										style={styles.usersInputedZipCoText}>30326</Text>
								</View>
							</View>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								style={styles.phoneNumberView}>
								<Text
									style={styles.phoneNumberText}>Phone Number</Text>
								<View
									style={{
										flex: 1,
									}}/>
								<Text
									style={styles.usersInputedPhoneText}>(404) - 867-5309</Text>
							</View>
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
		alignItems: "flex-start",
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
	pageTitleAddressText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 28,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0.36,
		backgroundColor: "transparent",
		width: 311,
		marginLeft: 20,
		marginTop: 23,
	},
	addressView: {
		backgroundColor: "white",
		borderRadius: 15,
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		alignSelf: "center",
		width: 317,
		height: 302,
		marginTop: 32,
		justifyContent: "center",
	},
	addressFieldView: {
		backgroundColor: "transparent",
		height: 265,
		marginLeft: 20,
		marginRight: 19,
	},
	stateView: {
		backgroundColor: "transparent",
		height: 37,
	},
	stateText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.18,
		backgroundColor: "transparent",
		marginLeft: 3,
	},
	seperatorTwoView: {
		backgroundColor: "rgb(184, 196, 187)",
		position: "absolute",
		left: 0,
		right: 0,
		bottom: 0,
		height: 1,
	},
	usersInputedStateText: {
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.15,
		position: "absolute",
		left: 3,
		right: 0,
		bottom: 0,
	},
	addressTwoView: {
		backgroundColor: "transparent",
		height: 37,
	},
	addressText: {
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.18,
		marginLeft: 3,
	},
	seperatorFourView: {
		backgroundColor: "rgb(184, 196, 187)",
		position: "absolute",
		left: 0,
		right: 0,
		bottom: 0,
		height: 1,
	},
	userInputedAddressText: {
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.15,
		position: "absolute",
		left: 3,
		right: 0,
		bottom: 0,
	},
	cityView: {
		backgroundColor: "transparent",
		height: 37,
		marginTop: 20,
	},
	cityText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.18,
		backgroundColor: "transparent",
		marginLeft: 3,
	},
	seperatorThreeView: {
		backgroundColor: "rgb(184, 196, 187)",
		position: "absolute",
		left: 0,
		right: 0,
		bottom: 0,
		height: 1,
	},
	usersInputedCityText: {
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.15,
		position: "absolute",
		left: 3,
		right: 0,
		bottom: 0,
	},
	zipCodeView: {
		backgroundColor: "transparent",
		height: 37,
		marginTop: 77,
	},
	zipCodeText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.18,
		backgroundColor: "transparent",
		marginLeft: 3,
	},
	seperatorView: {
		backgroundColor: "rgb(184, 196, 187)",
		position: "absolute",
		left: 0,
		right: 0,
		bottom: 0,
		height: 1,
	},
	usersInputedZipCoText: {
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.15,
		position: "absolute",
		left: 3,
		right: 0,
		bottom: 0,
	},
	phoneNumberView: {
		backgroundColor: "transparent",
		height: 37,
		marginLeft: 3,
		marginRight: 1,
	},
	phoneNumberText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.18,
		backgroundColor: "transparent",
	},
	usersInputedPhoneText: {
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.15,
	},
})
