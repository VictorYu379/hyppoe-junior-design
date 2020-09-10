//
//  AdminLogin
//  Hyppoe
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


export default class AdminLogin extends React.Component {

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
					style={styles.pageTitleLoginText}>Login</Text>
				<View
					style={styles.formView}>
					<View
						style={styles.formLineTwoView}>
						<Text
							style={styles.emailAddressText}>EMAIL ADDRESS</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<Text
							style={styles.inputEmailAddressText}>john@mail.com</Text>
					</View>
					<View
						style={{
							flex: 1,
						}}/>
					<View
						style={styles.passwordView}>
						<View
							style={styles.formLineView}>
							<Text
								style={styles.passwordText}>PASSWORD</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.enterPasswordText}>********</Text>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<Image
							source={require("./../../assets/images/eye-off.png")}
							style={styles.eyeOffImage}/>
					</View>
				</View>
				<View
					style={{
						flex: 1,
					}}/>
				<View
					style={styles.buttonsColorButtView}>
					<Text
						style={styles.loginText}>Login</Text>
				</View>
				<View
					style={styles.signUpLinkView}>
					<Text
						style={styles.needAnAccountText}>need an account?</Text>
					<View
						style={{
							flex: 1,
						}}/>
					<Text
						style={styles.signUpText}>Sign up</Text>
				</View>
				<View
					style={styles.retriveLinkView}>
					<Text
						style={styles.forgetPasswordText}>forgot your password?</Text>
					<View
						style={{
							flex: 1,
						}}/>
					<Text
						style={styles.retriveText}>Retrive</Text>
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
		backgroundColor: "transparent",
		resizeMode: "center",
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
	pageTitleLoginText: {
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 28,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0.36,
		width: 256,
		marginLeft: 20,
		marginTop: 17,
	},
	formView: {
		backgroundColor: "transparent",
		width: 316,
		height: 116,
		marginLeft: 20,
		marginTop: 338,
		alignItems: "flex-start",
	},
	formLineTwoView: {
		backgroundColor: "transparent",
		width: 114,
		height: 40,
		alignItems: "flex-start",
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
	inputEmailAddressText: {
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.2,
		alignSelf: "stretch",
	},
	passwordView: {
		backgroundColor: "transparent",
		alignSelf: "stretch",
		height: 40,
		flexDirection: "row",
		alignItems: "flex-start",
	},
	formLineView: {
		backgroundColor: "transparent",
		alignSelf: "center",
		width: 60,
		height: 40,
	},
	passwordText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.18,
	},
	enterPasswordText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.2,
		backgroundColor: "transparent",
		marginRight: 8,
	},
	eyeOffImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 24,
		height: 24,
		marginTop: 16,
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
		marginBottom: 29,
		justifyContent: "center",
		alignItems: "center",
	},
	loginText: {
		color: "white",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
		backgroundColor: "transparent",
	},
	signUpLinkView: {
		backgroundColor: "transparent",
		width: 155,
		height: 15,
		marginLeft: 20,
		marginBottom: 12,
		flexDirection: "row",
		alignItems: "center",
	},
	needAnAccountText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	signUpText: {
		color: "rgb(0, 112, 247)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	retriveLinkView: {
		backgroundColor: "transparent",
		width: 179,
		height: 15,
		marginLeft: 20,
		marginBottom: 56,
		flexDirection: "row",
		alignItems: "center",
	},
	forgetPasswordText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	retriveText: {
		color: "rgb(0, 112, 247)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		backgroundColor: "transparent",
	},
})
