import React from "react"
import { Alert, StyleSheet, Text, View, TouchableHighlight, Modal, KeyboardAvoidingView } from "react-native"
import { TextInput } from "react-native-gesture-handler"

export default class PairItemModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modalVisible: false,
            Item: {
                Name: "Pair Item: 12 Ounce Cups",
                Quantity: 1,
                Ounces: 0,
                Details: "",
            }
        }
    }

    setModalVisible(val) {
        this.setState({modalVisible: val});
    }

    updateItem(key, val) {
        if (Number(val) < 0) {
            val = 0;
        }
        this.setState({Item: {...this.state.Item, [key]: val}})
    }

	render() {
        return (
                <View style={styles.centeredView}>
                    {/* Below is the modal for pop up module */} 
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
                                    onChangeText={text => this.updateItem("Name", text)}
                                    value={this.state.Item.Name}
                                    />
                                
                                <View style={styles.rowView}>
                                    <Text 
                                        style={{
                                            ...styles.textStyle,
                                            textAlign: "left",
                                            flex: 1
                                        }}> 
                                        Quantity:
                                    </Text>
                                    <TextInput
                                        style={{
                                            ...styles.sectionTitle,
                                            textAlign: "right",
                                            flex: 1
                                        }}
                                        onChangeText={text => this.updateItem("Quantity", text)}
                                        value={this.state.Item.Quantity.toString()}
                                        />
                                </View>
                                <View style={styles.rowView}>
                                    <TouchableHighlight
                                        style={{
                                            ...styles.clickButton,
                                        }}
                                        onPress={() => { this.updateItem("Quantity", (this.state.Item.Quantity+1)) }}>
                                        <Text style={styles.textStyle}> + </Text>
                                    </TouchableHighlight>
                                    <TouchableHighlight
                                        style={{
                                            ...styles.clickButton,
                                            backgroundColor: "white",
                                            borderColor: "#D2D2D2",
                                            borderWidth: 1,
                                        }}
                                        onPress={() => { this.updateItem("Quantity", (this.state.Item.Quantity-1)) }}>
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
                                        Ounces:
                                    </Text>
                                    <TextInput
                                        style={{
                                            ...styles.sectionTitle,
                                            textAlign: "right",
                                            flex: 1
                                        }}
                                        onChangeText={text => this.updateItem("Ounces", text)}
                                        value={this.state.Item.Ounces.toString()}
                                        />
                                </View>
                                <View style={styles.rowView}>
                                    <TouchableHighlight
                                        style={{
                                            ...styles.clickButton,
                                        }}
                                        onPress={() => { this.updateItem("Ounces", (this.state.Item.Ounces+1)) }}>
                                        <Text style={styles.textStyle}> + </Text>
                                    </TouchableHighlight>
                                    <TouchableHighlight
                                        style={{
                                            ...styles.clickButton,
                                            backgroundColor: "white",
                                            borderColor: "#D2D2D2",
                                            borderWidth: 1,
                                        }}
                                        onPress={() => { this.updateItem("Ounces", (this.state.Item.Ounces-1)) }}>
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
                                    onChangeText={text => this.updateItem("Details", text)}
                                    placeholder="Notes ..."
                                    value={this.state.Item.Details}
                                    />
                                
                                <TouchableHighlight
                                    style={styles.openButton}
                                    onPress={() => {
                                        this.props.onSave();
                                    }}>
                                    <Text style={styles.textStyle}>Save</Text>
                                </TouchableHighlight>
                            </View>
                        </KeyboardAvoidingView>
                    </Modal>
                </View>
        )
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