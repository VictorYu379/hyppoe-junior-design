//
//  AdminCreatePreorderMenu
//  Hyppoe
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


export default class AdminCreatePreorderMenu extends React.Component {

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
						height: 177,
					}}>
					<Image
						source={require("./../../assets/images/image.png")}
						style={styles.imageImage}/>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 25,
							right: 27,
							top: 46,
							height: 123,
							flexDirection: "row",
							alignItems: "flex-start",
						}}>
						<View
							style={styles.backButtonWithShaView}>
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
									source={require("./../../assets/images/oval.png")}
									style={styles.ovalTwoImage}/>
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
								<Image
									source={require("./../../assets/images/back-button.png")}
									style={styles.backButtonImage}/>
							</View>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							style={styles.addTopImageButtonView}>
							<Image
								source={require("./../../assets/images/minus-circle-2.png")}
								style={styles.minusCircleTwoImage}/>
							<View
								style={{
									flex: 1,
								}}/>
							<Image
								source={require("./../../assets/images/plus-circle-3.png")}
								style={styles.plusCircleTwoImage}/>
						</View>
						<View
							style={styles.menuButtonView}>
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
									source={require("./../../assets/images/oval-3.png")}
									style={styles.ovalImage}/>
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
								<Image
									source={require("./../../assets/images/menu-button.png")}
									style={styles.menuButtonImage}/>
							</View>
						</View>
						<Image
							source={require("./../../assets/images/pocket.png")}
							style={styles.pocketImage}/>
					</View>
					<Text
						style={styles.pageTitleCreateText}>Create Preorder Menu</Text>
				</View>
				<View
					style={styles.drinkCardView}>
					<View
						style={styles.drinkCardTwoView}>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 0,
								right: 0,
								top: 0,
								bottom: 3,
							}}>
							<View
								style={styles.suggestView}>
								<Text
									style={styles.suggestText}>Suggest</Text>
							</View>
							<View
								pointerEvents="box-none"
								style={{
									flex: 1,
									flexDirection: "row",
								}}>
								<View
									style={styles.imageView}/>
								<View
									style={{
										flex: 1,
									}}/>
								<View
									pointerEvents="box-none"
									style={{
										width: 191,
										marginTop: 4,
										alignItems: "flex-end",
									}}>
									<Text
										style={styles.drinkNameText}>Drink Name</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.priceText}>$ 0.00</Text>
								</View>
							</View>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								right: 2,
								width: 190,
								bottom: 0,
								height: 70,
								alignItems: "flex-end",
							}}>
							<Text
								style={styles.inputDrinkNameText}>Drink Description</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								style={styles.addSubtractButtonsView}>
								<View
									pointerEvents="box-none"
									style={{
										position: "absolute",
										alignSelf: "center",
										top: 0,
										bottom: 0,
										justifyContent: "center",
									}}>
									<Text
										style={styles.textText}>0</Text>
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
											height: 32,
											flexDirection: "row",
											alignItems: "center",
										}}>
										<Image
											source={require("./../../assets/images/minus-circle.png")}
											style={styles.minusCircleThreeImage}/>
										<View
											style={{
												flex: 1,
											}}/>
										<Image
											source={require("./../../assets/images/plus-circle-2.png")}
											style={styles.plusCircleThreeImage}/>
									</View>
								</View>
							</View>
						</View>
					</View>
				</View>
				<View
					style={styles.addDrinkCardButtoView}>
					<Image
						source={require("./../../assets/images/minus-circle-2.png")}
						style={styles.minusCircleImage}/>
					<View
						style={{
							flex: 1,
						}}/>
					<Image
						source={require("./../../assets/images/plus-circle-3.png")}
						style={styles.plusCircleImage}/>
				</View>
				<View
					style={{
						flex: 1,
					}}/>
				<View
					style={styles.editView}>
					<Text
						style={styles.editText}>Edit</Text>
				</View>
				<View
					style={styles.savePreorderMenuBView}>
					<Text
						style={styles.savePreorderMenuText}>Save Preorder Menu!</Text>
				</View>
			</View>
	}
}

