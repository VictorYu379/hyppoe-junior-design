//
//  AdminTotalAssignedAndConfirmedInventory
//  Hyppoe
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


export default class AdminTotalAssignedAndConfirmedInventory extends React.Component {

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
						height: 191,
					}}>
					<Image
						source={require("./../../assets/images/top-image-6.png")}
						style={styles.topImageImage}/>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 30,
							right: 31,
							top: 56,
							height: 135,
							alignItems: "center",
						}}>
						<View
							pointerEvents="box-none"
							style={{
								alignSelf: "stretch",
								height: 20,
								marginLeft: 11,
								marginRight: 55,
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
							style={styles.preorderQueCardTwoView}>
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
									source={require("./../../assets/images/background-5.png")}
									style={styles.backgroundTwoImage}/>
							</View>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									left: 20,
									right: 20,
									top: 19,
									height: 66,
									alignItems: "flex-start",
								}}>
								<Text
									style={styles.drinkNameTwoText}>Assigned and Confirmed:</Text>
								<Image
									source={require("./../../assets/images/seperator.png")}
									style={styles.seperatorThreeImage}/>
								<View
									pointerEvents="box-none"
									style={{
										alignSelf: "stretch",
										height: 16,
										marginLeft: 2,
										marginRight: 2,
										marginTop: 9,
										flexDirection: "row",
										alignItems: "flex-start",
									}}>
									<Text
										style={styles.inputDrinkNameSixtyTwoText}>Station 1: Big Tent</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.inputDrinkNameSixtyOneText}>Pending</Text>
								</View>
								<View
									style={styles.editTwoView}>
									<Text
										style={styles.editTwoText}>Assign</Text>
								</View>
							</View>
						</View>
					</View>
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
							justifyContent: "center",
						}}>
						<Image
							source={require("./../../assets/images/background-54.png")}
							style={styles.backgroundImage}/>
					</View>
					<View
						style={styles.drinkCardElementsView}>
						<Text
							style={styles.drinkNameText}>Assigned and Confirmed:</Text>
						<Image
							source={require("./../../assets/images/seperator-6.png")}
							style={styles.seperatorImage}/>
						<Text
							style={styles.inputDrinkNameFourText}>Station 1: Big Tent</Text>
						<Text
							style={styles.inputDrinkNameText}>Status:</Text>
						<Text
							style={styles.inputDrinkNameTwoText}>Pending</Text>
						<Text
							style={styles.inputDrinkNameThreeText}>Pending</Text>
						<Text
							style={styles.inputDrinkNameSixText}>Complete</Text>
						<Text
							style={styles.inputDrinkNameSevenText}>Complete</Text>
						<View
							style={styles.drinkCardElementsTwoView}>
							<Image
								source={require("./../../assets/images/seperator-3.png")}
								style={styles.seperatorTwoImage}/>
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
									style={styles.inputDrinkNameFiveText}>Station 2: Main Stage</Text>
							</View>
						</View>
						<Text
							style={styles.inputDrinkNameEightText}>Status:</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<Text
							style={styles.inputDrinkNameNineText}>Pending</Text>
						<Text
							style={styles.inputDrinkNameTenText}>Pending</Text>
						<Text
							style={styles.inputDrinkNameElevenText}>Complete</Text>
						<Text
							style={styles.inputDrinkNameTwelveText}>Complete</Text>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 26,
							right: 20,
							top: 20,
							bottom: 22,
							alignItems: "flex-start",
						}}>
						<View
							style={styles.editView}>
							<Text
								style={styles.editText}>Assign</Text>
						</View>
						<Text
							style={styles.inputDrinkNameFifteenText}>Assigned:</Text>
						<Text
							style={styles.inputDrinkNameThirteenText}>Unit / Pack</Text>
						<View
							style={styles.unitPerPackView}>
							<Text
								style={styles.inputDrinkNameSeventeenText}>0</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.inputDrinkNameEighteenText}>0</Text>
						</View>
						<Text
							style={styles.inputDrinkNameTwentyTwoText}>Coors:</Text>
						<Text
							style={styles.inputDrinkNameTwentyThreeText}>Coca Cola:</Text>
						<Text
							style={styles.inputDrinkNameTwentyFourText}>Water:</Text>
						<Text
							style={styles.inputDrinkNameFortyThreeText}>Assigned:</Text>
						<Text
							style={styles.inputDrinkNameFortyOneText}>Unit / Pack</Text>
						<Text
							style={styles.inputDrinkNameThirtySevenText}>Bud Light:</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<Text
							style={styles.inputDrinkNameThirtyEightText}>Coors:</Text>
						<Text
							style={styles.inputDrinkNameThirtyNineText}>Coca Cola:</Text>
						<Text
							style={styles.inputDrinkNameFortyText}>Water:</Text>
					</View>
					<Text
						style={styles.inputDrinkNameTwentyOneText}>Bud Light:</Text>
					<View
						style={styles.unitPerPackThreeView}>
						<Text
							style={styles.inputDrinkNameTwentyFiveText}>0</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<Text
							style={styles.inputDrinkNameTwentySixText}>0</Text>
					</View>
					<View
						style={styles.unitPerPackFiveView}>
						<Text
							style={styles.inputDrinkNameTwentyNineText}>0</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<Text
							style={styles.inputDrinkNameThirtyText}>0</Text>
					</View>
					<View
						style={styles.unitPerPackSevenView}>
						<Text
							style={styles.inputDrinkNameThirtyThreeText}>0</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<Text
							style={styles.inputDrinkNameThirtyFourText}>0</Text>
					</View>
					<View
						style={styles.unitPerPackNineView}>
						<Text
							style={styles.inputDrinkNameFortyFiveText}>0</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<Text
							style={styles.inputDrinkNameFortySixText}>0</Text>
					</View>
					<View
						style={styles.unitPerPackElevenView}>
						<Text
							style={styles.inputDrinkNameFortyNineText}>0</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<Text
							style={styles.inputDrinkNameFiftyText}>0</Text>
					</View>
					<View
						style={styles.unitPerPackThirteenView}>
						<Text
							style={styles.inputDrinkNameFiftyThreeText}>0</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<Text
							style={styles.inputDrinkNameFiftyFourText}>0</Text>
					</View>
					<View
						style={styles.unitPerPackFifteenView}>
						<Text
							style={styles.inputDrinkNameFiftySevenText}>0</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<Text
							style={styles.inputDrinkNameFiftyEightText}>0</Text>
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
	preorderQueCardTwoView: {
		backgroundColor: "transparent",
		width: 314,
		height: 105,
		marginTop: 10,
	},
	backgroundTwoImage: {
		backgroundColor: "transparent",
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		resizeMode: "cover",
		width: null,
		height: 105,
	},
	drinkNameTwoText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0.2,
		backgroundColor: "transparent",
		width: 209,
	},
	seperatorThreeImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 182,
		height: 1,
		marginTop: 1,
	},
	inputDrinkNameSixtyTwoText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 190,
	},
	inputDrinkNameSixtyOneText: {
		color: "rgb(229, 178, 23)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		backgroundColor: "transparent",
		width: 68,
	},
	editTwoView: {
		backgroundColor: "rgb(0, 112, 247)",
		borderRadius: 7,
		alignSelf: "flex-end",
		width: 80,
		height: 18,
		marginTop: 2,
		justifyContent: "center",
	},
	editTwoText: {
		color: "white",
		fontFamily: "ArialMT",
		fontSize: 11,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		marginLeft: 6,
		marginRight: 4,
	},
	preorderQueCardView: {
		backgroundColor: "transparent",
		width: 311,
		height: 315,
		marginTop: 8,
	},
	backgroundImage: {
		backgroundColor: "transparent",
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		resizeMode: "cover",
		width: null,
		height: 315,
	},
	drinkCardElementsView: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 20,
		right: 20,
		top: 19,
		height: 271,
		alignItems: "flex-end",
	},
	drinkNameText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0.2,
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		width: 212,
	},
	seperatorImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		alignSelf: "stretch",
		width: null,
		height: 1,
		marginTop: 1,
	},
	inputDrinkNameFourText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		width: 190,
		marginTop: 2,
	},
	inputDrinkNameText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		width: 68,
		marginRight: 1,
		marginTop: 18,
	},
	inputDrinkNameTwoText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		backgroundColor: "transparent",
		width: 60,
		marginRight: 1,
	},
	inputDrinkNameThreeText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		backgroundColor: "transparent",
		width: 60,
		marginRight: 1,
		marginTop: 1,
	},
	inputDrinkNameSixText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		width: 60,
		marginRight: 1,
		marginTop: 2,
	},
	inputDrinkNameSevenText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		backgroundColor: "transparent",
		width: 60,
		marginRight: 1,
		marginTop: 1,
	},
	drinkCardElementsTwoView: {
		backgroundColor: "transparent",
		alignSelf: "stretch",
		height: 16,
		marginLeft: 7,
		marginRight: 1,
		marginTop: 10,
	},
	seperatorTwoImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 1,
	},
	inputDrinkNameFiveText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		width: 130,
	},
	inputDrinkNameEightText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		backgroundColor: "transparent",
		width: 68,
		marginRight: 1,
		marginTop: 20,
	},
	inputDrinkNameNineText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		backgroundColor: "transparent",
		width: 60,
		marginRight: 1,
		marginBottom: 1,
	},
	inputDrinkNameTenText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		width: 60,
		marginRight: 1,
		marginBottom: 2,
	},
	inputDrinkNameElevenText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		backgroundColor: "transparent",
		width: 60,
		marginRight: 1,
		marginBottom: 1,
	},
	inputDrinkNameTwelveText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		backgroundColor: "transparent",
		width: 60,
		marginRight: 1,
	},
	editView: {
		backgroundColor: "rgb(0, 112, 247)",
		borderRadius: 7,
		alignSelf: "flex-end",
		width: 42,
		height: 18,
		justifyContent: "center",
	},
	editText: {
		color: "white",
		fontFamily: "ArialMT",
		fontSize: 11,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 2,
		marginRight: 2,
	},
	inputDrinkNameFifteenText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
		backgroundColor: "transparent",
		width: 68,
		marginLeft: 44,
		marginTop: 18,
	},
	inputDrinkNameThirteenText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		backgroundColor: "transparent",
		width: 68,
		marginLeft: 44,
		marginTop: 4,
	},
	unitPerPackView: {
		backgroundColor: "transparent",
		width: 61,
		height: 16,
		marginLeft: 51,
		marginTop: 2,
		flexDirection: "row",
		alignItems: "center",
	},
	inputDrinkNameSeventeenText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		width: 28,
	},
	inputDrinkNameEighteenText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		width: 29,
	},
	inputDrinkNameTwentyTwoText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		width: 62,
		marginTop: 2,
	},
	inputDrinkNameTwentyThreeText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 62,
		marginTop: 1,
	},
	inputDrinkNameTwentyFourText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 62,
		marginTop: 2,
	},
	inputDrinkNameFortyThreeText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
		backgroundColor: "transparent",
		width: 68,
		marginLeft: 44,
		marginTop: 23,
	},
	inputDrinkNameFortyOneText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		width: 68,
		marginLeft: 44,
		marginTop: 4,
	},
	inputDrinkNameThirtySevenText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 62,
		marginTop: 2,
	},
	inputDrinkNameThirtyEightText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 62,
		marginBottom: 1,
	},
	inputDrinkNameThirtyNineText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 62,
		marginBottom: 2,
	},
	inputDrinkNameFortyText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 62,
	},
	inputDrinkNameTwentyOneText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		position: "absolute",
		left: 26,
		width: 62,
		top: 94,
	},
	unitPerPackThreeView: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 77,
		width: 61,
		top: 112,
		height: 16,
		flexDirection: "row",
		alignItems: "center",
	},
	inputDrinkNameTwentyFiveText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		width: 28,
	},
	inputDrinkNameTwentySixText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		width: 29,
	},
	unitPerPackFiveView: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 77,
		width: 61,
		top: 129,
		height: 16,
		flexDirection: "row",
		alignItems: "center",
	},
	inputDrinkNameTwentyNineText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		width: 28,
	},
	inputDrinkNameThirtyText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		width: 29,
	},
	unitPerPackSevenView: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 77,
		width: 61,
		top: 147,
		height: 16,
		flexDirection: "row",
		alignItems: "center",
	},
	inputDrinkNameThirtyThreeText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		width: 28,
	},
	inputDrinkNameThirtyFourText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		width: 29,
	},
	unitPerPackNineView: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 77,
		width: 61,
		top: 224,
		height: 16,
		flexDirection: "row",
		alignItems: "center",
	},
	inputDrinkNameFortyFiveText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		width: 28,
	},
	inputDrinkNameFortySixText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		width: 29,
	},
	unitPerPackElevenView: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 77,
		width: 61,
		bottom: 57,
		height: 16,
		flexDirection: "row",
		alignItems: "center",
	},
	inputDrinkNameFortyNineText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		width: 28,
	},
	inputDrinkNameFiftyText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		width: 29,
	},
	unitPerPackThirteenView: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 77,
		width: 61,
		bottom: 40,
		height: 16,
		flexDirection: "row",
		alignItems: "center",
	},
	inputDrinkNameFiftyThreeText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		width: 28,
	},
	inputDrinkNameFiftyFourText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		width: 29,
	},
	unitPerPackFifteenView: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 77,
		width: 61,
		bottom: 22,
		height: 16,
		flexDirection: "row",
		alignItems: "center",
	},
	inputDrinkNameFiftySevenText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		width: 28,
	},
	inputDrinkNameFiftyEightText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		width: 29,
	},
})
