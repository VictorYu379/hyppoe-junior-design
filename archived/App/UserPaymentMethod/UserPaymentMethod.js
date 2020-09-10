//
//  UserPaymentMethod
//  Hyppoe
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


export default class UserPaymentMethod extends React.Component {

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
					style={styles.pageTitlePaymentText}>Payment Method</Text>
				<View
					style={styles.creditCardView}>
					<View
						style={styles.creditCardElementsView}>
						<View
							style={styles.group9668View}>
							<Text
								style={styles.bankNameText}>Payment Method</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.cardNumberText}>5343</Text>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<Image
							source={require("./../../assets/images/visa-inc-logo.png")}
							style={styles.visaIncLogoImage}/>
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
		backgroundColor: "transparent",
		resizeMode: "center",
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
	pageTitlePaymentText: {
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
		marginTop: 23,
	},
	creditCardView: {
		backgroundColor: "white",
		borderRadius: 15,
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		alignSelf: "center",
		width: 317,
		height: 217,
		marginTop: 32,
		justifyContent: "center",
	},
	creditCardElementsView: {
		backgroundColor: "transparent",
		height: 153,
		marginLeft: 20,
		marginRight: 20,
		alignItems: "flex-start",
	},
	group9668View: {
		backgroundColor: "transparent",
		width: 148,
		height: 64,
		alignItems: "flex-start",
	},
	bankNameText: {
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.2,
	},
	cardNumberText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.22,
		backgroundColor: "transparent",
		alignSelf: "stretch",
	},
	visaIncLogoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		alignSelf: "flex-end",
		width: 100,
		height: 32,
	},
})
