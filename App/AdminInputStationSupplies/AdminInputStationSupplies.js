//
//  AdminInputStationSupplies
//  Hyppoe
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


export default class AdminInputStationSupplies extends React.Component {

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
						height: 408,
					}}>
					<Image
						source={require("./../../assets/images/top-image-2.png")}
						style={styles.topImageImage}/>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 30,
							right: 31,
							top: 56,
							height: 352,
						}}>
						<View
							pointerEvents="box-none"
							style={{
								height: 20,
								marginLeft: 11,
								marginRight: 10,
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
									justifyContent: "center",
								}}>
								<Image
									source={require("./../../assets/images/background-22.png")}
									style={styles.backgroundImage}/>
							</View>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									left: 20,
									right: 19,
									top: 19,
									bottom: 20,
								}}>
								<View
									style={styles.drinkCardElementsView}>
									<Text
										style={styles.drinkNameText}>Station 1: Big Tent Supplies</Text>
									<View
										pointerEvents="box-none"
										style={{
											height: 1,
											marginRight: 4,
											marginTop: 1,
										}}>
										<Image
											source={require("./../../assets/images/seperator-6.png")}
											style={styles.seperatorImage}/>
										<Image
											source={require("./../../assets/images/seperator-6.png")}
											style={styles.seperatorTwoImage}/>
									</View>
									<View
										pointerEvents="box-none"
										style={{
											height: 16,
											marginLeft: 63,
											marginRight: 64,
											marginTop: 15,
											flexDirection: "row",
											alignItems: "flex-start",
										}}>
										<Text
											style={styles.inputDrinkNameFifteenText}>Available:</Text>
										<View
											style={{
												flex: 1,
											}}/>
										<Text
											style={styles.inputDrinkNameTwentyText}>Assign:</Text>
									</View>
									<View
										pointerEvents="box-none"
										style={{
											height: 16,
											marginLeft: 63,
											marginTop: 4,
											flexDirection: "row",
											alignItems: "flex-start",
										}}>
										<Text
											style={styles.inputDrinkNameTenText}>Unit / Pack</Text>
										<View
											style={{
												flex: 1,
											}}/>
										<View
											pointerEvents="box-none"
											style={{
												width: 132,
												height: 16,
											}}>
											<Text
												style={styles.inputDrinkNameThreeText}>Total:</Text>
											<Text
												style={styles.inputDrinkNameFourteenText}>Unit / Pack</Text>
										</View>
									</View>
									<View
										pointerEvents="box-none"
										style={{
											height: 16,
											marginLeft: 6,
											marginRight: 5,
											marginTop: 1,
											flexDirection: "row",
											alignItems: "flex-start",
										}}>
										<Text
											style={styles.inputDrinkNameText}>Ice:</Text>
										<View
											style={{
												flex: 1,
											}}/>
										<Text
											style={styles.inputDrinkNameFourText}>100</Text>
									</View>
									<Text
										style={styles.drinkNameTwoText}>Supplies:</Text>
									<Image
										source={require("./../../assets/images/seperator-6.png")}
										style={styles.seperatorThreeImage}/>
									<View
										pointerEvents="box-none"
										style={{
											height: 16,
											marginLeft: 63,
											marginRight: 64,
											marginTop: 10,
											flexDirection: "row",
											alignItems: "flex-start",
										}}>
										<Text
											style={styles.inputDrinkNameNineteenText}>Available:</Text>
										<View
											style={{
												flex: 1,
											}}/>
										<Text
											style={styles.inputDrinkNameTwentyOneText}>Assign:</Text>
									</View>
									<View
										pointerEvents="box-none"
										style={{
											height: 16,
											marginLeft: 63,
											marginTop: 4,
											flexDirection: "row",
											alignItems: "flex-start",
										}}>
										<Text
											style={styles.inputDrinkNameSeventeenText}>Quantity</Text>
										<View
											style={{
												flex: 1,
											}}/>
										<View
											pointerEvents="box-none"
											style={{
												width: 132,
												height: 16,
											}}>
											<Text
												style={styles.inputDrinkNameSixteenText}>Total:</Text>
											<Text
												style={styles.inputDrinkNameEighteenText}>Quantity:</Text>
										</View>
									</View>
									<View
										style={{
											flex: 1,
										}}/>
									<View
										pointerEvents="box-none"
										style={{
											height: 34,
											marginLeft: 6,
											marginRight: 5,
											marginBottom: 1,
											flexDirection: "row",
											alignItems: "flex-end",
										}}>
										<View
											pointerEvents="box-none"
											style={{
												width: 62,
												height: 33,
												justifyContent: "flex-end",
												alignItems: "flex-start",
											}}>
											<Text
												style={styles.inputDrinkNameTwoText}>Coolers:</Text>
											<Text
												style={styles.inputDrinkNameSixText}>Tents:</Text>
										</View>
										<View
											pointerEvents="box-none"
											style={{
												width: 28,
												height: 33,
												marginLeft: 2,
												justifyContent: "flex-end",
												alignItems: "flex-start",
											}}>
											<Text
												style={styles.inputDrinkNameElevenText}>0</Text>
											<Text
												style={styles.inputDrinkNameTwelveText}>0</Text>
										</View>
										<View
											style={{
												flex: 1,
											}}/>
										<View
											style={styles.numberBoxView}>
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
													source={require("./../../assets/images/rectangle.png")}
													style={styles.rectangleImage}/>
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
												<Text
													style={styles.textText}>3</Text>
											</View>
										</View>
										<View
											pointerEvents="box-none"
											style={{
												width: 60,
												height: 34,
												justifyContent: "flex-end",
												alignItems: "flex-end",
											}}>
											<Text
												style={styles.inputDrinkNameFiveText}>3</Text>
											<Text
												style={styles.inputDrinkNameEightText}>4</Text>
										</View>
									</View>
									<View
										pointerEvents="box-none"
										style={{
											height: 17,
											marginLeft: 6,
											marginRight: 5,
											flexDirection: "row",
											alignItems: "flex-end",
										}}>
										<Text
											style={styles.inputDrinkNameSevenText}>Tables:</Text>
										<Text
											style={styles.inputDrinkNameThirteenText}>0</Text>
										<View
											style={{
												flex: 1,
											}}/>
										<Text
											style={styles.inputDrinkNameNineText}>2</Text>
									</View>
								</View>
								<View
									style={{
										flex: 1,
									}}/>
								<View
									style={styles.editView}>
									<Text
										style={styles.editText}>Update</Text>
								</View>
							</View>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									left: 90,
									right: 88,
									top: 92,
									bottom: 59,
									alignItems: "flex-end",
								}}>
								<View
									pointerEvents="box-none"
									style={{
										alignSelf: "stretch",
										height: 17,
										flexDirection: "row",
										alignItems: "flex-start",
									}}>
									<View
										style={styles.unitPerPackView}>
										<Text
											style={styles.inputDrinkNameTwentyTwoText}>0</Text>
										<View
											style={{
												flex: 1,
											}}/>
										<Text
											style={styles.inputDrinkNameTwentyThreeText}>0</Text>
									</View>
									<View
										style={{
											flex: 1,
										}}/>
									<View
										style={styles.numberBoxThreeView}>
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
												source={require("./../../assets/images/rectangle.png")}
												style={styles.rectangleThreeImage}/>
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
											<Text
												style={styles.textThreeText}>1</Text>
										</View>
									</View>
									<View
										style={styles.numberBoxTwoView}>
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
												source={require("./../../assets/images/rectangle.png")}
												style={styles.rectangleTwoImage}/>
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
											<Text
												style={styles.textTwoText}>100</Text>
										</View>
									</View>
								</View>
								<View
									style={styles.numberBoxFourView}>
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
											source={require("./../../assets/images/rectangle.png")}
											style={styles.rectangleFourImage}/>
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
										<Text
											style={styles.textFourText}>4</Text>
									</View>
								</View>
								<View
									style={{
										flex: 1,
									}}/>
								<View
									style={styles.numberBoxFiveView}>
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
											source={require("./../../assets/images/rectangle.png")}
											style={styles.rectangleFiveImage}/>
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
										<Text
											style={styles.textFiveText}>2</Text>
									</View>
								</View>
							</View>
						</View>
					</View>
				</View>
				<View
					style={{
						flex: 1,
					}}/>
				<View
					style={styles.savePreorderMenuBView}>
					<Text
						style={styles.savePreorderMenuText}>Assign Supplies to Station 1 - Big Tent</Text>
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
		backgroundColor: "transparent",
		resizeMode: "cover",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 153,
	},
	backButtonImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
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
		width: 314,
		height: 322,
		marginTop: 10,
	},
	backgroundImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		width: null,
		height: 322,
	},
	drinkCardElementsView: {
		backgroundColor: "transparent",
		height: 242,
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
		marginRight: 4,
	},
	seperatorImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 1,
	},
	seperatorTwoImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 1,
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
	},
	inputDrinkNameTwentyText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
		backgroundColor: "transparent",
		width: 68,
	},
	inputDrinkNameTenText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		width: 68,
	},
	inputDrinkNameThreeText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		position: "absolute",
		right: 0,
		width: 68,
		top: 0,
	},
	inputDrinkNameFourteenText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		backgroundColor: "transparent",
		position: "absolute",
		right: 64,
		width: 68,
		top: 0,
	},
	inputDrinkNameText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 62,
	},
	inputDrinkNameFourText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		backgroundColor: "transparent",
		width: 60,
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
		alignSelf: "flex-start",
		width: 191,
		marginTop: 31,
	},
	seperatorThreeImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: null,
		height: 1,
		marginRight: 4,
		marginTop: 1,
	},
	inputDrinkNameNineteenText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
		backgroundColor: "transparent",
		width: 68,
	},
	inputDrinkNameTwentyOneText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
		width: 68,
	},
	inputDrinkNameSeventeenText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
		width: 68,
	},
	inputDrinkNameSixteenText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		backgroundColor: "transparent",
		position: "absolute",
		right: 0,
		width: 68,
		top: 0,
	},
	inputDrinkNameEighteenText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
		backgroundColor: "transparent",
		position: "absolute",
		right: 64,
		width: 68,
		top: 0,
	},
	inputDrinkNameTwoText: {
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
	inputDrinkNameSixText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		width: 62,
	},
	inputDrinkNameElevenText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		width: 28,
		marginBottom: 1,
	},
	inputDrinkNameTwelveText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		width: 28,
	},
	numberBoxView: {
		backgroundColor: "transparent",
		width: 23,
		height: 17,
		marginRight: 37,
		marginBottom: 15,
	},
	rectangleImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: null,
		height: 17,
	},
	textText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.15,
		backgroundColor: "transparent",
	},
	inputDrinkNameFiveText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		backgroundColor: "transparent",
		width: 60,
		marginBottom: 2,
	},
	inputDrinkNameEightText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		width: 60,
	},
	inputDrinkNameSevenText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 62,
	},
	inputDrinkNameThirteenText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		width: 28,
		marginLeft: 2,
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
		marginBottom: 1,
	},
	editView: {
		backgroundColor: "rgb(0, 112, 247)",
		borderRadius: 7,
		alignSelf: "flex-end",
		width: 69,
		height: 18,
		marginRight: 61,
		justifyContent: "center",
	},
	editText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: "ArialMT",
		fontSize: 11,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 13,
		marginRight: 14,
	},
	unitPerPackView: {
		backgroundColor: "transparent",
		width: 61,
		height: 16,
		marginTop: 1,
		flexDirection: "row",
		alignItems: "center",
	},
	inputDrinkNameTwentyTwoText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		width: 28,
	},
	inputDrinkNameTwentyThreeText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		width: 29,
	},
	numberBoxThreeView: {
		backgroundColor: "transparent",
		width: 23,
		height: 17,
		marginRight: 10,
	},
	rectangleThreeImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 17,
	},
	textThreeText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.15,
		backgroundColor: "transparent",
	},
	numberBoxTwoView: {
		backgroundColor: "transparent",
		width: 23,
		height: 17,
	},
	rectangleTwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 17,
	},
	textTwoText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.15,
		backgroundColor: "transparent",
		marginRight: 1,
	},
	numberBoxFourView: {
		backgroundColor: "transparent",
		width: 23,
		height: 17,
		marginRight: 33,
		marginTop: 119,
	},
	rectangleFourImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 17,
	},
	textFourText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.15,
	},
	numberBoxFiveView: {
		backgroundColor: "transparent",
		width: 23,
		height: 17,
		marginRight: 33,
	},
	rectangleFiveImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 17,
	},
	textFiveText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.15,
		backgroundColor: "transparent",
	},
	savePreorderMenuBView: {
		backgroundColor: "rgb(0, 112, 247)",
		borderRadius: 20,
		shadowColor: "rgba(0, 0, 0, 0.4)",
		shadowRadius: 6,
		shadowOpacity: 1,
		height: 50,
		marginLeft: 20,
		marginRight: 20,
		marginBottom: 15,
		justifyContent: "center",
		alignItems: "center",
	},
	savePreorderMenuText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
	},
})
