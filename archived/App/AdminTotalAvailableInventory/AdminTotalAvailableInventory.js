//
//  AdminTotalAvailableInventory
//  Hyppoe
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


export default class AdminTotalAvailableInventory extends React.Component {

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
						height: 216,
					}}>
					<Image
						source={require("./../../assets/images/top-image-4.png")}
						style={styles.topImageImage}/>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 30,
							right: 30,
							top: 56,
							height: 160,
							alignItems: "center",
						}}>
						<View
							pointerEvents="box-none"
							style={{
								alignSelf: "stretch",
								height: 20,
								marginLeft: 11,
								marginRight: 56,
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
							style={styles.preorderQueCardThreeView}>
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
										source={require("./../../assets/images/background-6.png")}
										style={styles.backgroundTwoImage}/>
								</View>
								<View
									pointerEvents="box-none"
									style={{
										position: "absolute",
										left: 20,
										right: 19,
										top: 20,
										bottom: 20,
										alignItems: "flex-start",
									}}>
									<Text
										style={styles.drinkNameThreeText}>Available Inventory:</Text>
									<Image
										source={require("./../../assets/images/seperator.png")}
										style={styles.seperatorThreeImage}/>
									<View
										pointerEvents="box-none"
										style={{
											alignSelf: "stretch",
											height: 16,
											marginLeft: 6,
											marginTop: 33,
											flexDirection: "row",
											alignItems: "flex-start",
										}}>
										<Text
											style={styles.inputDrinkNameTwentyFiveText}>Total Units:</Text>
										<View
											style={{
												flex: 1,
											}}/>
										<Text
											style={styles.inputDrinkNameTwentyFourText}>4,450 of 5,000</Text>
									</View>
									<View
										style={{
											flex: 1,
										}}/>
									<View
										style={styles.editTwoView}>
										<Text
											style={styles.editTwoText}>+ / - Inventory</Text>
									</View>
								</View>
								<Text
									style={styles.priceText}>95%</Text>
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
								<View
									pointerEvents="box-none"
									style={{
										height: 16,
										marginLeft: 20,
										marginRight: 20,
										flexDirection: "row",
										alignItems: "center",
									}}>
									<Text
										style={styles.inputDrinkNameTwentyThreeText}>Total Inventory Value:</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.inputDrinkNameTwentyTwoText}>$1,000.00</Text>
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
							source={require("./../../assets/images/background-11.png")}
							style={styles.backgroundImage}/>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 20,
							right: 19,
							top: 19,
							height: 219,
							alignItems: "flex-end",
						}}>
						<View
							style={styles.drinkCardElementsView}>
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
									style={styles.drinkNameText}>Total Available Supplies:</Text>
							</View>
							<Image
								source={require("./../../assets/images/seperator-6.png")}
								style={styles.seperatorImage}/>
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
								<View
									style={styles.drinkCardElementsTwoView}>
									<View
										pointerEvents="box-none"
										style={{
											height: 16,
											marginLeft: 63,
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
											style={styles.inputDrinkNameText}>Ice</Text>
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
										style={styles.seperatorTwoImage}/>
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
											style={styles.inputDrinkNameEighteenText}>Available:</Text>
										<View
											style={{
												flex: 1,
											}}/>
										<Text
											style={styles.inputDrinkNameNineteenText}>Assign:</Text>
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
											style={styles.inputDrinkNameSixteenText}>Quantity</Text>
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
												style={styles.inputDrinkNameFifteenText}>Total:</Text>
											<Text
												style={styles.inputDrinkNameSeventeenText}>Quantity:</Text>
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
												style={styles.inputDrinkNameSixText}>Tablets:</Text>
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
							</View>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									left: 70,
									right: 69,
									top: 17,
									bottom: 0,
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
											style={styles.inputDrinkNameTwentyText}>0</Text>
										<View
											style={{
												flex: 1,
											}}/>
										<Text
											style={styles.inputDrinkNameTwentyOneText}>0</Text>
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
									style={{
										flex: 1,
									}}/>
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
					<View
						style={styles.editView}>
						<Text
							style={styles.editText}>Add Supplies</Text>
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
		backgroundColor: "transparent",
		resizeMode: "cover",
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
	preorderQueCardThreeView: {
		backgroundColor: "transparent",
		width: 315,
		height: 131,
		marginTop: 9,
	},
	backgroundTwoImage: {
		backgroundColor: "transparent",
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		resizeMode: "cover",
		width: null,
		height: 131,
	},
	drinkNameThreeText: {
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
	inputDrinkNameTwentyFiveText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 74,
	},
	inputDrinkNameTwentyFourText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		backgroundColor: "transparent",
		width: 93,
	},
	editTwoView: {
		backgroundColor: "rgb(0, 112, 247)",
		borderRadius: 7,
		alignSelf: "flex-end",
		width: 80,
		height: 18,
		marginRight: 2,
		justifyContent: "center",
	},
	editTwoText: {
		color: "white",
		fontFamily: "ArialMT",
		fontSize: 11,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 6,
		marginRight: 4,
	},
	priceText: {
		backgroundColor: "transparent",
		color: "rgb(0, 112, 247)",
		fontFamily: "ArialMT",
		fontSize: 30,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		position: "absolute",
		right: 28,
		width: 78,
		top: 20,
	},
	inputDrinkNameTwentyThreeText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 190,
	},
	inputDrinkNameTwentyTwoText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		width: 68,
	},
	preorderQueCardView: {
		backgroundColor: "transparent",
		width: 317,
		height: 258,
		marginTop: 5,
	},
	backgroundImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		width: null,
		height: 258,
	},
	drinkCardElementsView: {
		backgroundColor: "transparent",
		width: 271,
		height: 21,
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
	preorderQueCardTwoView: {
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		width: 275,
		height: 188,
		marginTop: 10,
	},
	drinkCardElementsTwoView: {
		backgroundColor: "transparent",
		height: 186,
	},
	inputDrinkNameTenText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		backgroundColor: "transparent",
		width: 68,
	},
	inputDrinkNameThreeText: {
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
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0.2,
		alignSelf: "flex-start",
		width: 191,
		marginTop: 31,
	},
	seperatorTwoImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: null,
		height: 1,
		marginRight: 4,
		marginTop: 1,
	},
	inputDrinkNameEighteenText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
		width: 68,
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
	inputDrinkNameSixteenText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
		backgroundColor: "transparent",
		width: 68,
	},
	inputDrinkNameFifteenText: {
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
	inputDrinkNameSeventeenText: {
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
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
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
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		backgroundColor: "transparent",
		width: 60,
	},
	inputDrinkNameSevenText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
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
	unitPerPackView: {
		backgroundColor: "transparent",
		width: 61,
		height: 16,
		marginTop: 1,
		flexDirection: "row",
		alignItems: "center",
	},
	inputDrinkNameTwentyText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		width: 28,
	},
	inputDrinkNameTwentyOneText: {
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
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.15,
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
		marginBottom: 1,
	},
	rectangleFourImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 17,
	},
	textFourText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.15,
		backgroundColor: "transparent",
	},
	numberBoxFiveView: {
		backgroundColor: "transparent",
		width: 23,
		height: 17,
		marginRight: 33,
	},
	rectangleFiveImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: null,
		height: 17,
	},
	textFiveText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.15,
	},
	editView: {
		backgroundColor: "rgb(0, 112, 247)",
		borderRadius: 7,
		position: "absolute",
		right: 20,
		width: 78,
		top: 20,
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
		textAlign: "left",
		marginLeft: 4,
		marginRight: 7,
	},
})
