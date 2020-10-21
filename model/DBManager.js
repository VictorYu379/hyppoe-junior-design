import * as firebase from 'firebase';
import 'firebase/firestore';

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

class DBManager {
    constructor() {
        this.dbh = firebase.firestore();
    }

    async getRunnerWithId(runnerId) {
        return await this.dbh.collection("Runner").doc(runnerId).get();
    }

    getInventoryHandle(id) {
        return this.dbh.collection("Inventory").doc(id);
    }

    getDrinkType(drinkName) {
        return this.dbh.collection("DrinkType").doc(drinkName).get();
    }

    getStation(id) {
        return this.dbh.collection("Station").doc(id).get();
    }

    getDrinksInStation(id) {
        return this.dbh.collection("Station").doc(id).collection("drinks").get();
    }

    getPairItemsInStation(id) {
        return this.dbh.collection("Station").doc(id).collection("pairItems").get();
    }

    getEvent(id) {
        return this.dbh.collection("Event").doc(id).get();
    }
}

export var dbManager = new DBManager();