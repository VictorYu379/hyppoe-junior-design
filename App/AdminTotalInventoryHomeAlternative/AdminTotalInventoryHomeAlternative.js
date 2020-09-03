//
//  AdminTotalInventoryHomeAlternative
//  Hyppoe
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


export default class AdminTotalInventoryHomeAlternative extends React.Component {

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
						height: 239,
					}}>
					<Image
						source={require("./../../assets/images/top-image-8.png")}
						style={styles.topImageImage}/>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 30,
							right: 31,
							top: 56,
							height: 183,
							alignItems: "center",
						}}>
						<View
							pointerEvents="box-none"
							style={{
								alignSelf: "stretch",
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
									source={require("./../../assets/images/background.png")}
									style={styles.backgroundThreeImage}/>
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
									style={styles.drinkCardElementsThreeView}>
									<View
										pointerEvents="box-none"
										style={{
											height: 19,
											marginRight: 1,
										}}>
										<Text
											style={styles.drinkNameThreeText}>Available Inventory:</Text>
										<View
											style={styles.editThreeView}>
											<Text
												style={styles.editThreeText}>Add Inventory</Text>
										</View>
									</View>
									<Image
										source={require("./../../assets/images/seperator-6.png")}
										style={styles.seperatorThreeImage}/>
									<View
										pointerEvents="box-none"
										style={{
											height: 16,
											marginLeft: 63,
											marginTop: 5,
											flexDirection: "row",
											alignItems: "flex-start",
										}}>
										<Text
											style={styles.inputDrinkNameThirtyOneText}>Unit / Pack</Text>
										<View
											style={{
												flex: 1,
											}}/>
										<Text
											style={styles.inputDrinkNameTwentyFourText}>Available of Total:</Text>
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
										<Text
											style={styles.inputDrinkNameTwentyTwoText}>Bud Light:</Text>
										<View
											style={styles.unitPerPackView}>
											<Text
												style={styles.inputDrinkNameThirtyTwoText}>10</Text>
											<View
												style={{
													flex: 1,
												}}/>
											<Text
												style={styles.inputDrinkNameThirtyThreeText}> 100</Text>
										</View>
										<View
											style={{
												flex: 1,
											}}/>
										<Text
											style={styles.inputDrinkNameTwentyFiveText}>900 of 1,000</Text>
									</View>
									<View
										pointerEvents="box-none"
										style={{
											height: 17,
											marginLeft: 6,
											marginRight: 5,
											flexDirection: "row",
											alignItems: "flex-start",
										}}>
										<Text
											style={styles.inputDrinkNameTwentyThreeText}>Coors:</Text>
										<View
											style={styles.unitPerPackTwoView}>
											<Text
												style={styles.inputDrinkNameThirtyFourText}>10</Text>
											<View
												style={{
													flex: 1,
												}}/>
											<Text
												style={styles.inputDrinkNameThirtyFiveText}> 100</Text>
										</View>
										<View
											style={{
												flex: 1,
											}}/>
										<Text
											style={styles.inputDrinkNameTwentySixText}>900 of 1,500</Text>
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
										<Text
											style={styles.inputDrinkNameTwentySevenText}>Coca Cola:</Text>
										<View
											style={styles.unitPerPackThreeView}>
											<Text
												style={styles.inputDrinkNameThirtySixText}>15</Text>
											<View
												style={{
													flex: 1,
												}}/>
											<Text
												style={styles.inputDrinkNameThirtySevenText}> 100</Text>
										</View>
										<View
											style={{
												flex: 1,
											}}/>
										<Text
											style={styles.inputDrinkNameTwentyNineText}>900 of 1,500</Text>
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
											style={styles.inputDrinkNameTwentyEightText}>Water:</Text>
										<View
											style={styles.unitPerPackFourView}>
											<Text
												style={styles.inputDrinkNameThirtyEightText}>15</Text>
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
										<Text
											style={styles.inputDrinkNameThirtyText}>900 of 1,000</Text>
									</View>
								</View>
							</View>
							<View
								style={styles.unitPerPackFiveView}>
								<Text
									style={styles.inputDrinkNameFortyText}>10</Text>
								<View
									style={{
										flex: 1,
									}}/>
								<Text
									style={styles.inputDrinkNameFortyOneText}> 100</Text>
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
							source={require("./../../assets/images/background-45.png")}
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
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									left: 0,
									right: 0,
									top: 0,
									bottom: 0,
								}}>
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
										style={styles.inputDrinkNameTwoText}>Station 1: Big Tent</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.inputDrinkNameText}>Available:</Text>
								</View>
								<View
									pointerEvents="box-none"
									style={{
										height: 16,
										marginTop: 24,
										flexDirection: "row",
										alignItems: "flex-start",
									}}>
									<Text
										style={styles.inputDrinkNameSevenText}>Station 2: Main Stage</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.inputDrinkNameSixText}>Available:</Text>
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
										flexDirection: "row",
										alignItems: "flex-end",
									}}>
									<View
										pointerEvents="box-none"
										style={{
											width: 139,
											height: 16,
										}}>
										<Text
											style={styles.inputDrinkNameEightText}>4,450 of 5,000</Text>
										<Text
											style={styles.inputDrinkNameNineText}>Total:</Text>
									</View>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.inputDrinkNameTenText}>90%</Text>
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
									justifyContent: "center",
								}}>
								<View
									pointerEvents="box-none"
									style={{
										height: 16,
										marginLeft: 52,
										marginRight: 5,
										flexDirection: "row",
										alignItems: "center",
									}}>
									<Text
										style={styles.inputDrinkNameThreeText}>4,450 of 5,000</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.inputDrinkNameFiveText}>90%</Text>
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
								<Text
									style={styles.inputDrinkNameFourText}>Total:</Text>
							</View>
						</View>
					</View>
					<View
						style={styles.editView}>
						<Text
							style={styles.editText}>Station Data</Text>
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
							source={require("./../../assets/images/background-49.png")}
							style={styles.backgroundTwoImage}/>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 20,
							right: 20,
							top: 19,
							bottom: 22,
						}}>
						<View
							style={styles.drinkCardElementsTwoView}>
							<Text
								style={styles.drinkNameTwoText}>Assigned and Confirmed:</Text>
							<Image
								source={require("./../../assets/images/seperator-6.png")}
								style={styles.seperatorTwoImage}/>
							<View
								pointerEvents="box-none"
								style={{
									height: 16,
									marginRight: 1,
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
									style={styles.inputDrinkNameElevenText}>Status</Text>
							</View>
							<Text
								style={styles.inputDrinkNameTwelveText}>Pending</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.inputDrinkNameThirteenText}>Pending</Text>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								flex: 1,
								marginLeft: 6,
								marginRight: 1,
								marginTop: 17,
								flexDirection: "row",
							}}>
							<View
								pointerEvents="box-none"
								style={{
									width: 62,
									marginTop: 2,
									alignItems: "flex-start",
								}}>
								<Text
									style={styles.inputDrinkNameTwentyText}>Bud Light:</Text>
								<View
									style={{
										flex: 1,
									}}/>
								<Text
									style={styles.inputDrinkNameTwentyOneText}>Coors:</Text>
							</View>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								pointerEvents="box-none"
								style={{
									width: 60,
									marginBottom: 3,
									alignItems: "flex-end",
								}}>
								<Text
									style={styles.inputDrinkNameSeventeenText}>Pending</Text>
								<View
									style={{
										flex: 1,
									}}/>
								<Text
									style={styles.inputDrinkNameEighteenText}>Pending</Text>
							</View>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 26,
							right: 20,
							top: 20,
							height: 75,
							alignItems: "flex-start",
						}}>
						<View
							style={styles.editTwoView}>
							<Text
								style={styles.editTwoText}>Assign</Text>
						</View>
						<Text
							style={styles.inputDrinkNameFifteenText}>Bud Light:</Text>
						<Text
							style={styles.inputDrinkNameSixteenText}>Coors:</Text>
					</View>
					<Text
						style={styles.inputDrinkNameNineteenText}>Station 2: Main Stage</Text>
				</View>
				<View
					style={{
						flex: 1,
					}}/>
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
							source={require("./../../assets/images/background-29.png")}
							style={styles.backgroundFourImage}/>
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
							style={styles.drinkCardElementsFourView}>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									left: 0,
									right: 0,
									top: 0,
									bottom: 0,
								}}>
								<Text
									style={styles.drinkNameFourText}>Reassigned</Text>
								<View
									pointerEvents="box-none"
									style={{
										height: 1,
										marginRight: 4,
										marginTop: 1,
									}}>
									<Image
										source={require("./../../assets/images/seperator-6.png")}
										style={styles.seperatorFourImage}/>
									<Image
										source={require("./../../assets/images/seperator-6.png")}
										style={styles.seperatorFiveImage}/>
								</View>
								<View
									pointerEvents="box-none"
									style={{
										height: 16,
										marginLeft: 63,
										marginTop: 35,
										flexDirection: "row",
										alignItems: "flex-start",
									}}>
									<Text
										style={styles.inputDrinkNameFortyFiveText}>Unit / Pack</Text>
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
											style={styles.inputDrinkNameFortyThreeText}>Status:</Text>
										<Text
											style={styles.inputDrinkNameFortySixText}>Station:</Text>
									</View>
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
										flexDirection: "row",
										alignItems: "flex-end",
									}}>
									<Text
										style={styles.inputDrinkNameFortyTwoText}>Budlight</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.inputDrinkNameFortyFourText}>Pending</Text>
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
									justifyContent: "center",
								}}>
								<View
									pointerEvents="box-none"
									style={{
										height: 16,
										marginLeft: 63,
										marginRight: 64,
										flexDirection: "row",
										alignItems: "center",
									}}>
									<Text
										style={styles.inputDrinkNameFortySevenText}>Assigned:</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.inputDrinkNameFortyEightText}>Reassign:</Text>
								</View>
							</View>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 22,
							right: 23,
							top: 20,
							bottom: 22,
							alignItems: "flex-end",
						}}>
						<View
							style={styles.editFourView}>
							<Text
								style={styles.editFourText}>Reassigned</Text>
						</View>
						<Text
							style={styles.inputDrinkNameFiftyTwoText}>Station 1: Big Tent</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							pointerEvents="box-none"
							style={{
								alignSelf: "stretch",
								height: 16,
								marginLeft: 68,
								marginRight: 61,
								flexDirection: "row",
								alignItems: "flex-end",
							}}>
							<View
								style={styles.unitPerPackSixView}>
								<Text
									style={styles.inputDrinkNameFortyNineText}>1</Text>
								<View
									style={{
										flex: 1,
									}}/>
								<Text
									style={styles.inputDrinkNameFiftyText}>100</Text>
							</View>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.inputDrinkNameFiftyOneText}>Station 2</Text>
						</View>
					</View>
				</View>
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
							source={require("./../../assets/images/background-37.png")}
							style={styles.backgroundFiveImage}/>
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
							style={styles.drinkCardElementsFiveView}>
							<Text
								style={styles.drinkNameFiveText}>Damaged</Text>
							<Image
								source={require("./../../assets/images/seperator-6.png")}
								style={styles.seperatorSixImage}/>
							<View
								pointerEvents="box-none"
								style={{
									flex: 1,
									marginLeft: 6,
									marginTop: 16,
									flexDirection: "row",
								}}>
								<View
									pointerEvents="box-none"
									style={{
										width: 125,
										marginBottom: 2,
										alignItems: "flex-start",
									}}>
									<Text
										style={styles.inputDrinkNameFiftyThreeText}>Assigned:</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.inputDrinkNameFiftyFourText}>Budlight</Text>
								</View>
								<View
									style={{
										flex: 1,
									}}/>
								<View
									pointerEvents="box-none"
									style={{
										width: 68,
										marginTop: 14,
										alignItems: "flex-end",
									}}>
									<Text
										style={styles.inputDrinkNameFiftyFiveText}>Total:</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.inputDrinkNameFiftySixText}>100</Text>
								</View>
							</View>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 22,
							right: 23,
							top: 20,
							bottom: 22,
							alignItems: "flex-start",
						}}>
						<View
							style={styles.editFiveView}>
							<Text
								style={styles.editFiveText}>Damaged</Text>
						</View>
						<Text
							style={styles.inputDrinkNameSixtyText}>Station 1: Big Tent</Text>
						<Text
							style={styles.inputDrinkNameFiftySevenText}>Unit / Pack</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							style={styles.unitPerPackSevenView}>
							<Text
								style={styles.inputDrinkNameFiftyEightText}>1</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.inputDrinkNameFiftyNineText}>100</Text>
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
		width: 314,
		height: 153,
		marginTop: 10,
	},
	backgroundThreeImage: {
		backgroundColor: "transparent",
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		resizeMode: "cover",
		width: null,
		height: 153,
	},
	drinkCardElementsThreeView: {
		backgroundColor: "transparent",
		height: 112,
		marginLeft: 20,
		marginRight: 19,
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
		position: "absolute",
		left: 0,
		right: 3,
		top: 0,
	},
	editThreeView: {
		backgroundColor: "rgb(0, 112, 247)",
		borderRadius: 7,
		position: "absolute",
		right: 0,
		width: 80,
		top: 1,
		height: 18,
		justifyContent: "center",
	},
	editThreeText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: "ArialMT",
		fontSize: 11,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 6,
		marginRight: 4,
	},
	seperatorThreeImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: null,
		height: 1,
		marginRight: 4,
		marginTop: 1,
	},
	inputDrinkNameThirtyOneText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		width: 68,
	},
	inputDrinkNameTwentyFourText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		width: 109,
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
	},
	unitPerPackView: {
		backgroundColor: "transparent",
		width: 61,
		height: 16,
		marginLeft: 2,
		marginTop: 1,
		flexDirection: "row",
		alignItems: "center",
	},
	inputDrinkNameThirtyTwoText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		width: 28,
	},
	inputDrinkNameThirtyThreeText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		width: 29,
	},
	inputDrinkNameTwentyFiveText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		width: 104,
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
	unitPerPackTwoView: {
		backgroundColor: "transparent",
		width: 61,
		height: 16,
		marginLeft: 2,
		marginTop: 1,
		flexDirection: "row",
		alignItems: "center",
	},
	inputDrinkNameThirtyFourText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		width: 28,
	},
	inputDrinkNameThirtyFiveText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 29,
	},
	inputDrinkNameTwentySixText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		width: 104,
	},
	inputDrinkNameTwentySevenText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		width: 62,
	},
	unitPerPackThreeView: {
		backgroundColor: "transparent",
		width: 61,
		height: 16,
		marginLeft: 2,
		flexDirection: "row",
		alignItems: "center",
	},
	inputDrinkNameThirtySixText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		width: 28,
	},
	inputDrinkNameThirtySevenText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 29,
	},
	inputDrinkNameTwentyNineText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		width: 104,
	},
	inputDrinkNameTwentyEightText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		width: 62,
	},
	unitPerPackFourView: {
		backgroundColor: "transparent",
		width: 61,
		height: 16,
		marginLeft: 2,
		flexDirection: "row",
		alignItems: "center",
	},
	inputDrinkNameThirtyEightText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		width: 28,
	},
	inputDrinkNameThirtyNineText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 29,
	},
	inputDrinkNameThirtyText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		backgroundColor: "transparent",
		width: 104,
		marginBottom: 1,
	},
	unitPerPackFiveView: {
		backgroundColor: "transparent",
		position: "absolute",
		left: 90,
		width: 61,
		top: 63,
		height: 16,
		flexDirection: "row",
		alignItems: "center",
	},
	inputDrinkNameFortyText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
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
	preorderQueCardView: {
		backgroundColor: "transparent",
		width: 314,
		height: 138,
		marginTop: 5,
	},
	backgroundImage: {
		backgroundColor: "transparent",
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		resizeMode: "cover",
		width: null,
		height: 138,
	},
	drinkCardElementsView: {
		backgroundColor: "transparent",
		height: 97,
		marginLeft: 20,
		marginRight: 19,
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
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		backgroundColor: "transparent",
		width: 68,
	},
	inputDrinkNameSevenText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 190,
	},
	inputDrinkNameSixText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		backgroundColor: "transparent",
		width: 68,
	},
	inputDrinkNameEightText: {
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
		bottom: 0,
	},
	inputDrinkNameNineText: {
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
		bottom: 0,
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
	},
	inputDrinkNameThreeText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
		width: 93,
	},
	inputDrinkNameFiveText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		width: 60,
	},
	inputDrinkNameFourText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		width: 62,
		marginLeft: 6,
	},
	editView: {
		backgroundColor: "rgb(0, 112, 247)",
		borderRadius: 7,
		position: "absolute",
		right: 23,
		width: 67,
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
		marginLeft: 3,
		marginRight: 2,
	},
	preorderQueCardTwoView: {
		backgroundColor: "transparent",
		width: 311,
		height: 167,
		marginTop: 9,
	},
	backgroundTwoImage: {
		backgroundColor: "transparent",
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		resizeMode: "cover",
		width: null,
		height: 167,
	},
	drinkCardElementsTwoView: {
		backgroundColor: "transparent",
		height: 73,
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
		width: 212,
	},
	seperatorTwoImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: null,
		height: 1,
		marginTop: 1,
	},
	inputDrinkNameFourteenText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		width: 190,
	},
	inputDrinkNameElevenText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		width: 68,
	},
	inputDrinkNameTwelveText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		alignSelf: "flex-end",
		width: 60,
		marginRight: 1,
		marginTop: 1,
	},
	inputDrinkNameThirteenText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		backgroundColor: "transparent",
		alignSelf: "flex-end",
		width: 60,
		marginRight: 1,
	},
	inputDrinkNameTwentyText: {
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
		width: 62,
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
	inputDrinkNameEighteenText: {
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
		width: 42,
		height: 18,
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
		marginLeft: 2,
		marginRight: 2,
	},
	inputDrinkNameFifteenText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 62,
		marginTop: 23,
	},
	inputDrinkNameSixteenText: {
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
	inputDrinkNameNineteenText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		backgroundColor: "transparent",
		position: "absolute",
		left: 20,
		width: 190,
		top: 92,
	},
	preorderQueCardFourView: {
		backgroundColor: "transparent",
		width: 314,
		height: 131,
		marginBottom: 5,
	},
	backgroundFourImage: {
		backgroundColor: "transparent",
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		resizeMode: "cover",
		width: null,
		height: 131,
	},
	drinkCardElementsFourView: {
		backgroundColor: "transparent",
		height: 89,
		marginLeft: 20,
		marginRight: 19,
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
		marginRight: 4,
	},
	seperatorFourImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 1,
	},
	seperatorFiveImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 1,
	},
	inputDrinkNameFortyFiveText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		width: 68,
	},
	inputDrinkNameFortyThreeText: {
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
	inputDrinkNameFortySixText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
		position: "absolute",
		right: 64,
		width: 68,
		top: 0,
	},
	inputDrinkNameFortyTwoText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 62,
	},
	inputDrinkNameFortyFourText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		width: 60,
	},
	inputDrinkNameFortySevenText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
		width: 68,
	},
	inputDrinkNameFortyEightText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
		width: 68,
	},
	editFourView: {
		backgroundColor: "rgb(0, 112, 247)",
		borderRadius: 7,
		width: 67,
		height: 18,
		justifyContent: "center",
	},
	editFourText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: "ArialMT",
		fontSize: 11,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 3,
		marginRight: 2,
	},
	inputDrinkNameFiftyTwoText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		width: 190,
		marginTop: 4,
	},
	unitPerPackSixView: {
		backgroundColor: "transparent",
		width: 61,
		height: 16,
		flexDirection: "row",
		alignItems: "center",
	},
	inputDrinkNameFortyNineText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
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
	inputDrinkNameFiftyOneText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		width: 70,
	},
	preorderQueCardFiveView: {
		backgroundColor: "transparent",
		width: 314,
		height: 126,
	},
	backgroundFiveImage: {
		backgroundColor: "transparent",
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		resizeMode: "cover",
		width: null,
		height: 126,
	},
	drinkCardElementsFiveView: {
		backgroundColor: "transparent",
		height: 84,
		marginLeft: 20,
		marginRight: 19,
	},
	drinkNameFiveText: {
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
	},
	seperatorSixImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		width: null,
		height: 1,
		marginRight: 4,
		marginTop: 1,
	},
	inputDrinkNameFiftyThreeText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
		backgroundColor: "transparent",
		width: 68,
		marginLeft: 57,
	},
	inputDrinkNameFiftyFourText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		width: 62,
	},
	inputDrinkNameFiftyFiveText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		backgroundColor: "transparent",
		width: 68,
	},
	inputDrinkNameFiftySixText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		backgroundColor: "transparent",
		width: 60,
		marginRight: 5,
	},
	editFiveView: {
		backgroundColor: "rgb(0, 112, 247)",
		borderRadius: 7,
		alignSelf: "flex-end",
		width: 54,
		height: 18,
		justifyContent: "center",
	},
	editFiveText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: "ArialMT",
		fontSize: 11,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 2,
		marginRight: 1,
	},
	inputDrinkNameSixtyText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 190,
		marginTop: 4,
	},
	inputDrinkNameFiftySevenText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		width: 68,
		marginLeft: 61,
		marginTop: 12,
	},
	unitPerPackSevenView: {
		backgroundColor: "transparent",
		width: 61,
		height: 16,
		marginLeft: 68,
		flexDirection: "row",
		alignItems: "center",
	},
	inputDrinkNameFiftyEightText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		width: 28,
	},
	inputDrinkNameFiftyNineText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		width: 29,
	},
})
