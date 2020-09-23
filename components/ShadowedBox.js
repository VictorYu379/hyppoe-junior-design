import { StyleSheet, View, TouchableOpacity } from 'react-native';
import * as React from 'react';

export default function ShadowedBox(props) {
	if (props.hidden) {
		return (
			<View></View>
		);
	}
	return props.touchable == null ? (
		<View style={[styles.shadowView, {
			width: props.width,
			height: props.height,
			aspectRatio: props.square ? 1 : null,
			margin: props.margin,
			justifyContent: (props.justifyContent == null) ? 'center' : props.justifyContent,
			backgroundColor: 'white'
		}]}>
			{props.greyed &&
				<View style={{
					width: '100%',
					height: '100%',
					backgroundColor: 'rgba(242, 242, 242, 0.7)',
					zIndex: 2,
					position: 'absolute',
					borderRadius: 15,
				}} />
			}
			{props.children}
		</View>

	) : (
		<TouchableOpacity
			style={[styles.shadowView, {
				width: props.width,
				height: props.height,
				aspectRatio: props.square ? 1 : null,
				margin: props.margin,
				justifyContent: (props.justifyContent == null) ? 'center' : props.justifyContent,
				backgroundColor: 'white'
			}]}
			onPress={props.onPress}
			disabled={props.disabled}>
			{props.greyed &&
				<View style={{
					width: '100%',
					height: '100%',
					backgroundColor: 'rgba(242, 242, 242, 0.7)',
					zIndex: 2,
					position: 'absolute',
					borderRadius: 15,
				}} />
			}
			{props.children}
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	shadowView: {
		backgroundColor: 'white',
		borderRadius: 15,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.29,
		shadowRadius: 4.65,
		elevation: 7,
		alignItems: 'center',
		justifyContent: 'center',
	},
})