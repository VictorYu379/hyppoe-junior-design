import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import ShadowedBox from 'components/ShadowedBox';
import { ScrollView } from 'react-native-gesture-handler';
import Accordion from 'react-native-collapsible/Accordion';
import Station, { getGlobalStation } from 'model/Station';

export default function IndividualStationInventoryDetailedDataScreen({ route, navigation }) {

	const stationId = route.params['stationId'];

	const [station, setStation] = useState(" ");
	const [activeSections, setSections] = useState([0]);
	const [activeTablets, setActiveTablets] = useState([0]);
	const [tablets, setTablets] = useState([]);
	const [availItems, setAvail] = useState([]);
	const [soldItems, setSold] = useState([]);
	const [totalItems, setTotal] = useState([]);
	const sections = ['avail', 'sold'];
	const images = {
		dropDownIcon: require('assets/drop-down-arrow.png'),
		dropUpIcon: require('assets/drop-up-arrow.png')
	}

	useEffect(() => {
		var station = getGlobalStation(stationId);
		setStation(station.key);
		var [avail, sold, total] = Station.getDetailedData(stationId);
		setAvail(avail);
		setSold(sold);
		setTotal(total);
		var tabletIds = [];
		sold.map(tablet => {
			tabletIds.push(tablet.tabletId);
		});
		setTablets(tabletIds);
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
		} else if (text == 'sold') {
			soldItems.map(tablet => {
				tablet.sold.map(item => res += item.sold);
			});
		} else {
			soldItems.map(tablet => {
				if (tablet.tabletId == text) {
					tablet.sold.map(item => res += item.sold);
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
		} else if (text == 'sold') {
			soldItems.map(tablet => {
				tablet.sold.map(item => res += item.sold * item.price);
			});
		} else {
			soldItems.map(tablet => {
				if (tablet.tabletId == text) {
					tablet.sold.map(item => res += item.sold * item.price);
				}
			});
		}
		return res;
	}

	const getTitle = (text) => {
		if (text == 'avail') {
			return 'Available'
		} else {
			return 'Sold'
		}
	}

	const getImage = (text) => {
		if (text == 'avail' || text == 'sold') {
			let index = sections.findIndex(item => item === text)
			if (activeSections.findIndex(item => item === index) > -1) {
				return images.dropUpIcon
			} else {
				return images.dropDownIcon
			}
		} else {
			let index = tablets.findIndex(item => item === text)
			if (activeTablets.findIndex(item => item === index) > -1) {
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

	const tabletItemList = (text) => {
		let tablet = soldItems.find(item => item.tabletId == text);
		return <View style={{marginLeft: 30}}>
			{tablet.sold.map(item => {
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
								color: textColor(percent(item.sold, totalItems[item.key])), 
								fontSize: 20,
								textAlign: "right",
								flex: 1
							}}>{percent(item.sold, totalItems[item.key])}%</Text>
						</View>
						<View style={{
							width: "100%",
							flexDirection: "row",
							justifyContent: "space-between",
						}}>
							<Text style={styles.rowText}> Qty: {formatNum(item.sold)} of {formatNum(totalItems[item.key])}</Text>
							<Text style={styles.rowText}>$ {formatNum(item.sold * item.price)} </Text>
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
					activeSections={activeTablets}
					sections={tablets}
					renderHeader={listTitle}
					renderContent={tabletItemList}
					onChange={setActiveTablets}
					underlayColor='#f2f2f2'
					expandMultiple={true}
				/>
			</View>
		}
	}

	const listTitle = (text) => {
		if (text == 'avail' || text == 'sold') {
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
						<Text style={styles.rowTitle}>Tablet {text}:</Text>
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
							color: textColor(percent(total(text), total('sold'))), 
							fontSize: 20,
							textAlign: "right",
							flex: 1
						}}>{percent(total(text), total('sold'))}%</Text>
					</View>
					<View style={{
						width: "100%",
						flexDirection: "row",
						justifyContent: "space-between",
					}}>
						<Text style={styles.rowText}> Qty: {formatNum(total(text))} of {formatNum(total('sold'))}</Text>
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