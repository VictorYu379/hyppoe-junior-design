//
//  AdminAssignStationInventory
//  Hyppoe
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


export default class AdminAssignStationInventory extends React.Component {

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
						height: 331,
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
							height: 275,
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
									source={require("./../../assets/images/background-46.png")}
									style={styles.backgroundImage}/>
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
									style={styles.drinkCardElementsView}>
									<Text
										style={styles.drinkNameText}>Station 1: Big Tent</Text>
									<Image
										source={require("./../../assets/images/seperator-6.png")}
										style={styles.seperatorImage}/>
									<Text
										style={styles.inputDrinkNameTwentyText}>Total:</Text>
									<Text
										style={styles.inputDrinkNameNineteenText}>Tablets:</Text>
									<View
										pointerEvents="box-none"
										style={{
											height: 36,
											marginLeft: 63,
											marginTop: 1,
											flexDirection: "row",
											alignItems: "flex-start",
										}}>
										<View
											pointerEvents="box-none"
											style={{
												width: 68,
												height: 36,
												alignItems: "flex-start",
											}}>
											<Text
												style={styles.inputDrinkNameEighteenText}>Available:</Text>
											<Text
												style={styles.inputDrinkNameTenText}>Unit / Pack</Text>
										</View>
										<View
											style={{
												flex: 1,
											}}/>
										<View
											pointerEvents="box-none"
											style={{
												width: 68,
												height: 36,
												marginRight: 5,
												alignItems: "flex-end",
											}}>
											<Text
												style={styles.inputDrinkNameTwentyThreeText}>Assign:</Text>
											<Text
												style={styles.inputDrinkNameSeventeenText}>Unit / Pack</Text>
										</View>
										<Text
											style={styles.inputDrinkNameThreeText}>Of Total Available</Text>
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
											style={styles.inputDrinkNameText}>Bud Light:</Text>
										<View
											style={{
												flex: 1,
											}}/>
										<Text
											style={styles.inputDrinkNameFourText}>4%</Text>
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
										<Text
											style={styles.inputDrinkNameTwoText}>Coors:</Text>
										<View
											style={styles.unitPerPackView}>
											<Text
												style={styles.inputDrinkNameElevenText}>0</Text>
											<View
												style={{
													flex: 1,
												}}/>
											<Text
												style={styles.inputDrinkNameTwelveText}>0</Text>
										</View>
										<View
											style={{
												flex: 1,
											}}/>
										<Text
											style={styles.inputDrinkNameFiveText}>5%</Text>
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
										<Text
											style={styles.inputDrinkNameSixText}>Coca Cola:</Text>
										<View
											style={styles.unitPerPackTwoView}>
											<Text
												style={styles.inputDrinkNameThirteenText}>0</Text>
											<View
												style={{
													flex: 1,
												}}/>
											<Text
												style={styles.inputDrinkNameFourteenText}>0</Text>
										</View>
										<View
											style={{
												flex: 1,
											}}/>
										<Text
											style={styles.inputDrinkNameEightText}>5%</Text>
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
											style={styles.inputDrinkNameSevenText}>Water:</Text>
										<View
											style={styles.unitPerPackThreeView}>
											<Text
												style={styles.inputDrinkNameFifteenText}>0</Text>
											<View
												style={{
													flex: 1,
												}}/>
											<Text
												style={styles.inputDrinkNameSixteenText}>0</Text>
										</View>
										<View
											style={{
												flex: 1,
											}}/>
										<Text
											style={styles.inputDrinkNameNineText}>10%</Text>
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
											style={styles.inputDrinkNameTwentyOneText}>Total Units:</Text>
										<View
											style={{
												flex: 1,
											}}/>
										<Text
											style={styles.inputDrinkNameTwentyTwoText}>2,000</Text>
									</View>
								</View>
								<View
									style={{
										flex: 1,
									}}/>
								<View
									style={styles.editTwoView}>
									<Text
										style={styles.editTwoText}>Update</Text>
								</View>
							</View>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									left: 90,
									right: 20,
									top: 20,
									height: 113,
									alignItems: "flex-end",
								}}>
								<View
									style={styles.editView}>
									<Text
										style={styles.editText}>Assign Supplies</Text>
								</View>
								<View
									style={styles.numberBoxNineView}>
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
											style={styles.rectangleNineImage}/>
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
											style={styles.textNineText}>4</Text>
									</View>
								</View>
								<View
									style={styles.unitPerPackFourView}>
									<Text
										style={styles.inputDrinkNameTwentyFourText}>0</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.inputDrinkNameTwentyFiveText}>0</Text>
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
							source={require("./../../assets/images/background-19.png")}
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
						}}>
						<View
							style={styles.drinkCardElementsTwoView}>
							<Text
								style={styles.drinkNameTwoText}>Station 2: Main Stage</Text>
							<Image
								source={require("./../../assets/images/seperator-6.png")}
								style={styles.seperatorTwoImage}/>
							<Text
								style={styles.inputDrinkNameFortyFiveText}>Total:</Text>
							<Text
								style={styles.inputDrinkNameFortyFourText}>Tablets:</Text>
							<View
								pointerEvents="box-none"
								style={{
									flex: 1,
									alignSelf: "stretch",
									marginLeft: 6,
									marginTop: 1,
									flexDirection: "row",
								}}>
								<View
									pointerEvents="box-none"
									style={{
										width: 68,
										marginTop: 55,
										marginBottom: 1,
										alignItems: "flex-start",
									}}>
									<Text
										style={styles.inputDrinkNameTwentySevenText}>Coors:</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.inputDrinkNameThirtyOneText}>Coca Cola:</Text>
									<View
										pointerEvents="box-none"
										style={{
											width: 68,
											height: 32,
											justifyContent: "flex-end",
											alignItems: "flex-start",
										}}>
										<Text
											style={styles.inputDrinkNameThirtyTwoText}>Water:</Text>
										<Text
											style={styles.inputDrinkNameFortySixText}>Total Units:</Text>
									</View>
								</View>
								<View
									pointerEvents="box-none"
									style={{
										width: 68,
										marginBottom: 17,
										alignItems: "flex-start",
									}}>
									<Text
										style={styles.inputDrinkNameFortyThreeText}>Available:</Text>
									<Text
										style={styles.inputDrinkNameThirtyFiveText}>Unit / Pack</Text>
									<View
										style={styles.unitPerPackFiveView}>
										<Text
											style={styles.inputDrinkNameThirtySixText}>0</Text>
										<View
											style={{
												flex: 1,
											}}/>
										<Text
											style={styles.inputDrinkNameThirtySevenText}>0</Text>
									</View>
									<View
										style={{
											flex: 1,
										}}/>
									<View
										style={styles.unitPerPackSixView}>
										<Text
											style={styles.inputDrinkNameThirtyEightText}>0</Text>
										<View
											style={{
												flex: 1,
											}}/>
										<Text
											style={styles.inputDrinkNameThirtyNineText}>0</Text>
									</View>
									<View
										style={styles.unitPerPackSevenView}>
										<Text
											style={styles.inputDrinkNameFortyText}>0</Text>
										<View
											style={{
												flex: 1,
											}}/>
										<Text
											style={styles.inputDrinkNameFortyOneText}>0</Text>
									</View>
								</View>
								<View
									style={{
										flex: 1,
									}}/>
								<View
									pointerEvents="box-none"
									style={{
										width: 132,
									}}>
									<View
										pointerEvents="box-none"
										style={{
											position: "absolute",
											right: 0,
											width: 132,
											top: 0,
											bottom: 14,
										}}>
										<View
											pointerEvents="box-none"
											style={{
												position: "absolute",
												right: 0,
												width: 132,
												top: 0,
												bottom: 4,
											}}>
											<View
												pointerEvents="box-none"
												style={{
													position: "absolute",
													right: 0,
													width: 132,
													top: 0,
													bottom: 14,
												}}>
												<View
													pointerEvents="box-none"
													style={{
														position: "absolute",
														right: 0,
														width: 132,
														top: 0,
														bottom: 3,
													}}>
													<View
														pointerEvents="box-none"
														style={{
															position: "absolute",
															right: 0,
															width: 132,
															top: 0,
															height: 73,
														}}>
														<View
															pointerEvents="box-none"
															style={{
																position: "absolute",
																right: 0,
																width: 132,
																top: 0,
																height: 70,
															}}>
															<View
																pointerEvents="box-none"
																style={{
																	position: "absolute",
																	right: 0,
																	width: 132,
																	top: 0,
																	height: 55,
																}}>
																<View
																	pointerEvents="box-none"
																	style={{
																		position: "absolute",
																		right: 0,
																		width: 132,
																		top: 0,
																		height: 53,
																	}}>
																	<Text
																		style={styles.inputDrinkNameTwentyEightText}>Of Total Available</Text>
																	<View
																		pointerEvents="box-none"
																		style={{
																			position: "absolute",
																			right: 5,
																			width: 127,
																			top: 0,
																			height: 53,
																			alignItems: "flex-end",
																		}}>
																		<Text
																			style={styles.inputDrinkNameFortyEightText}>Assign:</Text>
																		<Text
																			style={styles.inputDrinkNameFortyTwoText}>Unit / Pack</Text>
																		<Text
																			style={styles.inputDrinkNameTwentyNineText}>3%</Text>
																	</View>
																</View>
																<View
																	pointerEvents="box-none"
																	style={{
																		position: "absolute",
																		right: 69,
																		width: 56,
																		top: 38,
																		height: 17,
																		flexDirection: "row",
																		justifyContent: "flex-end",
																		alignItems: "flex-start",
																	}}>
																	<View
																		style={styles.numberBoxElevenView}>
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
																				style={styles.rectangleElevenImage}/>
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
																				style={styles.textElevenText}>15</Text>
																		</View>
																	</View>
																	<View
																		style={styles.numberBoxTenView}>
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
																				style={styles.rectangleTenImage}/>
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
																				style={styles.textTenText}>100</Text>
																		</View>
																	</View>
																</View>
															</View>
															<Text
																style={styles.inputDrinkNameThirtyText}>4%</Text>
														</View>
														<View
															pointerEvents="box-none"
															style={{
																position: "absolute",
																right: 69,
																width: 56,
																top: 56,
																height: 17,
																flexDirection: "row",
																justifyContent: "flex-end",
																alignItems: "flex-start",
															}}>
															<View
																style={styles.numberBoxThirteenView}>
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
																		style={styles.rectangleThirteenImage}/>
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
																		style={styles.textThirteenText}>25</Text>
																</View>
															</View>
															<View
																style={styles.numberBoxTwelveView}>
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
																		style={styles.rectangleTwelveImage}/>
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
																		style={styles.textTwelveText}>100</Text>
																</View>
															</View>
														</View>
													</View>
													<Text
														style={styles.inputDrinkNameThirtyThreeText}>8%</Text>
												</View>
												<View
													pointerEvents="box-none"
													style={{
														position: "absolute",
														right: 69,
														width: 56,
														bottom: 0,
														height: 17,
														flexDirection: "row",
														justifyContent: "flex-end",
														alignItems: "flex-end",
													}}>
													<View
														style={styles.numberBoxFifteenView}>
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
																style={styles.rectangleFifteenImage}/>
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
																style={styles.textFifteenText}>20</Text>
														</View>
													</View>
													<View
														style={styles.numberBoxFourteenView}>
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
																style={styles.rectangleFourteenImage}/>
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
																style={styles.textFourteenText}>100</Text>
														</View>
													</View>
												</View>
											</View>
											<Text
												style={styles.inputDrinkNameThirtyFourText}>5%</Text>
										</View>
										<View
											pointerEvents="box-none"
											style={{
												position: "absolute",
												right: 69,
												width: 56,
												bottom: 0,
												height: 17,
												flexDirection: "row",
												justifyContent: "flex-end",
												alignItems: "flex-end",
											}}>
											<View
												style={styles.numberBoxSeventeenView}>
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
														style={styles.rectangleSeventeenImage}/>
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
														style={styles.textSeventeenText}>20</Text>
												</View>
											</View>
											<View
												style={styles.numberBoxSixteenView}>
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
														style={styles.rectangleSixteenImage}/>
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
														style={styles.textSixteenText}>100</Text>
												</View>
											</View>
										</View>
									</View>
									<Text
										style={styles.inputDrinkNameFortySevenText}>2,000</Text>
								</View>
							</View>
							<Text
								style={styles.inputDrinkNameTwentySixText}>Bud Light:</Text>
						</View>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							style={styles.editFourView}>
							<Text
								style={styles.editFourText}>Update</Text>
						</View>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 90,
							right: 20,
							top: 20,
							height: 113,
							alignItems: "flex-end",
						}}>
						<View
							style={styles.editThreeView}>
							<Text
								style={styles.editThreeText}>Assign Supplies</Text>
						</View>
						<View
							style={styles.numberBoxEighteenView}>
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
									style={styles.rectangleEighteenImage}/>
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
									style={styles.textEighteenText}>8</Text>
							</View>
						</View>
						<View
							style={styles.unitPerPackEightView}>
							<Text
								style={styles.inputDrinkNameFortyNineText}>0</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Text
								style={styles.inputDrinkNameFiftyText}>0</Text>
						</View>
					</View>
				</View>
				<View
					style={{
						flex: 1,
					}}/>
				<View
					style={styles.savePreorderMenuBView}>
					<Text
						style={styles.savePreorderMenuText}>Assign Inventory</Text>
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
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 4,
		height: 20,
	},
	preorderQueCardView: {
		backgroundColor: "transparent",
		width: 314,
		height: 245,
		marginTop: 10,
	},
	backgroundImage: {
		backgroundColor: "transparent",
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		resizeMode: "cover",
		width: null,
		height: 245,
	},
	drinkCardElementsView: {
		backgroundColor: "transparent",
		alignSelf: "stretch",
		height: 183,
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
		resizeMode: "cover",
		backgroundColor: "transparent",
		width: null,
		height: 1,
		marginRight: 4,
		marginTop: 1,
	},
	inputDrinkNameTwentyText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		backgroundColor: "transparent",
		alignSelf: "flex-end",
		width: 68,
		marginTop: 5,
	},
	inputDrinkNameNineteenText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		width: 62,
		marginLeft: 6,
		marginTop: 1,
	},
	inputDrinkNameEighteenText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
		backgroundColor: "transparent",
		width: 68,
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
		marginTop: 4,
	},
	inputDrinkNameTwentyThreeText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
		width: 68,
	},
	inputDrinkNameSeventeenText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		backgroundColor: "transparent",
		width: 68,
		marginTop: 4,
	},
	inputDrinkNameThreeText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		width: 59,
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
	inputDrinkNameFourText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		width: 60,
	},
	inputDrinkNameTwoText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		width: 62,
		marginTop: 1,
	},
	unitPerPackView: {
		backgroundColor: "transparent",
		width: 61,
		height: 16,
		marginLeft: 2,
		marginTop: 1,
		flexDirection: "row",
		alignItems: "center",
	},
	inputDrinkNameElevenText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		width: 28,
	},
	inputDrinkNameTwelveText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		width: 29,
	},
	inputDrinkNameFiveText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		backgroundColor: "transparent",
		width: 60,
	},
	inputDrinkNameSixText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 62,
	},
	unitPerPackTwoView: {
		backgroundColor: "transparent",
		width: 61,
		height: 16,
		marginLeft: 2,
		flexDirection: "row",
		alignItems: "center",
	},
	inputDrinkNameThirteenText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		width: 28,
	},
	inputDrinkNameFourteenText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
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
		width: 60,
	},
	inputDrinkNameSevenText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		width: 62,
	},
	unitPerPackThreeView: {
		backgroundColor: "transparent",
		width: 61,
		height: 16,
		marginLeft: 2,
		flexDirection: "row",
		alignItems: "center",
	},
	inputDrinkNameFifteenText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
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
	inputDrinkNameNineText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		width: 60,
		marginBottom: 1,
	},
	inputDrinkNameTwentyOneText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		width: 68,
		marginBottom: 1,
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
	},
	editTwoView: {
		backgroundColor: "rgb(0, 112, 247)",
		borderRadius: 7,
		width: 69,
		height: 18,
		marginRight: 61,
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
		marginLeft: 13,
		marginRight: 14,
	},
	editView: {
		backgroundColor: "rgb(0, 112, 247)",
		borderRadius: 7,
		width: 103,
		height: 18,
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
		marginLeft: 12,
		marginRight: 7,
	},
	numberBoxNineView: {
		backgroundColor: "transparent",
		width: 23,
		height: 17,
		marginRight: 4,
		marginTop: 21,
	},
	rectangleNineImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 17,
	},
	textNineText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.15,
	},
	unitPerPackFourView: {
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		width: 61,
		height: 16,
		marginTop: 41,
		flexDirection: "row",
		alignItems: "center",
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
	},
	inputDrinkNameTwentyFiveText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		width: 29,
	},
	preorderQueCardTwoView: {
		backgroundColor: "transparent",
		alignSelf: "center",
		width: 314,
		height: 242,
		marginTop: 5,
	},
	backgroundTwoImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		width: null,
		height: 242,
	},
	drinkCardElementsTwoView: {
		backgroundColor: "transparent",
		height: 183,
		alignItems: "flex-start",
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
		width: 191,
	},
	seperatorTwoImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		alignSelf: "stretch",
		width: null,
		height: 1,
		marginRight: 4,
		marginTop: 1,
	},
	inputDrinkNameFortyFiveText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		backgroundColor: "transparent",
		alignSelf: "flex-end",
		width: 68,
		marginTop: 5,
	},
	inputDrinkNameFortyFourText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		width: 62,
		marginLeft: 6,
		marginTop: 1,
	},
	inputDrinkNameTwentySevenText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 62,
	},
	inputDrinkNameThirtyOneText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		width: 62,
		marginBottom: 2,
	},
	inputDrinkNameThirtyTwoText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 62,
	},
	inputDrinkNameFortySixText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 68,
	},
	inputDrinkNameFortyThreeText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
		backgroundColor: "transparent",
		width: 68,
	},
	inputDrinkNameThirtyFiveText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		backgroundColor: "transparent",
		width: 68,
		marginTop: 4,
	},
	unitPerPackFiveView: {
		backgroundColor: "transparent",
		width: 61,
		height: 16,
		marginLeft: 7,
		marginTop: 19,
		flexDirection: "row",
		alignItems: "center",
	},
	inputDrinkNameThirtySixText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		width: 28,
	},
	inputDrinkNameThirtySevenText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		width: 29,
	},
	unitPerPackSixView: {
		backgroundColor: "transparent",
		width: 61,
		height: 16,
		marginLeft: 7,
		marginBottom: 2,
		flexDirection: "row",
		alignItems: "center",
	},
	inputDrinkNameThirtyEightText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		width: 28,
	},
	inputDrinkNameThirtyNineText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		width: 29,
	},
	unitPerPackSevenView: {
		backgroundColor: "transparent",
		width: 61,
		height: 16,
		marginLeft: 7,
		flexDirection: "row",
		alignItems: "center",
	},
	inputDrinkNameFortyText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		width: 28,
	},
	inputDrinkNameFortyOneText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		width: 29,
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
		right: 0,
		width: 68,
		top: 8,
	},
	inputDrinkNameFortyEightText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
		width: 68,
		marginRight: 59,
	},
	inputDrinkNameFortyTwoText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		backgroundColor: "transparent",
		width: 68,
		marginRight: 59,
		marginTop: 4,
	},
	inputDrinkNameTwentyNineText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		width: 60,
		marginTop: 1,
	},
	numberBoxElevenView: {
		backgroundColor: "transparent",
		width: 23,
		height: 17,
		marginRight: 10,
	},
	rectangleElevenImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 17,
	},
	textElevenText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.15,
		backgroundColor: "transparent",
	},
	numberBoxTenView: {
		backgroundColor: "transparent",
		width: 23,
		height: 17,
	},
	rectangleTenImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: null,
		height: 17,
	},
	textTenText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.15,
		marginRight: 1,
	},
	inputDrinkNameThirtyText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		position: "absolute",
		right: 5,
		width: 60,
		top: 54,
	},
	numberBoxThirteenView: {
		backgroundColor: "transparent",
		width: 23,
		height: 17,
		marginRight: 10,
	},
	rectangleThirteenImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 17,
	},
	textThirteenText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.15,
		backgroundColor: "transparent",
	},
	numberBoxTwelveView: {
		backgroundColor: "transparent",
		width: 23,
		height: 17,
	},
	rectangleTwelveImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: null,
		height: 17,
	},
	textTwelveText: {
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
	inputDrinkNameThirtyThreeText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		backgroundColor: "transparent",
		position: "absolute",
		right: 5,
		width: 60,
		bottom: 0,
	},
	numberBoxFifteenView: {
		backgroundColor: "transparent",
		width: 23,
		height: 17,
		marginRight: 10,
	},
	rectangleFifteenImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: null,
		height: 17,
	},
	textFifteenText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.15,
	},
	numberBoxFourteenView: {
		backgroundColor: "transparent",
		width: 23,
		height: 17,
	},
	rectangleFourteenImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: null,
		height: 17,
	},
	textFourteenText: {
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
	inputDrinkNameThirtyFourText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		position: "absolute",
		right: 5,
		width: 60,
		bottom: 0,
	},
	numberBoxSeventeenView: {
		backgroundColor: "transparent",
		width: 23,
		height: 17,
		marginRight: 10,
	},
	rectangleSeventeenImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: null,
		height: 17,
	},
	textSeventeenText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.15,
	},
	numberBoxSixteenView: {
		backgroundColor: "transparent",
		width: 23,
		height: 17,
	},
	rectangleSixteenImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: null,
		height: 17,
	},
	textSixteenText: {
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
	inputDrinkNameFortySevenText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "right",
		backgroundColor: "transparent",
		position: "absolute",
		right: 5,
		width: 60,
		bottom: 0,
	},
	inputDrinkNameTwentySixText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 62,
		marginLeft: 6,
	},
	editFourView: {
		backgroundColor: "rgb(0, 112, 247)",
		borderRadius: 7,
		alignSelf: "flex-end",
		width: 69,
		height: 18,
		marginRight: 61,
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
		marginLeft: 13,
		marginRight: 14,
	},
	editThreeView: {
		backgroundColor: "rgb(0, 112, 247)",
		borderRadius: 7,
		width: 103,
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
		marginLeft: 12,
		marginRight: 7,
	},
	numberBoxEighteenView: {
		backgroundColor: "transparent",
		width: 23,
		height: 17,
		marginRight: 5,
		marginTop: 20,
	},
	rectangleEighteenImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: null,
		height: 17,
	},
	textEighteenText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.15,
	},
	unitPerPackEightView: {
		backgroundColor: "transparent",
		alignSelf: "flex-start",
		width: 61,
		height: 16,
		marginTop: 42,
		flexDirection: "row",
		alignItems: "center",
	},
	inputDrinkNameFortyNineText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		width: 28,
	},
	inputDrinkNameFiftyText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		width: 29,
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
