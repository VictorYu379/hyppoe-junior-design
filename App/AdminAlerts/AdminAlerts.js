//
//  AdminAlerts
//  Hyppoe
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


export default class AdminAlerts extends React.Component {

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
				<Image
					source={require("./../../assets/images/top-image-4.png")}
					style={styles.topImageImage}/>
				<View
					pointerEvents="box-none"
					style={{
						position: "absolute",
						left: 30,
						right: 34,
						top: 56,
						height: 468,
					}}>
					<View
						pointerEvents="box-none"
						style={{
							height: 20,
							marginLeft: 11,
							marginRight: 52,
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
						style={styles.preorderQueCardView}>
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
									source={require("./../../assets/images/background-20.png")}
									style={styles.backgroundImage}/>
							</View>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									left: 20,
									right: 20,
									top: 19,
									bottom: 20,
								}}>
								<View
									style={styles.drinkCardElementsView}>
									<View
										pointerEvents="box-none"
										style={{
											position: "absolute",
											left: 0,
											top: 0,
											bottom: 0,
											justifyContent: "center",
										}}>
										<Text
											style={styles.drinkNameText}>Set Alerts:</Text>
									</View>
									<View
										pointerEvents="box-none"
										style={{
											position: "absolute",
											left: 0,
											right: 0,
											top: 5,
											bottom: 0,
										}}>
										<Image
											source={require("./../../assets/images/seperator-6.png")}
											style={styles.seperatorImage}/>
										<Text
											style={styles.inputDrinkNameText}>Rate of Alerts:</Text>
									</View>
								</View>
								<View
									pointerEvents="box-none"
									style={{
										height: 34,
										marginLeft: 2,
										marginRight: 1,
										marginTop: 11,
										flexDirection: "row",
										alignItems: "flex-start",
									}}>
									<View
										pointerEvents="box-none"
										style={{
											width: 190,
											height: 34,
											alignItems: "flex-start",
										}}>
										<Text
											style={styles.inputDrinkNameTwoText}>Station Total Remaining</Text>
										<Text
											style={styles.inputDrinkNameThreeText}>Push Notification</Text>
									</View>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.drinkNameTwoText}>15%</Text>
								</View>
								<Image
									source={require("./../../assets/images/seperator-6.png")}
									style={styles.seperatorTwoImage}/>
								<View
									pointerEvents="box-none"
									style={{
										height: 34,
										marginLeft: 2,
										marginRight: 1,
										marginTop: 9,
										flexDirection: "row",
										alignItems: "flex-start",
									}}>
									<View
										pointerEvents="box-none"
										style={{
											width: 201,
											height: 34,
											alignItems: "flex-start",
										}}>
										<Text
											style={styles.inputDrinkNameFourText}>Station Individual Item Remaining</Text>
										<Text
											style={styles.inputDrinkNameFiveText}>Push Notification</Text>
									</View>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.drinkNameThreeText}>15%</Text>
								</View>
								<Image
									source={require("./../../assets/images/seperator-6.png")}
									style={styles.seperatorThreeImage}/>
								<View
									pointerEvents="box-none"
									style={{
										height: 34,
										marginLeft: 2,
										marginRight: 1,
										marginTop: 9,
										flexDirection: "row",
										alignItems: "flex-start",
									}}>
									<View
										pointerEvents="box-none"
										style={{
											width: 190,
											height: 34,
											alignItems: "flex-start",
										}}>
										<Text
											style={styles.inputDrinkNameSixText}>Available Total Remaining</Text>
										<Text
											style={styles.inputDrinkNameSevenText}>Push Notification</Text>
									</View>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.drinkNameFourText}>15%</Text>
								</View>
								<Image
									source={require("./../../assets/images/seperator-6.png")}
									style={styles.seperatorFourImage}/>
								<View
									pointerEvents="box-none"
									style={{
										height: 27,
										marginLeft: 2,
										marginRight: 1,
										marginTop: 9,
										flexDirection: "row",
										alignItems: "flex-start",
									}}>
									<Text
										style={styles.inputDrinkNameEightText}>Inventory Total Remaining</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.drinkNameFiveText}>15%</Text>
								</View>
								<Image
									source={require("./../../assets/images/seperator-6.png")}
									style={styles.seperatorFiveImage}/>
								<View
									pointerEvents="box-none"
									style={{
										height: 34,
										marginLeft: 2,
										marginRight: 1,
										marginTop: 9,
										flexDirection: "row",
										alignItems: "flex-start",
									}}>
									<View
										pointerEvents="box-none"
										style={{
											width: 201,
											height: 34,
											alignItems: "flex-start",
										}}>
										<Text
											style={styles.inputDrinkNameTenText}>Highest to Lowest Station Activity</Text>
										<Text
											style={styles.inputDrinkNameElevenText}>Push Notification</Text>
									</View>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.drinkNameSixText}>30 Mins</Text>
								</View>
								<Image
									source={require("./../../assets/images/seperator-6.png")}
									style={styles.seperatorSixImage}/>
								<View
									pointerEvents="box-none"
									style={{
										height: 34,
										marginLeft: 2,
										marginRight: 1,
										marginTop: 9,
										flexDirection: "row",
										alignItems: "flex-start",
									}}>
									<View
										pointerEvents="box-none"
										style={{
											width: 201,
											height: 34,
											alignItems: "flex-start",
										}}>
										<Text
											style={styles.inputDrinkNameThirteenText}>Highest to Lowest Item Activity</Text>
										<Text
											style={styles.inputDrinkNameTwelveText}>Push Notification</Text>
									</View>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.drinkNameSevenText}>1 Hour</Text>
								</View>
								<Image
									source={require("./../../assets/images/seperator-6.png")}
									style={styles.seperatorEightImage}/>
								<View
									style={{
										flex: 1,
									}}/>
								<View
									pointerEvents="box-none"
									style={{
										height: 34,
										marginLeft: 2,
										marginRight: 1,
										marginBottom: 3,
										flexDirection: "row",
										alignItems: "flex-end",
									}}>
									<View
										pointerEvents="box-none"
										style={{
											width: 201,
											height: 34,
											justifyContent: "flex-end",
											alignItems: "flex-start",
										}}>
										<Text
											style={styles.inputDrinkNameFifteenText}>Assign Alert:</Text>
										<Text
											style={styles.inputDrinkNameFourteenText}>Push Notification</Text>
									</View>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.drinkNameEightText}>OFF</Text>
								</View>
								<Image
									source={require("./../../assets/images/seperator-6.png")}
									style={styles.seperatorNineImage}/>
								<View
									pointerEvents="box-none"
									style={{
										height: 34,
										marginLeft: 2,
										marginRight: 1,
										marginBottom: 3,
										flexDirection: "row",
										alignItems: "flex-end",
									}}>
									<View
										pointerEvents="box-none"
										style={{
											width: 201,
											height: 34,
											justifyContent: "flex-end",
											alignItems: "flex-start",
										}}>
										<Text
											style={styles.inputDrinkNameSeventeenText}>Confirmed Alert:</Text>
										<Text
											style={styles.inputDrinkNameSixteenText}>Push Notification</Text>
									</View>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.drinkNameNineText}>OFF</Text>
								</View>
								<Image
									source={require("./../../assets/images/seperator-6.png")}
									style={styles.seperatorTenImage}/>
							</View>
							<Image
								source={require("./../../assets/images/seperator-6.png")}
								style={styles.seperatorSevenImage}/>
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
							<Text
								style={styles.inputDrinkNameNineText}>Push Notification</Text>
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
	topImageImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 153,
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
	preorderQueCardView: {
		backgroundColor: "transparent",
		alignSelf: "center",
		width: 311,
		height: 438,
		marginTop: 10,
	},
	backgroundImage: {
		backgroundColor: "transparent",
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		resizeMode: "cover",
		width: null,
		height: 438,
	},
	drinkCardElementsView: {
		backgroundColor: "transparent",
		height: 21,
	},
	drinkNameText: {
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0.2,
		width: 191,
	},
	seperatorImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		right: 0,
		bottom: 0,
		height: 1,
	},
	inputDrinkNameText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		backgroundColor: "transparent",
		position: "absolute",
		right: 0,
		width: 106,
		top: 0,
	},
	inputDrinkNameTwoText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 190,
	},
	inputDrinkNameThreeText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 145,
		marginTop: 2,
	},
	drinkNameTwoText: {
		backgroundColor: "transparent",
		color: "rgb(77, 165, 92)",
		fontFamily: "Arial-BoldMT",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		letterSpacing: 0.2,
		width: 53,
		marginTop: 8,
	},
	seperatorTwoImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: null,
		height: 1,
		marginTop: 3,
	},
	inputDrinkNameFourText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		width: 201,
	},
	inputDrinkNameFiveText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 145,
		marginTop: 2,
	},
	drinkNameThreeText: {
		backgroundColor: "transparent",
		color: "rgb(77, 165, 92)",
		fontFamily: "Arial-BoldMT",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		letterSpacing: 0.2,
		width: 53,
		marginTop: 8,
	},
	seperatorThreeImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: null,
		height: 1,
		marginTop: 3,
	},
	inputDrinkNameSixText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 190,
	},
	inputDrinkNameSevenText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		width: 145,
		marginTop: 2,
	},
	drinkNameFourText: {
		backgroundColor: "transparent",
		color: "rgb(77, 165, 92)",
		fontFamily: "Arial-BoldMT",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		letterSpacing: 0.2,
		width: 53,
		marginTop: 8,
	},
	seperatorFourImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		width: null,
		height: 1,
		marginTop: 3,
	},
	inputDrinkNameEightText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 190,
	},
	drinkNameFiveText: {
		color: "rgb(77, 165, 92)",
		fontFamily: "Arial-BoldMT",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		letterSpacing: 0.2,
		backgroundColor: "transparent",
		width: 53,
		marginTop: 8,
	},
	seperatorFiveImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		width: null,
		height: 1,
		marginTop: 10,
	},
	inputDrinkNameTenText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 201,
	},
	inputDrinkNameElevenText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 145,
		marginTop: 2,
	},
	drinkNameSixText: {
		color: "rgb(77, 165, 92)",
		fontFamily: "Arial-BoldMT",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		letterSpacing: 0.2,
		backgroundColor: "transparent",
		width: 63,
		marginTop: 8,
	},
	seperatorSixImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: null,
		height: 1,
		marginTop: 3,
	},
	inputDrinkNameThirteenText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		width: 201,
	},
	inputDrinkNameTwelveText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		width: 145,
		marginTop: 2,
	},
	drinkNameSevenText: {
		backgroundColor: "transparent",
		color: "rgb(77, 165, 92)",
		fontFamily: "Arial-BoldMT",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		letterSpacing: 0.2,
		width: 63,
		marginTop: 8,
	},
	seperatorEightImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: null,
		height: 1,
		marginTop: 3,
	},
	inputDrinkNameFifteenText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		width: 201,
		marginBottom: 2,
	},
	inputDrinkNameFourteenText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		width: 145,
	},
	drinkNameEightText: {
		backgroundColor: "transparent",
		color: "rgb(205, 89, 74)",
		fontFamily: "Arial-BoldMT",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		letterSpacing: 0.2,
		width: 53,
		marginBottom: 7,
	},
	seperatorNineImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		width: null,
		height: 1,
		marginBottom: 9,
	},
	inputDrinkNameSeventeenText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 201,
		marginBottom: 2,
	},
	inputDrinkNameSixteenText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		width: 145,
	},
	drinkNameNineText: {
		backgroundColor: "transparent",
		color: "rgb(205, 89, 74)",
		fontFamily: "Arial-BoldMT",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		letterSpacing: 0.2,
		width: 53,
		marginBottom: 7,
	},
	seperatorTenImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: null,
		height: 1,
	},
	seperatorSevenImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		position: "absolute",
		left: 20,
		right: 20,
		top: 276,
		height: 1,
	},
	inputDrinkNameNineText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		width: 145,
		marginLeft: 22,
	},
})
