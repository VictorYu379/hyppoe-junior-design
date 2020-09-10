//
//  AdminConfirmedInventory
//  Hyppoe
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


export default class AdminConfirmedInventory extends React.Component {

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
						bottom: 15,
					}}>
					<View
						pointerEvents="box-none"
						style={{
							height: 269,
						}}>
						<Image
							source={require("./../../assets/images/top-image-4.png")}
							style={styles.topImageImage}/>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 31,
								right: 30,
								top: 56,
								height: 213,
							}}>
							<View
								pointerEvents="box-none"
								style={{
									height: 20,
									marginLeft: 10,
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
										source={require("./../../assets/images/background-9.png")}
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
											style={styles.drinkNameText}>Station 1: Big Tent Inventory</Text>
										<Image
											source={require("./../../assets/images/seperator-6.png")}
											style={styles.seperatorImage}/>
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
												style={styles.inputDrinkNameEighteenText}>Assigned:</Text>
											<View
												style={{
													flex: 1,
												}}/>
											<Text
												style={styles.inputDrinkNameNineteenText}>Confirmed:</Text>
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
													style={styles.inputDrinkNameThreeText}>Status:</Text>
												<Text
													style={styles.inputDrinkNameSeventeenText}>Unit / Pack</Text>
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
												style={styles.inputDrinkNameText}>Bud Light:</Text>
											<View
												style={{
													flex: 1,
												}}/>
											<Text
												style={styles.inputDrinkNameFourText}>Pending</Text>
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
													style={styles.inputDrinkNameElevenText}>10</Text>
												<View
													style={{
														flex: 1,
													}}/>
												<Text
													style={styles.inputDrinkNameTwelveText}> 100</Text>
											</View>
											<View
												style={{
													flex: 1,
												}}/>
											<Text
												style={styles.inputDrinkNameFiveText}>Pending</Text>
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
													style={styles.inputDrinkNameThirteenText}>15</Text>
												<View
													style={{
														flex: 1,
													}}/>
												<Text
													style={styles.inputDrinkNameFourteenText}> 100</Text>
											</View>
											<View
												style={{
													flex: 1,
												}}/>
											<Text
												style={styles.inputDrinkNameEightText}>Complete</Text>
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
													style={styles.inputDrinkNameFifteenText}>15</Text>
												<View
													style={{
														flex: 1,
													}}/>
												<Text
													style={styles.inputDrinkNameSixteenText}> 100</Text>
											</View>
											<View
												style={{
													flex: 1,
												}}/>
											<Text
												style={styles.inputDrinkNameNineText}>Complete</Text>
										</View>
									</View>
								</View>
								<View
									pointerEvents="box-none"
									style={{
										position: "absolute",
										left: 90,
										right: 89,
										top: 92,
										bottom: 20,
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
											style={styles.unitPerPackFourView}>
											<Text
												style={styles.inputDrinkNameTwentyText}>10</Text>
											<View
												style={{
													flex: 1,
												}}/>
											<Text
												style={styles.inputDrinkNameTwentyOneText}> 100</Text>
										</View>
										<View
											style={{
												flex: 1,
											}}/>
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
													style={styles.textTwoText}>15</Text>
											</View>
										</View>
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
													style={styles.textText}>100</Text>
											</View>
										</View>
									</View>
									<View
										pointerEvents="box-none"
										style={{
											width: 56,
											height: 17,
											marginTop: 1,
											flexDirection: "row",
											justifyContent: "flex-end",
											alignItems: "flex-start",
										}}>
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
													style={styles.textFourText}>25</Text>
											</View>
										</View>
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
													style={styles.textThreeText}>100</Text>
											</View>
										</View>
									</View>
									<View
										pointerEvents="box-none"
										style={{
											width: 56,
											height: 17,
											marginTop: 1,
											flexDirection: "row",
											justifyContent: "flex-end",
											alignItems: "flex-start",
										}}>
										<View
											style={styles.numberBoxSixView}>
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
													style={styles.rectangleSixImage}/>
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
													style={styles.textSixText}>20</Text>
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
													style={styles.textFiveText}>100</Text>
											</View>
										</View>
									</View>
									<View
										style={{
											flex: 1,
										}}/>
									<View
										pointerEvents="box-none"
										style={{
											width: 56,
											height: 17,
											flexDirection: "row",
											justifyContent: "flex-end",
											alignItems: "flex-end",
										}}>
										<View
											style={styles.numberBoxEightView}>
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
													style={styles.rectangleEightImage}/>
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
													style={styles.textEightText}>20</Text>
											</View>
										</View>
										<View
											style={styles.numberBoxSevenView}>
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
													style={styles.rectangleSevenImage}/>
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
													style={styles.textSevenText}>100</Text>
											</View>
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
							style={styles.savePreorderMenuText}>Confirm Received Inventory at Station 1 - Big Tent</Text>
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
								source={require("./../../assets/images/background-10.png")}
								style={styles.backgroundTwoImage}/>
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
								style={styles.drinkCardElementsTwoView}>
								<Text
									style={styles.drinkNameTwoText}>Station 1: Reassign to Station 2:</Text>
								<View
									pointerEvents="box-none"
									style={{
										height: 1,
										marginRight: 4,
										marginTop: 1,
									}}>
									<Image
										source={require("./../../assets/images/seperator-6.png")}
										style={styles.seperatorTwoImage}/>
									<Image
										source={require("./../../assets/images/seperator-6.png")}
										style={styles.seperatorThreeImage}/>
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
										style={styles.inputDrinkNameTwentySevenText}>Assigned:</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.inputDrinkNameTwentyNineText}>Reassign:</Text>
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
										style={styles.inputDrinkNameTwentyFiveText}>Unit / Pack</Text>
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
											style={styles.inputDrinkNameTwentyThreeText}>Total:</Text>
										<Text
											style={styles.inputDrinkNameTwentySixText}>Unit / Pack</Text>
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
										style={styles.inputDrinkNameTwentyTwoText}>Budlight</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.inputDrinkNameTwentyFourText}>100</Text>
								</View>
								<Text
									style={styles.drinkNameThreeText}>Station 1: Damaged </Text>
								<Image
									source={require("./../../assets/images/seperator-6.png")}
									style={styles.seperatorFourImage}/>
								<View
									style={{
										flex: 1,
									}}/>
								<View
									pointerEvents="box-none"
									style={{
										height: 16,
										marginLeft: 63,
										marginRight: 64,
										marginBottom: 4,
										flexDirection: "row",
										alignItems: "flex-end",
									}}>
									<Text
										style={styles.inputDrinkNameTwentyEightText}>Assigned</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.inputDrinkNameThirtyText}>Reassign:</Text>
								</View>
								<View
									pointerEvents="box-none"
									style={{
										height: 33,
										marginLeft: 6,
										flexDirection: "row",
										alignItems: "flex-end",
									}}>
									<Text
										style={styles.inputDrinkNameThirtyOneText}>Budlight</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<View
										pointerEvents="box-none"
										style={{
											width: 68,
											height: 33,
											justifyContent: "flex-end",
											alignItems: "flex-end",
										}}>
										<Text
											style={styles.inputDrinkNameThirtyTwoText}>Total:</Text>
										<Text
											style={styles.inputDrinkNameThirtyThreeText}>100</Text>
									</View>
								</View>
							</View>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								style={styles.editTwoView}>
								<Text
									style={styles.editTwoText}>Damaged</Text>
							</View>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 83,
								right: 19,
								top: 92,
								bottom: 45,
							}}>
							<View
								pointerEvents="box-none"
								style={{
									height: 17,
									marginLeft: 7,
									marginRight: 69,
									flexDirection: "row",
									alignItems: "flex-start",
								}}>
								<View
									style={styles.unitPerPackFiveView}>
									<Text
										style={styles.inputDrinkNameThirtyFourText}>1</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.inputDrinkNameThirtyFiveText}>100</Text>
								</View>
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
											style={styles.textTenText}>1</Text>
									</View>
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
											style={styles.textNineText}>100</Text>
									</View>
								</View>
							</View>
							<View
								style={styles.editView}>
								<Text
									style={styles.editText}>Reassign</Text>
							</View>
							<View
								pointerEvents="box-none"
								style={{
									height: 16,
									marginRight: 64,
									marginTop: 57,
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
									style={styles.inputDrinkNameThirtySevenText}>Unit / Pack</Text>
							</View>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								pointerEvents="box-none"
								style={{
									height: 17,
									marginLeft: 7,
									marginRight: 69,
									flexDirection: "row",
									alignItems: "flex-end",
								}}>
								<View
									style={styles.unitPerPackSixView}>
									<Text
										style={styles.inputDrinkNameThirtyEightText}>1</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.inputDrinkNameThirtyNineText}>100</Text>
								</View>
								<View
									style={{
										flex: 1,
									}}/>
								<View
									style={styles.numberBoxTwelveView}>
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
											style={styles.rectangleTwelveImage}/>
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
											style={styles.textTwelveText}>1</Text>
									</View>
								</View>
								<View
									style={styles.numberBoxElevenView}>
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
											style={styles.rectangleElevenImage}/>
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
											style={styles.textElevenText}>100</Text>
									</View>
								</View>
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
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 4,
		height: 20,
	},
	preorderQueCardView: {
		backgroundColor: "transparent",
		alignSelf: "center",
		width: 314,
		height: 183,
		marginTop: 10,
	},
	backgroundImage: {
		backgroundColor: "transparent",
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		resizeMode: "cover",
		width: null,
		height: 183,
	},
	drinkCardElementsView: {
		backgroundColor: "transparent",
		height: 142,
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
		marginRight: 4,
	},
	seperatorImage: {
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
	inputDrinkNameSeventeenText: {
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
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		width: 28,
	},
	inputDrinkNameTwelveText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		width: 29,
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
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 29,
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
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
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
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
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
	unitPerPackFourView: {
		backgroundColor: "transparent",
		width: 61,
		height: 16,
		marginTop: 1,
		flexDirection: "row",
		alignItems: "center",
	},
	inputDrinkNameTwentyText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		width: 28,
	},
	inputDrinkNameTwentyOneText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		width: 29,
	},
	numberBoxTwoView: {
		backgroundColor: "transparent",
		width: 23,
		height: 17,
		marginRight: 10,
	},
	rectangleTwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 17,
	},
	textTwoText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.15,
	},
	numberBoxView: {
		backgroundColor: "transparent",
		width: 23,
		height: 17,
	},
	rectangleImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: null,
		height: 17,
	},
	textText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.15,
		marginRight: 1,
	},
	numberBoxFourView: {
		backgroundColor: "transparent",
		width: 23,
		height: 17,
		marginRight: 10,
	},
	rectangleFourImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
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
	numberBoxThreeView: {
		backgroundColor: "transparent",
		width: 23,
		height: 17,
	},
	rectangleThreeImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
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
		marginRight: 1,
	},
	numberBoxSixView: {
		backgroundColor: "transparent",
		width: 23,
		height: 17,
		marginRight: 10,
	},
	rectangleSixImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: null,
		height: 17,
	},
	textSixText: {
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
	},
	rectangleFiveImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
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
		marginRight: 1,
	},
	numberBoxEightView: {
		backgroundColor: "transparent",
		width: 23,
		height: 17,
		marginRight: 10,
	},
	rectangleEightImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 17,
	},
	textEightText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.15,
		backgroundColor: "transparent",
	},
	numberBoxSevenView: {
		backgroundColor: "transparent",
		width: 23,
		height: 17,
	},
	rectangleSevenImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 17,
	},
	textSevenText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.15,
		marginRight: 1,
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
	preorderQueCardTwoView: {
		backgroundColor: "transparent",
		width: 314,
		height: 269,
	},
	backgroundTwoImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		width: null,
		height: 269,
	},
	drinkCardElementsTwoView: {
		backgroundColor: "transparent",
		height: 204,
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
		marginRight: 4,
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
	seperatorThreeImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 1,
	},
	inputDrinkNameTwentySevenText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
		backgroundColor: "transparent",
		width: 68,
	},
	inputDrinkNameTwentyNineText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
		backgroundColor: "transparent",
		width: 68,
	},
	inputDrinkNameTwentyFiveText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		backgroundColor: "transparent",
		width: 68,
	},
	inputDrinkNameTwentyThreeText: {
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
	inputDrinkNameTwentySixText: {
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
	inputDrinkNameTwentyTwoText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 62,
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
	drinkNameThreeText: {
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
	seperatorFourImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: null,
		height: 1,
		marginRight: 4,
		marginTop: 1,
	},
	inputDrinkNameTwentyEightText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
		backgroundColor: "transparent",
		width: 68,
	},
	inputDrinkNameThirtyText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
		width: 68,
	},
	inputDrinkNameThirtyOneText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		width: 62,
		marginBottom: 2,
	},
	inputDrinkNameThirtyTwoText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		width: 68,
		marginBottom: 1,
	},
	inputDrinkNameThirtyThreeText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		width: 60,
		marginRight: 5,
	},
	editTwoView: {
		backgroundColor: "rgb(0, 112, 247)",
		borderRadius: 7,
		alignSelf: "flex-end",
		width: 69,
		height: 18,
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
		marginLeft: 10,
		marginRight: 9,
	},
	unitPerPackFiveView: {
		backgroundColor: "transparent",
		width: 61,
		height: 16,
		marginTop: 1,
		flexDirection: "row",
		alignItems: "center",
	},
	inputDrinkNameThirtyFourText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		width: 28,
	},
	inputDrinkNameThirtyFiveText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		width: 29,
	},
	numberBoxTenView: {
		backgroundColor: "transparent",
		width: 23,
		height: 17,
		marginRight: 10,
	},
	rectangleTenImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 17,
	},
	textTenText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.15,
		backgroundColor: "transparent",
	},
	numberBoxNineView: {
		backgroundColor: "transparent",
		width: 23,
		height: 17,
	},
	rectangleNineImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 17,
	},
	textNineText: {
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
	editView: {
		backgroundColor: "rgb(0, 112, 247)",
		borderRadius: 7,
		alignSelf: "flex-end",
		width: 69,
		height: 18,
		marginTop: 6,
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
		marginLeft: 10,
		marginRight: 9,
	},
	inputDrinkNameThirtySixText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		backgroundColor: "transparent",
		width: 68,
	},
	inputDrinkNameThirtySevenText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		backgroundColor: "transparent",
		width: 68,
	},
	unitPerPackSixView: {
		backgroundColor: "transparent",
		width: 61,
		height: 16,
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
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		width: 29,
	},
	numberBoxTwelveView: {
		backgroundColor: "transparent",
		width: 23,
		height: 17,
		marginRight: 10,
	},
	rectangleTwelveImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: null,
		height: 17,
	},
	textTwelveText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.15,
	},
	numberBoxElevenView: {
		backgroundColor: "transparent",
		width: 23,
		height: 17,
	},
	rectangleElevenImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 17,
	},
	textElevenText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.15,
		marginRight: 1,
	},
})
