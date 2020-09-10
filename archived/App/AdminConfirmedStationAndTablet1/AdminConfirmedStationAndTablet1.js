//
//  AdminConfirmedStationAndTablet1
//  Hyppoe
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


export default class AdminConfirmedStationAndTablet1 extends React.Component {

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
						left: 31,
						right: 33,
						top: 56,
						height: 200,
						alignItems: "center",
					}}>
					<View
						pointerEvents="box-none"
						style={{
							alignSelf: "stretch",
							height: 20,
							marginLeft: 10,
							marginRight: 53,
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
								source={require("./../../assets/images/background-51.png")}
								style={styles.backgroundImage}/>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 20,
								right: 20,
								top: 19,
								bottom: 20,
							}}>
							<View
								style={styles.drinkCardElementsView}>
								<Text
									style={styles.drinkNameText}>Change Quantity</Text>
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
										style={styles.drinkNameTwoText}>Increase</Text>
									<Text
										style={styles.drinkNameThreeText}>Decrease</Text>
								</View>
								<View
									pointerEvents="box-none"
									style={{
										height: 1,
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
									<Image
										source={require("./../../assets/images/seperator-2.png")}
										style={styles.seperatorThreeImage}/>
								</View>
							</View>
							<Text
								style={styles.inputDrinkNameText}>Current Quantity:</Text>
							<Text
								style={styles.drinkNameFourText}>+ Amount</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								pointerEvents="box-none"
								style={{
									height: 18,
									marginLeft: 75,
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
						<Text
							style={styles.drinkNameFiveText}>100</Text>
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
		width: 311,
		height: 170,
		marginTop: 10,
	},
	backgroundImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		width: null,
		height: 170,
	},
	drinkCardElementsView: {
		backgroundColor: "transparent",
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
	},
	seperatorImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		width: null,
		height: 1,
		marginTop: 1,
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
		width: 139,
		bottom: 0,
	},
	drinkNameThreeText: {
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		letterSpacing: 0.2,
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
		width: 129,
		height: 1,
	},
	inputDrinkNameText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		backgroundColor: "transparent",
		alignSelf: "flex-end",
		width: 103,
		marginTop: 6,
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
		width: 137,
		marginTop: 1,
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
	drinkNameFiveText: {
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		letterSpacing: 0.2,
		position: "absolute",
		right: 19,
		width: 137,
		top: 97,
	},
})
