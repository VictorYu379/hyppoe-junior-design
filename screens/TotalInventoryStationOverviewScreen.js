import { StyleSheet, Text, View, Image, TouchableHighlight, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import ShadowedBox from '../components/ShadowedBox';

export default function DummyScreen({ navigation }) {
	const [stationModalVisible, setStationModalVisible] = useState(false);

	const imageList = [
		require('../assets/event-logo.png'),
		require('../assets/coorslight.jpg'),
		require('../assets/terrapin.png'),
		require('../assets/truly.jpeg'),
		require('../assets/smartwater.png'),
		require('../assets/cup.jpg'),
	]
	const iconList = imageList.map(img => {
		return (
			<ShadowedBox width={'40%'} square margin={5}>

				<View style={{
					flexDirection: 'row',
					margin: 5,
					height: '80%',
					alignItems: 'center',
					// borderWidth: 1,
				}}>

					<Image 
						source={img}
						style={{
							width: '60%',
							height: '100%',
							justifyContent: 'flex-start',
							alignItems: 'flex-start',
							borderRadius: 15,
							overflow: 'hidden',
							resizeMode: 'contain',
							marginHorizontal: 2
							// borderWidth: 5
						}} />



					<View style={{
						width: '40%',
						height: '50%',
						flexDirection: 'column',
						justifyContent: 'flex-end',
						alignItems: 'flex-end',
					}}>
						<Text style={{fontSize: 13, fontWeight: 'bold', color: 'gray'}}> ItemNamePlaceHolder</Text>
						<Text style={{fontSize: 13, color: 'gray'}}>Runners:      2</Text>
					</View>
					
				</View>


			</ShadowedBox>
		);
	});

	return (
		<View style={styles.container}>
			<ShadowedBox width={'80%'} height={'20%'} margin={10}>


				<View style={{
							flexDirection: 'row',
							justifyContent: 'center',
							alignItems: 'center',
				}}>


					<View style={{
							width: '70%',
							//height: '40%',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							margin: 10
					}}>
						<View style={{
							width: '70%',
							height: '50%',
							flexDirection: 'column',
							justifyContent: 'flex-start',
							alignItems: 'flex-start',
						}}>
							<Text style={{fontSize: 17, fontWeight: 'bold', fontFamily: 'Arial'}}>
								Station 1:
							</Text>
							<Text style={{fontSize: 13, color: 'gray'}}>40,080 of 40,080 Qty $480,960</Text>
						</View>


						<View style={{
							width: '70%',
							height: '50%',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
						}}>
							<Text style={{fontSize: 13, color: 'gray'}}>Servers:      4</Text>
							<Text style={{fontSize: 13, color: 'gray'}}>Runners:      2</Text>
						</View>
					</View>








					<View style={{
							width: '30%',
							height: '80%',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							marginRight: 20
					}}>
						<Text style={{fontSize: 24, color: 'dodgerblue', fontWeight: 'bold', fontFamily: 'Arial'}}>
								100%
						</Text>
						<Text style={{fontSize: 13, color: 'dodgerblue', fontWeight: 'bold', fontFamily: 'Arial'}}>
								Available Inventory
						</Text>
					</View>

		

				</View>



			</ShadowedBox>


			<View style={{
				flexWrap: 'wrap',
				flexDirection: 'row',
				justifyContent: 'center',
				width: '100%',
				//height: '60%',
				paddingLeft: '2%'
			}}>
				{iconList}

			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f2f2f2',
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
	normalText: {
		fontSize: 17,
		fontFamily: 'Arial'
	}
});