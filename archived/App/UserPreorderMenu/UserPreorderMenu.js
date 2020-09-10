//
//  UserPreorderMenu
//  Hyppoe
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


export default class UserPreorderMenu extends React.Component {

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
						height: 153,
					}}>
					<Image
						source={require("./../../assets/images/top-image-4.png")}
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
						<View
							pointerEvents="box-none"
							style={{
								flex: 1,
								height: 88,
								marginRight: 19,
								alignItems: "flex-start",
							}}>
							<View
								pointerEvents="box-none"
								style={{
									alignSelf: "stretch",
									height: 40,
									marginLeft: 5,
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
											source={require("./../../assets/images/oval-3.png")}
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
											source={require("./../../assets/images/menu-button.png")}
											style={styles.menuButtonImage}/>
									</View>
								</View>
							</View>
							<Text
								style={styles.pageTitlePreordeText}>Preorder Menu</Text>
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
					pointerEvents="box-none"
					style={{
						height: 1326,
					}}>
					<View
						style={styles.allDrinkCardsView}>
						<View
							style={styles.drinkCard1View}>
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
									source={require("./../../assets/images/background-38.png")}
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
									<View
										pointerEvents="box-none"
										style={{
											position: "absolute",
											left: 0,
											right: 0,
											top: 0,
											bottom: 6,
											flexDirection: "row",
											alignItems: "flex-start",
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
												alignSelf: "stretch",
												width: 191,
												alignItems: "flex-end",
											}}>
											<Text
												style={styles.drinkNameText}>Drink Name</Text>
											<Text
												style={styles.inputDrinkNameText}>Drink Description</Text>
											<View
												style={{
													flex: 1,
												}}/>
											<View
												style={styles.drinkPriceView}>
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
														style={styles.amountText}>0.00</Text>
												</View>
												<View
													pointerEvents="box-none"
													style={{
														position: "absolute",
														left: 0,
														top: 0,
														bottom: 0,
														justifyContent: "center",
													}}>
													<Text
														style={styles.textText}>$</Text>
												</View>
											</View>
										</View>
									</View>
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
												style={styles.textTwoText}>0</Text>
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
													style={styles.minusCircleImage}/>
												<View
													style={{
														flex: 1,
													}}/>
												<Image
													source={require("./../../assets/images/plus-circle-2.png")}
													style={styles.plusCircleImage}/>
											</View>
										</View>
									</View>
								</View>
							</View>
						</View>
						<View
							style={styles.drinkCard1TwoView}>
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
									source={require("./../../assets/images/background-38.png")}
									style={styles.backgroundTwoImage}/>
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
									style={styles.drinkCardElementsTwoView}>
									<View
										pointerEvents="box-none"
										style={{
											position: "absolute",
											left: 0,
											right: 0,
											top: 0,
											bottom: 6,
											flexDirection: "row",
										}}>
										<View
											style={styles.imageTwoView}/>
										<View
											style={{
												flex: 1,
											}}/>
										<View
											pointerEvents="box-none"
											style={{
												width: 191,
												alignItems: "flex-end",
											}}>
											<Text
												style={styles.drinkNameTwoText}>Drink Name</Text>
											<Text
												style={styles.inputDrinkNameTwoText}>Drink Description</Text>
											<View
												style={{
													flex: 1,
												}}/>
											<View
												style={styles.drinkPriceTwoView}>
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
														style={styles.amountTwoText}>0.00</Text>
												</View>
												<View
													pointerEvents="box-none"
													style={{
														position: "absolute",
														left: 0,
														top: 0,
														bottom: 0,
														justifyContent: "center",
													}}>
													<Text
														style={styles.textThreeText}>$</Text>
												</View>
											</View>
										</View>
									</View>
									<View
										style={styles.addSubtractButtonsTwoView}>
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
												style={styles.textFourText}>0</Text>
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
													style={styles.minusCircleTwoImage}/>
												<View
													style={{
														flex: 1,
													}}/>
												<Image
													source={require("./../../assets/images/plus-circle-2.png")}
													style={styles.plusCircleTwoImage}/>
											</View>
										</View>
									</View>
								</View>
							</View>
						</View>
						<View
							style={styles.drinkCard1ThreeView}>
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
									source={require("./../../assets/images/background-38.png")}
									style={styles.backgroundThreeImage}/>
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
									style={styles.drinkCardElementsThreeView}>
									<View
										pointerEvents="box-none"
										style={{
											position: "absolute",
											left: 0,
											right: 0,
											top: 0,
											bottom: 6,
											flexDirection: "row",
											alignItems: "flex-start",
										}}>
										<View
											style={styles.imageThreeView}/>
										<View
											style={{
												flex: 1,
											}}/>
										<View
											pointerEvents="box-none"
											style={{
												alignSelf: "stretch",
												width: 191,
												alignItems: "flex-end",
											}}>
											<Text
												style={styles.drinkNameThreeText}>Drink Name</Text>
											<Text
												style={styles.inputDrinkNameThreeText}>Drink Description</Text>
											<View
												style={{
													flex: 1,
												}}/>
											<View
												style={styles.drinkPriceThreeView}>
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
														style={styles.amountThreeText}>0.00</Text>
												</View>
												<View
													pointerEvents="box-none"
													style={{
														position: "absolute",
														left: 0,
														top: 0,
														bottom: 0,
														justifyContent: "center",
													}}>
													<Text
														style={styles.textFiveText}>$</Text>
												</View>
											</View>
										</View>
									</View>
									<View
										style={styles.addSubtractButtonsThreeView}>
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
												style={styles.textSixText}>0</Text>
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
							style={styles.drinkCard1FourView}>
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
									source={require("./../../assets/images/background-38.png")}
									style={styles.backgroundFourImage}/>
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
									style={styles.drinkCardElementsFourView}>
									<View
										pointerEvents="box-none"
										style={{
											position: "absolute",
											left: 0,
											right: 0,
											top: 0,
											bottom: 6,
											flexDirection: "row",
										}}>
										<View
											style={styles.imageFourView}/>
										<View
											style={{
												flex: 1,
											}}/>
										<View
											pointerEvents="box-none"
											style={{
												width: 191,
												alignItems: "flex-end",
											}}>
											<Text
												style={styles.drinkNameFourText}>Drink Name</Text>
											<Text
												style={styles.inputDrinkNameFourText}>Drink Description</Text>
											<View
												style={{
													flex: 1,
												}}/>
											<View
												style={styles.drinkPriceFourView}>
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
														style={styles.amountFourText}>0.00</Text>
												</View>
												<View
													pointerEvents="box-none"
													style={{
														position: "absolute",
														left: 0,
														top: 0,
														bottom: 0,
														justifyContent: "center",
													}}>
													<Text
														style={styles.textSevenText}>$</Text>
												</View>
											</View>
										</View>
									</View>
									<View
										style={styles.addSubtractButtonsFourView}>
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
												style={styles.textEightText}>0</Text>
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
													style={styles.minusCircleFourImage}/>
												<View
													style={{
														flex: 1,
													}}/>
												<Image
													source={require("./../../assets/images/plus-circle-2.png")}
													style={styles.plusCircleFourImage}/>
											</View>
										</View>
									</View>
								</View>
							</View>
						</View>
						<View
							style={styles.drinkCard1FiveView}>
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
									source={require("./../../assets/images/background-38.png")}
									style={styles.backgroundFiveImage}/>
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
									style={styles.drinkCardElementsFiveView}>
									<View
										pointerEvents="box-none"
										style={{
											position: "absolute",
											left: 0,
											right: 0,
											top: 0,
											bottom: 6,
											flexDirection: "row",
										}}>
										<View
											style={styles.imageFiveView}/>
										<View
											style={{
												flex: 1,
											}}/>
										<View
											pointerEvents="box-none"
											style={{
												width: 191,
												alignItems: "flex-end",
											}}>
											<Text
												style={styles.drinkNameFiveText}>Drink Name</Text>
											<Text
												style={styles.inputDrinkNameFiveText}>Drink Description</Text>
											<View
												style={{
													flex: 1,
												}}/>
											<View
												style={styles.drinkPriceFiveView}>
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
														style={styles.amountFiveText}>0.00</Text>
												</View>
												<View
													pointerEvents="box-none"
													style={{
														position: "absolute",
														left: 0,
														top: 0,
														bottom: 0,
														justifyContent: "center",
													}}>
													<Text
														style={styles.textNineText}>$</Text>
												</View>
											</View>
										</View>
									</View>
									<View
										style={styles.addSubtractButtonsFiveView}>
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
												style={styles.textTenText}>0</Text>
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
													style={styles.minusCircleFiveImage}/>
												<View
													style={{
														flex: 1,
													}}/>
												<Image
													source={require("./../../assets/images/plus-circle-2.png")}
													style={styles.plusCircleFiveImage}/>
											</View>
										</View>
									</View>
								</View>
							</View>
						</View>
						<View
							style={styles.drinkCard1SixView}>
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
									source={require("./../../assets/images/background-38.png")}
									style={styles.backgroundSixImage}/>
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
									style={styles.drinkCardElementsSixView}>
									<View
										pointerEvents="box-none"
										style={{
											position: "absolute",
											left: 0,
											right: 0,
											top: 0,
											bottom: 6,
											flexDirection: "row",
											alignItems: "flex-start",
										}}>
										<View
											style={styles.imageSixView}/>
										<View
											style={{
												flex: 1,
											}}/>
										<View
											pointerEvents="box-none"
											style={{
												alignSelf: "stretch",
												width: 191,
												alignItems: "flex-end",
											}}>
											<Text
												style={styles.drinkNameSixText}>Drink Name</Text>
											<Text
												style={styles.inputDrinkNameSixText}>Drink Description</Text>
											<View
												style={{
													flex: 1,
												}}/>
											<View
												style={styles.drinkPriceSixView}>
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
														style={styles.amountSixText}>0.00</Text>
												</View>
												<View
													pointerEvents="box-none"
													style={{
														position: "absolute",
														left: 0,
														top: 0,
														bottom: 0,
														justifyContent: "center",
													}}>
													<Text
														style={styles.textElevenText}>$</Text>
												</View>
											</View>
										</View>
									</View>
									<View
										style={styles.addSubtractButtonsSixView}>
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
												style={styles.textTwelveText}>0</Text>
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
													style={styles.minusCircleSixImage}/>
												<View
													style={{
														flex: 1,
													}}/>
												<Image
													source={require("./../../assets/images/plus-circle-2.png")}
													style={styles.plusCircleSixImage}/>
											</View>
										</View>
									</View>
								</View>
							</View>
						</View>
						<View
							style={styles.drinkCard1SevenView}>
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
									source={require("./../../assets/images/background-38.png")}
									style={styles.backgroundSevenImage}/>
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
									style={styles.drinkCardElementsSevenView}>
									<View
										pointerEvents="box-none"
										style={{
											position: "absolute",
											left: 0,
											right: 0,
											top: 0,
											bottom: 6,
											flexDirection: "row",
											alignItems: "flex-start",
										}}>
										<View
											style={styles.imageSevenView}/>
										<View
											style={{
												flex: 1,
											}}/>
										<View
											pointerEvents="box-none"
											style={{
												alignSelf: "stretch",
												width: 191,
												alignItems: "flex-end",
											}}>
											<Text
												style={styles.drinkNameSevenText}>Drink Name</Text>
											<Text
												style={styles.inputDrinkNameSevenText}>Drink Description</Text>
											<View
												style={{
													flex: 1,
												}}/>
											<View
												style={styles.drinkPriceSevenView}>
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
														style={styles.amountSevenText}>0.00</Text>
												</View>
												<View
													pointerEvents="box-none"
													style={{
														position: "absolute",
														left: 0,
														top: 0,
														bottom: 0,
														justifyContent: "center",
													}}>
													<Text
														style={styles.textThirteenText}>$</Text>
												</View>
											</View>
										</View>
									</View>
									<View
										style={styles.addSubtractButtonsSevenView}>
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
												style={styles.textFourteenText}>0</Text>
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
													style={styles.minusCircleSevenImage}/>
												<View
													style={{
														flex: 1,
													}}/>
												<Image
													source={require("./../../assets/images/plus-circle-2.png")}
													style={styles.plusCircleSevenImage}/>
											</View>
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
							style={styles.drinkCard1EightView}>
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
									source={require("./../../assets/images/background-38.png")}
									style={styles.backgroundEightImage}/>
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
									style={styles.drinkCardElementsEightView}>
									<View
										pointerEvents="box-none"
										style={{
											position: "absolute",
											left: 0,
											right: 0,
											top: 0,
											bottom: 6,
											flexDirection: "row",
											alignItems: "flex-start",
										}}>
										<View
											style={styles.imageEightView}/>
										<View
											style={{
												flex: 1,
											}}/>
										<View
											pointerEvents="box-none"
											style={{
												alignSelf: "stretch",
												width: 191,
												alignItems: "flex-end",
											}}>
											<Text
												style={styles.drinkNameEightText}>Drink Name</Text>
											<Text
												style={styles.inputDrinkNameEightText}>Drink Description</Text>
											<View
												style={{
													flex: 1,
												}}/>
											<View
												style={styles.drinkPriceEightView}>
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
														style={styles.amountEightText}>0.00</Text>
												</View>
												<View
													pointerEvents="box-none"
													style={{
														position: "absolute",
														left: 0,
														top: 0,
														bottom: 0,
														justifyContent: "center",
													}}>
													<Text
														style={styles.textFifteenText}>$</Text>
												</View>
											</View>
										</View>
									</View>
									<View
										style={styles.addSubtractButtonsEightView}>
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
												style={styles.textSixteenText}>0</Text>
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
													style={styles.minusCircleEightImage}/>
												<View
													style={{
														flex: 1,
													}}/>
												<Image
													source={require("./../../assets/images/plus-circle-2.png")}
													style={styles.plusCircleEightImage}/>
											</View>
										</View>
									</View>
								</View>
							</View>
						</View>
						<View
							style={styles.drinkCard1NineView}>
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
									source={require("./../../assets/images/background-38.png")}
									style={styles.backgroundNineImage}/>
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
									style={styles.drinkCardElementsNineView}>
									<View
										pointerEvents="box-none"
										style={{
											position: "absolute",
											left: 0,
											right: 0,
											top: 0,
											bottom: 6,
											flexDirection: "row",
											alignItems: "flex-start",
										}}>
										<View
											style={styles.imageNineView}/>
										<View
											style={{
												flex: 1,
											}}/>
										<View
											pointerEvents="box-none"
											style={{
												alignSelf: "stretch",
												width: 191,
												alignItems: "flex-end",
											}}>
											<Text
												style={styles.drinkNameNineText}>Drink Name</Text>
											<Text
												style={styles.inputDrinkNameNineText}>Drink Description</Text>
											<View
												style={{
													flex: 1,
												}}/>
											<View
												style={styles.drinkPriceNineView}>
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
														style={styles.amountNineText}>0.00</Text>
												</View>
												<View
													pointerEvents="box-none"
													style={{
														position: "absolute",
														left: 0,
														top: 0,
														bottom: 0,
														justifyContent: "center",
													}}>
													<Text
														style={styles.textSeventeenText}>$</Text>
												</View>
											</View>
										</View>
									</View>
									<View
										style={styles.addSubtractButtonsNineView}>
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
												style={styles.textEighteenText}>0</Text>
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
													style={styles.minusCircleNineImage}/>
												<View
													style={{
														flex: 1,
													}}/>
												<Image
													source={require("./../../assets/images/plus-circle-2.png")}
													style={styles.plusCircleNineImage}/>
											</View>
										</View>
									</View>
								</View>
							</View>
						</View>
						<View
							style={styles.drinkCard1TenView}>
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
									source={require("./../../assets/images/background-38.png")}
									style={styles.backgroundTenImage}/>
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
									style={styles.drinkCardElementsTenView}>
									<View
										pointerEvents="box-none"
										style={{
											position: "absolute",
											left: 0,
											right: 0,
											top: 0,
											bottom: 6,
											flexDirection: "row",
										}}>
										<View
											style={styles.imageTenView}/>
										<View
											style={{
												flex: 1,
											}}/>
										<View
											pointerEvents="box-none"
											style={{
												width: 191,
												alignItems: "flex-end",
											}}>
											<Text
												style={styles.drinkNameTenText}>Drink Name</Text>
											<Text
												style={styles.inputDrinkNameTenText}>Drink Description</Text>
											<View
												style={{
													flex: 1,
												}}/>
											<View
												style={styles.drinkPriceTenView}>
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
														style={styles.amountTenText}>0.00</Text>
												</View>
												<View
													pointerEvents="box-none"
													style={{
														position: "absolute",
														left: 0,
														top: 0,
														bottom: 0,
														justifyContent: "center",
													}}>
													<Text
														style={styles.textNineteenText}>$</Text>
												</View>
											</View>
										</View>
									</View>
									<View
										style={styles.addSubtractButtonsTenView}>
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
												style={styles.textTwentyText}>0</Text>
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
													style={styles.minusCircleTenImage}/>
												<View
													style={{
														flex: 1,
													}}/>
												<Image
													source={require("./../../assets/images/plus-circle-2.png")}
													style={styles.plusCircleTenImage}/>
											</View>
										</View>
									</View>
								</View>
							</View>
						</View>
					</View>
					<View
						style={styles.feeBoxView}>
						<Text
							style={styles.pickUpPreorderText}>Pick Up Preorder!</Text>
					</View>
					<View
						pointerEvents="box-none"
						style={{
							position: "absolute",
							left: 20,
							right: 20,
							bottom: 697,
							height: 132,
							justifyContent: "flex-end",
							alignItems: "flex-end",
						}}>
						<View
							style={styles.tipAndTotalView}>
							<View
								style={styles.serviceFeeView}>
								<Text
									style={styles.serviceFeeText}>Service Fee:</Text>
								<View
									style={{
										flex: 1,
									}}/>
								<Text
									style={styles.amountThirteenText}>$ 0.50</Text>
							</View>
							<View
								pointerEvents="box-none"
								style={{
									flex: 1,
									alignSelf: "flex-end",
									width: 157,
									marginTop: 4,
								}}>
								<View
									style={styles.totalView}>
									<Text
										style={styles.totalText}>Total:</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.amountElevenText}>$0.50</Text>
								</View>
								<View
									style={styles.tipView}>
									<Text
										style={styles.tipText}>Tip:</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<Text
										style={styles.amountTwelveText}>$ 0.00</Text>
								</View>
							</View>
						</View>
						<View
							style={styles.confirmPreorderButView}>
							<Text
								style={styles.pickUpPreorderTwoText}>Create Preorder!</Text>
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
	backButtonWithShaView: {
		backgroundColor: "transparent",
		width: 40,
		height: 40,
	},
	ovalImage: {
		backgroundColor: "transparent",
		shadowColor: "rgba(0, 0, 0, 0.51)",
		shadowRadius: 6,
		shadowOpacity: 1,
		resizeMode: "center",
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
	menuButtonView: {
		backgroundColor: "transparent",
		width: 40,
		height: 40,
	},
	ovalTwoImage: {
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
	pageTitlePreordeText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 28,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0.36,
		backgroundColor: "transparent",
		width: 256,
		marginTop: 16,
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
	allDrinkCardsView: {
		backgroundColor: "transparent",
		position: "absolute",
		alignSelf: "center",
		width: 317,
		bottom: 0,
		height: 1326,
	},
	drinkCard1View: {
		backgroundColor: "transparent",
		height: 129,
	},
	backgroundImage: {
		backgroundColor: "transparent",
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		resizeMode: "cover",
		width: null,
		height: 129,
	},
	drinkCardElementsView: {
		backgroundColor: "transparent",
		height: 94,
		marginLeft: 20,
		marginRight: 18,
	},
	imageView: {
		backgroundColor: "rgb(184, 196, 187)",
		borderRadius: 15,
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
	inputDrinkNameText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		width: 188,
		marginRight: 1,
		marginTop: 3,
	},
	drinkPriceView: {
		backgroundColor: "transparent",
		width: 79,
		height: 29,
		marginRight: 2,
	},
	amountText: {
		color: "rgb(0, 112, 247)",
		fontFamily: "ArialMT",
		fontSize: 25,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.31,
		backgroundColor: "transparent",
		marginLeft: 16,
	},
	textText: {
		backgroundColor: "transparent",
		color: "rgb(0, 112, 247)",
		fontFamily: "ArialMT",
		fontSize: 25,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.31,
		width: 16,
	},
	addSubtractButtonsView: {
		backgroundColor: "transparent",
		position: "absolute",
		alignSelf: "center",
		width: 103,
		bottom: 0,
		height: 38,
	},
	textTwoText: {
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 32,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.4,
		width: 28,
	},
	minusCircleImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 32,
		height: 32,
	},
	plusCircleImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 32,
		height: 32,
	},
	drinkCard1TwoView: {
		backgroundColor: "transparent",
		height: 129,
		marginTop: 4,
	},
	backgroundTwoImage: {
		backgroundColor: "transparent",
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		resizeMode: "cover",
		width: null,
		height: 129,
	},
	drinkCardElementsTwoView: {
		backgroundColor: "transparent",
		height: 94,
		marginLeft: 20,
		marginRight: 18,
	},
	imageTwoView: {
		backgroundColor: "rgb(184, 196, 187)",
		borderRadius: 15,
		alignSelf: "flex-start",
		width: 79,
		height: 79,
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
	inputDrinkNameTwoText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 188,
		marginRight: 1,
		marginTop: 3,
	},
	drinkPriceTwoView: {
		backgroundColor: "transparent",
		width: 79,
		height: 29,
		marginRight: 2,
	},
	amountTwoText: {
		color: "rgb(0, 112, 247)",
		fontFamily: "ArialMT",
		fontSize: 25,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.31,
		backgroundColor: "transparent",
		marginLeft: 16,
	},
	textThreeText: {
		color: "rgb(0, 112, 247)",
		fontFamily: "ArialMT",
		fontSize: 25,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.31,
		backgroundColor: "transparent",
		width: 16,
	},
	addSubtractButtonsTwoView: {
		backgroundColor: "transparent",
		position: "absolute",
		alignSelf: "center",
		width: 103,
		bottom: 0,
		height: 38,
	},
	textFourText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 32,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.4,
		backgroundColor: "transparent",
		width: 28,
	},
	minusCircleTwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 32,
		height: 32,
	},
	plusCircleTwoImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 32,
		height: 32,
	},
	drinkCard1ThreeView: {
		backgroundColor: "transparent",
		height: 129,
		marginTop: 4,
	},
	backgroundThreeImage: {
		resizeMode: "cover",
		backgroundColor: "transparent",
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		width: null,
		height: 129,
	},
	drinkCardElementsThreeView: {
		backgroundColor: "transparent",
		height: 94,
		marginLeft: 20,
		marginRight: 18,
	},
	imageThreeView: {
		backgroundColor: "rgb(184, 196, 187)",
		borderRadius: 15,
		width: 79,
		height: 79,
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
		width: 191,
	},
	inputDrinkNameThreeText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		width: 188,
		marginRight: 1,
		marginTop: 3,
	},
	drinkPriceThreeView: {
		backgroundColor: "transparent",
		width: 79,
		height: 29,
		marginRight: 2,
	},
	amountThreeText: {
		backgroundColor: "transparent",
		color: "rgb(0, 112, 247)",
		fontFamily: "ArialMT",
		fontSize: 25,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.31,
		marginLeft: 16,
	},
	textFiveText: {
		color: "rgb(0, 112, 247)",
		fontFamily: "ArialMT",
		fontSize: 25,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.31,
		backgroundColor: "transparent",
		width: 16,
	},
	addSubtractButtonsThreeView: {
		backgroundColor: "transparent",
		position: "absolute",
		alignSelf: "center",
		width: 103,
		bottom: 0,
		height: 38,
	},
	textSixText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 32,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.4,
		backgroundColor: "transparent",
		width: 28,
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
	drinkCard1FourView: {
		backgroundColor: "transparent",
		height: 129,
		marginTop: 4,
	},
	backgroundFourImage: {
		backgroundColor: "transparent",
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		resizeMode: "cover",
		width: null,
		height: 129,
	},
	drinkCardElementsFourView: {
		backgroundColor: "transparent",
		height: 94,
		marginLeft: 20,
		marginRight: 18,
	},
	imageFourView: {
		backgroundColor: "rgb(184, 196, 187)",
		borderRadius: 15,
		alignSelf: "flex-start",
		width: 79,
		height: 79,
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
		width: 191,
	},
	inputDrinkNameFourText: {
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		backgroundColor: "transparent",
		width: 188,
		marginRight: 1,
		marginTop: 3,
	},
	drinkPriceFourView: {
		backgroundColor: "transparent",
		width: 79,
		height: 29,
		marginRight: 2,
	},
	amountFourText: {
		backgroundColor: "transparent",
		color: "rgb(0, 112, 247)",
		fontFamily: "ArialMT",
		fontSize: 25,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.31,
		marginLeft: 16,
	},
	textSevenText: {
		color: "rgb(0, 112, 247)",
		fontFamily: "ArialMT",
		fontSize: 25,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.31,
		backgroundColor: "transparent",
		width: 16,
	},
	addSubtractButtonsFourView: {
		backgroundColor: "transparent",
		position: "absolute",
		alignSelf: "center",
		width: 103,
		bottom: 0,
		height: 38,
	},
	textEightText: {
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 32,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.4,
		width: 28,
	},
	minusCircleFourImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 32,
		height: 32,
	},
	plusCircleFourImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 32,
		height: 32,
	},
	drinkCard1FiveView: {
		backgroundColor: "transparent",
		height: 129,
		marginTop: 4,
	},
	backgroundFiveImage: {
		backgroundColor: "transparent",
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		resizeMode: "cover",
		width: null,
		height: 129,
	},
	drinkCardElementsFiveView: {
		backgroundColor: "transparent",
		height: 94,
		marginLeft: 20,
		marginRight: 18,
	},
	imageFiveView: {
		backgroundColor: "rgb(184, 196, 187)",
		borderRadius: 15,
		alignSelf: "flex-start",
		width: 79,
		height: 79,
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
		width: 191,
	},
	inputDrinkNameFiveText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		width: 188,
		marginRight: 1,
		marginTop: 3,
	},
	drinkPriceFiveView: {
		backgroundColor: "transparent",
		width: 79,
		height: 29,
		marginRight: 2,
	},
	amountFiveText: {
		backgroundColor: "transparent",
		color: "rgb(0, 112, 247)",
		fontFamily: "ArialMT",
		fontSize: 25,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.31,
		marginLeft: 16,
	},
	textNineText: {
		backgroundColor: "transparent",
		color: "rgb(0, 112, 247)",
		fontFamily: "ArialMT",
		fontSize: 25,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.31,
		width: 16,
	},
	addSubtractButtonsFiveView: {
		backgroundColor: "transparent",
		position: "absolute",
		alignSelf: "center",
		width: 103,
		bottom: 0,
		height: 38,
	},
	textTenText: {
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 32,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.4,
		width: 28,
	},
	minusCircleFiveImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 32,
		height: 32,
	},
	plusCircleFiveImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 32,
		height: 32,
	},
	drinkCard1SixView: {
		backgroundColor: "transparent",
		height: 129,
		marginTop: 4,
	},
	backgroundSixImage: {
		backgroundColor: "transparent",
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		resizeMode: "cover",
		width: null,
		height: 129,
	},
	drinkCardElementsSixView: {
		backgroundColor: "transparent",
		height: 94,
		marginLeft: 20,
		marginRight: 18,
	},
	imageSixView: {
		backgroundColor: "rgb(184, 196, 187)",
		borderRadius: 15,
		width: 79,
		height: 79,
	},
	drinkNameSixText: {
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
	inputDrinkNameSixText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		width: 188,
		marginRight: 1,
		marginTop: 3,
	},
	drinkPriceSixView: {
		backgroundColor: "transparent",
		width: 79,
		height: 29,
		marginRight: 2,
	},
	amountSixText: {
		color: "rgb(0, 112, 247)",
		fontFamily: "ArialMT",
		fontSize: 25,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.31,
		backgroundColor: "transparent",
		marginLeft: 16,
	},
	textElevenText: {
		backgroundColor: "transparent",
		color: "rgb(0, 112, 247)",
		fontFamily: "ArialMT",
		fontSize: 25,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.31,
		width: 16,
	},
	addSubtractButtonsSixView: {
		backgroundColor: "transparent",
		position: "absolute",
		alignSelf: "center",
		width: 103,
		bottom: 0,
		height: 38,
	},
	textTwelveText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 32,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.4,
		backgroundColor: "transparent",
		width: 28,
	},
	minusCircleSixImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 32,
		height: 32,
	},
	plusCircleSixImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 32,
		height: 32,
	},
	drinkCard1SevenView: {
		backgroundColor: "transparent",
		height: 129,
		marginTop: 4,
	},
	backgroundSevenImage: {
		backgroundColor: "transparent",
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		resizeMode: "cover",
		width: null,
		height: 129,
	},
	drinkCardElementsSevenView: {
		backgroundColor: "transparent",
		height: 94,
		marginLeft: 20,
		marginRight: 18,
	},
	imageSevenView: {
		backgroundColor: "rgb(184, 196, 187)",
		borderRadius: 15,
		width: 79,
		height: 79,
	},
	drinkNameSevenText: {
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
	inputDrinkNameSevenText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		width: 188,
		marginRight: 1,
		marginTop: 3,
	},
	drinkPriceSevenView: {
		backgroundColor: "transparent",
		width: 79,
		height: 29,
		marginRight: 2,
	},
	amountSevenText: {
		color: "rgb(0, 112, 247)",
		fontFamily: "ArialMT",
		fontSize: 25,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.31,
		backgroundColor: "transparent",
		marginLeft: 16,
	},
	textThirteenText: {
		backgroundColor: "transparent",
		color: "rgb(0, 112, 247)",
		fontFamily: "ArialMT",
		fontSize: 25,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.31,
		width: 16,
	},
	addSubtractButtonsSevenView: {
		backgroundColor: "transparent",
		position: "absolute",
		alignSelf: "center",
		width: 103,
		bottom: 0,
		height: 38,
	},
	textFourteenText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 32,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.4,
		backgroundColor: "transparent",
		width: 28,
	},
	minusCircleSevenImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 32,
		height: 32,
	},
	plusCircleSevenImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 32,
		height: 32,
	},
	drinkCard1EightView: {
		backgroundColor: "transparent",
		height: 129,
		marginBottom: 4,
	},
	backgroundEightImage: {
		backgroundColor: "transparent",
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		resizeMode: "cover",
		width: null,
		height: 129,
	},
	drinkCardElementsEightView: {
		backgroundColor: "transparent",
		height: 94,
		marginLeft: 20,
		marginRight: 18,
	},
	imageEightView: {
		backgroundColor: "rgb(184, 196, 187)",
		borderRadius: 15,
		width: 79,
		height: 79,
	},
	drinkNameEightText: {
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
	inputDrinkNameEightText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		width: 188,
		marginRight: 1,
		marginTop: 3,
	},
	drinkPriceEightView: {
		backgroundColor: "transparent",
		width: 79,
		height: 29,
		marginRight: 2,
	},
	amountEightText: {
		color: "rgb(0, 112, 247)",
		fontFamily: "ArialMT",
		fontSize: 25,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.31,
		backgroundColor: "transparent",
		marginLeft: 16,
	},
	textFifteenText: {
		color: "rgb(0, 112, 247)",
		fontFamily: "ArialMT",
		fontSize: 25,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.31,
		backgroundColor: "transparent",
		width: 16,
	},
	addSubtractButtonsEightView: {
		backgroundColor: "transparent",
		position: "absolute",
		alignSelf: "center",
		width: 103,
		bottom: 0,
		height: 38,
	},
	textSixteenText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 32,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.4,
		backgroundColor: "transparent",
		width: 28,
	},
	minusCircleEightImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 32,
		height: 32,
	},
	plusCircleEightImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 32,
		height: 32,
	},
	drinkCard1NineView: {
		backgroundColor: "transparent",
		height: 129,
		marginBottom: 4,
	},
	backgroundNineImage: {
		backgroundColor: "transparent",
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		resizeMode: "cover",
		width: null,
		height: 129,
	},
	drinkCardElementsNineView: {
		backgroundColor: "transparent",
		height: 94,
		marginLeft: 20,
		marginRight: 18,
	},
	imageNineView: {
		backgroundColor: "rgb(184, 196, 187)",
		borderRadius: 15,
		width: 79,
		height: 79,
	},
	drinkNameNineText: {
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
	inputDrinkNameNineText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		width: 188,
		marginRight: 1,
		marginTop: 3,
	},
	drinkPriceNineView: {
		backgroundColor: "transparent",
		width: 79,
		height: 29,
		marginRight: 2,
	},
	amountNineText: {
		backgroundColor: "transparent",
		color: "rgb(0, 112, 247)",
		fontFamily: "ArialMT",
		fontSize: 25,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.31,
		marginLeft: 16,
	},
	textSeventeenText: {
		backgroundColor: "transparent",
		color: "rgb(0, 112, 247)",
		fontFamily: "ArialMT",
		fontSize: 25,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.31,
		width: 16,
	},
	addSubtractButtonsNineView: {
		backgroundColor: "transparent",
		position: "absolute",
		alignSelf: "center",
		width: 103,
		bottom: 0,
		height: 38,
	},
	textEighteenText: {
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 32,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.4,
		width: 28,
	},
	minusCircleNineImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 32,
		height: 32,
	},
	plusCircleNineImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 32,
		height: 32,
	},
	drinkCard1TenView: {
		backgroundColor: "transparent",
		height: 129,
	},
	backgroundTenImage: {
		backgroundColor: "transparent",
		shadowColor: "rgba(107, 127, 153, 0.4)",
		shadowRadius: 20,
		shadowOpacity: 1,
		resizeMode: "cover",
		width: null,
		height: 129,
	},
	drinkCardElementsTenView: {
		backgroundColor: "transparent",
		height: 94,
		marginLeft: 20,
		marginRight: 18,
	},
	imageTenView: {
		backgroundColor: "rgb(184, 196, 187)",
		borderRadius: 15,
		alignSelf: "flex-start",
		width: 79,
		height: 79,
	},
	drinkNameTenText: {
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
	inputDrinkNameTenText: {
		backgroundColor: "transparent",
		color: "rgb(92, 90, 90)",
		fontFamily: "ArialMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		width: 188,
		marginRight: 1,
		marginTop: 3,
	},
	drinkPriceTenView: {
		backgroundColor: "transparent",
		width: 79,
		height: 29,
		marginRight: 2,
	},
	amountTenText: {
		color: "rgb(0, 112, 247)",
		fontFamily: "ArialMT",
		fontSize: 25,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.31,
		backgroundColor: "transparent",
		marginLeft: 16,
	},
	textNineteenText: {
		backgroundColor: "transparent",
		color: "rgb(0, 112, 247)",
		fontFamily: "ArialMT",
		fontSize: 25,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.31,
		width: 16,
	},
	addSubtractButtonsTenView: {
		backgroundColor: "transparent",
		position: "absolute",
		alignSelf: "center",
		width: 103,
		bottom: 0,
		height: 38,
	},
	textTwentyText: {
		color: "rgb(5, 5, 5)",
		fontFamily: "ArialMT",
		fontSize: 32,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		letterSpacing: 0.4,
		backgroundColor: "transparent",
		width: 28,
	},
	minusCircleTenImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 32,
		height: 32,
	},
	plusCircleTenImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 32,
		height: 32,
	},
	feeBoxView: {
		backgroundColor: "rgb(247, 247, 247)",
		position: "absolute",
		left: 0,
		right: 0,
		bottom: 679,
		height: 149,
		justifyContent: "flex-end",
		alignItems: "center",
	},
	pickUpPreorderText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
		marginBottom: 26,
	},
	tipAndTotalView: {
		backgroundColor: "transparent",
		width: 210,
		height: 77,
		marginRight: 3,
		marginBottom: 5,
	},
	serviceFeeView: {
		backgroundColor: "transparent",
		height: 21,
		marginRight: 3,
		flexDirection: "row",
		alignItems: "center",
	},
	serviceFeeText: {
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0.2,
	},
	amountThirteenText: {
		backgroundColor: "transparent",
		color: "rgb(0, 112, 247)",
		fontFamily: "ArialMT",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		letterSpacing: 0.22,
	},
	totalView: {
		backgroundColor: "transparent",
		position: "absolute",
		right: 0,
		width: 157,
		bottom: 0,
		height: 34,
		flexDirection: "row",
		alignItems: "center",
	},
	totalText: {
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0.2,
		alignSelf: "flex-start",
		marginTop: 15,
	},
	amountElevenText: {
		backgroundColor: "transparent",
		color: "rgb(0, 112, 247)",
		fontFamily: "ArialMT",
		fontSize: 30,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		letterSpacing: 0.38,
	},
	tipView: {
		backgroundColor: "transparent",
		position: "absolute",
		right: 3,
		width: 141,
		top: 0,
		height: 21,
		flexDirection: "row",
		alignItems: "center",
	},
	tipText: {
		backgroundColor: "transparent",
		color: "rgb(5, 5, 5)",
		fontFamily: "Arial-BoldMT",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0.2,
	},
	amountTwelveText: {
		backgroundColor: "transparent",
		color: "rgb(0, 112, 247)",
		fontFamily: "ArialMT",
		fontSize: 18,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
		letterSpacing: 0.22,
	},
	confirmPreorderButView: {
		backgroundColor: "rgb(0, 112, 247)",
		borderRadius: 20,
		shadowColor: "rgba(0, 0, 0, 0.4)",
		shadowRadius: 6,
		shadowOpacity: 1,
		alignSelf: "stretch",
		height: 50,
		justifyContent: "center",
		alignItems: "center",
	},
	pickUpPreorderTwoText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: "Arial-BoldMT",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
	},
})
