//
//  UserWelcome
//  Hyppoe
//
//  Created by [Author].
//  Copyright © 2018 [Company]. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"


export default class UserWelcome extends React.Component {

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
					source={require("./../../assets/images/the-cantainer---hippo-icon.png")}
					style={styles.theCantainerHippImage}/>
				<Text
					style={styles.theCantainerText}>Thirsty Hippo</Text>
			</View>
	}
}

const styles = StyleSheet.create({
	viewView: {
		backgroundColor: "rgb(0, 112, 247)",
		flex: 1,
		alignItems: "flex-start",
	},
	theCantainerHippImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 125,
		height: 125,
		marginLeft: 120,
		marginTop: 281,
	},
	theCantainerText: {
		color: "white",
		fontFamily: "Arial-BoldMT",
		fontSize: 32,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "left",
		letterSpacing: 0.4,
		backgroundColor: "transparent",
		width: 292,
		marginLeft: 20,
		marginTop: 144,
	},
})
