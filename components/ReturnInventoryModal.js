import React from "react"
import { Alert, StyleSheet, Text, View, TouchableHighlight, Modal, Image, TouchableOpacity} from "react-native"
import { TextInput } from "react-native-gesture-handler"
import { CheckBox } from 'react-native-elements'
import MyCheckBox from './MyCheckBox'

export default class ReturnInventoryModal extends React.Component {

    static navigationOptions = ({ navigation }) => {
		const { params = {} } = navigation.state
        return {
            headerShown: false,
            headerLeft: () => null,
            headerRight: () => null
        }
    }
    
    constructor(props) {
        super(props)
        this.state = {
            modalVisible: false,
            Item: {
                Name: this.props.drinkName,
                Unit: 0,
                Pack: 0,
                Quantity: 0,
                CurrentQuantity: 0,
                TotalQuantity: 100,
                AddedQuantity: 0,
                Price: 10,
                Damaged: false,
                Unhappy: false,
                Misorder: false,
                Spilled: false,
                OtherReasons: "",
            }
        }
    }
    

    updateItem(key, val) {
        if (Number(val) < 0) {
            val = 0;
        }
        this.setState({Item: {...this.state.Item, [key]: Number(val)}});
    }

    onPairItemSave() {
        this.setState({pairItemModalVisible: false});
    }

    updateQuantityByUnitPack(val) {
        this.setState({
            Item: {
                ...this.state.Item, 
                Quantity: 0,
                AddedQuantity: Math.max(this.state.Item.AddedQuantity + Number(val), 0),
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
                AddedQuantity: Number(val)
            }
        });
    }

    getPercentage() {
        return  Math.round((this.state.Item.CurrentQuantity)/Math.max(this.state.Item.TotalQuantity, 1)*100);    
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
                                <Text
                                style={{
                                    ...styles.sectionTitle,
                                    width: 100,
                                    fontSize: 20,
                                    lineHeight: 20,
                                }}
                                >{this.props.drinkName}</Text>
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
                                Returned:
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
                                Station 1 - Main Tent - Tablet1
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
                                Current Quantity:
                            </Text>
                            <Text
                                style={{
                                    ...styles.sectionTitle,
                                    textAlign: "right",
                                    flex: 1
                                }}
                            >
                                {this.state.Item.CurrentQuantity.toString()}
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
                                Updated Quantity:
                            </Text>
                            <Text
                                style={{
                                    ...styles.sectionTitle,
                                    textAlign: "right",
                                    flex: 1
                                }}>
                                { this.state.Item.AddedQuantity }
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
                                Reason for Return:
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
                        

                        <View style={{
                            ...styles.rowView,
                        }}>
                            <Text style={styles.checkBoxTextStyle}> 
                                Damaged:
                            </Text>
                            <MyCheckBox
                                checked = {this.state.Item.Damaged}
                                checkedImage={require('../assets/checked.png')}
                                uncheckedImage={require('../assets/unchecked.png')}
                                handlePress={(() => this.updateItem("Damaged", !this.state.Item.Damaged)).bind(this)}
                            />
                        </View>
                        <View style={styles.rowView}>
                            <Text style={styles.checkBoxTextStyle}> 
                                Unhappy Customer:
                            </Text>
                            <MyCheckBox
                                checked = {this.state.Item.Unhappy}
                                checkedImage={require('../assets/checked.png')}
                                uncheckedImage={require('../assets/unchecked.png')}
                                handlePress={(() => this.updateItem("Unhappy", !this.state.Item.Unhappy)).bind(this)}
                            />
                        </View>
                        <View style={styles.rowView}>
                            <Text style={styles.checkBoxTextStyle}> 
                                Misorder:
                            </Text>
                            <MyCheckBox
                                checked = {this.state.Item.Misorder}
                                checkedImage={require('../assets/checked.png')}
                                uncheckedImage={require('../assets/unchecked.png')}
                                handlePress={(() => this.updateItem("Misorder", !this.state.Item.Misorder)).bind(this)}
                            />
                        </View>
                        <View style={styles.rowView}>
                            <Text style={styles.checkBoxTextStyle}> 
                                Spilled:
                            </Text>
                            <MyCheckBox
                                checked = {this.state.Item.Spilled}
                                checkedImage={require('../assets/checked.png')}
                                uncheckedImage={require('../assets/unchecked.png')}
                                handlePress={(() => this.updateItem("Spilled", !this.state.Item.Spilled)).bind(this)}
                            />
                        </View>
                        
                        
                        <Text style={styles.sectionTitle}> Other reasons: </Text>
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
                            onChangeText={text => this.updateItem("OtherReasons", text)}
                            placeholder="Notes ..."
                            value={this.state.Item.OtherReasons}
                            />
                            
                            <TouchableHighlight
                                style={styles.openButton}
                                onPress={() => {
                                    if (this.state.Item.AddedQuantity == 0) {
                                        Alert.alert("Please enter unit-pack pair or quantity to continue!")
                                    } else {
                                        this.props.onSave(); 
                                    } 
                                }}>
                                <Text style={styles.textStyle}>Save</Text>
                            </TouchableHighlight>
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