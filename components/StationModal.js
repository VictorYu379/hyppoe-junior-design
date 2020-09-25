import React from "react"
import { Alert, StyleSheet, Text, View, TouchableHighlight, Modal, KeyboardAvoidingView } from "react-native"
import { TextInput } from "react-native-gesture-handler"

export default class StationModal extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            modalVisible: false,
            Station: {
                Name: "",
                Servers: 4,
                Runners: 2,
                Details: "",
            }
        }
    }

    updateStation(key, val) {
        if (Number(val) < 0) {
            val = 0;
        }
        this.setState({Station: {...this.state.Station, [key]: val}})
    }

    render() {
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={this.props.visible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
            }}>
                <KeyboardAvoidingView 
                    style={styles.centeredView}
                    behavior="padding"
                >
                    <View style={styles.modalView}>
                        <TextInput
                            style={styles.sectionTitle}
                            onChangeText={text => this.updateStation("Name", text)}
                            placeholder="Enter Station Name ..."
                            value={this.state.Station.Name}
                            />
                        
                        <View style={styles.rowView}>
                            <Text 
                                style={{
                                    ...styles.textStyle,
                                    textAlign: "left",
                                    flex: 1
                                }}> 
                                Servers:
                            </Text>
                            <TextInput
                                style={{
                                    ...styles.sectionTitle,
                                    textAlign: "right",
                                    flex: 1
                                }}
                                onChangeText={text => this.updateStation("Servers", text)}
                                value={this.state.Station.Servers.toString()}
                                />
                        </View>
                        <View style={styles.rowView}>
                            <TouchableHighlight
                                style={{
                                    ...styles.clickButton,
                                }}
                                underlayColor='grey'
                                onPress={() => { this.updateStation("Servers", (this.state.Station.Servers+1)) }}>
                                <Text style={styles.textStyle}> + </Text>
                            </TouchableHighlight>
                            <TouchableHighlight
                                style={{
                                    ...styles.clickButton,
                                    backgroundColor: "white",
                                    borderColor: "#D2D2D2",
                                    borderWidth: 1,
                                }}
                                underlayColor='grey'
                                onPress={() => { this.updateStation("Servers", (this.state.Station.Servers-1)) }}>
                                <Text style={styles.textStyle}> - </Text>
                            </TouchableHighlight>
                        </View>

                        <View style={styles.rowView}>
                            <Text 
                                style={{
                                    ...styles.textStyle,
                                    textAlign: "left",
                                    flex: 1
                                }}> 
                                Runners:
                            </Text>
                            <TextInput
                                style={{
                                    ...styles.sectionTitle,
                                    textAlign: "right",
                                    flex: 1
                                }}
                                onChangeText={text => this.updateStation("Runners", text)}
                                value={this.state.Station.Runners.toString()}
                                />
                        </View>
                        <View style={styles.rowView}>
                            <TouchableHighlight
                                style={{
                                    ...styles.clickButton,
                                }}
                                underlayColor='grey'
                                onPress={() => { this.updateStation("Runners", (this.state.Station.Runners+1)) }}>
                                <Text style={styles.textStyle}> + </Text>
                            </TouchableHighlight>
                            <TouchableHighlight
                                style={{
                                    ...styles.clickButton,
                                    backgroundColor: "white",
                                    borderColor: "#D2D2D2",
                                    borderWidth: 1,
                                }}
                                underlayColor='grey'
                                onPress={() => { this.updateStation("Runners", (this.state.Station.Runners-1)) }}>
                                <Text style={styles.textStyle}> - </Text>
                            </TouchableHighlight>
                        </View>

                        <Text style={styles.sectionTitle}> Details: </Text>
                        <TextInput
                            style={{
                                ...styles.textStyle,
                                textAlign: "left", 
                                borderColor: 'gray', 
                                borderWidth: 1,
                                width: "98%",
                                marginTop: 5,
                                marginLeft: 5,
                                marginBottom: 10,
                                fontSize: 14
                            }}
                            multiline={true}
                            onChangeText={text => this.updateStation("Details", text)}
                            placeholder="Notes ..."
                            value={this.state.Station.Details}
                            />
                        
                        <TouchableHighlight
                            style={styles.openButton}
                            underlayColor='grey'
                            onPress={() => this.props.onSave()}>
                            <Text style={styles.textStyle}>Save</Text>
                        </TouchableHighlight>
                    </View>
                </KeyboardAvoidingView>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: "85%"
    },
    rowView: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 2
    },
    openButton: {
        backgroundColor: "#B0CCF0",
        borderRadius: 20,
        width: "50%",
        padding: 5
    },
    clickButton: {
        backgroundColor: "#B0CCF0",
        borderRadius: 15,
        width: "48%"
    },
    textStyle: {
        color: "black",
        fontFamily: "Arial-BoldMT",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center"
    },
    sectionTitle: {
        color: "black",
        fontFamily: "Arial-BoldMT",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "left",
        borderBottomColor: "grey",
        borderBottomWidth: StyleSheet.hairlineWidth,
        width: "100%"
    }
  });