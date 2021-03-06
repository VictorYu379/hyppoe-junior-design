import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import ShadowedBox from 'components/ShadowedBox';
import { ScrollView } from 'react-native-gesture-handler';
import Accordion from 'react-native-collapsible/Accordion';
import Inventory from 'model/Inventory';

export default function ManagerAvailableInventoryDetailedDataScreen({ navigation }) {

	const [activeSections, setSections] = useState([0]);
	const [activeStations, setActiveStations] = useState([0]);
	const [stations, setStations] = useState([]);
	const [availItems, setAvail] = useState([]);
	const [assignedItems, setAssigned] = useState([]);
	const [totalItems, setTotal] = useState([]);
	const sections = ['avail', 'assign'];
	const images = {
		dropDownIcon: require('assets/drop-down-arrow.png'),
		dropUpIcon: require('assets/drop-up-arrow.png')
	}

	useEffect(() => {
		var [avail, assign, total] = Inventory.getDetailedData(); 
		setAvail(avail);
		setAssigned(assign);
		setTotal(total);
		var stationKeys = [];
		assign.map(station => {
			stationKeys.push(station.stationKey);
		});
		setStations(stationKeys);
	}, [])

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
		let res = 0;
		if (text == 'total') {
			totalItems.map(num => res += num);
		} else if (text == 'avail') {
			availItems.map(item => res += item.avail);
		} else if (text == 'assign') {
			assignedItems.map(station => {
				station.assign.map(item => res += item.assign);
			});
		} else {
			assignedItems.map(station => {
				if (station.stationKey == text) {
					station.assign.map(item => res += item.assign);
				}
			});
		}
		return res;
	}

	const percent = (a, b) => {
		if (Number(b) == 0) {
			return 0
		}
		return  Math.round(a * 100 / b);
	}

	const totalValue = (text) => {
		let res = 0;
		if (text == 'total') {
			availItems.map(item => res += total[item.key] * item.price);
		} else if (text == 'avail') {
			availItems.map(item => res += item.avail * item.price);
		} else if (text == 'assign') {
			assignedItems.map(station => {
				station.assign.map(item => res += item.assign * item.price);
			});
		} else {
			assignedItems.map(station => {
				if (station.stationKey == text) {
					station.assign.map(item => res += item.assign * item.price);
				}
			});
		}
		return res;
	}

	const getTitle = (text) => {
		if (text == 'avail') {
			return 'Available'
		} else {
			return 'Assigned'
		}
	}

	const getImage = (text) => {
		if (text == 'avail' || text == 'assign') {
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

	const formatNum = (num) => {
		if (num != null) {
			return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
		}
	}

	const stationItemList = (text) => {
		let station = assignedItems.find(item => item.stationKey == text);
		return <View style={{marginLeft: 30}}>
			{station.assign.map(item => {
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
								color: textColor(percent(item.assign, totalItems[item.key])), 
								fontSize: 20,
								textAlign: "right",
								flex: 1
							}}>{percent(item.assign, totalItems[item.key])}%</Text>
						</View>
						<View style={{
							width: "100%",
							flexDirection: "row",
							justifyContent: "space-between",
						}}>
							<Text style={styles.rowText}> Qty: {formatNum(item.assign)} of {formatNum(totalItems[item.key])}</Text>
							<Text style={styles.rowText}>$ {formatNum(item.assign * item.price)} </Text>
						</View>
					</View>
				);
			})}
		</View>
	}

	const itemList = (text) => {
		if (text == 'avail') {
			return <View style={{marginLeft: 30}}>
				{availItems.map(item => {
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
									color: textColor(percent(item.avail, totalItems[item.key])), 
									fontSize: 20,
									textAlign: "right",
									flex: 1
								}}>{percent(item.avail, totalItems[item.key])}%</Text>
							</View>
							<View style={{
								width: "100%",
								flexDirection: "row",
								justifyContent: "space-between",
							}}>
								<Text style={styles.rowText}> Qty: {formatNum(item.avail)} of {formatNum(totalItems[item.key])}</Text>
								<Text style={styles.rowText}>$ {formatNum(item.avail * item.price)} </Text>
							</View>
						</View>
					);
				})}
			</View>
		} else {
			return <View style={{marginLeft: 30}}>
				<Accordion
					activeSections={activeStations}
					sections={stations}
					renderHeader={listTitle}
					renderContent={stationItemList}
					onChange={setActiveStations}
					underlayColor='#f2f2f2'
					expandMultiple={true}
				/>
			</View>
		}
	}

	const listTitle = (text) => {
		if (text == 'avail' || text == 'assign') {
			return (
				<View style={styles.rowView}>
					<View style={{
						width: "100%",
						height: 20,
						flexDirection: "row",
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
					</View>
					<View style={{
						width: "100%",
						flexDirection: "row",
						justifyContent: "space-between",
					}}>
						<Text style={styles.rowText}> Qty: {formatNum(total(text))} of {formatNum(total('total'))}</Text>
						<Text style={styles.rowText}>$ {formatNum(totalValue(text))} </Text>
					</View>
				</View>
			);
		} else {
			return (
				<View style={styles.rowView}>
					<View style={{
						width: "100%",
						height: 20,
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center"
					}}>
						<Text style={styles.rowTitle}>Station {text}:</Text>
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
							color: textColor(percent(total(text), total('assign'))), 
							fontSize: 20,
							textAlign: "right",
							flex: 1
						}}>{percent(total(text), total('assign'))}%</Text>
					</View>
					<View style={{
						width: "100%",
						flexDirection: "row",
						justifyContent: "space-between",
					}}>
						<Text style={styles.rowText}> Qty: {formatNum(total(text))} of {formatNum(total('assign'))}</Text>
						<Text style={styles.rowText}>$ {formatNum(totalValue(text))} </Text>
					</View>
				</View>
			);
		}		
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
						<Text style={{
							...styles.rowText,
							color: textColor(percent(total('avail'), total('total'))),
							fontSize: 14
						}}>Available Inventory</Text>
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