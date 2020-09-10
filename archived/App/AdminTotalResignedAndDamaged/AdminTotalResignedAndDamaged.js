//
//  AdminTotalResignedAndDamaged
//  Hyppoe
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


export default class AdminTotalResignedAndDamaged extends React.Component {

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
						height: 276,
					}}>
					<View
						pointerEvents="box-none"
						style={{
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
								source={require("./../../assets/images/background-21.png")}
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
									style={styles.drinkNameText}>Reassigned</Text>
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
										style={styles.inputDrinkNameSixText}>Assigned:</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.inputDrinkNameEightText}>Reassign:</Text>
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
										style={styles.inputDrinkNameFourText}>Unit / Pack</Text>
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
											style={styles.inputDrinkNameTwoText}>Status:</Text>
										<Text
											style={styles.inputDrinkNameFiveText}>Station:</Text>
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
										style={styles.inputDrinkNameText}>Budlight</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.inputDrinkNameThreeText}>Pending</Text>
								</View>
								<Text
									style={styles.drinkNameTwoText}>Damaged</Text>
								<Image
									source={require("./../../assets/images/seperator-6.png")}
									style={styles.seperatorThreeImage}/>
								<View
									style={{
										flex: 1,
									}}/>
								<View
									pointerEvents="box-none"
									style={{
										height: 47,
										marginLeft: 6,
										flexDirection: "row",
										alignItems: "flex-end",
									}}>
									<View
										pointerEvents="box-none"
										style={{
											width: 125,
											height: 45,
											marginBottom: 2,
											justifyContent: "flex-end",
											alignItems: "flex-start",
										}}>
										<Text
											style={styles.inputDrinkNameSevenText}>Assigned:</Text>
										<Text
											style={styles.inputDrinkNameNineText}>Budlight</Text>
									</View>
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
											style={styles.inputDrinkNameTenText}>Total:</Text>
										<Text
											style={styles.inputDrinkNameElevenText}>100</Text>
									</View>
								</View>
							</View>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 22,
								right: 84,
								top: 42,
								bottom: 22,
								alignItems: "flex-start",
							}}>
							<Text
								style={styles.inputDrinkNameEighteenText}>Station 1: Big Tent</Text>
							<View
								pointerEvents="box-none"
								style={{
									alignSelf: "stretch",
									height: 16,
									marginLeft: 68,
									marginTop: 35,
									flexDirection: "row",
									alignItems: "flex-start",
								}}>
								<View
									style={styles.unitPerPackView}>
									<Text
										style={styles.inputDrinkNameTwelveText}>1</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.inputDrinkNameThirteenText}>100</Text>
								</View>
								<View
									style={{
										flex: 1,
									}}/>
								<Text
									style={styles.inputDrinkNameSeventeenText}>Station 2</Text>
							</View>
							<Text
								style={styles.inputDrinkNameNineteenText}>Station 1: Big Tent</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.inputDrinkNameFourteenText}>Unit / Pack</Text>
							<View
								style={styles.unitPerPackTwoView}>
								<Text
									style={styles.inputDrinkNameFifteenText}>1</Text>
								<View
									style={{
										flex: 1,
									}}/>
								<Text
									style={styles.inputDrinkNameSixteenText}>100</Text>
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
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 4,
		height: 20,
	},
	preorderQueCardView: {
		backgroundColor: "transparent",
		alignSelf: "center",
		width: 314,
		height: 246,
		marginTop: 10,
	},
	backgroundImage: {
		backgroundColor: "transparent",
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		resizeMode: "cover",
		width: null,
		height: 246,
	},
	drinkCardElementsView: {
		backgroundColor: "transparent",
		height: 204,
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
	inputDrinkNameSixText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
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
		width: 68,
	},
	inputDrinkNameFourText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		backgroundColor: "transparent",
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
		position: "absolute",
		right: 0,
		width: 68,
		top: 0,
	},
	inputDrinkNameFiveText: {
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
	inputDrinkNameThreeText: {
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
	inputDrinkNameSevenText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
		width: 68,
		marginLeft: 57,
		marginBottom: 13,
	},
	inputDrinkNameNineText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 62,
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
		marginBottom: 1,
	},
	inputDrinkNameElevenText: {
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
	inputDrinkNameEighteenText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 190,
	},
	unitPerPackView: {
		backgroundColor: "transparent",
		width: 61,
		height: 16,
		flexDirection: "row",
		alignItems: "center",
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
	inputDrinkNameThirteenText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		width: 29,
	},
	inputDrinkNameSeventeenText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		width: 70,
	},
	inputDrinkNameNineteenText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 190,
		marginTop: 53,
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
		marginLeft: 61,
		marginBottom: 2,
	},
	unitPerPackTwoView: {
		backgroundColor: "transparent",
		width: 61,
		height: 16,
		marginLeft: 68,
		flexDirection: "row",
		alignItems: "center",
	},
	inputDrinkNameFifteenText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		width: 28,
	},
	inputDrinkNameSixteenText: {
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