const styles = StyleSheet.create({
	viewView: {
		backgroundColor: "rgb(247, 247, 247)",
		flex: 1,
	},
	imageImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 177,
	},
	backButtonWithShaView: {
		backgroundColor: "transparent",
		width: 40,
		height: 40,
	},
	ovalTwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		shadowColor: "rgba(0, 0, 0, 0.51)",
		shadowRadius: 6,
		shadowOpacity: 1,
		width: null,
		height: 40,
	},
	backButtonImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 14,
		marginLeft: 16,
		marginRight: 16,
	},
	addTopImageButtonView: {
		backgroundColor: "transparent",
		width: 90,
		height: 38,
		marginTop: 85,
		flexDirection: "row",
		alignItems: "center",
	},
	minusCircleTwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 38,
		height: 38,
	},
	plusCircleTwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 38,
		height: 38,
	},
	menuButtonView: {
		backgroundColor: "transparent",
		width: 40,
		height: 40,
		marginRight: 19,
	},
	ovalImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		shadowColor: "rgba(0, 0, 0, 0.5)",
		shadowRadius: 6,
		shadowOpacity: 1,
		width: null,
		height: 40,
	},
	menuButtonImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 20,
		marginLeft: 19,
		marginRight: 17,
	},
	pocketImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 20,
		height: 24,
		marginRight: 3,
		marginTop: 7,
	},
	pageTitleCreateText: {
		backgroundColor: "transparent",
		color: "rgb(247, 247, 247)",
		fontFamily: "Arial-BoldMT",
		fontSize: 28,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0.36,
		position: "absolute",
		left: 20,
		width: 306,
		top: 102,
	},
	drinkCardView: {
		backgroundColor: "white",
		borderRadius: 15,
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		alignSelf: "center",
		width: 319,
		height: 166,
		marginTop: 18,
		justifyContent: "center",
		alignItems: "center",
	},
	drinkCardTwoView: {
		backgroundColor: "transparent",
		width: 277,
		height: 127,
	},
	suggestView: {
		backgroundColor: "transparent",
		borderRadius: 12,
		borderWidth: 1,
		borderColor: "rgb(184, 196, 187)",
		borderStyle: "solid",
		alignSelf: "flex-end",
		width: 77,
		height: 30,
		justifyContent: "center",
	},
	suggestText: {
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		marginLeft: 15,
		marginRight: 17,
	},
	imageView: {
		backgroundColor: "rgb(184, 196, 187)",
		borderRadius: 15,
		alignSelf: "flex-start",
		width: 79,
		height: 79,
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
		width: 191,
	},
	priceText: {
		color: "rgb(0, 112, 247)",
		fontFamily: "ArialMT",
		fontSize: 25,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		letterSpacing: 0.31,
		backgroundColor: "transparent",
		width: 91,
	},
	inputDrinkNameText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		width: 188,
	},
	addSubtractButtonsView: {
		backgroundColor: "transparent",
		alignSelf: "center",
		width: 103,
		height: 33,
	},
	textText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 28,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.35,
		backgroundColor: "transparent",
		width: 30,
	},
	minusCircleThreeImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 32,
		height: 32,
	},
	plusCircleThreeImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 32,
		height: 32,
	},
	addDrinkCardButtoView: {
		backgroundColor: "transparent",
		alignSelf: "flex-end",
		width: 97,
		height: 38,
		marginRight: 26,
		marginTop: 9,
		flexDirection: "row",
		alignItems: "center",
	},
	minusCircleImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 38,
		height: 38,
	},
	plusCircleImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 38,
		height: 38,
	},
	editView: {
		backgroundColor: "rgb(0, 112, 247)",
		borderRadius: 7,
		alignSelf: "flex-end",
		width: 30,
		height: 18,
		marginRight: 25,
		marginBottom: 15,
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
		marginLeft: 4,
		marginRight: 7,
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
		marginBottom: 13,
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
