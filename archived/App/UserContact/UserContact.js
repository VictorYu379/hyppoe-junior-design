//
//  UserContact
//  Hyppoe
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


export default class UserContact extends React.Component {

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
					style={styles.titleSearchPartView}/>
				<View
					pointerEvents="box-none"
					style={{
						position: "absolute",
						left: 20,
						right: 30,
						top: 53,
						height: 81,
						flexDirection: "row",
						alignItems: "flex-start",
					}}>
					<Text
						style={styles.pageTitleContactText}>Contact Us!</Text>
					<Image
						source={require("./../../assets/images/back-button-2.png")}
						style={styles.backButtonImage}/>
					<View
						style={{
							flex: 1,
						}}/>
					<Image
						source={require("./../../assets/images/menu-button-2.png")}
						style={styles.menuButtonImage}/>
					<Image
						source={require("./../../assets/images/pocket.png")}
						style={styles.pocketImage}/>
				</View>
			</View>
	}
}

const styles = StyleSheet.create({
	viewView: {
		backgroundColor: "rgb(247, 247, 247)",
		flex: 1,
	},
	titleSearchPartView: {
		backgroundColor: "rgb(0, 112, 247)",
		shadowColor: "rgba(107, 127, 153, 0.3)",
		shadowRadius: 15,
		shadowOpacity: 1,
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 210,
	},
	pageTitleContactText: {
		color: "white",
		fontFamily: "Arial-BoldMT",
		fontSize: 28,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0.36,
		backgroundColor: "transparent",
		width: 306,
		marginTop: 49,
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
	pocketImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 20,
		height: 24,
	},
})
