//
//  AdminTotalInventoryAndSetAlerts
//  Hyppoe
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"
import { TouchableOpacity, TextInput } from "react-native-gesture-handler"



export default class AdminTotalInventoryAndSetAlerts extends React.Component {

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
		this.state = {
			units: 0,
			packs: 1,
			coolers:  1,
			tablets: 0,
			tables: 0,
		};
	}

	componentDidMount() {
	
	}

	render() {
	
		return <View
				style={styles.viewView}>
				<View
					pointerEvents="box-none"
					style={{
						height: 239,
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
							height: 183,
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
									source={require("./../../assets/images/background-44.png")}
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
										style={styles.drinkNameText}>Total Inventory</Text>
									<Image
										source={require("./../../assets/images/seperator-6.png")}
										style={styles.seperatorImage}/>
									<Text
										style={styles.inputDrinkNameFiveText}>Remaining:</Text>
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
												width: 121,
												height: 16,
											}}>
											<Text
												style={styles.inputDrinkNameText}>0 of 0</Text>
											<Text
												style={styles.inputDrinkNameTwoText}>Bud Light:</Text>
										</View>
										<View
											style={{
												flex: 1,
											}}/>
										<Text
											style={styles.inputDrinkNameSixText}>0%</Text>
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
												width: 121,
												height: 16,
												marginTop: 1,
											}}>
											<Text
												style={styles.inputDrinkNameThreeText}>0 of 0</Text>
											<Text
												style={styles.inputDrinkNameFourText}>Coors:</Text>
										</View>
										<View
											style={{
												flex: 1,
											}}/>
										<Text
											style={styles.inputDrinkNameSevenText}>0%</Text>
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
												width: 121,
												height: 16,
											}}>
											<Text
												style={styles.inputDrinkNameEightText}>0 of 0</Text>
											<Text
												style={styles.inputDrinkNameNineText}>Coca Cola:</Text>
										</View>
										<View
											style={{
												flex: 1,
											}}/>
										<Text
											style={styles.inputDrinkNameTwelveText}>0%</Text>
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
												width: 121,
												height: 16,
											}}>
											<Text
												style={styles.inputDrinkNameTenText}>0 of 0</Text>
											<Text
												style={styles.inputDrinkNameElevenText}>Water:</Text>
										</View>
										<View
											style={{
												flex: 1,
											}}/>
										<Text
											style={styles.inputDrinkNameThirteenText}>0%</Text>
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
							source={require("./../../assets/images/background-48.png")}
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
							alignItems: "flex-end",
						}}>
						<View
							style={styles.drinkCardElementsTwoView}>
							<View
								pointerEvents="box-none"
								style={{
									alignSelf: "flex-start",
									width: 191,
									height: 19,
								}}>
								<Text
									style={styles.drinkNameTwoText}>Total Supplies:</Text>
								<Text
									style={styles.drinkNameThreeText}>Total Supplies:</Text>
							</View>
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
									style={styles.inputDrinkNameTwentyEightText}>Available:</Text>
								<View
									style={{
										flex: 1,
									}}/>
								<Text
									style={styles.inputDrinkNameThirtyText}>Assign:</Text>
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
									style={styles.inputDrinkNameTwentyThreeText}>Unit / Pack</Text>
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
										style={styles.inputDrinkNameTwentySevenText}>Unit / Pack</Text>
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
									style={styles.inputDrinkNameFourteenText}>Ice:</Text>
								<View
									style={{
										flex: 1,
									}}/>
								<Text
									style={styles.inputDrinkNameSeventeenText}>1,500</Text>
							</View>
							<Text
								style={styles.drinkNameFourText}>Total Supplies:</Text>
							<Image
								source={require("./../../assets/images/seperator-6.png")}
								style={styles.seperatorFourImage}/>
							<Text
								style={styles.inputDrinkNameTwentyNineText}>Total:</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.inputDrinkNameEighteenText}>25</Text>
							<View
								pointerEvents="box-none"
								style={{
									alignSelf: "flex-start",
									width: 92,
									height: 16,
									marginLeft: 6,
									marginBottom: 1,
									flexDirection: "row",
									alignItems: "flex-end",
								}}>
								<Text
									style={styles.inputDrinkNameFifteenText}>Coolers:</Text>
								<Text
									style={styles.inputDrinkNameTwentyFourText}>0</Text>
							</View>
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
									style={styles.inputDrinkNameNineteenText}>Tablets:</Text>
								<Text
									style={styles.inputDrinkNameTwentyFiveText}>0</Text>
								<View
									style={{
										flex: 1,
									}}/>
								<Text
									style={styles.inputDrinkNameTwentyOneText}>20</Text>
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
									style={styles.inputDrinkNameTwentyText}>Tables:</Text>
								<Text
									style={styles.inputDrinkNameTwentySixText}>0</Text>
								<View
									style={{
										flex: 1,
									}}/>
								<Text
									style={styles.inputDrinkNameTwentyTwoText}>20</Text>
							</View>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							pointerEvents="box-none"
							style={{
								width: 123,
								height: 23,
								marginRight: 7,
								flexDirection: "row",
								justifyContent: "flex-end",
								alignItems: "flex-end",
							}}>
							<View
								style={styles.editView}>
								<Text
									style={styles.editText}>Update</Text>
							</View>

								<Image
								source={require("./../../assets/images/plus-circle.png")}
								style={styles.plusCircleTwoImage}/>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 83,
							right: 26,
							top: 93,
							height: 97,
							alignItems: "flex-start",
						}}>
						<View
							pointerEvents="box-none"
							style={{
								alignSelf: "stretch",
								height: 20,
								marginLeft: 7,
								marginRight: 62,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<View
								style={styles.unitPerPackView}>
								<Text
									style={styles.inputDrinkNameThirtyOneText}>0</Text>
								<View
									style={{
										flex: 1,
									}}/>
								<Text
									style={styles.inputDrinkNameThirtyTwoText}>0</Text>
							</View>
							<View
								style={{
									flex: 1,
								}}/>
							<div contentEditable="true">
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
							</div>

							<div contentEditable="true">
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
							</div>
							
							<div contentEditable="true">
							<View
								style={styles.suppliesBoxView}>
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
										style={styles.textText}>15</Text>
								</View>
							</View>
							</div>
							
							<div contentEditable="true">
							<View
								style={styles.suppliesBoxTwoView}>
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
										style={styles.textText}>15</Text>
								</View>
							</View>
							</div>
							

						<div contentEditable="true">
							<View
								style={styles.suppliesBoxThreeView}>
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
										style={styles.textText}>15</Text>
								</View>
							</View>
						</div>
						
						</View>
						<Image
							source={require("./../../assets/images/plus-circle.png")}
							style={styles.plusCircleImage}/>
						<Text
							style={styles.inputDrinkNameThirtyThreeText}>Current:</Text>
					</View>
					<Text
						style={styles.inputDrinkNameThirtyFourText}>Quantity</Text>
					<Text
						style={styles.inputDrinkNameThirtySixText}>Assign Quantity:</Text>
				</View>
				<View
					style={{
						flex: 1,
					}}/>
				<View
					style={styles.savePreorderMenuBView}>
					<Text
						style={styles.savePreorderMenuText}>Add Inventory</Text>
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
		width: 314,
		height: 153,
		marginTop: 10,
	},
	backgroundImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		width: null,
		height: 153,
	},
	drinkCardElementsView: {
		backgroundColor: "transparent",
		height: 112,
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
	inputDrinkNameFiveText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		alignSelf: "flex-end",
		width: 68,
		marginTop: 5,
	},
	inputDrinkNameText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		position: "absolute",
		left: 61,
		width: 60,
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
		position: "absolute",
		left: 0,
		width: 62,
		top: 0,
	},
	inputDrinkNameSixText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		backgroundColor: "transparent",
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
		width: 60,
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
		width: 60,
		bottom: 4,
	},
	inputDrinkNameNineText: {
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
		bottom: 4,
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
		marginBottom: 4,
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
		width: 60,
		bottom: 4,
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
		bottom: 4,
	},
	inputDrinkNameThirteenText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		width: 60,
		marginBottom: 4,
	},
	preorderQueCardTwoView: {
		backgroundColor: "transparent",
		alignSelf: "center",
		width: 314,
		height: 304,
		marginTop: 184,
	},
	backgroundTwoImage: {
		backgroundColor: "transparent",
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		resizeMode: "cover",
		width: null,
		height: 304,
	},
	drinkCardElementsTwoView: {
		backgroundColor: "transparent",
		alignSelf: "stretch",
		height: 242,
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
		position: "absolute",
		left: 0,
		width: 191,
		top: 0,
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
		width: 191,
		top: 0,
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
	seperatorThreeImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 1,
	},
	inputDrinkNameTwentyEightText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
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
	inputDrinkNameTwentyThreeText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		width: 68,
	},
	inputDrinkNameSixteenText: {
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
	inputDrinkNameTwentySevenText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		position: "absolute",
		right: 64,
		width: 68,
		top: 0,
	},
	inputDrinkNameFourteenText: {
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
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		width: 60,
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
		alignSelf: "flex-start",
		width: 191,
		marginTop: 31,
	},
	seperatorFourImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		width: null,
		height: 1,
		marginRight: 4,
		marginTop: 1,
	},
	inputDrinkNameTwentyNineText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		alignSelf: "flex-end",
		width: 68,
		marginTop: 30,
	},
	inputDrinkNameEighteenText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		backgroundColor: "transparent",
		alignSelf: "flex-end",
		width: 60,
		marginRight: 5,
		marginTop: 5,
	},
	inputDrinkNameFifteenText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		width: 62,
		marginBottom: 12,
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
		marginLeft: 2,
		marginBottom: 12,
	},
	inputDrinkNameNineteenText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 62,
		marginBottom: 12,
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
		marginLeft: 2,
		marginBottom: 12,
	},
	inputDrinkNameTwentyOneText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		backgroundColor: "transparent",
		width: 60,
		marginBottom: 13,
	},
	inputDrinkNameTwentyText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		width: 62,
		marginBottom: 12,
	},
	inputDrinkNameTwentySixText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		width: 28,
		marginLeft: 2,
		marginBottom: 12,
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
		marginBottom: 12,
	},
	editView: {
		backgroundColor: "rgb(0, 112, 247)",
		borderRadius: 7,
		width: 69,
		height: 18,
		marginRight: 31,
		justifyContent: "center",
		top: 5,
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
	plusCircleTwoImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 23,
		height: 23,
		top: 5,
		left: 5,
	},
	unitPerPackView: {
		backgroundColor: "transparent",
		width: 61,
		height: 16,
		flexDirection: "row",
		alignItems: "center",
	},
	inputDrinkNameThirtyOneText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		width: 28,
	},
	inputDrinkNameThirtyTwoText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		width: 29,
	},
	numberBoxTwoView: {
		backgroundColor: "transparent",
		width: 23,
		height: 17,
		marginRight: 10,
		marginTop: 3,
		marginLeft: 20,
	},
	rectangleTwoImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
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
		marginTop: 3,
	},
	rectangleImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 17,
	},
	suppliesBoxView: {
		backgroundColor: "transparent",
		width: 23,
		height: 17,
		marginTop: 117,
		right: 40,
	},
	suppliesBoxTwoView: {
		backgroundColor: "transparent",
		width: 23,
		height: 17,
		marginTop: 136,
		right: 63,
	},
	suppliesBoxThreeView: {
		backgroundColor: "transparent",
		width: 23,
		height: 17,
		marginTop: 155,
		right: 86,
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
		marginRight: 1,
	},
	plusCircleImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		alignSelf: "flex-end",
		width: 23,
		height: 23,
		marginTop: 3,
	},
	inputDrinkNameThirtyThreeText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
		width: 68,
		marginTop: 35,
	},
	inputDrinkNameThirtyFourText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
		backgroundColor: "transparent",
		position: "absolute",
		left: 83,
		width: 68,
		top: 189,
	},
	inputDrinkNameThirtySixText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
		backgroundColor: "transparent",
		position: "absolute",
		right: 83,
		width: 68,
		top: 174,
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
