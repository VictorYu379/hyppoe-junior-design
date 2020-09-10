//
//  UserAddYourCard
//  Hyppoe
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


export default class UserAddYourCard extends React.Component {

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
					style={styles.pageTitleText}>Add Your Card</Text>
				<View
					style={styles.creditCardView}>
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
							source={require("./../../assets/images/background-31.png")}
							style={styles.backgroundImage}/>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 20,
							right: 20,
							top: 32,
							bottom: 18,
						}}>
						<View
							style={styles.firstNameView}>
							<Text
								style={styles.firstNameText}>First Name*</Text>
							<Text
								style={styles.inputLastNameTwoText}>Charlie</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								style={styles.seperatorSixView}/>
						</View>
						<View
							style={styles.lastNameView}>
							<Text
								style={styles.lastNameText}>Last Name*</Text>
							<Text
								style={styles.inputLastNameText}>Kelly</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								style={styles.seperatorFiveView}/>
						</View>
						<View
							style={styles.creditCardNumberView}>
							<Text
								style={styles.creditCardText}>Credit Card Number*</Text>
							<Text
								style={styles.inputCreditCardNuText}>**** **** ***** 1992</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								style={styles.seperatorFourView}/>
						</View>
						<View
							style={styles.expirationDateView}>
							<Text
								style={styles.expirationDateText}>Expiration Date*</Text>
							<Text
								style={styles.inputDateIE042Text}>04/20</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								style={styles.seperatorThreeView}/>
						</View>
						<View
							style={styles.zipCodeView}>
							<Text
								style={styles.zipCodeText}>Zip Code*</Text>
							<Text
								style={styles.inputZipCodeIEText}>30326</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								style={styles.seperatorTwoView}/>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							style={styles.emailView}>
							<Text
								style={styles.emailText}>Email for eReceipts</Text>
							<Text
								style={styles.inputEmailText}>Charlie@wolfcola.com</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								style={styles.seperatorView}/>
						</View>
						<Text
							style={styles.dataStoredByGooglText}>Data Stored by Google. Encryption Powered by NMI.{"\n"}*Required Field</Text>
					</View>
				</View>
				<View
					style={{
						flex: 1,
					}}/>
				<View
					style={styles.saveButtonView}>
					<Text
						style={styles.saveText}>Save!</Text>
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
		marginTop: 6,
	},
	menuButtonImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
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
	pageTitleText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 28,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0.36,
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		width: 256,
		marginLeft: 20,
		marginTop: 23,
	},
	creditCardView: {
		backgroundColor: "transparent",
		alignSelf: "center",
		width: 317,
		height: 390,
		marginTop: 32,
	},
	backgroundImage: {
		backgroundColor: "transparent",
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		resizeMode: "cover",
		width: null,
		height: 390,
	},
	firstNameView: {
		backgroundColor: "transparent",
		height: 42,
	},
	firstNameText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 13,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.16,
		backgroundColor: "transparent",
	},
	inputLastNameTwoText: {
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 11,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.14,
		marginTop: 6,
	},
	seperatorSixView: {
		backgroundColor: "rgb(184, 196, 187)",
		height: 1,
	},
	lastNameView: {
		backgroundColor: "transparent",
		height: 42,
		marginTop: 10,
	},
	lastNameText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 13,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.16,
		backgroundColor: "transparent",
	},
	inputLastNameText: {
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 11,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.14,
		marginTop: 6,
	},
	seperatorFiveView: {
		backgroundColor: "rgb(184, 196, 187)",
		height: 1,
	},
	creditCardNumberView: {
		backgroundColor: "transparent",
		height: 42,
		marginTop: 10,
	},
	creditCardText: {
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 13,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.16,
	},
	inputCreditCardNuText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 11,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.14,
		backgroundColor: "transparent",
		marginTop: 6,
	},
	seperatorFourView: {
		backgroundColor: "rgb(184, 196, 187)",
		height: 1,
	},
	expirationDateView: {
		backgroundColor: "transparent",
		height: 42,
		marginTop: 10,
	},
	expirationDateText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 13,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.16,
		backgroundColor: "transparent",
	},
	inputDateIE042Text: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 11,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.14,
		backgroundColor: "transparent",
		marginTop: 6,
	},
	seperatorThreeView: {
		backgroundColor: "rgb(184, 196, 187)",
		height: 1,
	},
	zipCodeView: {
		backgroundColor: "transparent",
		height: 42,
		marginTop: 10,
	},
	zipCodeText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 13,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.16,
		backgroundColor: "transparent",
	},
	inputZipCodeIEText: {
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 11,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.14,
		marginTop: 6,
	},
	seperatorTwoView: {
		backgroundColor: "rgb(184, 196, 187)",
		height: 1,
	},
	emailView: {
		backgroundColor: "transparent",
		height: 42,
		marginBottom: 14,
	},
	emailText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 13,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.16,
		backgroundColor: "transparent",
	},
	inputEmailText: {
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 11,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.14,
		marginTop: 6,
	},
	seperatorView: {
		backgroundColor: "rgb(184, 196, 187)",
		height: 1,
	},
	dataStoredByGooglText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.12,
		backgroundColor: "transparent",
	},
	saveButtonView: {
		backgroundColor: "rgb(0, 112, 247)",
		borderRadius: 20,
		shadowColor: "rgba(0, 0, 0, 0.4)",
		shadowRadius: 6,
		shadowOpacity: 1,
		height: 50,
		marginLeft: 20,
		marginRight: 20,
		marginBottom: 17,
		justifyContent: "center",
		alignItems: "center",
	},
	saveText: {
		color: "white",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
		backgroundColor: "transparent",
	},
})
