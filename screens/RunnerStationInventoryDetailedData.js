import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ShadowedBox from '../components/ShadowedBox';
import { ScrollView } from 'react-native-gesture-handler';

export default function RunnerStationInventoryDetailedData({ navigation }) {

	const station = "1"

	const items = [
        {key: 1, name: 'Bud Light', total: 8016, avail: 2004, sold: 6012, price: 12},
        {key: 2, name: 'Coors', total: 8016, avail: 4008, sold: 4008, price: 12},
        {key: 3, name: 'Smartwater', total: 8016, avail: 7215, sold: 802, price: 12},
        {key: 4, name: 'Terrapin', total: 8016, avail: 7616, sold: 401, price: 12},
        {key: 5, name: 'Truly', total: 8016, avail: 7215, sold: 802, price: 12},
	]

	const textColor = (text) => {
		let rate = Number(text);
        if (rate < 26) {
			return '#F71E0C';
		} else if (rate < 70) {
			return '#E8BD38';
		}
        return '#1CD338';
	}

	const total = (text) => {
		if (text == null) {
			text = 'total'
		}
		let res = 0;
		items.map((item) => res += item[text]);
		return res;
	}

	const percent = (a, b) => {
		return  Math.floor(a * 100 / b);
	}

	const totalValue = (text) => {
		if (text == null) {
			text = 'total'
		}
		let res = 0;
		items.map((item) => res += value(item, text));
		return res;
	}

	const value = (item, text) => {
		return item[text] * item.price;
	}

	const formatNum = (num) => {
		return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	}

	const itemList = (text) => {
		return items.map(item => {
			return (
				<View style={styles.rowView}>
					<View style={{
						width: "100%",
						flexDirection: "row",
						justifyContent: "space-between",
					}}>
						<Text style={styles.rowTitle}>{item.name}</Text>
						<Text style={{
							...styles.rowTitle, 
							color: textColor(percent(item[text], item.total)), 
							fontSize: 20,
							textAlign: "right",
							flex: 1
						}}>{percent(item[text], item.total)}%</Text>
					</View>
					<View style={{
						width: "100%",
						flexDirection: "row",
						justifyContent: "space-between",
					}}>
						<Text style={styles.rowText}> Qty: {formatNum(item[text])} of {formatNum(item.total)}</Text>
						<Text style={styles.rowText}>$ {formatNum(value(item, text))} </Text>
					</View>
				</View>
			);
		});
	}

	const getTitle = (text) => {
		if (text == 'avail') {
			return 'Available'
		} else {
			return 'Sold'
		}
	}

	const listTitle = (text) => {
		return (
			<View style={styles.rowView}>
				<View style={{
					width: "100%",
					flexDirection: "row",
				}}>
					<Text style={styles.rowTitle}>{getTitle(text)}:</Text>
				</View>
				<View style={{
					width: "100%",
					flexDirection: "row",
					justifyContent: "space-between",
				}}>
					<Text style={styles.rowText}> Qty: {formatNum(total(text))} of {formatNum(total())}</Text>
					<Text style={styles.rowText}>$ {formatNum(totalValue(text))} </Text>
				</View>
			</View>
		);
	}

	return (
		<View style={styles.container}>
			<ShadowedBox width={'90%'} margin={10}>
				<View style={{
					width: '90%',
					marginTop: 25,
                    marginBottom: 10,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
				}}>
					<Text style={styles.sectionTitle}>Station {station} Inventory:</Text>
					<View style={{
						flexDirection: "column",
						justifyContent: "flex-end",
					}}>
						<Text style={{
							...styles.sectionTitle,
							color: textColor(percent(total('avail'), total('total'))),
							textAlign: 'right',
							fontSize: 30
						}}>{percent(total('avail'), total('total'))}%</Text>
						<Text style={{
							...styles.rowText,
							color: textColor(percent(total('avail'), total('total'))),
							fontSize: 14
						}}>Available Inventory</Text>
					</View>
				</View>
                <View style = {{width: '90%', marginBottom: 25, maxHeight: '80%'}}>
                    <ScrollView>
						{listTitle('avail')}
						<View style={{
							marginLeft: 30
						}}>
							{itemList('avail')}
						</View>
						{listTitle('sold')}
						<View style={{
							marginLeft: 30
						}}>
							{itemList('sold')}
						</View>
                    </ScrollView>
                </View>
			</ShadowedBox>
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
	rowView: {
        width: "100%",
        flexDirection: "column",
		justifyContent: "space-between",
		alignItems: "flex-end",
		borderBottomColor: "grey",
        borderBottomWidth: StyleSheet.hairlineWidth,
        padding: 5,
	},
	sectionTitle: {
        color: "black",
        fontFamily: "Arial-BoldMT",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "left",
	},
	rowTitle: {
        color: "#5C5A5A",
        fontFamily: "Arial-BoldMT",
        fontSize: 16,
        fontWeight: "bold",
		textAlign: "left",
		marginBottom: 2,
	},
	rowText: {
        color: "#5C5A5A",
        fontFamily: "Arial",
		fontSize: 16,
		fontWeight: "normal",
        textAlign: "left",
    }
});