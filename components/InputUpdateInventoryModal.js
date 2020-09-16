import React from "react"
import { Alert, StyleSheet, Text, View, TouchableHighlight, Modal, Image } from "react-native"
import { TextInput } from "react-native-gesture-handler"
import { CheckBox } from 'react-native-elements'
import PairItemModal from './PairItemModal'

export default class InputUpdateInventoryModal extends React.Component {

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
            includeInInvCount: true,
            Item: {
                Name: "Bud Light",
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
    

    setModalVisible(val) {
        this.setState({modalVisible: val});
    }

    updateItem(key, val) {
        if (Number(val) < 0) {
            val = 0;
        }
        this.setState({Item: {...this.state.Item, [key]: Number(val)}});
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
                AddedQuantity: Number(val),
                TotalQuantity: this.state.Item.CurrentQuantity + Number(val)
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
                AddedQuantity: this.state.Item.Pack * Number(val),
                TotalQuantity: this.state.Item.CurrentQuantity + this.state.Item.Pack * Number(val)
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
                AddedQuantity: this.state.Item.Unit * Number(val),
                TotalQuantity: this.state.Item.CurrentQuantity + this.state.Item.Unit * Number(val)
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

    componentDidMount() {
        
	}

	render() {
        return (
                <View style={styles.centeredView}>
                    {/* Below is the modal for pop up module */} 
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={this.state.modalVisible}
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
                                            style={StyleSheet.absoluteFill}
                                            source={require('../assets/bud-light.png')}
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
                                    <TextInput
                                        style={{
                                            ...styles.sectionTitle,
                                            textAlign: "right",
                                            flex: 1
                                        }}
                                        onChangeText={text => this.updateCurrentQuantity(text)}
                                        value={this.state.Item.CurrentQuantity.toString()}
                                        />
                                </View>
                                <View style={styles.rowView}>
                                    <TouchableHighlight
                                        style={{
                                            ...styles.clickButton,
                                        }}
                                        onPress={() => { this.updateCurrentQuantity(this.state.Item.CurrentQuantity + 1) }}>
                                        <Text style={styles.textStyle}> + </Text>
                                    </TouchableHighlight>
                                    <TouchableHighlight
                                        style={{
                                            ...styles.clickButton,
                                            backgroundColor: "white",
                                            borderColor: "#D2D2D2",
                                            borderWidth: 1,
                                        }}
                                        onPress={() => { this.updateCurrentQuantity(this.state.Item.CurrentQuantity - 1) }}>
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
                                    <CheckBox
                                        title="Include in Inventory Count"
                                        checked={this.state.includeInInvCount}
                                        onPress={() => this.setState({includeInInvCount: !this.state.includeInInvCount})}
                                        />
                                </View>
                                <View style={styles.rowView}>
                                    <PairItemModal></PairItemModal>
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
                                        this.setModalVisible(!this.state.modalVisible);
                                    }}>
                                    <Text style={styles.textStyle}>Save</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </Modal>
                    
                    {/* Here is the button to trigger the popup */} 
                    <TouchableHighlight
                        style={styles.openButton}
                        onPress={() => {
                            this.setModalVisible(true);
                        }}
                        >
                        <Text style={styles.textStyle}>Edit Item</Text>
                    </TouchableHighlight>
                </View>
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
    }
  });