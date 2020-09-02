//
//  AdminSignUp
//  Hyppoe
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


export default class AdminSignUp extends React.Component {

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
				<Text
					style={styles.pageTitleSignUpText}>Sign Up</Text>
				<View
					style={styles.formView}>
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
							style={styles.formLineTwoView}>
							<Text
								style={styles.emailAddressText}>EMAIL ADDRESS</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.inputEmailText}>john@mail.com</Text>
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
							style={styles.formLineThreeView}>
							<Text
								style={styles.fullNameText}>FULL NAME</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.inputNameText}>John Doe</Text>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							style={styles.passwordView}>
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
									style={styles.formLineView}>
									<Text
										style={styles.textText}>PASSWORD</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.inputPasswordText}>********</Text>
								</View>
							</View>
							<Image
								source={require("./../../assets/images/eye-off.png")}
								style={styles.eyeOffImage}/>
						</View>
					</View>
				</View>
				<View
					style={{
						flex: 1,
					}}/>
				<View
					style={styles.buttonsColorButtView}>
					<Text
						style={styles.signUpText}>Sign Up</Text>
				</View>
				<View
					style={styles.loginLinkView}>
					<Text
						style={styles.alreadyHaveAnAccoText}>already have an account?</Text>
					<View
						style={{
							flex: 1,
						}}/>
					<Text
						style={styles.loginText}>Login</Text>
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
		marginTop: 3,
	},
	menuButtonImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 4,
		height: 20,
	},
	pageTitleSignUpText: {
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 28,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0.36,
		width: 281,
		marginLeft: 20,
		marginTop: 26,
	},
	formView: {
		backgroundColor: "transparent",
		alignSelf: "stretch",
		height: 194,
		marginLeft: 20,
		marginRight: 19,
		marginTop: 255,
	},
	formLineTwoView: {
		backgroundColor: "transparent",
		height: 42,
		marginRight: 1,
	},
	emailAddressText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.18,
		backgroundColor: "transparent",
	},
	inputEmailText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.2,
		backgroundColor: "transparent",
	},
	formLineThreeView: {
		backgroundColor: "transparent",
		height: 42,
		marginLeft: 1,
	},
	fullNameText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.18,
	},
	inputNameText: {
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.2,
	},
	passwordView: {
		backgroundColor: "transparent",
		height: 42,
		marginRight: 1,
	},
	formLineView: {
		backgroundColor: "transparent",
		height: 42,
	},
	textText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.18,
		backgroundColor: "transparent",
	},
	inputPasswordText: {
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.2,
	},
	eyeOffImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		position: "absolute",
		right: 19,
		width: 24,
		top: 14,
		height: 24,
	},
	buttonsColorButtView: {
		backgroundColor: "rgb(0, 112, 247)",
		borderRadius: 20,
		shadowColor: "rgba(0, 0, 0, 0.4)",
		shadowRadius: 6,
		shadowOpacity: 1,
		width: 205,
		height: 50,
		marginLeft: 20,
		marginBottom: 30,
		justifyContent: "center",
		alignItems: "center",
	},
	signUpText: {
		color: "white",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
		backgroundColor: "transparent",
	},
	loginLinkView: {
		backgroundColor: "transparent",
		width: 188,
		height: 15,
		marginLeft: 20,
		marginBottom: 82,
		flexDirection: "row",
		alignItems: "center",
	},
	alreadyHaveAnAccoText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		width: 138,
	},
	loginText: {
		color: "rgb(0, 112, 247)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 33,
	},
})
