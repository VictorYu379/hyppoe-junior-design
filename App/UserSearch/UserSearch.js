//
//  UserSearch
//  Hyppoe
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


export default class UserSearch extends React.Component {

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
						alignSelf: "flex-end",
						width: 61,
						height: 26,
						marginRight: 28,
						marginTop: 53,
						flexDirection: "row",
						justifyContent: "flex-end",
						alignItems: "flex-start",
					}}>
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
					style={styles.pageTitleText}>Search</Text>
				<View
					style={styles.allEventsView}>
					<View
						style={styles.eventView}>
						<View
							style={styles.eventLogoView}/>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							pointerEvents="box-none"
							style={{
								width: 173,
								height: 55,
								marginRight: 20,
								marginTop: 20,
								alignItems: "flex-end",
							}}>
							<Text
								style={styles.nameOfEventText}>Event Name</Text>
							<Text
								style={styles.cityStateOfEventText}>City, State</Text>
							<Text
								style={styles.dateOfEventText}>Date</Text>
							<Image
								source={require("./../../assets/images/seperator-7.png")}
								style={styles.seperatorImage}/>
						</View>
					</View>
					<View
						style={styles.eventTwoView}>
						<View
							style={styles.eventLogoTwoView}/>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							pointerEvents="box-none"
							style={{
								alignSelf: "flex-start",
								width: 173,
								height: 55,
								marginRight: 20,
								marginTop: 20,
								alignItems: "flex-end",
							}}>
							<Text
								style={styles.nameOfEventTwoText}>Event Name</Text>
							<Text
								style={styles.cityStateOfEventTwoText}>City, State</Text>
							<Text
								style={styles.dateOfEventTwoText}>Date</Text>
							<Image
								source={require("./../../assets/images/seperator-7.png")}
								style={styles.seperatorTwoImage}/>
						</View>
					</View>
					<View
						style={styles.eventThreeView}>
						<View
							style={styles.eventLogoThreeView}/>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							pointerEvents="box-none"
							style={{
								alignSelf: "flex-start",
								width: 173,
								height: 55,
								marginRight: 20,
								marginTop: 20,
								alignItems: "flex-end",
							}}>
							<Text
								style={styles.nameOfEventThreeText}>Event Name</Text>
							<Text
								style={styles.cityStateOfEventThreeText}>City, State</Text>
							<Text
								style={styles.dateOfEventThreeText}>Date</Text>
							<Image
								source={require("./../../assets/images/seperator-7.png")}
								style={styles.seperatorThreeImage}/>
						</View>
					</View>
					<View
						style={{
							flex: 1,
						}}/>
					<View
						style={styles.eventFourView}>
						<View
							style={styles.eventLogoFourView}/>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							pointerEvents="box-none"
							style={{
								width: 173,
								height: 55,
								marginRight: 20,
								marginTop: 20,
								alignItems: "flex-end",
							}}>
							<Text
								style={styles.nameOfEventFourText}>Event Name</Text>
							<Text
								style={styles.cityStateOfEventFourText}>City, State</Text>
							<Text
								style={styles.dateOfEventFourText}>Date</Text>
							<Image
								source={require("./../../assets/images/seperator-7.png")}
								style={styles.seperatorFourImage}/>
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
	pageTitleText: {
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 28,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0.36,
		alignSelf: "flex-start",
		width: 109,
		marginLeft: 20,
		marginTop: 23,
	},
	allEventsView: {
		backgroundColor: "transparent",
		width: 317,
		height: 497,
		marginTop: 32,
	},
	eventView: {
		backgroundColor: "white",
		borderRadius: 15,
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		height: 119,
		flexDirection: "row",
		alignItems: "flex-start",
	},
	eventLogoView: {
		backgroundColor: "rgb(184, 196, 187)",
		borderRadius: 15,
		alignSelf: "center",
		width: 78,
		height: 79,
		marginLeft: 20,
	},
	nameOfEventText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0.17,
		backgroundColor: "transparent",
		width: 173,
	},
	cityStateOfEventText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.92,
		width: 173,
		marginTop: 1,
	},
	dateOfEventText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.92,
		backgroundColor: "transparent",
		width: 173,
		marginTop: 2,
	},
	seperatorImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 173,
		height: 1,
		marginTop: 1,
	},
	eventTwoView: {
		backgroundColor: "white",
		borderRadius: 15,
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		height: 119,
		marginTop: 7,
		flexDirection: "row",
		alignItems: "center",
	},
	eventLogoTwoView: {
		backgroundColor: "rgb(184, 196, 187)",
		borderRadius: 15,
		width: 78,
		height: 79,
		marginLeft: 20,
	},
	nameOfEventTwoText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0.17,
		backgroundColor: "transparent",
		width: 173,
	},
	cityStateOfEventTwoText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.92,
		backgroundColor: "transparent",
		width: 173,
		marginTop: 1,
	},
	dateOfEventTwoText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.92,
		backgroundColor: "transparent",
		width: 173,
		marginTop: 2,
	},
	seperatorTwoImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 173,
		height: 1,
		marginTop: 1,
	},
	eventThreeView: {
		backgroundColor: "white",
		borderRadius: 15,
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		height: 119,
		marginTop: 7,
		flexDirection: "row",
		alignItems: "center",
	},
	eventLogoThreeView: {
		backgroundColor: "rgb(184, 196, 187)",
		borderRadius: 15,
		width: 78,
		height: 79,
		marginLeft: 20,
	},
	nameOfEventThreeText: {
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0.17,
		width: 173,
	},
	cityStateOfEventThreeText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.92,
		width: 173,
		marginTop: 1,
	},
	dateOfEventThreeText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.92,
		width: 173,
		marginTop: 2,
	},
	seperatorThreeImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 173,
		height: 1,
		marginTop: 1,
	},
	eventFourView: {
		backgroundColor: "white",
		borderRadius: 15,
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		height: 119,
		flexDirection: "row",
		alignItems: "flex-start",
	},
	eventLogoFourView: {
		backgroundColor: "rgb(184, 196, 187)",
		borderRadius: 15,
		alignSelf: "center",
		width: 78,
		height: 79,
		marginLeft: 20,
	},
	nameOfEventFourText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0.17,
		backgroundColor: "transparent",
		width: 173,
	},
	cityStateOfEventFourText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.92,
		backgroundColor: "transparent",
		width: 173,
		marginTop: 1,
	},
	dateOfEventFourText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.92,
		backgroundColor: "transparent",
		width: 173,
		marginTop: 2,
	},
	seperatorFourImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 173,
		height: 1,
		marginTop: 1,
	},
})
