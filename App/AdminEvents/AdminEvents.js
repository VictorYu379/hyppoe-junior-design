//
//  AdminEvents
//  Hyppoe
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


export default class AdminEvents extends React.Component {

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
						height: 26,
						marginLeft: 36,
						marginRight: 28,
						marginTop: 53,
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
				<Text
					style={styles.pageTitleLiveEvText}>Events</Text>
				<View
					style={styles.eventsView}>
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
							style={styles.eventsTwoView}>
							<View
								style={styles.eventView}>
								<View
									style={styles.eventLogoView}/>
								<View
									style={{
										flex: 1,
									}}/>
								<View
									pointerEvents="box-none"
									style={{
										width: 173,
										alignItems: "flex-end",
									}}>
									<Text
										style={styles.nameOfEventText}>Event Name</Text>
									<Text
										style={styles.cityStateOfEventText}>City, State</Text>
									<Text
										style={styles.dateOfEventText}>Date</Text>
									<Image
										source={require("./../../assets/images/seperator-7.png")}
										style={styles.seperatorImage}/>
									<Text
										style={styles.preorderQueText}>Preorder Que</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<View
										pointerEvents="box-none"
										style={{
											width: 88,
											height: 18,
											marginRight: 3,
											flexDirection: "row",
											justifyContent: "flex-end",
											alignItems: "flex-end",
										}}>
										<View
											style={styles.editView}>
											<Text
												style={styles.editTwoText}>Edit</Text>
										</View>
										<View
											style={styles.sssEventRevenueView}>
											<Text
												style={styles.editText}>$$$</Text>
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
							style={styles.eventsFourView}>
							<View
								style={styles.eventThreeView}>
								<View
									style={styles.eventLogoThreeView}/>
								<View
									style={{
										flex: 1,
									}}/>
								<View
									pointerEvents="box-none"
									style={{
										width: 173,
										alignItems: "flex-end",
									}}>
									<Text
										style={styles.nameOfEventThreeText}>Event Name</Text>
									<Text
										style={styles.cityStateOfEventThreeText}>City, State</Text>
									<Text
										style={styles.dateOfEventThreeText}>Date</Text>
									<Image
										source={require("./../../assets/images/seperator-7.png")}
										style={styles.seperatorThreeImage}/>
									<Text
										style={styles.preorderQueThreeText}>Preorder Que</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<View
										pointerEvents="box-none"
										style={{
											width: 88,
											height: 18,
											marginRight: 3,
											flexDirection: "row",
											justifyContent: "flex-end",
											alignItems: "flex-end",
										}}>
										<View
											style={styles.editThreeView}>
											<Text
												style={styles.editSixText}>Edit</Text>
										</View>
										<View
											style={styles.sssEventRevenueThreeView}>
											<Text
												style={styles.editFiveText}>$$$</Text>
										</View>
									</View>
								</View>
							</View>
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
							justifyContent: "center",
						}}>
						<View
							style={styles.eventsThreeView}>
							<View
								style={styles.eventTwoView}>
								<View
									style={styles.eventLogoTwoView}/>
								<View
									style={{
										flex: 1,
									}}/>
								<View
									pointerEvents="box-none"
									style={{
										alignSelf: "stretch",
										width: 173,
										alignItems: "flex-end",
									}}>
									<Text
										style={styles.nameOfEventTwoText}>Event Name</Text>
									<Text
										style={styles.cityStateOfEventTwoText}>City, State</Text>
									<Text
										style={styles.dateOfEventTwoText}>Date</Text>
									<Image
										source={require("./../../assets/images/seperator-7.png")}
										style={styles.seperatorTwoImage}/>
									<Text
										style={styles.preorderQueTwoText}>Preorder Que</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<View
										pointerEvents="box-none"
										style={{
											width: 88,
											height: 18,
											marginRight: 3,
											flexDirection: "row",
											justifyContent: "flex-end",
											alignItems: "flex-end",
										}}>
										<View
											style={styles.editTwoView}>
											<Text
												style={styles.editFourText}>Edit</Text>
										</View>
										<View
											style={styles.sssEventRevenueTwoView}>
											<Text
												style={styles.editThreeText}>$$$</Text>
										</View>
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
		alignItems: "flex-start",
	},
	backButtonImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 8,
		height: 14,
		marginTop: 6,
	},
	menuButtonImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 4,
		height: 20,
		marginRight: 35,
		marginTop: 3,
	},
	cartButtonView: {
		backgroundColor: "transparent",
		width: 22,
		height: 26,
	},
	pocketImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
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
	pageTitleLiveEvText: {
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 28,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0.36,
		width: 311,
		marginLeft: 20,
		marginTop: 23,
	},
	eventsView: {
		backgroundColor: "transparent",
		alignSelf: "center",
		width: 317,
		height: 425,
		marginTop: 32,
	},
	eventsTwoView: {
		backgroundColor: "white",
		borderRadius: 15,
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		height: 137,
		justifyContent: "center",
	},
	eventView: {
		backgroundColor: "transparent",
		height: 96,
		marginLeft: 20,
		marginRight: 20,
		flexDirection: "row",
	},
	eventLogoView: {
		backgroundColor: "rgb(184, 196, 187)",
		borderRadius: 15,
		alignSelf: "flex-start",
		width: 78,
		height: 79,
	},
	nameOfEventText: {
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0.17,
		width: 173,
	},
	cityStateOfEventText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.92,
		width: 173,
		marginTop: 1,
	},
	dateOfEventText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.92,
		backgroundColor: "transparent",
		width: 173,
		marginTop: 2,
	},
	seperatorImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 173,
		height: 1,
		marginTop: 1,
	},
	preorderQueText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.92,
		width: 173,
		marginTop: 5,
	},
	editView: {
		backgroundColor: "rgb(0, 112, 247)",
		borderRadius: 7,
		width: 30,
		height: 18,
		marginRight: 28,
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
		marginLeft: 4,
		marginRight: 7,
	},
	sssEventRevenueView: {
		backgroundColor: "rgb(0, 112, 247)",
		borderRadius: 7,
		width: 30,
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
		marginLeft: 5,
		marginRight: 6,
	},
	eventsFourView: {
		backgroundColor: "white",
		borderRadius: 15,
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		height: 137,
		justifyContent: "center",
	},
	eventThreeView: {
		backgroundColor: "transparent",
		height: 96,
		marginLeft: 20,
		marginRight: 20,
		flexDirection: "row",
	},
	eventLogoThreeView: {
		backgroundColor: "rgb(184, 196, 187)",
		borderRadius: 15,
		alignSelf: "flex-start",
		width: 78,
		height: 79,
	},
	nameOfEventThreeText: {
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0.17,
		width: 173,
	},
	cityStateOfEventThreeText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.92,
		width: 173,
		marginTop: 1,
	},
	dateOfEventThreeText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.92,
		width: 173,
		marginTop: 2,
	},
	seperatorThreeImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 173,
		height: 1,
		marginTop: 1,
	},
	preorderQueThreeText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.92,
		width: 173,
		marginTop: 5,
	},
	editThreeView: {
		backgroundColor: "rgb(0, 112, 247)",
		borderRadius: 7,
		width: 30,
		height: 18,
		marginRight: 28,
		justifyContent: "center",
	},
	editSixText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: "ArialMT",
		fontSize: 11,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 4,
		marginRight: 7,
	},
	sssEventRevenueThreeView: {
		backgroundColor: "rgb(0, 112, 247)",
		borderRadius: 7,
		width: 30,
		height: 18,
		justifyContent: "center",
	},
	editFiveText: {
		color: "white",
		fontFamily: "ArialMT",
		fontSize: 11,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		marginLeft: 5,
		marginRight: 6,
	},
	eventsThreeView: {
		backgroundColor: "white",
		borderRadius: 15,
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		height: 137,
		justifyContent: "center",
	},
	eventTwoView: {
		backgroundColor: "transparent",
		height: 96,
		marginLeft: 20,
		marginRight: 20,
		flexDirection: "row",
		alignItems: "flex-start",
	},
	eventLogoTwoView: {
		backgroundColor: "rgb(184, 196, 187)",
		borderRadius: 15,
		width: 78,
		height: 79,
	},
	nameOfEventTwoText: {
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0.17,
		width: 173,
	},
	cityStateOfEventTwoText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.92,
		width: 173,
		marginTop: 1,
	},
	dateOfEventTwoText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.92,
		width: 173,
		marginTop: 2,
	},
	seperatorTwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 173,
		height: 1,
		marginTop: 1,
	},
	preorderQueTwoText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.92,
		width: 173,
		marginTop: 5,
	},
	editTwoView: {
		backgroundColor: "rgb(0, 112, 247)",
		borderRadius: 7,
		width: 30,
		height: 18,
		marginRight: 28,
		justifyContent: "center",
	},
	editFourText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: "ArialMT",
		fontSize: 11,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		marginLeft: 4,
		marginRight: 7,
	},
	sssEventRevenueTwoView: {
		backgroundColor: "rgb(0, 112, 247)",
		borderRadius: 7,
		width: 30,
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
		marginLeft: 5,
		marginRight: 6,
	},
})
