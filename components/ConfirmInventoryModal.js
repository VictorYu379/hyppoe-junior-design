import React from "react"
import { Alert, StyleSheet, Text, View, TouchableHighlight, Modal, Image, TouchableOpacity } from "react-native"
import { TextInput } from "react-native-gesture-handler"
import Drink from "model/Drink"
import Station from "model/Station"
import MyCheckBox from "components/MyCheckBox"

// Both pick up and drop off template, pass parameter to get either drop off or pick up.
export default class ConfirmInventoryModal extends React.Component {
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

        // var paired = new Map();
        // for (item of this.props.pairedItems) {
        //     paired.set(item, true);
        // }
        this.state = {
            drink: new Drink(),
            stationName: "",
            isDropOff: false,
            doConfirm: false,
            isReturn: false,
            Item: {
                Paired: [],
                Name: "",
                Unit: 0,
                Pack: 0,
                AssignedQuantity: 0,
                ConfirmQuantity: 0,
                Quantity: 0,
                TotalQuantity: 0,
                CurrentQuantity: 0,
                Quantity: 0,
                Price: 0,
                Details: "",
            }
        }
    }

    inputDrinkAndStation(drink, stationName, pairItems) {
        this.setState({
            stationName: stationName,
            drink: drink,
            Item: {
                Name: drink.name,
                Unit: drink.unit,
                Pack: drink.pack === undefined ? 0 : drink.pack,
                Quantity: 0,
                AssignedQuantity: drink.quantity,
                ConfirmQuantity: drink.quantity,
                TotalQuantity: drink.quantity,
                CurrentQuantity: drink.quantity,
                Price: drink.drinkType.pricePerUnit,
                Details: drink.details,
            }
        });
        this.pairItemList = this.getPairedItemList(pairItems.map(item => item.pairItemType.name));
        console.log(this.props.serverMode);
    }

    inputStatus(status) {
        console.log("Status: ", status);
        if (status === "In transit") {
            this.setState({isDropOff: true});
        } else if (status === "Unstarted") {
            this.setState({isDropOff: false});
        } else {
            this.setState({doConfirm: true});
        }
    }

    inputJobType(type) {
        console.log("Job type: ", type);
        if (type === "Return") {
            this.setState({isReturn: true});
        } else {
            this.setState({isReturn: false});
        }
    }

    getPairedItemList(itemList) {
        return itemList.map(item => {
            return (
                <View style={styles.rowView}>
                    <Text style={styles.checkBoxTextStyle}> 
                        {item}:
                    </Text>
                    <MyCheckBox
                        checkedImage={require('assets/checked.png')}
                        uncheckedImage={require('assets/unchecked.png')}
                        checked={true}
                        />
                </View>
            );
        });
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

    updateQuantityByUnitPack(val) {
        this.setState({
            Item: {
                ...this.state.Item, 
                Quantity: 0,
                ConfirmQuantity: Math.max(this.state.Item.ConfirmQuantity + Number(val), 0),
            }
        });
    }   

    updateQuantityByQuantity(val) {
        if (Number(val) < 0) {
            val = 0;
        }
        this.setState({
            Quantity: val,
            Item: {
                ...this.state.Item,
                Unit: 0,
                Pack: 0,
                Quantity: Number(val),
                ConfirmQuantity: Number(val)
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
                                    source={{ uri: this.state.drink.icon }}
                                />
                            </View>
                            <View style={{
                                flexDirection:"column",
                                width:100
                            }}>
                                <Text
                                style={{
                                    ...styles.sectionTitle,
                                    width: 100,
                                    fontSize: 20,
                                    lineHeight: 20,
                                }}
                                >{this.state.Item.Name}</Text>
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
                                Pick Up: { this.state.isReturn ? this.state.stationName : "Inventory"}
                            </Text>
                        </View>
                        <View style={styles.rowView}>
                            <Image
                                style={{
                                    ...StyleSheet.absoluteFill,
                                }}
                                source={require('assets/Seperator.png')}
                            />
                        </View>
                        <View style={styles.rowView}>
                            <Text 
                                style={{
                                    ...styles.textStyle,
                                    textAlign: "left",
                                    flex: 1
                                }}> 
                                Drop Off: { !this.state.isReturn ? this.state.stationName : "Inventory"}
                            </Text>
                        </View>
                        <View style={styles.rowView}>
                            <Image
                                style={{
                                    ...StyleSheet.absoluteFill,
                                }}
                                source={require('assets/Seperator.png')}
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
                            <Text
                                style={{
                                    ...styles.sectionTitle,
                                    textAlign: "right",
                                    flex: 1
                                }}
                            >
                                {this.state.Item.AssignedQuantity.toString()}
                            </Text>
                        </View>
                        <View style={styles.rowView}>
                            <Image
                                style={{
                                    ...StyleSheet.absoluteFill,
                                }}
                                source={require('assets/Seperator.png')}
                            />
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
                                onChangeText={text => this.updateItem("Unit", text)}
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
                                onChangeText={text => this.updateItem("Pack", text)}
                                value={this.state.Item.Pack.toString()}
                                />   
                        </View>
                        <View style={styles.rowView}>
                            <TouchableHighlight
                                style={{
                                    ...styles.clickButton,
                                }}
                                onPress={() => {
                                    if (this.state.Item.Unit == 0 || this.state.Item.Pack == 0) {
                                        Alert.alert("Please enter non-zero unit and pack!");
                                    }
                                    this.updateQuantityByUnitPack(this.state.Item.Unit * this.state.Item.Pack);
                                }}>
                                <Text style={styles.textStyle}> + </Text>
                            </TouchableHighlight>
                            <TouchableHighlight
                                style={{
                                    ...styles.clickButton,
                                    backgroundColor: "white",
                                    borderColor: "#D2D2D2",
                                    borderWidth: 1,
                                }}
                                onPress={() => {
                                    if (this.state.Item.Unit == 0 || this.state.Item.Pack == 0) {
                                        Alert.alert("Please enter non-zero unit and pack!");
                                    }
                                    this.updateQuantityByUnitPack(-this.state.Item.Unit * this.state.Item.Pack);
                                }}>
                                <Text style={styles.textStyle}> - </Text>
                            </TouchableHighlight>
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
                                onChangeText={text => this.updateQuantityByQuantity(text)}
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
                                Confirmed Quantity:
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
                            <Image
                                style={{
                                    ...StyleSheet.absoluteFill,
                                }}
                                source={require('assets/Seperator.png')}
                            />
                        </View>


                        <View style={styles.rowView}>
                            <Text 
                                style={{
                                    ...styles.textStyle,
                                    textAlign: "left",
                                    flex: 1
                                }}> 
                                Paired Items:
                            </Text>
                        </View>
                        <View style={styles.rowView}>
                            <Image
                                style={{
                                    ...StyleSheet.absoluteFill,
                                }}
                                source={require('assets/Seperator.png')}
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
                                        var newDrink = new Drink({
                                            id: this.state.drink.id,
                                            drinkType: this.state.drink.drinkType,
                                            quantity: this.state.Item.ConfirmQuantity,
                                            pack: this.state.Item.Pack,
                                            details: this.state.Item.Details
                                        })
                                        this.props.onSave(newDrink); 
                                    }}>
                                    <Text style={styles.textStyle}>
                                        { !this.props.isAssign ? ((!this.props.serverMode && !this.state.doConfirm) ? (!this.state.isDropOff ? "Pick Up" : "Drop Off"): "Confirm") : "Assign" }
                                    </Text>
                                </TouchableHighlight>
                                { (this.props.managerMode) ?
                                    <TouchableHighlight
                                        style={styles.openButton}
                                        onPress={() => {
                                            this.props.onSave(null);
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