//
//  UserMenu
//  Hyppoe
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


export default class UserMenu extends React.Component {

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
							style={styles.pageTitleText}>Search</Text>
						<View
							style={styles.sliderTextView}>
							<Text
								style={styles.eventNameText}>Music Midtown</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.eventLocationCityText}>Atlanta, Georgia</Text>
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
								style={styles.menuListTwoView}>
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
										style={styles.myOrdersView}>
										<Image
											source={require("./../../assets/images/clipboard.png")}
											style={styles.clipboardImage}/>
										<View
											style={{
												flex: 1,
											}}/>
										<Text
											style={styles.myOrdersText}>PAST ORDERS</Text>
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
										alignItems: "flex-start",
									}}>
									<View
										style={styles.searchView}>
										<Image
											source={require("./../../assets/images/search.png")}
											style={styles.searchImage}/>
										<View
											style={{
												flex: 1,
											}}/>
										<Text
											style={styles.searchText}>SEARCH</Text>
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
										style={styles.preorderMenuView}>
										<Image
											source={require("./../../assets/images/map-pin.png")}
											style={styles.mapPinImage}/>
										<View
											style={{
												flex: 1,
											}}/>
										<Text
											style={styles.preorderMenuText}>PREORDER MENU</Text>
									</View>
									<View
										style={styles.paymentMethodsView}>
										<Image
											source={require("./../../assets/images/credit-card.png")}
											style={styles.creditCardImage}/>
										<View
											style={{
												flex: 1,
											}}/>
										<Text
											style={styles.paymentMethodsText}>PAYMENT METHOD</Text>
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
											style={styles.logOutCopyImage}/>
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
										style={styles.howToGuideText}>How to Guide</Text>
								</View>
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
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 17,
		height: 17,
		marginLeft: 14,
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
		width: 153,
		marginLeft: 15,
		marginTop: 16,
	},
	sliderTextView: {
		backgroundColor: "transparent",
		width: 168,
		height: 46,
		marginTop: 300,
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
	},
	eventLocationCityText: {
		color: "rgb(0, 112, 247)",
		fontFamily: "ArialMT",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.18,
		backgroundColor: "transparent",
		alignSelf: "flex-start",
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
	menuListTwoView: {
		backgroundColor: "transparent",
		width: 193,
		height: 367,
		marginRight: 1,
		marginTop: 168,
	},
	myOrdersView: {
		backgroundColor: "transparent",
		width: 133,
		height: 20,
		marginLeft: 2,
		flexDirection: "row",
		alignItems: "center",
	},
	clipboardImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 16,
		height: 20,
	},
	myOrdersText: {
		color: "white",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.92,
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		width: 104,
		marginTop: 5,
	},
	searchView: {
		backgroundColor: "transparent",
		width: 86,
		height: 18,
		marginLeft: 2,
		flexDirection: "row",
		alignItems: "center",
	},
	searchImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 16,
		height: 16,
	},
	searchText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.92,
		width: 57,
	},
	profileAndSettingsView: {
		backgroundColor: "transparent",
		alignSelf: "stretch",
		height: 18,
		marginLeft: 3,
		marginTop: 26,
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
		color: "white",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.92,
		backgroundColor: "transparent",
		width: 162,
	},
	preorderMenuView: {
		backgroundColor: "transparent",
		width: 150,
		height: 20,
		marginLeft: 2,
		marginTop: 24,
		flexDirection: "row",
		alignItems: "center",
	},
	mapPinImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 17,
		height: 20,
	},
	preorderMenuText: {
		color: "white",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.92,
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		width: 121,
		marginTop: 5,
	},
	paymentMethodsView: {
		backgroundColor: "transparent",
		width: 166,
		height: 18,
		marginTop: 26,
		flexDirection: "row",
		alignItems: "center",
	},
	creditCardImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 20,
		height: 15,
	},
	paymentMethodsText: {
		color: "white",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.92,
		backgroundColor: "transparent",
		width: 135,
	},
	contactView: {
		backgroundColor: "transparent",
		width: 94,
		height: 19,
		marginLeft: 3,
		marginTop: 69,
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
		width: 66,
	},
	logoutView: {
		backgroundColor: "transparent",
		width: 85,
		height: 18,
		marginLeft: 5,
		marginTop: 24,
		flexDirection: "row",
		alignItems: "center",
	},
	logOutCopyImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 16,
		height: 18,
	},
	textText: {
		color: "white",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.92,
		backgroundColor: "transparent",
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
		marginLeft: 3,
		marginBottom: 29,
	},
	howToGuideText: {
		color: "rgb(247, 247, 247)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.92,
		backgroundColor: "transparent",
		marginLeft: 3,
	},
	menuButtonImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 4,
		height: 20,
		marginRight: 35,
		marginTop: 56,
	},
	cartButtonView: {
		backgroundColor: "transparent",
		width: 22,
		height: 26,
		marginRight: 28,
		marginTop: 53,
	},
	pocketImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
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
})
