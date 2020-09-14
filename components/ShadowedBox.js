import { StyleSheet, View} from 'react-native';
import * as React from 'react';

export default function ShadowedBox(props) {
	return (
		<View style={[styles.shadowView, {
			width: props.width,
			height: props.height,
			aspectRatio: props.square ? 1 : null,
			margin: props.margin
		}]}>
			{props.children}
		</View>
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