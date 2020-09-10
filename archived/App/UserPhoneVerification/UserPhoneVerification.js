//
//  UserPhoneVerification
//  Hyppoe
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


export default class UserPhoneVerification extends React.Component {

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
						marginRight: 38,
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
				<View
					style={styles.titlePageConfirmView}>
					<Text
						style={styles.pageTitleText}>Enter in Verification</Text>
					<View
						style={{
							flex: 1,
						}}/>
					<Text
						style={styles.confirmationDescripText}>Almost there! Enter in the text verification code!</Text>
				</View>
				<View
					style={styles.verificationCodeView}>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							alignSelf: "center",
							top: 0,
							bottom: 0,
							justifyContent: "center",
						}}>
						<View
							style={styles.formCodeTwoView}>
							<Text
								style={styles.textTwoText}>4</Text>
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
							justifyContent: "center",
						}}>
						<View
							pointerEvents="box-none"
							style={{
								height: 53,
								flexDirection: "row",
								alignItems: "center",
							}}>
							<View
								style={styles.formCodeFiveView}>
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
										source={require("./../../assets/images/number-box.png")}
										style={styles.numberBoxImage}/>
								</View>
								<Text
									style={styles.textFiveText}>0</Text>
							</View>
							<View
								style={styles.formCodeView}>
								<Text
									style={styles.textText}>0</Text>
							</View>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								style={styles.formCodeThreeView}>
								<Text
									style={styles.textThreeText}>2</Text>
							</View>
							<View
								style={styles.formCodeFourView}>
								<Text
									style={styles.textFourText}>0</Text>
							</View>
						</View>
					</View>
				</View>
				<View
					style={styles.buttonsColorButtView}>
					<Text
						style={styles.doneText}>Done!</Text>
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
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 4,
		height: 20,
	},
	titlePageConfirmView: {
		backgroundColor: "transparent",
		height: 74,
		marginLeft: 20,
		marginRight: 16,
		marginTop: 17,
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
	},
	confirmationDescripText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.18,
		backgroundColor: "transparent",
	},
	verificationCodeView: {
		backgroundColor: "transparent",
		alignSelf: "center",
		width: 284,
		height: 53,
		marginTop: 51,
	},
	formCodeTwoView: {
		backgroundColor: "white",
		borderRadius: 10,
		borderWidth: 1,
		borderColor: "rgb(5, 5, 5)",
		borderStyle: "solid",
		width: 52,
		height: 53,
	},
	textTwoText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 22,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.27,
		backgroundColor: "transparent",
		marginLeft: 20,
		marginRight: 19,
		marginTop: 11,
	},
	formCodeFiveView: {
		backgroundColor: "transparent",
		width: 52,
		height: 53,
	},
	numberBoxImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: null,
		height: 53,
	},
	textFiveText: {
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 22,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.27,
		position: "absolute",
		left: 20,
		right: 19,
		top: 11,
	},
	formCodeView: {
		backgroundColor: "white",
		borderRadius: 10,
		borderWidth: 1,
		borderColor: "rgb(5, 5, 5)",
		borderStyle: "solid",
		width: 52,
		height: 53,
		marginLeft: 6,
	},
	textText: {
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 22,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.27,
		marginLeft: 20,
		marginRight: 19,
		marginTop: 11,
	},
	formCodeThreeView: {
		backgroundColor: "white",
		borderRadius: 10,
		borderWidth: 1,
		borderColor: "rgb(5, 5, 5)",
		borderStyle: "solid",
		width: 52,
		height: 53,
		marginRight: 6,
	},
	textThreeText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 22,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.27,
		backgroundColor: "transparent",
		marginLeft: 20,
		marginRight: 19,
		marginTop: 11,
	},
	formCodeFourView: {
		backgroundColor: "white",
		borderRadius: 10,
		borderWidth: 1,
		borderColor: "rgb(5, 5, 5)",
		borderStyle: "solid",
		width: 52,
		height: 53,
	},
	textFourText: {
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 22,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.27,
		marginLeft: 20,
		marginRight: 19,
		marginTop: 11,
	},
	buttonsColorButtView: {
		backgroundColor: "rgb(0, 112, 247)",
		borderRadius: 20,
		shadowColor: "rgba(0, 0, 0, 0.4)",
		shadowRadius: 6,
		shadowOpacity: 1,
		height: 50,
		marginLeft: 20,
		marginRight: 20,
		marginTop: 44,
		justifyContent: "center",
		alignItems: "center",
	},
	doneText: {
		color: "white",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
		backgroundColor: "transparent",
	},
})
