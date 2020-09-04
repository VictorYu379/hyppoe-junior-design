//
//  AdminModalInputOfInventory
//  Hyppoe
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View, Alert } from "react-native"
import { TouchableOpacity, TextInput } from "react-native-gesture-handler"


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
		this.state = {
			units: 0,
			packs: 1,
			cups:  1,
			ice:   0,
			straw: 0,
		};
	}

	componentDidMount() {
	
	}

	updateFields() {
		Alert.alert("updated!");
	}

	cancelFields() {
		Alert.alert("cancelled!");
	}

	back() {
		Alert.alert("back!");
	}

	menu() {
		Alert.alert("menu!");
	}

	parseNumField(text, minVal) {
		var num = parseInt(text)
		if (isNaN(num) || num < minVal) {
			num = minVal;
		}
		return num;
	}

	parseNumButton(num, minVal) {
		return Math.max(num, minVal);
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
								marginRight: 10,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<TouchableOpacity onPress={() => this.back()}>
								<Image
									source={require("./../../assets/images/back-button.png")}
									style={styles.backButtonImage}/>
							</TouchableOpacity>
							<View
								style={{
									flex: 1,
								}}/>
							<TouchableOpacity onPress={() => this.menu()}>
								<Image
									source={require("./../../assets/images/menu-button.png")}
									style={styles.menuButtonImage}/>
							</TouchableOpacity>
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
											style={styles.inputDrinkNameTwoText}>Total Units: {this.state.units * this.state.packs}</Text>
										<Text
											style={styles.inputDrinkNameThreeText}>Available: {this.state.units * this.state.packs}</Text>
										<View
											style={{
												flex: 1,
											}}/>
										<View
											style={styles.editFiveView}>
											<TouchableOpacity onPress={() => this.updateFields()}>
												<Text
													style={styles.editFiveText}>Update</Text>
											</TouchableOpacity>
										</View>
									</View>
								</View>
							</View>
							<Text
								style={styles.inputDrinkNameFourText}>Inventory Value: {this.state.units * this.state.packs}</Text>
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
								style={styles.drinkNameElevenText}>Current Quantity:</Text>
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
							style={styles.drinkNameTwelveText}>Unit:</Text>
						<Text
							style={styles.drinkNameThirteenText}>Pack:</Text>
						<Text
							style={styles.drinkNameSixteenText}>Updated Quantity:</Text>
						<Image
							source={require("./../../assets/images/seperator-2.png")}
							style={styles.seperatorElevenImage}/>
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
								<TouchableOpacity onPress={() => this.cancelFields()}>
									<Text
										style={styles.editTwoText}>Cancel</Text>
								</TouchableOpacity>
							</View>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								style={styles.editView}>
								<TouchableOpacity onPress={() => this.updateFields()}>
									<Text
										style={styles.editTwoText}>Update</Text>
								</TouchableOpacity>
							</View>
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
						<View style={{ flexDirection: 'row' }}>
							<TextInput 
								defaultValue="0"
								value={this.state.units.toString()}
								keyboardType="number-pad"
								onChangeText={(text) => {this.setState({units: this.parseNumField(text, 0)})}}
								style={styles.drinkNameFourteenText}/>
							<TouchableOpacity activeOpacity={ .5 } onPress={() => this.setState({units: this.parseNumButton(this.state.units + 1, 0)})}>
								<Image
									source={require("./../../assets/images/plus-circle.png")}
									style={styles.plusCircleImage}/>
							</TouchableOpacity>
							<TouchableOpacity activeOpacity={ .5 } onPress={() => this.setState({units: this.parseNumButton(this.state.units - 1, 0)})}>
							<Image
									source={require("./../../assets/images/minus-circle.png")}
									style={styles.plusCircleImage}/>
							</TouchableOpacity>
						</View>
						<Image
							source={require("./../../assets/images/seperator-2.png")}
							style={styles.seperatorElevenImage}/>
						<View style={{ flexDirection: 'row' }}>
						<TextInput 
								defaultValue="0"
								value={this.state.packs.toString()}
								keyboardType="number-pad"
								onChangeText={(text) => {this.setState({packs: this.parseNumField(text, 1)})}}
								style={styles.drinkNameFourteenText}/>
							<TouchableOpacity activeOpacity={ .5 } onPress={() => this.setState({packs: this.parseNumButton(this.state.packs + 1, 1)})}>
								<Image
									source={require("./../../assets/images/plus-circle.png")}
									style={styles.plusCircleImage}/>
							</TouchableOpacity>
							<TouchableOpacity activeOpacity={ .5 } onPress={() => this.setState({packs: this.parseNumButton(this.state.packs - 1, 1)})}>
							<Image
									source={require("./../../assets/images/minus-circle.png")}
									style={styles.plusCircleImage}/>
							</TouchableOpacity>
						</View>
						<Image
							source={require("./../../assets/images/seperator-2.png")}
							style={styles.seperatorElevenImage}/>
						<View style={{ flexDirection: 'row' }}>
							<Text 
								style={styles.drinkNameFourteenText}>{this.state.units * this.state.packs}</Text>
						</View>
					</View>
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
								<TouchableOpacity onPress={() => this.cancelFields()}>
									<Text
										style={styles.editTwoText}>Cancel</Text>
								</TouchableOpacity>
							</View>
							<View
								style={{
									flex: 1,
								}}/>
							<View
								style={styles.editView}>
								<TouchableOpacity onPress={() => this.updateFields()}>
									<Text
										style={styles.editTwoText}>Update</Text>
								</TouchableOpacity>
							</View>
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
						<View style={{ flexDirection: 'row' }}>
							<TextInput 
								defaultValue="0"
								value={this.state.cups.toString()}
								keyboardType="number-pad"
								onChangeText={(text) => {this.setState({cups: this.parseNumField(text, 1)})}}
								style={styles.drinkNameFourteenText}/>
							<TouchableOpacity activeOpacity={ .5 } onPress={() => this.setState({cups: this.parseNumButton(this.state.cups + 1, 1)})}>
								<Image
									source={require("./../../assets/images/plus-circle.png")}
									style={styles.plusCircleImage}/>
							</TouchableOpacity>
							<TouchableOpacity activeOpacity={ .5 } onPress={() => this.setState({cups: this.parseNumButton(this.state.cups - 1, 1)})}>
							<Image
									source={require("./../../assets/images/minus-circle.png")}
									style={styles.plusCircleImage}/>
							</TouchableOpacity>
						</View>
						<Image
							source={require("./../../assets/images/seperator-2.png")}
							style={styles.seperatorElevenImage}/>
						<View style={{ flexDirection: 'row' }}>
							<TextInput 
								defaultValue="0"
								value={this.state.ice.toString()}
								keyboardType="number-pad"
								onChangeText={(text) => {this.setState({ice: this.parseNumField(text, 0)})}}
								style={styles.drinkNameFourteenText}/>
							<TouchableOpacity activeOpacity={ .5 } onPress={() => this.setState({ice: this.parseNumButton(this.state.ice + 1, 0)})}>
								<Image
									source={require("./../../assets/images/plus-circle.png")}
									style={styles.plusCircleImage}/>
							</TouchableOpacity>
							<TouchableOpacity activeOpacity={ .5 } onPress={() => this.setState({ice: this.parseNumButton(this.state.ice - 1, 0)})}>
							<Image
									source={require("./../../assets/images/minus-circle.png")}
									style={styles.plusCircleImage}/>
							</TouchableOpacity>
						</View>
						<Image
							source={require("./../../assets/images/seperator-2.png")}
							style={styles.seperatorElevenImage}/>
						<View style={{ flexDirection: 'row' }}>
							<TextInput 
								defaultValue="0"
								value={this.state.straw.toString()}
								keyboardType="number-pad"
								onChangeText={(text) => {this.setState({straw: this.parseNumField(text, 0)})}}
								style={styles.drinkNameFourteenText}/>
							<TouchableOpacity activeOpacity={ .5 } onPress={() => this.setState({straw: this.parseNumButton(this.state.straw + 1, 0)})}>
								<Image
									source={require("./../../assets/images/plus-circle.png")}
									style={styles.plusCircleImage}/>
							</TouchableOpacity>
							<TouchableOpacity activeOpacity={ .5 } onPress={() => this.setState({straw: this.parseNumButton(this.state.straw - 1, 0)})}>
							<Image
									source={require("./../../assets/images/minus-circle.png")}
									style={styles.plusCircleImage}/>
							</TouchableOpacity>
						</View>
					</View>
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
