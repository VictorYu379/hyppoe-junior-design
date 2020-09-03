//
//  AdminTotalStationInventory
//  Hyppoe
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


export default class AdminTotalStationInventory extends React.Component {

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
						height: 220,
					}}>
					<Image
						source={require("./../../assets/images/top-image-4.png")}
						style={styles.topImageImage}/>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 30,
							right: 31,
							top: 56,
							height: 164,
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
									source={require("./../../assets/images/background-34.png")}
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
								}}>
								<Text
									style={styles.drinkNameTwoText}>Station Inventory:</Text>
								<Image
									source={require("./../../assets/images/seperator.png")}
									style={styles.seperatorThreeImage}/>
								<View
									pointerEvents="box-none"
									style={{
										height: 16,
										marginTop: 16,
										flexDirection: "row",
										alignItems: "flex-start",
									}}>
									<Text
										style={styles.inputDrinkNameFiftyFourText}>Station 1: Big Tent</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.inputDrinkNameFiftyThreeText}>Available:</Text>
								</View>
								<View
									pointerEvents="box-none"
									style={{
										height: 16,
										marginLeft: 52,
										marginRight: 5,
										marginTop: 2,
										flexDirection: "row",
										alignItems: "flex-start",
									}}>
									<Text
										style={styles.inputDrinkNameFiftyFiveText}>4,450 of 5,000</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.inputDrinkNameFiftySevenText}>90%</Text>
								</View>
								<View
									style={{
										flex: 1,
									}}/>
								<View
									style={styles.editTwoView}>
									<Text
										style={styles.editTwoText}>Station Data</Text>
								</View>
							</View>
							<Text
								style={styles.priceText}>90%</Text>
							<Text
								style={styles.inputDrinkNameFiftySixText}>Total:</Text>
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
							source={require("./../../assets/images/background-18.png")}
							style={styles.backgroundImage}/>
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
							style={styles.drinkCardElementsView}>
							<Text
								style={styles.drinkNameText}>Station Inventory</Text>
							<Image
								source={require("./../../assets/images/seperator-6.png")}
								style={styles.seperatorImage}/>
							<View
								pointerEvents="box-none"
								style={{
									height: 16,
									marginTop: 2,
									flexDirection: "row",
									alignItems: "flex-start",
								}}>
								<Text
									style={styles.inputDrinkNameFourteenText}>Station 1: Big Tent</Text>
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
									height: 16,
									marginLeft: 6,
									marginRight: 5,
									marginTop: 2,
									flexDirection: "row",
									alignItems: "flex-start",
								}}>
								<View
									pointerEvents="box-none"
									style={{
										width: 139,
										height: 16,
									}}>
									<Text
										style={styles.inputDrinkNameFifteenText}>4,450 of 5,000</Text>
									<Text
										style={styles.inputDrinkNameSixteenText}>Total:</Text>
								</View>
								<View
									style={{
										flex: 1,
									}}/>
								<Text
									style={styles.inputDrinkNameSeventeenText}>90%</Text>
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
								<View
									pointerEvents="box-none"
									style={{
										width: 133,
										height: 16,
									}}>
									<Text
										style={styles.inputDrinkNameText}>900 of 1,000</Text>
									<Text
										style={styles.inputDrinkNameTwoText}>Bud Light:</Text>
								</View>
								<View
									style={{
										flex: 1,
									}}/>
								<Text
									style={styles.inputDrinkNameSixText}>90%</Text>
							</View>
							<View
								pointerEvents="box-none"
								style={{
									height: 17,
									marginLeft: 6,
									marginRight: 5,
									marginTop: 1,
									flexDirection: "row",
									alignItems: "flex-start",
								}}>
								<View
									pointerEvents="box-none"
									style={{
										width: 133,
										height: 16,
										marginTop: 1,
									}}>
									<Text
										style={styles.inputDrinkNameThreeText}>900 of 1,500</Text>
									<Text
										style={styles.inputDrinkNameFourText}>Coors:</Text>
								</View>
								<View
									style={{
										flex: 1,
									}}/>
								<Text
									style={styles.inputDrinkNameSevenText}>60%</Text>
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
								<View
									pointerEvents="box-none"
									style={{
										width: 133,
										height: 16,
									}}>
									<Text
										style={styles.inputDrinkNameEightText}>850 of 1,000</Text>
									<Text
										style={styles.inputDrinkNameNineText}>Coca Cola:</Text>
								</View>
								<View
									style={{
										flex: 1,
									}}/>
								<Text
									style={styles.inputDrinkNameTwelveText}>85%</Text>
							</View>
							<View
								pointerEvents="box-none"
								style={{
									height: 17,
									marginLeft: 6,
									marginRight: 5,
									marginTop: 1,
									flexDirection: "row",
									alignItems: "flex-start",
								}}>
								<View
									pointerEvents="box-none"
									style={{
										width: 133,
										height: 16,
										marginTop: 1,
									}}>
									<Text
										style={styles.inputDrinkNameTenText}>900 of 1,500</Text>
									<Text
										style={styles.inputDrinkNameElevenText}>Water:</Text>
								</View>
								<View
									style={{
										flex: 1,
									}}/>
								<Text
									style={styles.inputDrinkNameThirteenText}>60%</Text>
							</View>
							<View
								style={{
									flex: 1,
								}}/>
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
										<Image
											source={require("./../../assets/images/seperator-6.png")}
											style={styles.seperatorTwoImage}/>
										<View
											pointerEvents="box-none"
											style={{
												height: 16,
												marginTop: 2,
												flexDirection: "row",
												alignItems: "flex-start",
											}}>
											<Text
												style={styles.inputDrinkNameThirtyOneText}>Station 2: Main Stage</Text>
											<View
												style={{
													flex: 1,
												}}/>
											<Text
												style={styles.inputDrinkNameTwentyTwoText}>Available:</Text>
										</View>
										<View
											pointerEvents="box-none"
											style={{
												height: 16,
												marginLeft: 6,
												marginRight: 5,
												marginTop: 2,
												flexDirection: "row",
												alignItems: "flex-start",
											}}>
											<View
												pointerEvents="box-none"
												style={{
													width: 139,
													height: 16,
												}}>
												<Text
													style={styles.inputDrinkNameThirtyTwoText}>4,450 of 5,000</Text>
												<Text
													style={styles.inputDrinkNameThirtyThreeText}>Total:</Text>
											</View>
											<View
												style={{
													flex: 1,
												}}/>
											<Text
												style={styles.inputDrinkNameThirtyFourText}>90%</Text>
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
											<View
												pointerEvents="box-none"
												style={{
													width: 133,
													height: 16,
												}}>
												<Text
													style={styles.inputDrinkNameEighteenText}>900 of 1,000</Text>
												<Text
													style={styles.inputDrinkNameNineteenText}>Bud Light:</Text>
											</View>
											<View
												style={{
													flex: 1,
												}}/>
											<Text
												style={styles.inputDrinkNameTwentyThreeText}>90%</Text>
										</View>
										<View
											pointerEvents="box-none"
											style={{
												height: 17,
												marginLeft: 6,
												marginRight: 5,
												marginTop: 1,
												flexDirection: "row",
												alignItems: "flex-start",
											}}>
											<View
												pointerEvents="box-none"
												style={{
													width: 133,
													height: 16,
													marginTop: 1,
												}}>
												<Text
													style={styles.inputDrinkNameTwentyText}>900 of 1,500</Text>
												<Text
													style={styles.inputDrinkNameTwentyOneText}>Coors:</Text>
											</View>
											<View
												style={{
													flex: 1,
												}}/>
											<Text
												style={styles.inputDrinkNameTwentyFourText}>60%</Text>
										</View>
										<View
											style={{
												flex: 1,
											}}/>
										<View
											pointerEvents="box-none"
											style={{
												height: 16,
												marginLeft: 6,
												marginRight: 5,
												marginBottom: 1,
												flexDirection: "row",
												alignItems: "flex-end",
											}}>
											<View
												pointerEvents="box-none"
												style={{
													width: 133,
													height: 16,
												}}>
												<Text
													style={styles.inputDrinkNameTwentyFiveText}>850 of 1,000</Text>
												<Text
													style={styles.inputDrinkNameTwentySixText}>Coca Cola:</Text>
											</View>
											<View
												style={{
													flex: 1,
												}}/>
											<Text
												style={styles.inputDrinkNameTwentyNineText}>85%</Text>
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
											<View
												pointerEvents="box-none"
												style={{
													width: 133,
													height: 16,
												}}>
												<Text
													style={styles.inputDrinkNameTwentySevenText}>900 of 1,500</Text>
												<Text
													style={styles.inputDrinkNameTwentyEightText}>Water:</Text>
											</View>
											<View
												style={{
													flex: 1,
												}}/>
											<Text
												style={styles.inputDrinkNameThirtyText}>60%</Text>
										</View>
									</View>
								</View>
								<View
									pointerEvents="box-none"
									style={{
										position: "absolute",
										right: 73,
										width: 68,
										top: 3,
										bottom: 1,
										alignItems: "flex-end",
									}}>
									<Text
										style={styles.inputDrinkNameThirtyFiveText}>Unit / Pack</Text>
									<View
										style={styles.unitPerPackView}>
										<Text
											style={styles.inputDrinkNameThirtySixText}>9</Text>
										<View
											style={{
												flex: 1,
											}}/>
										<Text
											style={styles.inputDrinkNameThirtySevenText}> 100</Text>
									</View>
									<View
										style={styles.unitPerPackTwoView}>
										<Text
											style={styles.inputDrinkNameThirtyEightText}>9</Text>
										<View
											style={{
												flex: 1,
											}}/>
										<Text
											style={styles.inputDrinkNameThirtyNineText}> 100</Text>
									</View>
									<View
										style={{
											flex: 1,
										}}/>
									<View
										style={styles.unitPerPackThreeView}>
										<View
											pointerEvents="box-none"
											style={{
												height: 16,
												flexDirection: "row",
												alignItems: "flex-start",
											}}>
											<Text
												style={styles.inputDrinkNameFortyText}>9</Text>
											<View
												style={{
													flex: 1,
												}}/>
											<Text
												style={styles.inputDrinkNameFortyOneText}> 100</Text>
										</View>
										<View
											style={{
												flex: 1,
											}}/>
										<View
											pointerEvents="box-none"
											style={{
												height: 16,
												flexDirection: "row",
												alignItems: "flex-end",
											}}>
											<Text
												style={styles.inputDrinkNameFortyTwoText}>9</Text>
											<View
												style={{
													flex: 1,
												}}/>
											<Text
												style={styles.inputDrinkNameFortyThreeText}> 100</Text>
										</View>
									</View>
								</View>
							</View>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							right: 23,
							width: 137,
							top: 20,
							height: 125,
							alignItems: "flex-end",
						}}>
						<View
							style={styles.editView}>
							<Text
								style={styles.editText}>Station Data</Text>
						</View>
						<Text
							style={styles.inputDrinkNameFortyFourText}>Unit / Pack</Text>
						<View
							style={styles.unitPerPackFourView}>
							<Text
								style={styles.inputDrinkNameFortyFiveText}>9</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.inputDrinkNameFortySixText}> 100</Text>
						</View>
						<View
							style={styles.unitPerPackFiveView}>
							<Text
								style={styles.inputDrinkNameFortySevenText}>9</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.inputDrinkNameFortyEightText}> 100</Text>
						</View>
						<View
							style={styles.unitPerPackSixView}>
							<View
								pointerEvents="box-none"
								style={{
									height: 16,
									flexDirection: "row",
									alignItems: "flex-start",
								}}>
								<Text
									style={styles.inputDrinkNameFortyNineText}>9</Text>
								<View
									style={{
										flex: 1,
									}}/>
								<Text
									style={styles.inputDrinkNameFiftyText}> 100</Text>
							</View>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								pointerEvents="box-none"
								style={{
									height: 16,
									flexDirection: "row",
									alignItems: "flex-end",
								}}>
								<Text
									style={styles.inputDrinkNameFiftyOneText}>9</Text>
								<View
									style={{
										flex: 1,
									}}/>
								<Text
									style={styles.inputDrinkNameFiftyTwoText}> 100</Text>
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
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 8,
		height: 14,
		marginTop: 3,
	},
	menuButtonImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 4,
		height: 20,
	},
	preorderQueCardThreeView: {
		backgroundColor: "transparent",
		alignSelf: "center",
		width: 314,
		height: 135,
		marginTop: 9,
	},
	backgroundTwoImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		width: null,
		height: 135,
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
		width: 209,
	},
	seperatorThreeImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		alignSelf: "flex-start",
		width: 182,
		height: 1,
		marginTop: 1,
	},
	inputDrinkNameFiftyFourText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		width: 190,
	},
	inputDrinkNameFiftyThreeText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		width: 68,
	},
	inputDrinkNameFiftyFiveText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
		backgroundColor: "transparent",
		width: 93,
	},
	inputDrinkNameFiftySevenText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		backgroundColor: "transparent",
		width: 60,
	},
	editTwoView: {
		backgroundColor: "rgb(0, 112, 247)",
		borderRadius: 7,
		alignSelf: "flex-end",
		width: 80,
		height: 18,
		marginRight: 1,
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
		right: 27,
		width: 78,
		top: 20,
	},
	inputDrinkNameFiftySixText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		position: "absolute",
		left: 26,
		width: 62,
		top: 75,
	},
	preorderQueCardView: {
		backgroundColor: "transparent",
		alignSelf: "center",
		width: 314,
		height: 285,
		marginTop: 6,
	},
	backgroundImage: {
		backgroundColor: "transparent",
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		resizeMode: "cover",
		width: null,
		height: 285,
	},
	drinkCardElementsView: {
		backgroundColor: "transparent",
		height: 244,
		marginLeft: 20,
		marginRight: 19,
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
		alignSelf: "flex-start",
		width: 209,
	},
	seperatorImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		width: null,
		height: 1,
		marginRight: 4,
		marginTop: 1,
	},
	inputDrinkNameFourteenText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		backgroundColor: "transparent",
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
	inputDrinkNameFifteenText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
		backgroundColor: "transparent",
		position: "absolute",
		left: 46,
		width: 93,
		top: 0,
	},
	inputDrinkNameSixteenText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		width: 62,
		top: 0,
	},
	inputDrinkNameSeventeenText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		backgroundColor: "transparent",
		width: 60,
	},
	inputDrinkNameText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		position: "absolute",
		left: 61,
		width: 72,
		top: 0,
	},
	inputDrinkNameTwoText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		position: "absolute",
		left: 0,
		width: 62,
		top: 0,
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
	},
	inputDrinkNameThreeText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		position: "absolute",
		left: 61,
		width: 72,
		top: 0,
	},
	inputDrinkNameFourText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		width: 62,
		top: 0,
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
	},
	inputDrinkNameEightText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		position: "absolute",
		left: 61,
		width: 72,
		top: 0,
	},
	inputDrinkNameNineText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		position: "absolute",
		left: 0,
		width: 62,
		top: 0,
	},
	inputDrinkNameTwelveText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		width: 60,
	},
	inputDrinkNameTenText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		position: "absolute",
		left: 61,
		width: 72,
		top: 0,
	},
	inputDrinkNameElevenText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		width: 62,
		top: 0,
	},
	inputDrinkNameThirteenText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		backgroundColor: "transparent",
		width: 60,
	},
	preorderQueCardTwoView: {
		backgroundColor: "transparent",
		height: 107,
	},
	drinkCardElementsTwoView: {
		backgroundColor: "transparent",
		height: 107,
	},
	seperatorTwoImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		width: null,
		height: 1,
		marginRight: 4,
	},
	inputDrinkNameThirtyOneText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
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
	inputDrinkNameThirtyTwoText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
		position: "absolute",
		left: 46,
		width: 93,
		top: 0,
	},
	inputDrinkNameThirtyThreeText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		position: "absolute",
		left: 0,
		width: 62,
		top: 0,
	},
	inputDrinkNameThirtyFourText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		width: 60,
	},
	inputDrinkNameEighteenText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		position: "absolute",
		left: 61,
		width: 72,
		top: 0,
	},
	inputDrinkNameNineteenText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		width: 62,
		top: 0,
	},
	inputDrinkNameTwentyThreeText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		backgroundColor: "transparent",
		width: 60,
	},
	inputDrinkNameTwentyText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		position: "absolute",
		left: 61,
		width: 72,
		top: 0,
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
		left: 0,
		width: 62,
		top: 0,
	},
	inputDrinkNameTwentyFourText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		backgroundColor: "transparent",
		width: 60,
	},
	inputDrinkNameTwentyFiveText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		position: "absolute",
		left: 61,
		width: 72,
		bottom: 0,
	},
	inputDrinkNameTwentySixText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		width: 62,
		bottom: 0,
	},
	inputDrinkNameTwentyNineText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		width: 60,
	},
	inputDrinkNameTwentySevenText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		position: "absolute",
		left: 61,
		width: 72,
		bottom: 0,
	},
	inputDrinkNameTwentyEightText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		width: 62,
		bottom: 0,
	},
	inputDrinkNameThirtyText: {
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
	inputDrinkNameThirtyFiveText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		backgroundColor: "transparent",
		width: 68,
	},
	unitPerPackView: {
		backgroundColor: "transparent",
		width: 61,
		height: 16,
		marginTop: 19,
		flexDirection: "row",
		alignItems: "center",
	},
	inputDrinkNameThirtySixText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		width: 28,
	},
	inputDrinkNameThirtySevenText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		width: 29,
	},
	unitPerPackTwoView: {
		backgroundColor: "transparent",
		width: 61,
		height: 16,
		marginTop: 2,
		flexDirection: "row",
		alignItems: "center",
	},
	inputDrinkNameThirtyEightText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		width: 28,
	},
	inputDrinkNameThirtyNineText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		width: 29,
	},
	unitPerPackThreeView: {
		backgroundColor: "transparent",
		width: 61,
		height: 33,
	},
	inputDrinkNameFortyText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		width: 28,
	},
	inputDrinkNameFortyOneText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		width: 29,
	},
	inputDrinkNameFortyTwoText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		width: 28,
	},
	inputDrinkNameFortyThreeText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		width: 29,
	},
	editView: {
		backgroundColor: "rgb(0, 112, 247)",
		borderRadius: 7,
		width: 67,
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
		marginLeft: 3,
		marginRight: 2,
	},
	inputDrinkNameFortyFourText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		width: 68,
		marginRight: 69,
		marginTop: 4,
	},
	unitPerPackFourView: {
		backgroundColor: "transparent",
		width: 61,
		height: 16,
		marginRight: 69,
		marginTop: 19,
		flexDirection: "row",
		alignItems: "center",
	},
	inputDrinkNameFortyFiveText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		width: 28,
	},
	inputDrinkNameFortySixText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 29,
	},
	unitPerPackFiveView: {
		backgroundColor: "transparent",
		width: 61,
		height: 16,
		marginRight: 69,
		marginTop: 2,
		flexDirection: "row",
		alignItems: "center",
	},
	inputDrinkNameFortySevenText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		width: 28,
	},
	inputDrinkNameFortyEightText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		width: 29,
	},
	unitPerPackSixView: {
		backgroundColor: "transparent",
		width: 61,
		height: 33,
		marginRight: 69,
		marginTop: 1,
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
		textAlign: "left",
		backgroundColor: "transparent",
		width: 29,
	},
	inputDrinkNameFiftyOneText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		width: 28,
	},
	inputDrinkNameFiftyTwoText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 29,
	},
})
