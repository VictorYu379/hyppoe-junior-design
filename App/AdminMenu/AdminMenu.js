//
//  AdminMenu
//  Hyppoe
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


export default class AdminMenu extends React.Component {

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
						width: 224,
						height: 814,
					}}>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 6,
							width: 217,
							top: 47,
							height: 434,
							alignItems: "flex-start",
						}}>
						<View
							style={styles.searchBoxView}>
							<Image
								source={require("./../../assets/images/search-icon.png")}
								style={styles.searchIconImage}/>
						</View>
						<Text
							style={styles.pageTitleMenuText}>Search</Text>
						<View
							style={styles.sliderImageView}>
							<Text
								style={styles.eventNameText}>Music Midtown</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.cityStateOfEventText}>Atlanta, Georgia</Text>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 0,
							top: 0,
							bottom: 0,
							justifyContent: "center",
						}}>
						<View
							style={styles.menuListView}>
							<View
								style={styles.menuView}>
								<View
									style={styles.searchView}>
									<Image
										source={require("./../../assets/images/search-2.png")}
										style={styles.searchImage}/>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.createEventText}>CREATE EVENT</Text>
								</View>
								<View
									style={styles.profileAndSettingsView}>
									<Image
										source={require("./../../assets/images/profile-and-settings.png")}
										style={styles.profileAndSettingsImage}/>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.profileAndSettingsText}>PROFILE AND SETTINGS</Text>
								</View>
								<View
									style={styles.eventsView}>
									<Image
										source={require("./../../assets/images/map-pin.png")}
										style={styles.mapPinImage}/>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.liveEventsText}>EVENTS</Text>
								</View>
								<View
									style={styles.contactView}>
									<Image
										source={require("./../../assets/images/message-square.png")}
										style={styles.messageSquareImage}/>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.contactText}>CONTACT</Text>
								</View>
								<View
									style={styles.logoutView}>
									<Image
										source={require("./../../assets/images/logout.png")}
										style={styles.logoutImage}/>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.textText}>LOGOUT</Text>
								</View>
								<View
									style={{
										flex: 1,
									}}/>
								<Text
									style={styles.privacyPolicyText}>Privacy Policy</Text>
								<Text
									style={styles.supportFaqsText}>How to Guide</Text>
							</View>
						</View>
					</View>
				</View>
				<View
					style={{
						flex: 1,
					}}/>
				<Image
					source={require("./../../assets/images/menu-button.png")}
					style={styles.menuButtonImage}/>
				<Image
					source={require("./../../assets/images/pocket-2.png")}
					style={styles.pocketImage}/>
			</View>
	}
}

const styles = StyleSheet.create({
	viewView: {
		backgroundColor: "rgb(247, 247, 247)",
		flex: 1,
		flexDirection: "row",
		alignItems: "flex-start",
	},
	searchBoxView: {
		backgroundColor: "white",
		borderRadius: 13,
		shadowColor: "rgba(107, 127, 153, 0.2)",
		shadowRadius: 20,
		shadowOpacity: 1,
		width: 202,
		height: 40,
		marginLeft: 15,
		justifyContent: "center",
		alignItems: "flex-start",
	},
	searchIconImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 17,
		height: 17,
		marginLeft: 14,
	},
	pageTitleMenuText: {
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 28,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0.36,
		width: 153,
		marginLeft: 15,
		marginTop: 16,
	},
	sliderImageView: {
		backgroundColor: "transparent",
		width: 168,
		height: 46,
		marginTop: 300,
		alignItems: "flex-start",
	},
	eventNameText: {
		color: "white",
		fontFamily: "ArialMT",
		fontSize: 22,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.27,
		backgroundColor: "transparent",
		alignSelf: "stretch",
	},
	cityStateOfEventText: {
		color: "rgb(0, 112, 247)",
		fontFamily: "ArialMT",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.18,
		backgroundColor: "transparent",
		width: 109,
	},
	menuListView: {
		backgroundColor: "rgba(0, 112, 247, 0.9)",
		borderWidth: 1,
		borderColor: "rgba(107, 127, 153, 0.2)",
		borderStyle: "solid",
		shadowColor: "rgba(107, 127, 153, 0.5)",
		shadowRadius: 20,
		shadowOpacity: 1,
		width: 224,
		height: 814,
		alignItems: "flex-end",
	},
	menuView: {
		backgroundColor: "transparent",
		width: 191,
		height: 366,
		marginRight: 1,
		marginTop: 169,
		alignItems: "flex-start",
	},
	searchView: {
		backgroundColor: "transparent",
		width: 134,
		height: 18,
		flexDirection: "row",
		alignItems: "center",
	},
	searchImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 16,
		height: 16,
	},
	createEventText: {
		color: "white",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.92,
		backgroundColor: "transparent",
		width: 105,
	},
	profileAndSettingsView: {
		backgroundColor: "transparent",
		alignSelf: "stretch",
		height: 18,
		marginTop: 25,
		flexDirection: "row",
		alignItems: "center",
	},
	profileAndSettingsImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 15,
		height: 17,
	},
	profileAndSettingsText: {
		backgroundColor: "transparent",
		color: "rgb(247, 247, 247)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.92,
		width: 162,
	},
	eventsView: {
		backgroundColor: "transparent",
		width: 118,
		height: 20,
		marginTop: 26,
		flexDirection: "row",
		alignItems: "flex-start",
	},
	mapPinImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		alignSelf: "center",
		width: 17,
		height: 20,
	},
	liveEventsText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.92,
		width: 89,
		marginTop: 5,
	},
	contactView: {
		backgroundColor: "transparent",
		width: 96,
		height: 19,
		marginTop: 28,
		flexDirection: "row",
		alignItems: "center",
	},
	messageSquareImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 19,
		height: 19,
	},
	contactText: {
		color: "white",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.92,
		backgroundColor: "transparent",
		width: 67,
	},
	logoutView: {
		backgroundColor: "transparent",
		width: 85,
		height: 18,
		marginLeft: 1,
		marginTop: 27,
		flexDirection: "row",
		alignItems: "center",
	},
	logoutImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 16,
		height: 18,
	},
	textText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.92,
	},
	privacyPolicyText: {
		color: "rgb(247, 247, 247)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.92,
		backgroundColor: "transparent",
		marginLeft: 1,
		marginBottom: 29,
	},
	supportFaqsText: {
		color: "rgb(247, 247, 247)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.92,
		backgroundColor: "transparent",
		marginLeft: 1,
	},
	menuButtonImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 4,
		height: 20,
		marginRight: 35,
		marginTop: 56,
	},
	pocketImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 20,
		height: 24,
		marginRight: 30,
		marginTop: 53,
	},
})
