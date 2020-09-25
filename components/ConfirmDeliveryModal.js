import React from "react"
import { Alert, StyleSheet, Text, View, TouchableHighlight, Modal, Image, TouchableOpacity } from "react-native"
import { TextInput } from "react-native-gesture-handler"
import MyCheckBox from "./MyCheckBox"

// Both pick up and drop off template, pass parameter to get either drop off or pick up.
export default class ConfirmDeliveryModal extends React.Component {
    static navigationOptions = ({ navigation }) => {
		const { params = {} } = navigation.state
        return {
            headerShown: false,
            headerLeft: () => null,
            headerRight: () => null
        }
    }
    
    // Pass paired item from parent class.
    constructor(props) {
        super(props)

        var paired = new Map();
        for (item of this.props.pairedItems) {
            paired.set(item, true);
        }
        this.state = {
            modalVisible: false,
            Item: {
                Paired: paired,
                Name: this.props.drinkName,
                Unit: 10,
                Pack: 2,
                AssignedQuantity: 20,
                ConfirmQuantity: 20,
                Quantity: 0,
                TotalQuantity: 100,
                CurrentQuantity: 50,
                Price: 10,
                Details: "",
            }
        }
        this.pairdItemList = this.getPairedItemList(this.props.pairedItems)
    }

    getPairedItemList(itemList) {
        return itemList.map(item => {
            return (
                <View style={styles.rowView}>
                    <Text style={styles.checkBoxTextStyle}> 
                        {item}:
                    </Text>
                    <MyCheckBox
                        checkedImage={require('../assets/checked.png')}
                        uncheckedImage={require('../assets/unchecked.png')}
                        checked={this.state.Item.Paired.get(item)}
                        handlePress={(() => this.updatePiaredItem(item, !this.state.Item.Paired.get(item))).bind(this)}
                        />
                </View>
            );
        });
    }
     
    setModalVisible(val) {
        this.setState({modalVisible: val});
    }

    updateItem(key, val) {
        if (Number(val) < 0) {
            val = 0;
        }
        this.setState({Item: {...this.state.Item, [key]: Number(val)}});
    }

    updatePiaredItem(key, val) {
        if (Number(val) < 0) {
            val = 0;
        }
        const p = this.state.Item.Paired;
        p.set(key, val);
        this.setState({Item: {...this.state.Item, Paired: p}});
    }

    updateQuantity(val) {
        if (Number(val) < 0) {
            val = 0;
        }
        this.setState({
            Item: {
                ...this.state.Item, 
                Pack: 0,
                Unit: 0,
                Quantity: Number(val),
                ConfirmQuantity: Number(val),
            }
        });
    }

    updateUnit(val) {
        if (Number(val) < 0) {
            val = 0;
        } 
        this.setState({
            Item: {
                ...this.state.Item, 
                Unit: Number(val),
                Quantity: 0,
                ConfirmQuantity: this.state.Item.Pack * Number(val),
            }
        });
    }
    
    updatePack(val) {
        if (Number(val) < 0) {
            val = 0;
        }
        this.setState({
            Item: {
                ...this.state.Item, 
                Pack: Number(val),
                Quantity: 0,
                ConfirmQuantity: this.state.Item.Unit * Number(val),
            }
        });
    }

