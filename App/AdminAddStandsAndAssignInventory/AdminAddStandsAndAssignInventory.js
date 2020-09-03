//
//  AdminAddStandsAndAssignInventory
//  Hyppoe
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


export default class AdminAddStandsAndAssignInventory extends React.Component {

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
						height: 368,
					}}>
					<Image
						source={require("./../../assets/images/top-image-7.png")}
						style={styles.topImageImage}/>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 30,
							right: 31,
							top: 56,
							height: 312,
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
									source={require("./../../assets/images/background-12.png")}
									style={styles.backgroundImage}/>
							</View>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									left: 20,
									right: 19,
									top: 36,
									bottom: 20,
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
										}}>
										<Text
											style={styles.drinkNameText}>Station 1: Big Tent</Text>
										<Image
											source={require("./../../assets/images/seperator-6.png")}
											style={styles.seperatorImage}/>
										<Text
											style={styles.inputDrinkNameTwentyText}>Total:</Text>
										<Text
											style={styles.inputDrinkNameNineteenText}>Tablets:</Text>
										<View
											pointerEvents="box-none"
											style={{
												height: 16,
												marginLeft: 63,
												marginRight: 64,
												marginTop: 16,
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
												style={styles.inputDrinkNameTwentyThreeText}>Assign:</Text>
										</View>
										<View
											pointerEvents="box-none"
											style={{
												height: 16,
												marginLeft: 63,
												marginRight: 64,
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
											<Text
												style={styles.inputDrinkNameSeventeenText}>Unit / Pack</Text>
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
												style={styles.inputDrinkNameText}>Bud Light:</Text>
											<View
												style={{
													flex: 1,
												}}/>
											<Text
												style={styles.inputDrinkNameFourText}>25%</Text>
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
												style={styles.inputDrinkNameTwoText}>Coors:</Text>
											<View
												style={styles.unitPerPackView}>
												<Text
													style={styles.inputDrinkNameElevenText}>0</Text>
												<View
													style={{
														flex: 1,
													}}/>
												<Text
													style={styles.inputDrinkNameTwelveText}>0</Text>
											</View>
											<View
												style={{
													flex: 1,
												}}/>
											<Text
												style={styles.inputDrinkNameFiveText}>10%</Text>
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
												style={styles.inputDrinkNameSixText}>Coca Cola:</Text>
											<View
												style={styles.unitPerPackTwoView}>
												<Text
													style={styles.inputDrinkNameThirteenText}>0</Text>
												<View
													style={{
														flex: 1,
													}}/>
												<Text
													style={styles.inputDrinkNameFourteenText}>0</Text>
											</View>
											<View
												style={{
													flex: 1,
												}}/>
											<Text
												style={styles.inputDrinkNameEightText}>5%</Text>
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
												style={styles.inputDrinkNameSevenText}>Water:</Text>
											<View
												style={styles.unitPerPackThreeView}>
												<Text
													style={styles.inputDrinkNameFifteenText}>0</Text>
												<View
													style={{
														flex: 1,
													}}/>
												<Text
													style={styles.inputDrinkNameSixteenText}>0</Text>
											</View>
											<View
												style={{
													flex: 1,
												}}/>
											<Text
												style={styles.inputDrinkNameNineText}>4%</Text>
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
												style={styles.inputDrinkNameTwentyOneText}>Total Units:</Text>
											<View
												style={{
													flex: 1,
												}}/>
											<Text
												style={styles.inputDrinkNameTwentyTwoText}>2,000</Text>
										</View>
									</View>
									<View
										pointerEvents="box-none"
										style={{
											position: "absolute",
											right: 0,
											top: 0,
											bottom: 0,
											justifyContent: "center",
										}}>
										<Text
											style={styles.inputDrinkNameThreeText}>Total Inventory</Text>
									</View>
								</View>
								<View
									style={{
										flex: 1,
									}}/>
								<View
									style={styles.editTwoView}>
									<Text
										style={styles.editTwoText}>Update</Text>
								</View>
							</View>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									left: 90,
									right: 20,
									top: 20,
									height: 150,
									alignItems: "flex-end",
								}}>
								<View
									style={styles.editView}>
									<Text
										style={styles.editText}>Assign Supplies</Text>
								</View>
								<View
									style={styles.numberBoxNineView}>
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
											style={styles.rectangleNineImage}/>
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
											style={styles.textNineText}>4</Text>
									</View>
								</View>
								<View
									style={styles.unitPerPackFourView}>
									<Text
										style={styles.inputDrinkNameTwentyFourText}>0</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.inputDrinkNameTwentyFiveText}>0</Text>
								</View>
							</View>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									left: 26,
									right: 24,
									top: 99,
									height: 19,
									flexDirection: "row",
									alignItems: "flex-start",
								}}>
								<Text
									style={styles.inputDrinkNameTwentySixText}>Runners:</Text>
								<View
									style={{
										flex: 1,
									}}/>
								<View
									style={styles.numberBoxTenView}>
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
											style={styles.rectangleTenImage}/>
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
											style={styles.textTenText}>4</Text>
									</View>
								</View>
							</View>
						</View>
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
							source={require("./../../assets/images/background-40.png")}
							style={styles.backgroundTwoImage}/>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 20,
							right: 19,
							top: 36,
							bottom: 20,
						}}>
						<View
							style={styles.drinkCardElementsTwoView}>
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
									style={styles.drinkNameTwoText}>Station 2: Main Stage</Text>
								<Image
									source={require("./../../assets/images/seperator-6.png")}
									style={styles.seperatorTwoImage}/>
								<Text
									style={styles.inputDrinkNameFortySixText}>Total:</Text>
								<Text
									style={styles.inputDrinkNameFortyFiveText}>Tablets:</Text>
								<View
									pointerEvents="box-none"
									style={{
										height: 16,
										marginLeft: 63,
										marginRight: 64,
										marginTop: 16,
										flexDirection: "row",
										alignItems: "flex-start",
									}}>
									<Text
										style={styles.inputDrinkNameFortyFourText}>Available:</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.inputDrinkNameFortyNineText}>Assign:</Text>
								</View>
								<View
									pointerEvents="box-none"
									style={{
										height: 16,
										marginLeft: 63,
										marginRight: 64,
										marginTop: 4,
										flexDirection: "row",
										alignItems: "flex-start",
									}}>
									<Text
										style={styles.inputDrinkNameThirtySixText}>Unit / Pack</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.inputDrinkNameFortyThreeText}>Unit / Pack</Text>
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
										style={styles.inputDrinkNameTwentySevenText}>Bud Light:</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.inputDrinkNameThirtyText}>25%</Text>
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
										style={styles.inputDrinkNameTwentyEightText}>Coors:</Text>
									<View
										style={styles.unitPerPackFiveView}>
										<Text
											style={styles.inputDrinkNameThirtySevenText}>0</Text>
										<View
											style={{
												flex: 1,
											}}/>
										<Text
											style={styles.inputDrinkNameThirtyEightText}>0</Text>
									</View>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.inputDrinkNameThirtyOneText}>10%</Text>
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
										style={styles.inputDrinkNameThirtyTwoText}>Coca Cola:</Text>
									<View
										style={styles.unitPerPackSixView}>
										<Text
											style={styles.inputDrinkNameThirtyNineText}>0</Text>
										<View
											style={{
												flex: 1,
											}}/>
										<Text
											style={styles.inputDrinkNameFortyText}>0</Text>
									</View>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.inputDrinkNameThirtyFourText}>5%</Text>
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
										style={styles.inputDrinkNameThirtyThreeText}>Water:</Text>
									<View
										style={styles.unitPerPackSevenView}>
										<Text
											style={styles.inputDrinkNameFortyOneText}>0</Text>
										<View
											style={{
												flex: 1,
											}}/>
										<Text
											style={styles.inputDrinkNameFortyTwoText}>0</Text>
									</View>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.inputDrinkNameThirtyFiveText}>4%</Text>
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
										style={styles.inputDrinkNameFortySevenText}>Total Units:</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.inputDrinkNameFortyEightText}>2,000</Text>
								</View>
							</View>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									right: 0,
									top: 0,
									bottom: 0,
									justifyContent: "center",
								}}>
								<Text
									style={styles.inputDrinkNameTwentyNineText}>Total Inventory</Text>
							</View>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							style={styles.editFourView}>
							<Text
								style={styles.editFourText}>Update</Text>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 90,
							right: 20,
							top: 20,
							height: 150,
							alignItems: "flex-end",
						}}>
						<View
							style={styles.editThreeView}>
							<Text
								style={styles.editThreeText}>Assign Supplies</Text>
						</View>
						<View
							style={styles.numberBoxNineteenView}>
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
									style={styles.rectangleNineteenImage}/>
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
									style={styles.textNineteenText}>4</Text>
							</View>
						</View>
						<View
							style={styles.unitPerPackEightView}>
							<Text
								style={styles.inputDrinkNameFiftyText}>0</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.inputDrinkNameFiftyOneText}>0</Text>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 26,
							right: 24,
							top: 99,
							height: 19,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<Text
							style={styles.inputDrinkNameFiftyTwoText}>Runners:</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							style={styles.numberBoxTwentyView}>
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
									style={styles.rectangleTwentyImage}/>
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
									style={styles.textTwentyText}>4</Text>
							</View>
						</View>
					</View>
				</View>
				<View
					style={{
						flex: 1,
					}}/>
				<Image
					source={require("./../../assets/images/plus-circle-3.png")}
					style={styles.plusCircleImage}/>
				<View
					style={styles.savePreorderMenuBView}>
					<Text
						style={styles.savePreorderMenuText}>Finish Stations and Input of Inventory</Text>
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
		width: 314,
		height: 282,
		marginTop: 10,
	},
	backgroundImage: {
		backgroundColor: "transparent",
		shadowColor: "rgba(107, 127, 153, 00.40)",
		shadowRadius: 20,
		shadowOpacity: 1,
		resizeMode: "cover",
		width: null,
		height: 282,
	},
	drinkCardElementsView: {
		backgroundColor: "transparent",
		alignSelf: "stretch",
		height: 203,
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
		width: 191,
	},
	seperatorImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		width: null,
		height: 1,
		marginRight: 4,
		marginTop: 1,
	},
	inputDrinkNameTwentyText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		backgroundColor: "transparent",
		alignSelf: "flex-end",
		width: 68,
		marginTop: 10,
	},
	inputDrinkNameNineteenText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		alignSelf: "flex-start",
		width: 62,
		marginLeft: 6,
		marginTop: 1,
	},
	inputDrinkNameEighteenText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
		backgroundColor: "transparent",
		width: 68,
	},
	inputDrinkNameTwentyThreeText: {
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
	inputDrinkNameSeventeenText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		width: 68,
	},
	inputDrinkNameText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		width: 62,
	},
	inputDrinkNameFourText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		width: 60,
	},
	inputDrinkNameTwoText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		width: 62,
		marginTop: 1,
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
	inputDrinkNameElevenText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		width: 28,
	},
	inputDrinkNameTwelveText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		width: 29,
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
	unitPerPackTwoView: {
		backgroundColor: "transparent",
		width: 61,
		height: 16,
		marginLeft: 2,
		flexDirection: "row",
		alignItems: "center",
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
	},
	inputDrinkNameFourteenText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		width: 29,
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
	inputDrinkNameFifteenText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		width: 28,
	},
	inputDrinkNameSixteenText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		width: 29,
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
		marginBottom: 1,
	},
	inputDrinkNameTwentyOneText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		width: 68,
		marginBottom: 1,
	},
	inputDrinkNameTwentyTwoText: {
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
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
		backgroundColor: "transparent",
		width: 56,
	},
	editTwoView: {
		backgroundColor: "rgb(0, 112, 247)",
		borderRadius: 7,
		width: 69,
		height: 18,
		marginRight: 61,
		justifyContent: "center",
	},
	editTwoText: {
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
	editView: {
		backgroundColor: "rgb(0, 112, 247)",
		borderRadius: 7,
		width: 103,
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
		marginLeft: 12,
		marginRight: 7,
	},
	numberBoxNineView: {
		backgroundColor: "transparent",
		width: 23,
		height: 17,
		marginRight: 4,
		marginTop: 43,
	},
	rectangleNineImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: null,
		height: 17,
	},
	textNineText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.15,
	},
	unitPerPackFourView: {
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		width: 61,
		height: 16,
		marginTop: 56,
		flexDirection: "row",
		alignItems: "center",
	},
	inputDrinkNameTwentyFourText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		width: 28,
	},
	inputDrinkNameTwentyFiveText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		width: 29,
	},
	inputDrinkNameTwentySixText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		width: 62,
		marginTop: 3,
	},
	numberBoxTenView: {
		backgroundColor: "transparent",
		width: 23,
		height: 17,
	},
	rectangleTenImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: null,
		height: 17,
	},
	textTenText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.15,
	},
	preorderQueCardTwoView: {
		backgroundColor: "transparent",
		alignSelf: "center",
		width: 314,
		height: 282,
		marginTop: 5,
	},
	backgroundTwoImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		shadowColor: "rgba(107, 127, 153, 00.40)",
		shadowRadius: 20,
		shadowOpacity: 1,
		width: null,
		height: 282,
	},
	drinkCardElementsTwoView: {
		backgroundColor: "transparent",
		height: 203,
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
	},
	seperatorTwoImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: null,
		height: 1,
		marginRight: 4,
		marginTop: 1,
	},
	inputDrinkNameFortySixText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		backgroundColor: "transparent",
		alignSelf: "flex-end",
		width: 68,
		marginTop: 10,
	},
	inputDrinkNameFortyFiveText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		width: 62,
		marginLeft: 6,
		marginTop: 1,
	},
	inputDrinkNameFortyFourText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
		width: 68,
	},
	inputDrinkNameFortyNineText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
		backgroundColor: "transparent",
		width: 68,
	},
	inputDrinkNameThirtySixText: {
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
		width: 68,
	},
	inputDrinkNameTwentySevenText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 62,
	},
	inputDrinkNameThirtyText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		width: 60,
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
		marginTop: 1,
	},
	unitPerPackFiveView: {
		backgroundColor: "transparent",
		width: 61,
		height: 16,
		marginLeft: 2,
		marginTop: 1,
		flexDirection: "row",
		alignItems: "center",
	},
	inputDrinkNameThirtySevenText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		width: 28,
	},
	inputDrinkNameThirtyEightText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		width: 29,
	},
	inputDrinkNameThirtyOneText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		width: 60,
	},
	inputDrinkNameThirtyTwoText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		width: 62,
	},
	unitPerPackSixView: {
		backgroundColor: "transparent",
		width: 61,
		height: 16,
		marginLeft: 2,
		flexDirection: "row",
		alignItems: "center",
	},
	inputDrinkNameThirtyNineText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		width: 28,
	},
	inputDrinkNameFortyText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		width: 29,
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
	inputDrinkNameThirtyThreeText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		width: 62,
	},
	unitPerPackSevenView: {
		backgroundColor: "transparent",
		width: 61,
		height: 16,
		marginLeft: 2,
		flexDirection: "row",
		alignItems: "center",
	},
	inputDrinkNameFortyOneText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		width: 28,
	},
	inputDrinkNameFortyTwoText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		width: 29,
	},
	inputDrinkNameThirtyFiveText: {
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
	inputDrinkNameFortySevenText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		width: 68,
		marginBottom: 1,
	},
	inputDrinkNameFortyEightText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		backgroundColor: "transparent",
		width: 60,
	},
	inputDrinkNameTwentyNineText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
		width: 56,
	},
	editFourView: {
		backgroundColor: "rgb(0, 112, 247)",
		borderRadius: 7,
		alignSelf: "flex-end",
		width: 69,
		height: 18,
		marginRight: 61,
		justifyContent: "center",
	},
	editFourText: {
		color: "white",
		fontFamily: "ArialMT",
		fontSize: 11,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 13,
		marginRight: 14,
	},
	editThreeView: {
		backgroundColor: "rgb(0, 112, 247)",
		borderRadius: 7,
		width: 103,
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
		marginLeft: 12,
		marginRight: 7,
	},
	numberBoxNineteenView: {
		backgroundColor: "transparent",
		width: 23,
		height: 17,
		marginRight: 4,
		marginTop: 43,
	},
	rectangleNineteenImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: null,
		height: 17,
	},
	textNineteenText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.15,
	},
	unitPerPackEightView: {
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		width: 61,
		height: 16,
		marginTop: 56,
		flexDirection: "row",
		alignItems: "center",
	},
	inputDrinkNameFiftyText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		width: 28,
	},
	inputDrinkNameFiftyOneText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		width: 29,
	},
	inputDrinkNameFiftyTwoText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		width: 62,
		marginTop: 3,
	},
	numberBoxTwentyView: {
		backgroundColor: "transparent",
		width: 23,
		height: 17,
	},
	rectangleTwentyImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 17,
	},
	textTwentyText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.15,
	},
	plusCircleImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		alignSelf: "flex-end",
		width: 38,
		height: 38,
		marginRight: 30,
		marginBottom: 43,
	},
	savePreorderMenuBView: {
		backgroundColor: "rgb(0, 112, 247)",
		borderRadius: 20,
		shadowColor: "rgba(0, 0, 0, 00.40)",
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
		color: "white",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
		backgroundColor: "transparent",
	},
})
