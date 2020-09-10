//
//  AdminSignUpInformation
//  Hyppoe
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


export default class AdminSignUpInformation extends React.Component {

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
						height: 20,
						marginLeft: 36,
						marginRight: 85,
						marginTop: 56,
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
				</View>
				<Text
					style={styles.pageTitleSignUpText}>Sign Up Information</Text>
				<View
					style={styles.allAdminSignUpInView}>
					<View
						style={styles.companyInformationView}>
						<Text
							style={styles.companyNameText}>Company Name</Text>
						<View
							style={styles.nameView}>
							<Text
								style={styles.nameText}>Name</Text>
							<Text
								style={styles.inputedNameOfUserText}>Dennis Reynolds</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Image
								source={require("./../../assets/images/seperator-5.png")}
								style={styles.seperatorImage}/>
						</View>
						<View
							style={styles.titleView}>
							<Text
								style={styles.titleText}>Title</Text>
							<Text
								style={styles.inputedTitleOfUseText}>VP of Worldwide Distribution</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								style={styles.seperatorEightView}/>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							style={styles.emailView}>
							<Text
								style={styles.eMailText}>E-mail</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.inputedUserEmailText}>Dennis@wolfcola.com</Text>
						</View>
					</View>
					<View
						style={styles.addressView}>
						<View
							style={styles.addressTwoView}>
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
											style={styles.seperatorFiveView}/>
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
									style={styles.addressThreeView}>
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
											style={styles.seperatorSevenView}/>
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
											style={styles.seperatorSixView}/>
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
											style={styles.seperatorFourView}/>
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
					<View
						style={{
							flex: 1,
						}}/>
					<View
						style={styles.routingNumberAndIView}>
						<View
							style={styles.routingNumberView}>
							<Text
								style={styles.routingNumberText}>Routing Number</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								pointerEvents="box-none"
								style={{
									height: 17,
								}}>
								<View
									style={styles.seperatorThreeView}/>
								<Text
									style={styles.inputRoutingNumberText}>061092387</Text>
							</View>
						</View>
						<View
							style={styles.accountNumberView}>
							<Text
								style={styles.accountNumberText}>Account Number</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								pointerEvents="box-none"
								style={{
									height: 17,
								}}>
								<View
									style={styles.seperatorTwoView}/>
								<Text
									style={styles.inputAccountNumberText}>012345678</Text>
							</View>
						</View>
						<View
							style={styles.bankNameView}>
							<Text
								style={styles.bankNameText}>Bank Name</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								pointerEvents="box-none"
								style={{
									height: 17,
								}}>
								<View
									style={styles.seperatorView}/>
								<Text
									style={styles.inputBackNameText}>Sweetwater Bank</Text>
							</View>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							style={styles.bankAddressView}>
							<Text
								style={styles.bankAddressText}>Bank Address</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.inputBankAddressText}>420 Lane Atlanta, Georgia 30326</Text>
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
	},
	backButtonImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 8,
		height: 14,
		marginTop: 3,
	},
	menuButtonImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 4,
		height: 20,
	},
	pageTitleSignUpText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 28,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0.36,
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		width: 281,
		marginLeft: 20,
		marginTop: 26,
	},
	allAdminSignUpInView: {
		backgroundColor: "transparent",
		alignSelf: "center",
		width: 317,
		height: 844,
		marginTop: 32,
	},
	companyInformationView: {
		backgroundColor: "white",
		borderRadius: 15,
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		height: 252,
	},
	companyNameText: {
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 1.08,
		marginLeft: 20,
		marginRight: 20,
		marginTop: 32,
	},
	nameView: {
		backgroundColor: "transparent",
		height: 51,
		marginLeft: 20,
		marginRight: 20,
		marginTop: 7,
	},
	nameText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.15,
		backgroundColor: "transparent",
	},
	inputedNameOfUserText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.15,
		backgroundColor: "transparent",
		marginTop: 8,
	},
	seperatorImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		width: null,
		height: 1,
		marginRight: 10,
	},
	titleView: {
		backgroundColor: "transparent",
		height: 51,
		marginLeft: 20,
		marginRight: 20,
		marginTop: 12,
	},
	titleText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.15,
		backgroundColor: "transparent",
	},
	inputedTitleOfUseText: {
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.15,
		marginTop: 8,
	},
	seperatorEightView: {
		backgroundColor: "rgb(184, 196, 187)",
		height: 1,
		marginRight: 10,
	},
	emailView: {
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		width: 276,
		height: 40,
		marginLeft: 20,
		marginBottom: 30,
	},
	eMailText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.18,
		backgroundColor: "transparent",
	},
	inputedUserEmailText: {
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.18,
	},
	addressView: {
		backgroundColor: "white",
		borderRadius: 15,
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		height: 302,
		marginTop: 10,
		justifyContent: "center",
	},
	addressTwoView: {
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
	seperatorFiveView: {
		backgroundColor: "rgb(184, 196, 187)",
		position: "absolute",
		left: 0,
		right: 1,
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
	addressThreeView: {
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
	seperatorSevenView: {
		backgroundColor: "rgb(184, 196, 187)",
		position: "absolute",
		left: 0,
		right: 1,
		bottom: 0,
		height: 1,
	},
	userInputedAddressText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.15,
		backgroundColor: "transparent",
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
	seperatorSixView: {
		backgroundColor: "rgb(184, 196, 187)",
		position: "absolute",
		left: 0,
		right: 1,
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
		right: 1,
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
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.15,
		backgroundColor: "transparent",
	},
	routingNumberAndIView: {
		backgroundColor: "white",
		borderRadius: 15,
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		height: 270,
	},
	routingNumberView: {
		backgroundColor: "transparent",
		height: 35,
		marginLeft: 20,
		marginRight: 19,
		marginTop: 32,
	},
	routingNumberText: {
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
		right: 1,
		bottom: 0,
		height: 1,
	},
	inputRoutingNumberText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.18,
		backgroundColor: "transparent",
		position: "absolute",
		left: 3,
		right: 0,
		bottom: 0,
	},
	accountNumberView: {
		backgroundColor: "transparent",
		height: 35,
		marginLeft: 20,
		marginRight: 19,
		marginTop: 22,
	},
	accountNumberText: {
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
		right: 1,
		bottom: 0,
		height: 1,
	},
	inputAccountNumberText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.18,
		backgroundColor: "transparent",
		position: "absolute",
		left: 3,
		right: 0,
		bottom: 0,
	},
	bankNameView: {
		backgroundColor: "transparent",
		height: 37,
		marginLeft: 20,
		marginRight: 19,
		marginTop: 22,
	},
	bankNameText: {
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
		right: 1,
		bottom: 2,
		height: 1,
	},
	inputBackNameText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.18,
		backgroundColor: "transparent",
		position: "absolute",
		left: 3,
		right: 0,
		bottom: 0,
	},
	bankAddressView: {
		backgroundColor: "transparent",
		alignSelf: "flex-end",
		width: 274,
		height: 37,
		marginRight: 20,
		marginBottom: 30,
	},
	bankAddressText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.18,
		backgroundColor: "transparent",
	},
	inputBankAddressText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.18,
		backgroundColor: "transparent",
	},
})