    getPercentage() {
        return  Math.round(this.state.Item.CurrentQuantity)/Math.max(this.state.Item.TotalQuantity, 1) * 100;    
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
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={{
                            ...styles.rowView,
                            height: 110
                        }}>
                            <View style={{
                                width: 100
                            }}>
                                <Image
                                    style={{
                                        width: 100,
                                        height: 100,
                                        borderRadius: 15,
                                        overflow: 'hidden',
                                        resizeMode: 'contain'
                                    }}
                                    source={this.props.sourceImg}
                                />
                            </View>
                            <View style={{
                                flexDirection:"column",
                                width:100
                            }}>
                                <TextInput
                                style={{
                                    ...styles.sectionTitle,
                                    width: 100,
                                    fontSize: 20,
                                    lineHeight: 20,
                                }}
                                multiline={true}
                                onChangeText={text => this.updateItem("Name", text)}
                                value={this.state.Item.Name}
                                />
                                <Text style={{
                                    fontSize: 12
                                }}>                        
                                    {this.state.Item.CurrentQuantity} of {this.state.Item.TotalQuantity} Qty
                                </Text>
                                <Text tyle={{
                                    fontSize: 12
                                }}>
                                    ${this.state.Item.Price * this.state.Item.CurrentQuantity}
                                </Text>
                            </View>
                            <View style={{
                                width: 100,
                                flexDirection:"column-reverse",
                                alignContent: "center"
                            }}>
                                <Text style={{
                                    fontSize: 12,
                                }}> 
                                    Available Inventory
                                </Text>
                                <Text style={{
                                    color: ((this.getPercentage() >= 26) ? 
                                                ((this.getPercentage() <= 69) ?
                                                    "orange" : 
                                                    "green") :
                                                "red"),
                                    fontSize: 30,
                                }}>
                                    {this.getPercentage()}%
                                </Text>
                                
                            </View>  
                        </View>
                        <View style={styles.rowView}>
                            <Text 
                                style={{
                                    ...styles.textStyle,
                                    textAlign: "left",
                                    flex: 1
                                }}> 
                                Pick Up: Main Inventory
                            </Text>
                        </View>
                        <View style={styles.rowView}>
                            <Image
                                style={{
                                    ...StyleSheet.absoluteFill,
                                }}
                                source={require('../assets/Seperator.png')}
                            />
                        </View>
                        <View style={styles.rowView}>
                            <Text 
                                style={{
                                    ...styles.textStyle,
                                    textAlign: "left",
                                    flex: 1
                                }}> 
                                Drop Off: Station 1 - Big Tent
                            </Text>
                        </View>
                        <View style={styles.rowView}>
                            <Image
                                style={{
                                    ...StyleSheet.absoluteFill,
                                }}
                                source={require('../assets/Seperator.png')}
                            />
                        </View>
                        <View style={styles.rowView}>
                            <Text 
                                style={{
                                    ...styles.textStyle,
                                    textAlign: "left",
                                    flex: 1
                                }}> 
                                Assigned Quantity:
                            </Text>
                            <TextInput
                                style={{
                                    ...styles.sectionTitle,
                                    textAlign: "right",
                                    flex: 1
                                }}
                                onChangeText={text => this.updateAssignedQuantity(text)}
                                value={this.state.Item.AssignedQuantity.toString()}
                                />
                        </View>
                        <View style={styles.rowView}>
                            <TouchableHighlight
                                style={{
                                    ...styles.clickButton,
                                }}
                                onPress={() => { this.updateItem("AssignedQuantity", this.state.Item.AssignedQuantity + 1) }}>
                                <Text style={styles.textStyle}> + </Text>
                            </TouchableHighlight>
                            <TouchableHighlight
                                style={{
                                    ...styles.clickButton,
                                    backgroundColor: "white",
                                    borderColor: "#D2D2D2",
                                    borderWidth: 1,
                                }}
                                onPress={() => { this.updateItem("AssignedQuantity", this.state.Item.AssignedQuantity - 1) }}>
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
                                Unit:
                            </Text>
                            <TextInput
                                style={{
                                    ...styles.sectionTitle,
                                    textAlign: "right",
                                    flex: 1
                                }}
                                onChangeText={text => this.updateUnit(text)}
                                value={this.state.Item.Unit.toString()}
                                />   
                        </View>
                        <View style={styles.rowView}>
                            <Text 
                                style={{
                                    ...styles.textStyle,
                                    textAlign: "left",
                                    flex: 1
                                }}> 
                                Pack:
                            </Text>
                            <TextInput
                                style={{
                                    ...styles.sectionTitle,
                                    textAlign: "right",
                                    flex: 1
                                }}
                                onChangeText={text => this.updatePack(text)}
                                value={this.state.Item.Pack.toString()}
                                />   
                        </View>
                        <View style={{
                            ...styles.rowView
                        }}>
                            <Text
                                style={{color:"gray"}}
                            >
                                Or
                            </Text>
                        </View>
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
                                onChangeText={text => this.updateQuantity(text)}
                                value={this.state.Item.Quantity.toString()}
                                />   
                        </View>
                        <View style={styles.rowView}>
                            <Text 
                                style={{
                                    ...styles.textStyle,
                                    textAlign: "left",
                                    flex: 1
                                }}> 
                                Confirm Quantity:
                            </Text>
                            <Text
                                style={{
                                    ...styles.sectionTitle,
                                    textAlign: "right",
                                    flex: 1
                                }}>
                                { this.state.Item.ConfirmQuantity }
                            </Text>
                        </View>
                        <View style={styles.rowView}>
                            <Text 
                                style={{
                                    ...styles.textStyle,
                                    textAlign: "left",
                                    flex: 1
                                }}> 
                                Pair Items:
                            </Text>
                        </View>
                        <View style={styles.rowView}>
                            <Image
                                style={{
                                    ...StyleSheet.absoluteFill,
                                }}
                                source={require('../assets/Seperator.png')}
                            />
                        </View>
                        { this.pairdItemList }
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
                            <View style={{
                                flexDirection: "row",
                                alignItems: "center"
                            }}>
                                <TouchableHighlight
                                    style={styles.openButton}
                                    onPress={() => {
                                        this.setModalVisible(this.props.onSave());
                                    }}>
                                    <Text style={styles.textStyle}>
                                        { this.props.serverMode ? (this.props.pickUp ? "Pick Up" : "Drop Off"): "Confirm" }
                                    </Text>
                                </TouchableHighlight>
                                { (this.props.managerMode) ?
                                    <TouchableHighlight
                                        style={styles.openButton}
                                        onPress={() => {
                                            this.setModalVisible(this.props.onSave());
                                        }}>
                                        <Text style={styles.textStyle}> Deny </Text>
                                    </TouchableHighlight> :
                                    null
                                 }
                            </View>
                    </View>
                    
                </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginTop: 22,
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
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center"
    },
    textStyle1: {
        color: "black",
        fontFamily: "Arial",
        fontSize: 16,
        textAlign: "center"
    },
    sectionTitle: {
        color: "black",
        fontFamily: "Arial-BoldMT",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "left",
        borderBottomColor: "grey",
        borderBottomWidth: StyleSheet.hairlineWidth,
        width: "100%"
    },
    inputStyle: {
        color: "black",
        fontFamily: "Arial",
        fontSize: 16,
        textAlign: "left",
        borderBottomColor: "grey",
        borderBottomWidth: StyleSheet.hairlineWidth,
        width: "100%"
    },
    checkBoxTextStyle: {
        color: "black",
        fontFamily: "Arial-BoldMT",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        textAlign: "auto",
        flex: 1
    }
  });