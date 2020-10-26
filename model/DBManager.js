import * as firebase from 'firebase';
import 'firebase/firestore';
import AsyncStorage from '@react-native-community/async-storage';

var firebaseConfig = {
    apiKey: "AIzaSyCl2oC7L8StE__HClrXmSJYyR1FPs_2GIc",
    authDomain: "hyppoe-inventory-management.firebaseapp.com",
    databaseURL: "https://hyppoe-inventory-management.firebaseio.com",
    projectId: "hyppoe-inventory-management",
    storageBucket: "hyppoe-inventory-management.appspot.com",
    messagingSenderId: "659207172044",
    appId: "1:659207172044:web:5738c859bf9266797b7769",
    measurementId: "G-T1BH1RYP6X"
};

firebase.initializeApp(firebaseConfig);


// For the types in this 
class DBManager {
    constructor() {
        this.dbh = firebase.firestore();
    }

    // return: Promise<QuerySnapshot>
    // https://firebase.google.com/docs/reference/js/firebase.firestore.QuerySnapshot
    getRunners() {
        return this.dbh.collection("Runner").get();
    }

    // return: DocumentReference
    // https://firebase.google.com/docs/reference/js/firebase.firestore.DocumentChange
    getRunner(id) {
        return this.dbh.collection("Runner").doc(id).get();
    }

    // return: DocumentReference
    // https://firebase.google.com/docs/reference/js/firebase.firestore.DocumentChange
    getServer(id) {
        return this.dbh.collection("Server").doc(id).get();
    }

    // return: DocumentReference
    // https://firebase.google.com/docs/reference/js/firebase.firestore.DocumentChange
    getManager(id) {
        return this.dbh.collection("Manager").doc(id).get();
    }

    async setStorage(key, value) {
        try {
            await AsyncStorage.setItem(key, value);
        } catch (e) {
            console.log(e);
        }
    }

    // returns the promise for customized then operations in usage
    getStorage(key) {
        return AsyncStorage.getItem(key);
    }

    // return: DocumentReference
    // https://firebase.google.com/docs/reference/js/firebase.firestore.DocumentChange
    getInventoryHandle(id) {
        return this.dbh.collection("Inventory").doc(id);
    }

    // return: Promise<DocumentSnapshot>
    // https://firebase.google.com/docs/reference/js/firebase.firestore.DocumentSnapshot
    getDrinkType(id) {
        return this.dbh.collection("DrinkType").doc(id).get();
    }

    // return: Promise<DocumentSnapshot>
    // https://firebase.google.com/docs/reference/js/firebase.firestore.DocumentSnapshot
    getPairItemType(id) {
        return this.dbh.collection("PairItemType").doc(id).get();
    }

    // return: Promise<DocumentSnapshot>
    // https://firebase.google.com/docs/reference/js/firebase.firestore.DocumentSnapshot
    getStation(id) {
        return this.dbh.collection("Station").doc(id).get();
    }

    // return: DocumentReference
    // https://firebase.google.com/docs/reference/js/firebase.firestore.DocumentChange
    getStationHandle(id) {
        return this.dbh.collection("Station").doc(id);
    }

    // return: Promise<DocumentSnapshot>
    // https://firebase.google.com/docs/reference/js/firebase.firestore.DocumentSnapshot
    getJob(id) {
        return this.dbh.collection("Jobs").doc(id).get();
    }

    // return: DocumentReference
    // https://firebase.google.com/docs/reference/js/firebase.firestore.DocumentChange
    getJobHandle(id) {
        return this.dbh.collection("Jobs").doc(id);
    }

    // return: Promise<QuerySnapshot>
    // https://firebase.google.com/docs/reference/js/firebase.firestore.QuerySnapshot
    getDrinksInInventory(id) {
        return this.dbh.collection("Inventory").doc(id).collection("drinks").get();
    }

    // return: Promise<QuerySnapshot>
    // https://firebase.google.com/docs/reference/js/firebase.firestore.QuerySnapshot
    getPairItemsInInventory(id) {
        return this.dbh.collection("Inventory").doc(id).collection("pairItems").get();
    }

    // return: Promise<QuerySnapshot>
    // https://firebase.google.com/docs/reference/js/firebase.firestore.QuerySnapshot
    getDrinksInStation(id) {
        return this.dbh.collection("Station").doc(id).collection("drinks").get();
    }

    // return: Promise<QuerySnapshot>
    // https://firebase.google.com/docs/reference/js/firebase.firestore.QuerySnapshot
    getPairItemsInStation(id) {
        return this.dbh.collection("Station").doc(id).collection("pairItems").get();
    }

    // return: Promise<QuerySnapshot>
    // https://firebase.google.com/docs/reference/js/firebase.firestore.QuerySnapshot
    getDrinksInServer(id) {
        return this.dbh.collection("Server").doc(id).collection("soldDrinks").get();
    }

    // return: Promise<QuerySnapshot>
    // https://firebase.google.com/docs/reference/js/firebase.firestore.QuerySnapshot
    getPairItemsInServer(id) {
        return this.dbh.collection("Server").doc(id).collection("pairItems").get();
    }

    // return: Promise<QuerySnapshot>
    // https://firebase.google.com/docs/reference/js/firebase.firestore.QuerySnapshot
    getPairItemsInJob(id) {
        return this.dbh.collection("Jobs").doc(id).collection("usedPairItems").get();
    }

    // return: Promise<QuerySnapshot>
    // https://firebase.google.com/docs/reference/js/firebase.firestore.QuerySnapshot
    getDrinksInJob(id) {
        return this.dbh.collection("Jobs").doc(id).collection("drinks").get();
    }

    // return: Promise<DocumentSnapshot>
    // https://firebase.google.com/docs/reference/js/firebase.firestore.DocumentSnapshot
    getEvent(id) {
        return this.dbh.collection("Event").doc(id).get();
    }

    // return: DocumentReference
    // https://firebase.google.com/docs/reference/js/firebase.firestore.DocumentChange
    getEventHandle(id) {
        return this.dbh.collection("Event").doc(id);
    }
}

export var dbManager = new DBManager();