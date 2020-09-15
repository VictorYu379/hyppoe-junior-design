import { StyleSheet, Text, View, TouchableOpacity, Image, Header } from 'react-native';
import * as React from 'react';

export default function HyppoeHeader(props) {
	return (
		<View
			style={{
				height: 120,
				paddingHorizontal: 30,
				justifyContent: 'flex-end',
				overflow: 'hidden'
			}}>
			<Image
				style={StyleSheet.absoluteFill}
				source={require('../assets/top-image-8.png')}
			/>
			<View 
				style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems: 'center',
					marginBottom: 10
				}}>
				<TouchableOpacity onPress={props.navigation.goBack}>
					<Image source={require('../assets/back-button.png')} />
				</TouchableOpacity>
				<View
					style={{
						width: 70,
						flexDirection: 'row',
						justifyContent: 'flex-end',
						alignItems: 'center'
					}}>
					<TouchableOpacity>
						<Image
							source={require('../assets/menu-button.png')}
							style={{height: 30, resizeMode: 'contain', margin: 10}}/>
					</TouchableOpacity>
					{props.mode === "full" &&
						<TouchableOpacity>
							<Image
								source={require('../assets/pocket.png')}
								style={{height: 30, resizeMode: 'contain', marginLeft: 10}}/>
						</TouchableOpacity>
					}
				</View>
			</View>
		</View>
	)
}