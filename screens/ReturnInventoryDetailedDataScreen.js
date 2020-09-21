import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useState } from 'react';
import ShadowedBox from '../components/ShadowedBox';
import { ScrollView } from 'react-native-gesture-handler';
import Accordion from 'react-native-collapsible/Accordion';

export default function ReturnInventoryDetailedDataScreen({ navigation }) {

	const [activeSections, setSections] = useState([0]);
	const [activeStations, setStations] = useState([]);
	const sections = ['item', 'station'];
	const stations = ['1', '2']
	
	const images = {
		dropDownIcon: require('../assets/drop-down-arrow.png'),
		dropUpIcon: require('../assets/drop-up-arrow.png')
	}

	const returnList = [
		{key: 1, name: '1', items: [
			{key: 1, name: 'Bud Light', count: 25, price: 12},
			{key: 2, name: 'Coors', count: 15, price: 12},
			{key: 3, name: 'Smartwater', count: 30, price: 12},
		]},
		{key: 2, name: '2', items: [
			{key: 1, name: 'Coors', count: 10,  price: 12},
			{key: 2, name: 'Smartwater', count: 20, price: 12},
		]},
	]

	const returnListTotal = [
		{key: 1, name: 'Bud Light', count: 25, price: 12},
		{key: 2, name: 'Coors', count: 25, price: 12},
		{key: 3, name: 'Smartwater', count: 50, price: 12},
	]

	const total = (text) => {
		if (text == 'item' || text == 'station') {
			let res = 0;
			returnListTotal.map((item) => { res += item.count });
			return res;
		} else {
			let res = 0;
			returnList.map((station) => { 
				if (station.name == text) {
					station.items.map((item) => { res += item.count });
				}
			});
			return res;
		}
	}

	const percent = (a, b) => {
		if (Number(b) == 0) {
			return 0
		}
		return  Math.round(a * 100 / b);
	}

	const totalValue = (text) => {
		if (text == 'item' || text == 'station') {
			let res = 0;
			returnListTotal.map((item) => { res += value(item) });
			return res;
		} else {
			let res = 0;
			returnList.map((station) => { 
				if (station.name == text) {
					station.items.map((item) => { res += value(item) });
				}
			});
			return res;
		}
	}

	const value = (item) => {
		return item.count * item.price;
	}

	const formatNum = (num) => {
		return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	}

	const getTitle = (text) => {
		if (text == 'item') {
			return 'Items'
		} else if (text == 'station') {
			return 'Stations'
		} else {
			return 'Station ' + text
		}
	}

	const getImage = (text) => {
		if (text == 'item' || text == 'station') {
			let index = sections.findIndex(item => item === text)
			if (activeSections.findIndex(item => item === index) > -1) {
				return images.dropUpIcon
			} else {
				return images.dropDownIcon
			}
		} else {
			let index = stations.findIndex(item => item === text)
			if (activeStations.findIndex(item => item === index) > -1) {
				return images.dropUpIcon
			} else {
				return images.dropDownIcon
			}
		}
	}

	const itemRow = (item, text) => {
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
						color: '#0070F7', 
						fontSize: 20,
						textAlign: "right",
						flex: 1
					}}>{percent(item.count, total('item'))}%</Text>
				</View>
				<View style={{
					width: "100%",
					flexDirection: "row",
					justifyContent: "space-between",
				}}>
					<Text style={styles.rowText}> Qty: {formatNum(item.count)}</Text>
					<Text style={styles.rowText}>$ {formatNum(value(item))} </Text>
				</View>
			</View>
		);
	}

	const itemList = (text) => {
		if (text == 'item') {
			return <View style={{marginLeft: 30}}>
				{returnListTotal.map(item => {
					return itemRow(item, text);
				})}
			</View>
		}
		else {
			return <View style={{marginLeft: 30}}>
				<Accordion
					activeSections={activeStations}
					sections={stations}
					renderHeader={listTitle}
					renderContent={stationItemList}
					onChange={setStations}
					underlayColor='#f2f2f2'
					expandMultiple={true}
				/>
			</View>
		}
	}

	const stationItemList = (text) => {
		return <View style={{marginLeft: 30}}>
			{returnList.map((station) => { 
				if (station.name == text) {
					return station.items.map((item) => {
						return itemRow(item, text);
					});
				}
			})}
		</View>
	}

	const listTitle = (text) => {
		return (
			<View style={styles.rowView}>
				<View style={{
					width: "100%",
					height: 20,
					flexDirection: "row",
					justifyContent: "space-between",
					alignItems: "center"
				}}>
					<Text style={styles.rowTitle}>{getTitle(text)}:</Text>
					<Image 
						source={getImage(text)}
						style={{
							width: "5%",
							marginHorizontal: 10,
							tintColor: "grey"
						}}
						resizeMode="contain"
					/>
					<Text style={{
						...styles.rowTitle, 
						color: '#0070F7', 
						fontSize: 20,
						textAlign: "right",
						flex: 1
					}}>{percent(total(text), total('item'))}%</Text>
				</View>
				<View style={{
					width: "100%",
					flexDirection: "row",
					justifyContent: "space-between",
				}}>
					<Text style={styles.rowText}> Qty: {formatNum(total(text))}</Text>
					<Text style={styles.rowText}>$ {formatNum(totalValue(text))} </Text>
				</View>
			</View>
		);
	}

	return (
		<View style={styles.container}>
			<ShadowedBox width={'90%'} margin={10} justifyContent={'flex-start'}>
				<View style={{
					width: '90%',
					marginTop: 25,
                    marginBottom: 10,
                    flexDirection: "row",
                    justifyContent: "space-between",
					alignItems: "flex-start",
				}}>
					<Text style={styles.sectionTitle}>Return Inventory:</Text>
				</View>
                <View style = {{width: '90%', marginBottom: 25, maxHeight: '80%'}}>
                    <ScrollView>
						<Accordion
							activeSections={activeSections}
							sections={sections}
							renderHeader={listTitle}
							renderContent={itemList}
							onChange={setSections}
							underlayColor='#f2f2f2'
							expandMultiple={true}
						/>
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