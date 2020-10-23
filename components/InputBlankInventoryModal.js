import React from "react"
import { Alert, StyleSheet, Text, View, TouchableHighlight, Modal, Image, TouchableOpacity } from "react-native"
import { TextInput } from "react-native-gesture-handler"
import PairItemModal from './PairItemModal'
import MyCheckbox from './MyCheckBox'
import MyImagePicker from './MyImagePicker'

export default class InputBlankInventoryModal extends React.Component {

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
            includeInInvCount: true,
            pairItemModalVisible: false,
            Item: {
                Name: "Enter in Item Name...",
                Image: require("assets/add-photo.png"),
                Unit: 0,
                Pack: 0,
                Quantity: 0,
                CurrentQuantity: 0,
                TotalQuantity: 100,
                AddedQuantity: 0,
                Ounces: 0,
                Price: 0,
                Cost: 0,
                Details: "",
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

    updateImage(obj) {
        console.log(obj);
        this.setState({
            Item: {
                ...this.state.Item,
                Image: obj
            }
        });
    }

    getPercentage() {
        return  Math.round((this.state.Item.CurrentQuantity
            +this.state.Item.AddedQuantity)/Math.max(this.state.Item.TotalQuantity, 1)*100);    
    }

    updateCurrentQuantity(val) {
        if (Number(val) < 0) {
            val = 0;
        }
        this.setState({
            Item: {
                ...this.state.Item, 
                CurrentQuantity: Number(val),
                TotalQuantity: this.state.Item.AddedQuantity + Number(val)
            }
        });
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
                                <MyImagePicker 
                                    image={this.state.Item.Image}
                                    setImage={((obj) => this.updateImage(obj)).bind(this)}
                                    style= {{
                                        width: 100,
                                        height: 100
                                    }}
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
                                    {this.state.Item.CurrentQuantity+this.state.Item.AddedQuantity} of {this.state.Item.TotalQuantity} Qty
                                </Text>
                                <Text tyle={{
                                    fontSize: 12
                                }}>
                                    ${this.state.Item.Price * this.state.Item.TotalQuantity}
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
                                Total Inventory
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
                                Updated Quantity:
                            </Text>
                            <Text
                                style={{
                                    ...styles.sectionTitle,
                                    textAlign: "right",
                                    flex: 1
                                }}>
                                { this.state.Item.AddedQuantity + this.state.Item.CurrentQuantity }
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
                                    ...styles.textStyle1,
                                    textAlign: "left",
                                    flex: 1
                                }}> 
                                Ounces per Unit:
                            </Text>
                            <TextInput
                                style={{
                                    ...styles.inputStyle,
                                    textAlign: "right",
                                    flex: 1
                                }}
                                onChangeText={text => this.updateItem("Ounces", text)}
                                value={this.state.Item.Ounces.toString()}
                                />
                        </View>
                        <View style={styles.rowView}>
                            <Text 
                                style={{
                                    ...styles.textStyle1,
                                    textAlign: "left",
                                    flex: 1
                                }}> 
                                Price per Unit:
                            </Text>
                            <TextInput
                                style={{
                                    ...styles.inputStyle,
                                    textAlign: "right",
                                    flex: 1
                                }}
                                onChangeText={text => this.updateItem("Price", text)}
                                value={this.state.Item.Price.toString()}
                                />
                        </View>
                        <View style={styles.rowView}>
                            <Text 
                                style={{
                                    ...styles.textStyle1,
                                    textAlign: "left",
                                    flex: 1
                                }}> 
                                Cost per Pack:
                            </Text>
                            <TextInput
                                style={{
                                    ...styles.inputStyle,
                                    textAlign: "right",
                                    flex: 1
                                }}
                                onChangeText={text => this.updateItem("Cost", text)}
                                value={this.state.Item.Cost.toString()}
                                />
                        </View>
                        <View style={styles.rowView}>
                            <Text style={styles.checkBoxTextStyle}> 
                                Include in inventory count:
                            </Text>
                            <MyCheckbox
                                checkedImage={require('assets/checked.png')}
                                uncheckedImage={require('assets/unchecked.png')}
                                checked={this.state.includeInInvCount}
                                handlePress={(() => this.setState({includeInInvCount: !this.state.includeInInvCount})).bind(this)}
                            />
                        </View>
                        <View style={{
                             alignItems: "center",
                        }}>
                            <TouchableOpacity
                                style={styles.openButton}
                                onPress={() => this.setState({pairItemModalVisible: true})}>
                                <Text style={{color: 'white', textAlign: 'center', fontWeight: 'bold', fontFamily: 'Arial'}}>Pair items</Text>
                            </TouchableOpacity>
                        </View>
                        <PairItemModal 
                                visible={this.state.pairItemModalVisible} 
                                onSave={this.onPairItemSave.bind(this)}>
                            </PairItemModal>

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
                                onPress={() => { this.props.onSave(); }}>
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
        textAlign: "center",
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
        textAlign: "left",
        flex: 1
    }
  });