import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useState } from 'react';
import ShadowedBox from 'components/ShadowedBox';
import { ScrollView } from 'react-native-gesture-handler';
import Accordion from 'react-native-collapsible/Accordion';

export default function ManagerAvailableInventoryDetailedDataScreen({ navigation }) {

    const [activeSections, setSections] = useState([0]);
    const [activeStations, setStations] = useState([]);
    const sections = ['avail', 'assign'];
    const stations = ['1', '2']
    
	const images = {
		dropDownIcon: require('../assets/drop-down-arrow.png'),
		dropUpIcon: require('../assets/drop-up-arrow.png')
	}

	const items = [
        {key: 1, name: 'Bud Light', total: 24000, avail: 15984, assign: 8016, price: 12},
        {key: 2, name: 'Coors', total: 24000, avail: 15984, assign: 8016, price: 12},
        {key: 3, name: 'Smartwater', total: 12000, avail: 7992, assign: 4008, price: 12},
        {key: 4, name: 'Terrapin', total: 24000, avail: 15984, assign: 8016, price: 12},
        {key: 5, name: 'Truly', total: 24000, avail: 15984, assign: 8016, price: 12},
    ]
    
    const stationList = [
        {key: 1, name: '1', items: [
            {key: 1, name: 'Bud Light', total: 8016, avail: 7014,  price: 12},
            {key: 2, name: 'Coors', total: 8016, avail: 4008,  price: 12},
            {key: 3, name: 'Smartwater', total: 4008, avail: 4008,  price: 12},
            {key: 4, name: 'Terrapin', total: 8016, avail: 6012,  price: 12},
            {key: 5, name: 'Truly', total: 8016, avail: 2004, price: 12},
        ]},
        {key: 2, name: '2', items: [
            {key: 1, name: 'Bud Light', total: 8016, avail: 1002,  price: 12},
            {key: 2, name: 'Coors', total: 8016, avail: 4008,  price: 12},
            {key: 4, name: 'Terrapin', total: 8016, avail: 2004, price: 12},
            {key: 5, name: 'Truly', total: 8016, avail: 6012, price: 12},
        ]},
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
        if (stationList.findIndex(item => item.name === text) > -1) {
            stationList.map((station) => {
                if (station.name == text) {
                    station.items.map((item) => res += item.avail);
                }
            });
            return res;
        } else {
            items.map((item) => res += item[text]);
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
		if (text == null) {
			text = 'total'
        }
        let res = 0;
        if (stationList.findIndex(item => item.name === text) > -1) {
            stationList.map((station) => {
                if (station.name == text) {
                    station.items.map((item) => res += value(item, 'avail'));
                }
            });
            return res;
        } else {
            items.map((item) => res += value(item, text));
		    return res;
        }
		
	}

	const value = (item, text) => {
		return item[text] * item.price;
	}

	const getTitle = (text) => {
		if (text == 'avail') {
			return 'Available'
		} else if (text == 'assign'){
			return 'Assigned'
		} else {
            return 'Station ' + text
        }
	}

	const getImage = (text) => {
		let index = sections.findIndex(item => item === text)
		if (activeSections.findIndex(item => item === index) > -1) {
			return images.dropUpIcon
		} else {
			return images.dropDownIcon
		}
	}

	const formatNum = (num) => {
		return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	}

	const itemList = (text) => {
        if (text == 'avail') {
            return <View style={{marginLeft: 30}}>
                {items.map(item => {
                    return itemRow(item, text);
                })}
            </View>
        } else {
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
			{stationList.map((station) => { 
				if (station.name == text) {
					return station.items.map((item) => {
						return itemRow(item, 'avail');
					});
				}
			})}
		</View>
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
    }

	const listTitle = (text) => {
        let sum = 0
        if (text == 'avail' || text == 'assign') {
            sum = total()
        } else {
            sum = total('assign')
        }
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
						color: textColor(percent(total(text), sum)), 
						fontSize: 20,
						textAlign: "right",
						flex: 1
					}}>{percent(total(text), sum)}%</Text>
				</View>
				<View style={{
					width: "100%",
					flexDirection: "row",
					justifyContent: "space-between",
				}}>
					<Text style={styles.rowText}> Qty: {formatNum(total(text))} of {formatNum(sum)}</Text>
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
					<Text style={styles.sectionTitle}>Available Inventory:</Text>
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
					</View>
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