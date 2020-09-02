//
//  UserEnterPhoneNumber
//  Hyppoe
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { StyleSheet, Text, View } from "react-native"


export default class UserEnterPhoneNumber extends React.Component {

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
					style={styles.formPhoneView}>
					<Text
						style={styles.enterPhoneNumberTText}>PHONE NUMBER</Text>
					<Text
						style={styles.enterPhoneNumberText}>+1 (404) 867-5309</Text>
				</View>
				<View
					style={styles.buttonView}>
					<Text
						style={styles.nextText}>Next!</Text>
				</View>
				<View
					style={styles.loginLinkView}>
					<Text
						style={styles.dontGetItText}>Admin:</Text>
					<View
						style={{
							flex: 1,
						}}/>
					<Text
						style={styles.resendCodeText}>Login and sign up</Text>
				</View>
			</View>
	}
}

const styles = StyleSheet.create({
	viewView: {
		backgroundColor: "rgb(247, 247, 247)",
		flex: 1,
	},
	formPhoneView: {
		backgroundColor: "transparent",
		height: 38,
		marginLeft: 20,
		marginRight: 18,
		marginTop: 222,
	},
	enterPhoneNumberTText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.18,
		backgroundColor: "transparent",
		marginLeft: 2,
	},
	enterPhoneNumberText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 22,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.27,
		backgroundColor: "transparent",
		marginRight: 2,
	},
	buttonView: {
		backgroundColor: "rgb(0, 112, 247)",
		borderRadius: 20,
		shadowColor: "rgba(0, 0, 0, 0.4)",
		shadowRadius: 6,
		shadowOpacity: 1,
		height: 50,
		marginLeft: 20,
		marginRight: 20,
		marginTop: 55,
		justifyContent: "center",
		alignItems: "center",
	},
	nextText: {
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
		alignSelf: "flex-start",
		width: 147,
		height: 15,
		marginLeft: 18,
		marginTop: 26,
		flexDirection: "row",
		alignItems: "center",
	},
	dontGetItText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
	},
	resendCodeText: {
		color: "rgb(0, 112, 247)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		backgroundColor: "transparent",
	},
})
