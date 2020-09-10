//
//  AdminInitialInputOfTotalInventoryAndSupplies
//  Hyppoe
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View, Alert } from "react-native"
import { TouchableOpacity, TextInput } from "react-native-gesture-handler"


export default class AdminInitialInputOfTotalInventoryAndSupplies extends React.Component {

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
			MaxUnits: 5000,
			icePrice: 5,
			cupsPrice: 5,
			smartWaterPrice: 5,
			iceUnit: 5,
			icePack: 20,
			cupsUnit: 5,
			cupsPack: 20,
			smartWaterUnit: 5,
			smartWaterPack: 20,	
			iceAvailable: 50,
			cupsAvailable: 50,
			smartWaterAvailable: 50
			};
	}

	componentDidMount() {
	
	}

	updateFields() {
		Alert.alert("updated!");
	}

	render() {
	
		return <View
				style={styles.viewView}>
				<View
					pointerEvents="box-none"
					style={{
						alignSelf: "stretch",
						height: 196,
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
							height: 140,
						}}>
						<View
							pointerEvents="box-none"
							style={{
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
									source={require("./../../assets/images/background-17.png")}
									style={styles.backgroundTwoImage}/>
							</View>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									left: 20,
									right: 19,
									top: 20,
									height: 70,
								}}>
								<Text
									style={styles.drinkNameText}>Total Inventory:</Text>
								<Image
									source={require("./../../assets/images/seperator.png")}
									style={styles.seperatorImage}/>
								<View
									pointerEvents="box-none"
									style={{
										height: 16,
										marginRight: 1,
										marginTop: 15,
										flexDirection: "row",
										alignItems: "flex-start",
									}}>
									<Text
										style={styles.inputDrinkNameTenText}>Total Inventory Value:</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.inputDrinkNameNineText}>{this.state.icePack * this.state.iceUnit * this.state.icePrice + this.state.cupsPack * this.state.cupsUnit * this.state.cupsPrice + this.state.smartWaterPack * this.state.smartWaterUnit * this.state.smartWaterPrice}</Text>
								</View>
								<View
									pointerEvents="box-none"
									style={{
										height: 16,
										marginLeft: 6,
										marginTop: 2,
										flexDirection: "row",
										alignItems: "flex-start",
									}}>
									<Text
										style={styles.inputDrinkNameTwelveText}>Total Units:</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.inputDrinkNameElevenText}>{this.state.icePack * this.state.iceUnit + this.state.cupsPack * this.state.cupsUnit + this.state.smartWaterPack * this.state.smartWaterUnit} of {this.state.MaxUnits}</Text>
								</View>
							</View>
							<Text
								style={styles.priceText}>{(this.state.icePack * this.state.iceUnit + this.state.cupsPack * this.state.cupsUnit + this.state.smartWaterPack * this.state.smartWaterUnit)/this.state.MaxUnits * 100}%</Text>
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
							source={require("./../../assets/images/background-30.png")}
							style={styles.backgroundFiveImage}/>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 20,
							right: 19,
							top: 19,
							bottom: 20,
							alignItems: "flex-start",
						}}>
						<Text
							style={styles.inputDrinkNameTwentyNineText}>Ice</Text>
						<View
							pointerEvents="box-none"
							style={{
								flex: 1,
								alignSelf: "stretch",
								marginTop: 3,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<Image
								source={require("./../../assets/images/event-logo.png")}
								style={styles.eventLogoImage}/>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								pointerEvents="box-none"
								style={{
									alignSelf: "stretch",
									width: 189,
									marginBottom: 1,
									alignItems: "flex-end",
								}}>
								<Text
									style={styles.inputDrinkNameThirtyText}>Total Units: {this.state.icePack * this.state.iceUnit}</Text>
								<Text
									style={styles.inputDrinkNameThirtyOneText}>Available: {this.state.iceAvailable}</Text>
								<View
									style={{
										flex: 1,
									}}/>
								<View
									style={styles.editFourView}>
										<TouchableOpacity onPress={() => this.updateFields()}>
											<Text
												style={styles.editFourText}>Update</Text>
										</TouchableOpacity>
								</View>
							</View>
						</View>
					</View>
					<Text
						style={styles.inputDrinkNameThirtyTwoText}>Inventory Value: {this.state.icePack * this.state.iceUnit * this.state.icePrice} </Text>
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
							source={require("./../../assets/images/background-47.png")}
							style={styles.backgroundImage}/>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 20,
							right: 19,
							top: 19,
							height: 77,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<View
							pointerEvents="box-none"
							style={{
								width: 63,
								height: 77,
								alignItems: "flex-start",
							}}>
							<Text
								style={styles.inputDrinkNameText}>Ice:</Text>
							<View
								style={styles.eventLogoView}/>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								width: 69,
								height: 50,
								marginLeft: 4,
								marginTop: 21,
								alignItems: "flex-start",
							}}>
							<Text
								style={styles.inputDrinkNameFiveText}>Available:</Text>
							<Text
								style={styles.inputDrinkNameFourText}>Unit / Pack</Text>
							<View
								style={styles.unitPerPackView}>
								<Text
									style={styles.inputDrinkNameSixText}>{this.state.iceUnit}</Text>
								<View
									style={{
										flex: 1,
									}}/>
								<Text
									style={styles.inputDrinkNameSevenText}>{this.state.icePack}</Text>
							</View>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							pointerEvents="box-none"
							style={{
								width: 129,
								height: 70,
								alignItems: "flex-end",
							}}>
							<Text
								style={styles.inputDrinkNameEightText}>${this.state.icePrice*this.state.icePack*this.state.iceUnit}.00</Text>
							<Text
								style={styles.inputDrinkNameTwoText}>Total Units:</Text>
							<View
								pointerEvents="box-none"
								style={{
									width: 128,
									height: 32,
									marginRight: 1,
									marginTop: 1,
									flexDirection: "row",
									justifyContent: "flex-end",
									alignItems: "flex-start",
								}}>
								<View
									style={styles.editView}>
									<TouchableOpacity onPress={() => this.updateFields()}>
									<Text
										style={styles.editText}>Update</Text>
									</TouchableOpacity>	
								</View>
								<Text
									style={styles.inputDrinkNameThreeText}>{this.state.iceUnit*this.state.icePack}</Text>
							</View>
						</View>
						
					</View>
					
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
							source={require("./../../assets/images/background-47.png")}
							style={styles.backgroundThreeImage}/>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 20,
							right: 19,
							top: 19,
							height: 77,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<View
							pointerEvents="box-none"
							style={{
								width: 63,
								height: 77,
								alignItems: "flex-start",
							}}>
							<Text
								style={styles.inputDrinkNameThirteenText}>Cups:</Text>
							<View
								style={styles.eventLogoTwoView}/>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								width: 69,
								height: 50,
								marginLeft: 4,
								marginTop: 21,
								alignItems: "flex-start",
							}}>
							<Text
								style={styles.inputDrinkNameSeventeenText}>Available:</Text>
							<Text
								style={styles.inputDrinkNameSixteenText}>Unit / Pack</Text>
							<View
								style={styles.unitPerPackTwoView}>
								<Text
									style={styles.inputDrinkNameEighteenText}>{this.state.cupsUnit}</Text>
								<View
									style={{
										flex: 1,
									}}/>
								<Text
									style={styles.inputDrinkNameNineteenText}>{this.state.cupsPack}</Text>
							</View>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							pointerEvents="box-none"
							style={{
								width: 129,
								height: 70,
								alignItems: "flex-end",
							}}>
							<Text
								style={styles.inputDrinkNameTwentyText}>${this.state.cupsPack*this.state.cupsUnit*this.state.cupsPrice}.00</Text>
							<Text
								style={styles.inputDrinkNameFourteenText}>Total Units</Text>
							<View
								pointerEvents="box-none"
								style={{
									width: 128,
									height: 32,
									marginRight: 1,
									marginTop: 1,
									flexDirection: "row",
									justifyContent: "flex-end",
									alignItems: "flex-start",
								}}>
								<View
									style={styles.editTwoView}>
									<TouchableOpacity onPress={() => this.updateFields()}>
									<Text
										style={styles.editText}>Update</Text>
									</TouchableOpacity>	
								</View>
								<Text
									style={styles.inputDrinkNameFifteenText}>{this.state.cupsPack*this.state.cupsUnit}</Text>
							</View>
						</View>
					</View>
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
							source={require("./../../assets/images/background-47.png")}
							style={styles.backgroundFourImage}/>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 20,
							right: 19,
							top: 19,
							height: 77,
							alignItems: "flex-start",
						}}>
						<Text
							style={styles.inputDrinkNameTwentyOneText}>SmartWater:</Text>
						<View
							pointerEvents="box-none"
							style={{
								alignSelf: "stretch",
								height: 59,
								marginTop: 2,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<View
								style={styles.eventLogoThreeView}/>
							<View
								pointerEvents="box-none"
								style={{
									width: 69,
									height: 50,
									marginLeft: 9,
									marginTop: 3,
									alignItems: "flex-start",
								}}>
								<Text
									style={styles.inputDrinkNameTwentyFiveText}>Available:</Text>
								<Text
									style={styles.inputDrinkNameTwentyFourText}>Unit / Pack</Text>
								<View
									style={styles.unitPerPackThreeView}>
									<Text
										style={styles.inputDrinkNameTwentySixText}>{this.state.smartWaterUnit}</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.inputDrinkNameTwentySevenText}>{this.state.smartWaterPack}</Text>
								</View>
							</View>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								pointerEvents="box-none"
								style={{
									width: 129,
									height: 49,
									marginTop: 3,
									alignItems: "flex-end",
								}}>
								<Text
									style={styles.inputDrinkNameTwentyTwoText}>Total Units</Text>
								<View
									pointerEvents="box-none"
									style={{
										width: 128,
										height: 32,
										marginRight: 1,
										marginTop: 1,
										flexDirection: "row",
										justifyContent: "flex-end",
										alignItems: "flex-start",
									}}>
									<View
										style={styles.editThreeView}>
									<TouchableOpacity onPress={() => this.updateFields()}>
									<Text
										style={styles.editText}>Update</Text>
									</TouchableOpacity>	
									</View>
									<Text
										style={styles.inputDrinkNameTwentyThreeText}>{this.state.smartWaterPack * this.state.smartWaterUnit}</Text>
								</View>
							</View>
						</View>
					</View>
					<Text
						style={styles.inputDrinkNameTwentyEightText}>$500.00</Text>
				</View>





				<View
					style={styles.savePreorderMenuBView}>
					<Text
						style={styles.savePreorderMenuText}>Create Stations</Text>
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
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 4,
		height: 20,
	},
	preorderQueCardTwoView: {
		backgroundColor: "transparent",
		alignSelf: "center",
		width: 315,
		height: 111,
		marginTop: 9,
	},
	backgroundTwoImage: {
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
		alignSelf: "flex-start",
		width: 209,
	},
	seperatorImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		width: 182,
		height: 1,
		marginTop: 1,
	},
	inputDrinkNameTenText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 190,
	},
	inputDrinkNameNineText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		backgroundColor: "transparent",
		width: 68,
	},
	inputDrinkNameTwelveText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 74,
	},
	inputDrinkNameElevenText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		backgroundColor: "transparent",
		width: 93,
	},
	priceText: {
		color: "rgb(0, 112, 247)",
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
	preorderQueCardFiveView: {
		backgroundColor: "transparent",
		width: 311,
		height: 140,
		marginTop: 7,
	},
	backgroundFiveImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		width: null,
		height: 140,
	},
	inputDrinkNameTwentyNineText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		width: 82,
		marginLeft: 3,
	},
	eventLogoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 78,
		height: 78,
		marginTop: 1,
	},
	inputDrinkNameThirtyText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		width: 189,
	},
	inputDrinkNameThirtyOneText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		lineHeight: 18,
		backgroundColor: "transparent",
		width: 189,
		marginTop: 6,
	},
	editFourView: {
		backgroundColor: "rgb(0, 112, 247)",
		borderRadius: 7,
		width: 69,
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
		textAlign: "center",
		marginLeft: 13,
		marginRight: 14,
	},
	inputDrinkNameThirtyTwoText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		backgroundColor: "transparent",
		position: "absolute",
		right: 19,
		width: 189,
		top: 19,
	},
	preorderQueCardView: {
		backgroundColor: "transparent",
		width: 314,
		height: 116,
		marginTop: 12,
	},
	backgroundImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		width: null,
		height: 116,
	},
	inputDrinkNameText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 62,
		marginLeft: 1,
	},
	eventLogoView: {
		backgroundColor: "rgb(184, 196, 187)",
		borderRadius: 15,
		width: 58,
		height: 59,
		marginTop: 2,
	},
	inputDrinkNameFiveText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
		backgroundColor: "transparent",
		width: 68,
		marginLeft: 1,
	},
	inputDrinkNameFourText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		width: 68,
	},
	unitPerPackView: {
		backgroundColor: "transparent",
		width: 61,
		height: 16,
		marginLeft: 4,
		marginTop: 2,
		flexDirection: "row",
		alignItems: "center",
	},
	inputDrinkNameSixText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		width: 28,
	},
	inputDrinkNameSevenText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
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
		width: 68,
	},
	inputDrinkNameTwoText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		backgroundColor: "transparent",
		width: 68,
		marginTop: 5,
	},
	editView: {
		backgroundColor: "rgb(0, 112, 247)",
		borderRadius: 7,
		width: 69,
		height: 18,
		marginRight: 22,
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
		marginLeft: 13,
		marginRight: 14,
	},
	inputDrinkNameThreeText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		width: 37,
		marginTop: 16,
	},
	preorderQueCardThreeView: {
		backgroundColor: "transparent",
		width: 314,
		height: 116,
		marginTop: 5,
	},
	backgroundThreeImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		width: null,
		height: 116,
	},
	inputDrinkNameThirteenText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 62,
		marginLeft: 1,
	},
	eventLogoTwoView: {
		backgroundColor: "rgb(184, 196, 187)",
		borderRadius: 15,
		width: 58,
		height: 59,
		marginTop: 2,
	},
	inputDrinkNameSeventeenText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
		backgroundColor: "transparent",
		width: 68,
		marginLeft: 1,
	},
	inputDrinkNameSixteenText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		width: 68,
	},
	unitPerPackTwoView: {
		backgroundColor: "transparent",
		width: 61,
		height: 16,
		marginLeft: 4,
		marginTop: 2,
		flexDirection: "row",
		alignItems: "center",
	},
	inputDrinkNameEighteenText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		width: 28,
	},
	inputDrinkNameNineteenText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		width: 29,
	},
	inputDrinkNameTwentyText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		backgroundColor: "transparent",
		width: 68,
	},
	inputDrinkNameFourteenText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		backgroundColor: "transparent",
		width: 68,
		marginTop: 5,
	},
	editTwoView: {
		backgroundColor: "rgb(0, 112, 247)",
		borderRadius: 7,
		width: 69,
		height: 18,
		marginRight: 22,
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
		marginLeft: 13,
		marginRight: 14,
	},
	inputDrinkNameFifteenText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		backgroundColor: "transparent",
		width: 37,
		marginTop: 16,
	},
	preorderQueCardFourView: {
		backgroundColor: "transparent",
		width: 314,
		height: 116,
		marginBottom: 34,
	},
	backgroundFourImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		width: null,
		height: 116,
	},
	inputDrinkNameTwentyOneText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 214,
		marginLeft: 1,
	},
	eventLogoThreeView: {
		backgroundColor: "rgb(184, 196, 187)",
		borderRadius: 15,
		width: 58,
		height: 59,
	},
	inputDrinkNameTwentyFiveText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
		backgroundColor: "transparent",
		width: 68,
		marginLeft: 1,
	},
	inputDrinkNameTwentyFourText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		width: 68,
	},
	unitPerPackThreeView: {
		backgroundColor: "transparent",
		width: 61,
		height: 16,
		marginLeft: 4,
		marginTop: 2,
		flexDirection: "row",
		alignItems: "center",
	},
	inputDrinkNameTwentySixText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		width: 28,
	},
	inputDrinkNameTwentySevenText: {
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
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		width: 68,
	},
	editThreeView: {
		backgroundColor: "rgb(0, 112, 247)",
		borderRadius: 7,
		width: 69,
		height: 18,
		marginRight: 22,
		justifyContent: "center",
	},
	editThreeText: {
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
	inputDrinkNameTwentyThreeText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		backgroundColor: "transparent",
		width: 37,
		marginTop: 16,
	},
	inputDrinkNameTwentyEightText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		backgroundColor: "transparent",
		position: "absolute",
		right: 19,
		width: 68,
		top: 19,
	},
	savePreorderMenuBView: {
		backgroundColor: "rgb(0, 112, 247)",
		borderRadius: 20,
		shadowColor: "rgba(0, 0, 0, 0.4)",
		shadowRadius: 6,
		shadowOpacity: 1,
		alignSelf: "stretch",
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
