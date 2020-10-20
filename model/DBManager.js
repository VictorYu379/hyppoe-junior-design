import * as firebase from 'firebase'
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

class DBManager {
    constructor() {
        this.dbh = firebase.firestore();
    }

    getRunners() {
        return this.dbh.collection("Runner").get();
    }

    getRunnerWithId(runnerId) {
        return this.dbh.collection("Runner").doc(runnerId);
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
}

export var dbManager = new DBManager();