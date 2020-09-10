//
//  AdminEventRevenueAnalysis
//  Hyppoe
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


export default class AdminEventRevenueAnalysis extends React.Component {

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
						bottom: 12,
					}}>
					<View
						pointerEvents="box-none"
						style={{
							height: 153,
						}}>
						<Image
							source={require("./../../assets/images/top-image-3.png")}
							style={styles.topImageImage}/>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 20,
								right: 28,
								top: 46,
								height: 88,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<Text
								style={styles.pageTitleEventSText}>Music Midtown Sales</Text>
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
										source={require("./../../assets/images/oval-2.png")}
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
							<View
								style={styles.cartButtonView}>
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
										source={require("./../../assets/images/pocket-2.png")}
										style={styles.pocketImage}/>
								</View>
								<View
									style={styles.ovalView}/>
							</View>
						</View>
					</View>
					<View
						style={{
							flex: 1,
						}}/>
					<View
						style={styles.exportDataToExcelView}>
						<Text
							style={styles.exportToExcelText}>Export to Excel!</Text>
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
						style={styles.totalRevenueTotalView}>
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
								style={styles.totalTipRevenueView}>
								<Text
									style={styles.totalTipRevenueText}>Total Tip Revenue</Text>
								<Text
									style={styles.totalTipRevenueDeText}>Total tip revenue</Text>
								<Text
									style={styles.priceTwoText}>$ 200,000</Text>
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
							}}>
							<View
								style={styles.totalRevenueView}>
								<Text
									style={styles.totalSalesRevenueTwoText}>Total Sales Revenue</Text>
								<Text
									style={styles.totalSalesRevenueText}>Total sales revenue</Text>
								<Text
									style={styles.priceThreeText}>$ 1,000,000</Text>
							</View>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								style={styles.totalUsersView}>
								<Text
									style={styles.totalUsersText}>Total Users</Text>
								<Text
									style={styles.totalUsersAndFeesText}>Total users</Text>
								<Text
									style={styles.priceText}>1,000</Text>
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
		resizeMode: "cover",
		backgroundColor: "transparent",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 153,
	},
	pageTitleEventSText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 28,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0.36,
		backgroundColor: "transparent",
		width: 311,
		marginTop: 56,
	},
	backButtonWithShaView: {
		backgroundColor: "transparent",
		width: 40,
		height: 40,
	},
	ovalTwoImage: {
		backgroundColor: "transparent",
		shadowColor: "rgba(0, 0, 0, 0.51)",
		shadowRadius: 6,
		shadowOpacity: 1,
		resizeMode: "center",
		width: null,
		height: 40,
	},
	backButtonImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: null,
		height: 14,
		marginLeft: 16,
		marginRight: 16,
	},
	menuButtonView: {
		backgroundColor: "transparent",
		width: 40,
		height: 40,
		marginRight: 19,
	},
	ovalImage: {
		backgroundColor: "transparent",
		shadowColor: "rgba(0, 0, 0, 0.5)",
		shadowRadius: 6,
		shadowOpacity: 1,
		resizeMode: "center",
		width: null,
		height: 40,
	},
	menuButtonImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: null,
		height: 20,
		marginLeft: 19,
		marginRight: 17,
	},
	cartButtonView: {
		backgroundColor: "transparent",
		width: 22,
		height: 26,
		marginTop: 7,
	},
	pocketImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: null,
		height: 24,
		marginRight: 2,
	},
	ovalView: {
		backgroundColor: "rgb(0, 112, 247)",
		borderRadius: 4,
		position: "absolute",
		left: 14,
		right: 0,
		bottom: 0,
		height: 8,
	},
	exportDataToExcelView: {
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
	exportToExcelText: {
		color: "white",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
		backgroundColor: "transparent",
	},
	totalRevenueTotalView: {
		backgroundColor: "transparent",
		width: 317,
		height: 476,
	},
	totalTipRevenueView: {
		backgroundColor: "white",
		borderRadius: 15,
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		height: 153,
	},
	totalTipRevenueText: {
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0.2,
		marginLeft: 20,
		marginRight: 20,
		marginTop: 32,
	},
	totalTipRevenueDeText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 20,
		marginRight: 20,
		marginTop: 5,
	},
	priceTwoText: {
		color: "rgb(0, 112, 247)",
		fontFamily: "ArialMT",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.22,
		backgroundColor: "transparent",
		marginLeft: 20,
		marginRight: 20,
		marginTop: 32,
	},
	totalRevenueView: {
		backgroundColor: "white",
		borderRadius: 15,
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		height: 153,
	},
	totalSalesRevenueTwoText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0.2,
		backgroundColor: "transparent",
		marginLeft: 20,
		marginRight: 20,
		marginTop: 32,
	},
	totalSalesRevenueText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 20,
		marginRight: 20,
		marginTop: 5,
	},
	priceThreeText: {
		color: "rgb(0, 112, 247)",
		fontFamily: "ArialMT",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.22,
		backgroundColor: "transparent",
		marginLeft: 20,
		marginRight: 19,
		marginTop: 32,
	},
	totalUsersView: {
		backgroundColor: "white",
		borderRadius: 15,
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		height: 154,
	},
	totalUsersText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0.2,
		backgroundColor: "transparent",
		marginLeft: 20,
		marginRight: 20,
		marginTop: 32,
	},
	totalUsersAndFeesText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 20,
		marginRight: 20,
		marginTop: 5,
	},
	priceText: {
		color: "rgb(0, 112, 247)",
		fontFamily: "ArialMT",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.22,
		backgroundColor: "transparent",
		marginLeft: 20,
		marginRight: 19,
		marginTop: 33,
	},
})
