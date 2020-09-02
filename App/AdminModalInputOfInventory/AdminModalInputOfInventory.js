//
//  AdminModalInputOfInventory
//  Hyppoe
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


export default class AdminModalInputOfInventory extends React.Component {

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
						height: 226,
					}}>
					<Image
						source={require("./../../assets/images/top-image-5.png")}
						style={styles.topImageImage}/>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 33,
							right: 31,
							top: 56,
							height: 170,
							alignItems: "center",
						}}>
						<View
							pointerEvents="box-none"
							style={{
								alignSelf: "stretch",
								height: 20,
								marginLeft: 8,
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
									source={require("./../../assets/images/background-16.png")}
									style={styles.backgroundThreeImage}/>
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
									style={styles.inputDrinkNameText}>Bud Light</Text>
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
											style={styles.inputDrinkNameTwoText}>Total Units:</Text>
										<Text
											style={styles.inputDrinkNameThreeText}>Available:</Text>
										<View
											style={{
												flex: 1,
											}}/>
										<View
											style={styles.editFiveView}>
											<Text
												style={styles.editFiveText}>Update</Text>
										</View>
									</View>
								</View>
							</View>
							<Text
								style={styles.inputDrinkNameFourText}>Inventory Value:</Text>
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
							source={require("./../../assets/images/background-24.png")}
							style={styles.backgroundImage}/>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 19,
							right: 20,
							top: 19,
							bottom: 20,
							alignItems: "flex-start",
						}}>
						<View
							style={styles.drinkCardElementsView}>
							<Text
								style={styles.drinkNameText}>Current Quantity:</Text>
							<Image
								source={require("./../../assets/images/seperator-6.png")}
								style={styles.seperatorImage}/>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								pointerEvents="box-none"
								style={{
									height: 19,
									marginRight: 1,
									marginBottom: 1,
								}}>
								<Text
									style={styles.drinkNameTwoText}>+</Text>
								<Text
									style={styles.drinkNameThreeText}>-</Text>
							</View>
							<View
								pointerEvents="box-none"
								style={{
									height: 1,
									marginLeft: 1,
									marginRight: 2,
									flexDirection: "row",
									alignItems: "flex-end",
								}}>
								<Image
									source={require("./../../assets/images/seperator-2.png")}
									style={styles.seperatorTwoImage}/>
								<View
									style={{
										flex: 1,
									}}/>
								<View
									pointerEvents="box-none"
									style={{
										width: 129,
										height: 1,
									}}>
									<Image
										source={require("./../../assets/images/seperator-2.png")}
										style={styles.seperatorThreeImage}/>
									<Image
										source={require("./../../assets/images/seperator-2.png")}
										style={styles.seperatorFourImage}/>
								</View>
							</View>
						</View>
						<Text
							style={styles.drinkNameFourText}>Unit:</Text>
						<Text
							style={styles.drinkNameFiveText}>Pack:</Text>
						<Text
							style={styles.drinkNameNineText}>Updated Quantity:</Text>
						<Image
							source={require("./../../assets/images/seperator-2.png")}
							style={styles.seperatorFiveImage}/>
						<Image
							source={require("./../../assets/images/seperator-2.png")}
							style={styles.seperatorEightImage}/>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							pointerEvents="box-none"
							style={{
								alignSelf: "stretch",
								height: 18,
								marginLeft: 76,
								marginRight: 57,
								flexDirection: "row",
								alignItems: "flex-end",
							}}>
							<View
								style={styles.editTwoView}>
								<Text
									style={styles.editTwoText}>Cancel</Text>
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
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							right: 19,
							width: 147,
							top: 21,
							height: 107,
							alignItems: "flex-end",
						}}>
						<Text
							style={styles.drinkNameEightText}>0</Text>
						<Text
							style={styles.drinkNameSixText}>10</Text>
						<Text
							style={styles.drinkNameSevenText}>100</Text>
					</View>
					<Text
						style={styles.drinkNameTenText}>1,000</Text>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							right: 22,
							width: 129,
							top: 97,
							height: 31,
							alignItems: "flex-end",
						}}>
						<Image
							source={require("./../../assets/images/seperator-2.png")}
							style={styles.seperatorSixImage}/>
						<Image
							source={require("./../../assets/images/seperator-2.png")}
							style={styles.seperatorSevenImage}/>
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
							source={require("./../../assets/images/background-32.png")}
							style={styles.backgroundTwoImage}/>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 20,
							right: 20,
							top: 19,
							bottom: 20,
							alignItems: "flex-start",
						}}>
						<View
							style={styles.drinkCardElementsTwoView}>
							<Text
								style={styles.drinkNameElevenText}>Item Details:</Text>
							<Image
								source={require("./../../assets/images/seperator-6.png")}
								style={styles.seperatorNineImage}/>
							<View
								style={{
									flex: 1,
								}}/>
							<Image
								source={require("./../../assets/images/seperator-2.png")}
								style={styles.seperatorTenImage}/>
						</View>
						<Text
							style={styles.drinkNameTwelveText}>Cups per Item:</Text>
						<Text
							style={styles.drinkNameThirteenText}>Ice per Item:</Text>
						<Text
							style={styles.drinkNameSixteenText}>Straw per Item:</Text>
						<Image
							source={require("./../../assets/images/seperator-2.png")}
							style={styles.seperatorElevenImage}/>
						<View
							style={{
								flex: 1,
							}}/>
						<Image
							source={require("./../../assets/images/plus-circle.png")}
							style={styles.plusCircleImage}/>
						<View
							style={styles.editFourView}>
							<Text
								style={styles.editFourText}>Cancel</Text>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							right: 20,
							width: 146,
							top: 79,
							height: 49,
							alignItems: "flex-end",
						}}>
						<Text
							style={styles.drinkNameFourteenText}>1</Text>
						<Text
							style={styles.drinkNameFifteenText}>1</Text>
					</View>
					<Text
						style={styles.drinkNameSeventeenText}>1</Text>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							right: 22,
							width: 129,
							top: 97,
							height: 31,
							alignItems: "flex-end",
						}}>
						<Image
							source={require("./../../assets/images/seperator-2.png")}
							style={styles.seperatorTwelveImage}/>
						<Image
							source={require("./../../assets/images/seperator-2.png")}
							style={styles.seperatorThirteenImage}/>
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
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 4,
		height: 20,
	},
	preorderQueCardThreeView: {
		backgroundColor: "transparent",
		width: 311,
		height: 140,
		marginTop: 10,
	},
	backgroundThreeImage: {
		backgroundColor: "transparent",
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		resizeMode: "cover",
		width: null,
		height: 140,
	},
	inputDrinkNameText: {
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
	inputDrinkNameTwoText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		backgroundColor: "transparent",
		width: 189,
	},
	inputDrinkNameThreeText: {
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
	editFiveView: {
		backgroundColor: "rgb(0, 112, 247)",
		borderRadius: 7,
		width: 69,
		height: 18,
		justifyContent: "center",
	},
	editFiveText: {
		color: "white",
		fontFamily: "ArialMT",
		fontSize: 11,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		marginLeft: 13,
		marginRight: 14,
	},
	inputDrinkNameFourText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		position: "absolute",
		right: 19,
		width: 189,
		top: 19,
	},
	preorderQueCardView: {
		backgroundColor: "transparent",
		width: 311,
		height: 230,
		marginTop: 10,
	},
	backgroundImage: {
		backgroundColor: "transparent",
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		resizeMode: "cover",
		width: null,
		height: 230,
	},
	drinkCardElementsView: {
		backgroundColor: "transparent",
		alignSelf: "stretch",
		height: 55,
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
		marginLeft: 1,
	},
	seperatorImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		width: null,
		height: 1,
		marginLeft: 1,
		marginTop: 1,
	},
	drinkNameTwoText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
		letterSpacing: 0.2,
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		width: 139,
		bottom: 0,
	},
	drinkNameThreeText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
		letterSpacing: 0.2,
		backgroundColor: "transparent",
		position: "absolute",
		right: 0,
		width: 139,
		bottom: 0,
	},
	seperatorTwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 129,
		height: 1,
	},
	seperatorThreeImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		right: 0,
		width: 129,
		bottom: 0,
		height: 1,
	},
	seperatorFourImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		right: 0,
		width: 129,
		bottom: 0,
		height: 1,
	},
	drinkNameFourText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0.2,
		backgroundColor: "transparent",
		width: 146,
		marginLeft: 1,
		marginTop: 5,
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
		width: 146,
		marginLeft: 1,
		marginTop: 11,
	},
	drinkNameNineText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0.2,
		backgroundColor: "transparent",
		width: 146,
		marginLeft: 1,
		marginTop: 11,
	},
	seperatorFiveImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		alignSelf: "flex-end",
		width: 129,
		height: 1,
		marginRight: 2,
		marginTop: 5,
	},
	seperatorEightImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		alignSelf: "flex-end",
		width: 129,
		height: 1,
		marginRight: 2,
		marginTop: 3,
	},
	editTwoView: {
		backgroundColor: "rgb(0, 112, 247)",
		borderRadius: 7,
		width: 69,
		height: 18,
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
		marginLeft: 10,
		marginRight: 9,
	},
	editView: {
		backgroundColor: "rgb(0, 112, 247)",
		borderRadius: 7,
		width: 69,
		height: 18,
		justifyContent: "center",
	},
	editText: {
		color: "white",
		fontFamily: "ArialMT",
		fontSize: 11,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		marginLeft: 10,
		marginRight: 9,
	},
	drinkNameEightText: {
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		letterSpacing: 0.2,
		width: 137,
	},
	drinkNameSixText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		letterSpacing: 0.2,
		backgroundColor: "transparent",
		width: 146,
		marginRight: 1,
		marginTop: 39,
	},
	drinkNameSevenText: {
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		letterSpacing: 0.2,
		width: 146,
		marginRight: 1,
		marginTop: 11,
	},
	drinkNameTenText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		letterSpacing: 0.2,
		backgroundColor: "transparent",
		position: "absolute",
		right: 19,
		width: 137,
		top: 141,
	},
	seperatorSixImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 129,
		height: 1,
	},
	seperatorSevenImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 129,
		height: 1,
		marginTop: 29,
	},
	preorderQueCardTwoView: {
		backgroundColor: "transparent",
		width: 311,
		height: 230,
		marginTop: 5,
	},
	backgroundTwoImage: {
		backgroundColor: "transparent",
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		resizeMode: "cover",
		width: null,
		height: 230,
	},
	drinkCardElementsTwoView: {
		backgroundColor: "transparent",
		alignSelf: "stretch",
		height: 55,
	},
	drinkNameElevenText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0.2,
		backgroundColor: "transparent",
	},
	seperatorNineImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		width: null,
		height: 1,
		marginTop: 1,
	},
	seperatorTenImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		alignSelf: "flex-end",
		width: 129,
		height: 1,
		marginRight: 2,
	},
	drinkNameTwelveText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0.2,
		backgroundColor: "transparent",
		width: 146,
		marginTop: 5,
	},
	drinkNameThirteenText: {
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0.2,
		width: 146,
		marginTop: 11,
	},
	drinkNameSixteenText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0.2,
		backgroundColor: "transparent",
		width: 146,
		marginTop: 11,
	},
	seperatorElevenImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		alignSelf: "flex-end",
		width: 129,
		height: 1,
		marginRight: 2,
		marginTop: 5,
	},
	plusCircleImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		alignSelf: "flex-end",
		width: 23,
		height: 23,
		marginRight: 5,
		marginBottom: 1,
	},
	editFourView: {
		backgroundColor: "rgb(0, 112, 247)",
		borderRadius: 7,
		width: 69,
		height: 18,
		marginLeft: 75,
		justifyContent: "center",
	},
	editFourText: {
		color: "white",
		fontFamily: "ArialMT",
		fontSize: 11,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		marginLeft: 10,
		marginRight: 9,
	},
	drinkNameFourteenText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		letterSpacing: 0.2,
		backgroundColor: "transparent",
		width: 146,
	},
	drinkNameFifteenText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		letterSpacing: 0.2,
		backgroundColor: "transparent",
		width: 146,
		marginTop: 11,
	},
	drinkNameSeventeenText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		letterSpacing: 0.2,
		backgroundColor: "transparent",
		position: "absolute",
		right: 19,
		width: 137,
		top: 141,
	},
	seperatorTwelveImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 129,
		height: 1,
	},
	seperatorThirteenImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 129,
		height: 1,
		marginTop: 29,
	},
})
