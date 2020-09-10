//
//  AdminConfirmedStationAndTablet
//  Hyppoe
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


export default class AdminConfirmedStationAndTablet extends React.Component {

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
						height: 194,
					}}>
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
							height: 138,
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
									source={require("./../../assets/images/background-52.png")}
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
											style={styles.drinkNameText}>Task: Server</Text>
										<Text
											style={styles.drinkNameTwoText}>Station: Big Tent</Text>
										<View
											style={{
												flex: 1,
											}}/>
										<Image
											source={require("./../../assets/images/seperator-6.png")}
											style={styles.seperatorTwoImage}/>
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
											source={require("./../../assets/images/seperator-6.png")}
											style={styles.seperatorImage}/>
									</View>
								</View>
								<Text
									style={styles.drinkNameThreeText}>Tablet: 1</Text>
								<View
									style={{
										flex: 1,
									}}/>
								<Image
									source={require("./../../assets/images/seperator-6.png")}
									style={styles.seperatorThreeImage}/>
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
							source={require("./../../assets/images/background-41.png")}
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
									style={styles.drinkNameFourText}>Task: Runner</Text>
								<Text
									style={styles.drinkNameFiveText}>Stations: 1</Text>
								<View
									style={{
										flex: 1,
									}}/>
								<Image
									source={require("./../../assets/images/seperator-6.png")}
									style={styles.seperatorFiveImage}/>
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
									source={require("./../../assets/images/seperator-6.png")}
									style={styles.seperatorFourImage}/>
							</View>
						</View>
						<Text
							style={styles.drinkNameSixText}>Tablet: 1</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<Image
							source={require("./../../assets/images/seperator-6.png")}
							style={styles.seperatorSixImage}/>
					</View>
				</View>
				<View
					style={{
						flex: 1,
					}}/>
				<View
					style={styles.savePreorderMenuBView}>
					<Text
						style={styles.savePreorderMenuText}>Update Station and Tablet</Text>
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
	preorderQueCardView: {
		backgroundColor: "transparent",
		width: 311,
		height: 108,
		marginTop: 10,
	},
	backgroundImage: {
		backgroundColor: "transparent",
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		resizeMode: "cover",
		width: null,
		height: 108,
	},
	drinkCardElementsView: {
		backgroundColor: "transparent",
		height: 45,
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
	drinkNameTwoText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0.2,
		backgroundColor: "transparent",
		marginTop: 5,
	},
	seperatorTwoImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		width: null,
		height: 1,
	},
	seperatorImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		width: null,
		height: 1,
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
		marginTop: 3,
	},
	seperatorThreeImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: null,
		height: 1,
	},
	preorderQueCardTwoView: {
		backgroundColor: "transparent",
		alignSelf: "center",
		width: 311,
		height: 108,
		marginTop: 5,
	},
	backgroundTwoImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		width: null,
		height: 108,
	},
	drinkCardElementsTwoView: {
		backgroundColor: "transparent",
		height: 45,
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
		marginTop: 5,
	},
	seperatorFiveImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		width: null,
		height: 1,
	},
	seperatorFourImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: null,
		height: 1,
	},
	drinkNameSixText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0.2,
		backgroundColor: "transparent",
		marginTop: 3,
	},
	seperatorSixImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		width: null,
		height: 1,
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
		color: "white",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
		backgroundColor: "transparent",
	},
})
