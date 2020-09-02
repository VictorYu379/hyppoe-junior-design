//
//  AdminDashboard
//  Hyppoe
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


export default class AdminDashboard extends React.Component {

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
						position: "absolute",
						left: 0,
						right: 0,
						top: 0,
						bottom: 44,
						alignItems: "center",
					}}>
					<View
						pointerEvents="box-none"
						style={{
							alignSelf: "stretch",
							height: 196,
						}}>
						<Text
							style={styles.pageTitlePreordeText}>Preorder Que</Text>
						<Image
							source={require("./../../assets/images/top-image-4.png")}
							style={styles.topImageImage}/>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 25,
								right: 28,
								top: 46,
								height: 40,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<View
								style={styles.backButtonWithShaView}>
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
										source={require("./../../assets/images/oval.png")}
										style={styles.ovalTwoImage}/>
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
									<Image
										source={require("./../../assets/images/back-button.png")}
										style={styles.backButtonImage}/>
								</View>
							</View>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								style={styles.menuButtonView}>
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
										source={require("./../../assets/images/oval-3.png")}
										style={styles.ovalImage}/>
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
									<Image
										source={require("./../../assets/images/menu-button.png")}
										style={styles.menuButtonImage}/>
								</View>
							</View>
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
									source={require("./../../assets/images/background-17.png")}
									style={styles.backgroundImage}/>
							</View>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									left: 20,
									right: 19,
									top: 20,
									height: 70,
									alignItems: "flex-start",
								}}>
								<Text
									style={styles.drinkNameText}>Available Inventory:</Text>
								<Image
									source={require("./../../assets/images/seperator.png")}
									style={styles.seperatorImage}/>
								<View
									pointerEvents="box-none"
									style={{
										alignSelf: "stretch",
										height: 16,
										marginRight: 1,
										marginTop: 15,
										flexDirection: "row",
										alignItems: "flex-start",
									}}>
									<Text
										style={styles.inputDrinkNameTwoText}>Total Inventory Value:</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.inputDrinkNameText}>$1,000.00</Text>
								</View>
								<View
									pointerEvents="box-none"
									style={{
										alignSelf: "stretch",
										height: 16,
										marginLeft: 6,
										marginTop: 2,
										flexDirection: "row",
										alignItems: "flex-start",
									}}>
									<Text
										style={styles.inputDrinkNameFourText}>Total Units:</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.inputDrinkNameThreeText}>4,450 of 5,000</Text>
								</View>
							</View>
							<Text
								style={styles.priceText}>95%</Text>
						</View>
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
								source={require("./../../assets/images/background-8.png")}
								style={styles.backgroundTwoImage}/>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 20,
								right: 19,
								top: 20,
								height: 71,
								alignItems: "flex-start",
							}}>
							<Text
								style={styles.drinkNameTwoText}>Station Inventory:</Text>
							<Image
								source={require("./../../assets/images/seperator.png")}
								style={styles.seperatorTwoImage}/>
							<View
								pointerEvents="box-none"
								style={{
									alignSelf: "stretch",
									height: 16,
									marginTop: 16,
									flexDirection: "row",
									alignItems: "flex-start",
								}}>
								<Text
									style={styles.inputDrinkNameSixText}>Station 1: Big Tent</Text>
								<View
									style={{
										flex: 1,
									}}/>
								<Text
									style={styles.inputDrinkNameFiveText}>Available:</Text>
							</View>
							<View
								pointerEvents="box-none"
								style={{
									alignSelf: "stretch",
									height: 16,
									marginLeft: 52,
									marginRight: 5,
									marginTop: 2,
									flexDirection: "row",
									alignItems: "flex-start",
								}}>
								<Text
									style={styles.inputDrinkNameSevenText}>185 of 5,000</Text>
								<View
									style={{
										flex: 1,
									}}/>
								<Text
									style={styles.inputDrinkNameNineText}>90%</Text>
							</View>
						</View>
						<Text
							style={styles.priceTwoText}>3.7%</Text>
						<Text
							style={styles.inputDrinkNameEightText}>Total:</Text>
					</View>
					<View
						style={styles.preorderQueCardFourView}>
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
								source={require("./../../assets/images/background-35.png")}
								style={styles.backgroundFourImage}/>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 20,
								right: 19,
								top: 19,
								height: 46,
								alignItems: "flex-start",
							}}>
							<Text
								style={styles.drinkNameFourText}>Reassigned:</Text>
							<Image
								source={require("./../../assets/images/seperator.png")}
								style={styles.seperatorFourImage}/>
							<View
								pointerEvents="box-none"
								style={{
									alignSelf: "stretch",
									height: 16,
									marginLeft: 2,
									marginTop: 9,
									flexDirection: "row",
									alignItems: "flex-start",
								}}>
								<Text
									style={styles.inputDrinkNameThirteenText}>Station 1: Big Tent</Text>
								<View
									style={{
										flex: 1,
									}}/>
								<Text
									style={styles.inputDrinkNameTwelveText}>Pending</Text>
							</View>
						</View>
					</View>
					<View
						style={{
							flex: 1,
						}}/>
					<View
						style={styles.preorderQueCardFiveView}>
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
								source={require("./../../assets/images/background-35.png")}
								style={styles.backgroundFiveImage}/>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 20,
								right: 19,
								top: 19,
								height: 46,
								alignItems: "flex-start",
							}}>
							<Text
								style={styles.drinkNameFiveText}>Damaged:</Text>
							<Image
								source={require("./../../assets/images/seperator.png")}
								style={styles.seperatorFiveImage}/>
							<View
								pointerEvents="box-none"
								style={{
									alignSelf: "stretch",
									height: 16,
									marginLeft: 2,
									marginTop: 9,
									flexDirection: "row",
									alignItems: "flex-start",
								}}>
								<Text
									style={styles.inputDrinkNameFifteenText}>Station 1: Big Tent</Text>
								<View
									style={{
										flex: 1,
									}}/>
								<Text
									style={styles.inputDrinkNameFourteenText}>100 Units</Text>
							</View>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							width: 311,
							height: 87,
						}}>
						<View
							style={styles.preorderQueCardSixView}>
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
									source={require("./../../assets/images/background-35.png")}
									style={styles.backgroundSixImage}/>
							</View>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									left: 20,
									right: 19,
									top: 19,
									height: 46,
									alignItems: "flex-start",
								}}>
								<Text
									style={styles.drinkNameSixText}>Alerts:</Text>
								<Image
									source={require("./../../assets/images/seperator.png")}
									style={styles.seperatorSixImage}/>
								<Text
									style={styles.inputDrinkNameSixteenText}>ON</Text>
							</View>
						</View>
						<View
							style={styles.editView}>
							<Text
								style={styles.editText}>Modify</Text>
						</View>
					</View>
				</View>
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
						style={styles.preorderQueCardThreeView}>
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
								source={require("./../../assets/images/background-50.png")}
								style={styles.backgroundThreeImage}/>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 20,
								right: 19,
								top: 19,
								height: 46,
								alignItems: "flex-start",
							}}>
							<Text
								style={styles.drinkNameThreeText}>Assigned and Confirmed:</Text>
							<Image
								source={require("./../../assets/images/seperator.png")}
								style={styles.seperatorThreeImage}/>
							<View
								pointerEvents="box-none"
								style={{
									alignSelf: "stretch",
									height: 16,
									marginLeft: 2,
									marginTop: 9,
									flexDirection: "row",
									alignItems: "flex-start",
								}}>
								<Text
									style={styles.inputDrinkNameElevenText}>Station 1: Big Tent</Text>
								<View
									style={{
										flex: 1,
									}}/>
								<Text
									style={styles.inputDrinkNameTenText}>Pending</Text>
							</View>
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
	pageTitlePreordeText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 28,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0.36,
		backgroundColor: "transparent",
		position: "absolute",
		left: 20,
		width: 256,
		top: 102,
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
	backButtonWithShaView: {
		backgroundColor: "transparent",
		width: 40,
		height: 40,
	},
	ovalTwoImage: {
		backgroundColor: "transparent",
		shadowColor: "rgba(0, 0, 0, 0.51)",
		shadowRadius: 6,
		shadowOpacity: 1,
		resizeMode: "center",
		width: null,
		height: 40,
	},
	backButtonImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: null,
		height: 14,
		marginLeft: 16,
		marginRight: 16,
	},
	menuButtonView: {
		backgroundColor: "transparent",
		width: 40,
		height: 40,
		marginRight: 19,
	},
	ovalImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		shadowColor: "rgba(0, 0, 0, 0.5)",
		shadowRadius: 6,
		shadowOpacity: 1,
		width: null,
		height: 40,
	},
	menuButtonImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 20,
		marginLeft: 19,
		marginRight: 17,
	},
	cartButtonView: {
		backgroundColor: "transparent",
		width: 22,
		height: 26,
		marginTop: 7,
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
	preorderQueCardView: {
		backgroundColor: "transparent",
		position: "absolute",
		alignSelf: "center",
		width: 315,
		top: 85,
		height: 111,
	},
	backgroundImage: {
		backgroundColor: "transparent",
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		resizeMode: "cover",
		width: null,
		height: 111,
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
		width: 209,
	},
	seperatorImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 182,
		height: 1,
		marginTop: 1,
	},
	inputDrinkNameTwoText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		width: 190,
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
	},
	inputDrinkNameFourText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		width: 74,
	},
	inputDrinkNameThreeText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		width: 93,
	},
	priceText: {
		color: "rgb(13, 209, 43)",
		fontFamily: "ArialMT",
		fontSize: 30,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		backgroundColor: "transparent",
		position: "absolute",
		right: 28,
		width: 78,
		top: 20,
	},
	preorderQueCardTwoView: {
		backgroundColor: "transparent",
		width: 314,
		height: 119,
		marginTop: 25,
	},
	backgroundTwoImage: {
		backgroundColor: "transparent",
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		resizeMode: "cover",
		width: null,
		height: 119,
	},
	drinkNameTwoText: {
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0.2,
		width: 209,
	},
	seperatorTwoImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 182,
		height: 1,
		marginTop: 1,
	},
	inputDrinkNameSixText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		width: 190,
	},
	inputDrinkNameFiveText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		width: 68,
	},
	inputDrinkNameSevenText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
		width: 93,
	},
	inputDrinkNameNineText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		width: 60,
	},
	priceTwoText: {
		color: "rgb(243, 87, 86)",
		fontFamily: "ArialMT",
		fontSize: 30,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		backgroundColor: "transparent",
		position: "absolute",
		right: 27,
		width: 78,
		top: 20,
	},
	inputDrinkNameEightText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		backgroundColor: "transparent",
		position: "absolute",
		left: 26,
		width: 62,
		top: 75,
	},
	preorderQueCardFourView: {
		backgroundColor: "transparent",
		width: 311,
		height: 87,
		marginTop: 131,
	},
	backgroundFourImage: {
		backgroundColor: "transparent",
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		resizeMode: "cover",
		width: null,
		height: 87,
	},
	drinkNameFourText: {
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0.2,
		width: 209,
	},
	seperatorFourImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 182,
		height: 1,
		marginTop: 1,
	},
	inputDrinkNameThirteenText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		width: 190,
	},
	inputDrinkNameTwelveText: {
		backgroundColor: "transparent",
		color: "rgb(229, 178, 23)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		width: 68,
	},
	preorderQueCardFiveView: {
		backgroundColor: "transparent",
		width: 311,
		height: 87,
		marginBottom: 13,
	},
	backgroundFiveImage: {
		backgroundColor: "transparent",
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		resizeMode: "cover",
		width: null,
		height: 87,
	},
	drinkNameFiveText: {
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0.2,
		width: 209,
	},
	seperatorFiveImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 182,
		height: 1,
		marginTop: 1,
	},
	inputDrinkNameFifteenText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		width: 190,
	},
	inputDrinkNameFourteenText: {
		backgroundColor: "transparent",
		color: "rgb(243, 87, 86)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		width: 68,
	},
	preorderQueCardSixView: {
		backgroundColor: "transparent",
		position: "absolute",
		alignSelf: "center",
		width: 311,
		bottom: 0,
		height: 87,
	},
	backgroundSixImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		width: null,
		height: 87,
	},
	drinkNameSixText: {
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
	seperatorSixImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 182,
		height: 1,
		marginTop: 1,
	},
	inputDrinkNameSixteenText: {
		color: "rgb(85, 237, 108)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		backgroundColor: "transparent",
		alignSelf: "flex-end",
		width: 68,
		marginTop: 9,
	},
	editView: {
		backgroundColor: "rgb(0, 112, 247)",
		borderRadius: 7,
		position: "absolute",
		alignSelf: "center",
		width: 80,
		bottom: 10,
		height: 18,
		justifyContent: "center",
	},
	editText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: "ArialMT",
		fontSize: 11,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		marginLeft: 6,
		marginRight: 4,
	},
	preorderQueCardThreeView: {
		backgroundColor: "transparent",
		width: 311,
		height: 87,
	},
	backgroundThreeImage: {
		backgroundColor: "transparent",
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		resizeMode: "cover",
		width: null,
		height: 87,
	},
	drinkNameThreeText: {
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0.2,
		width: 209,
	},
	seperatorThreeImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 182,
		height: 1,
		marginTop: 1,
	},
	inputDrinkNameElevenText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		width: 190,
	},
	inputDrinkNameTenText: {
		backgroundColor: "transparent",
		color: "rgb(229, 178, 23)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		width: 68,
	},
})
