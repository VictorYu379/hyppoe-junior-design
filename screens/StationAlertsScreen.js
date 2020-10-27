import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import ShadowedBox from 'components/ShadowedBox';
import { ScrollView } from 'react-native-gesture-handler';
import Event from 'model/Event'

export default function StationAlertsScreen({ navigation }) {

	const [alerts, setAlerts] = useState([]);

	useEffect(() => {
		setAlerts(Event.getAlerts());
	}, [])

	const textColor = (text) => {
        if (text == 'OFF') {
			return '#CD594A'
		}
        return '#51A760'
	}

	const alertList= alerts.map(alert => {
		return (
			<View style={styles.rowView}>
				<View style={{
                    flexDirection: 'column',
                    flex: 3,
				}}>
					<Text style={styles.rowTitle}>{alert.name}</Text>
					<Text style={styles.rowText}>{alert.type}</Text>
				</View>
				<Text style={{
                    ...styles.rowTitle, 
                    color: textColor(alert.rate), 
                    fontSize: 20,
                    textAlign: "right",
                    flex: 1
                }}>{alert.rate}</Text>
			</View>
		);
	});

	return (
		<View style={styles.container}>
			<ShadowedBox width={'90%'} margin={10}>
				<View style={{
					width: '90%',
					marginTop: 25,
                    marginBottom: 10,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
				}}>
					<Text style={styles.sectionTitle}>Alert Settings</Text>
                    <Text style={{...styles.rowTitle, marginBottom: 0}}>Rate of Alerts</Text>
				</View>
                <View style = {{width: '90%', marginBottom: 25, maxHeight: '85%'}}>
                    <ScrollView>
                        {alertList}
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
        flexDirection: "row",
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