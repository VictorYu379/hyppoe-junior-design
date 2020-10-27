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
        this.store = firebase.storage();
    }

    // return: Promise<QuerySnapshot>
    // https://firebase.google.com/docs/reference/js/firebase.firestore.QuerySnapshot
    getRunners() {
        return this.dbh.collection("Runner").get();
    }

    // return: DocumentReference
    // https://firebase.google.com/docs/reference/js/firebase.firestore.DocumentChange
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

    // return: DocumentReference
    // https://firebase.google.com/docs/reference/js/firebase.firestore.DocumentChange
    getInventoryHandle(id) {
        return this.dbh.collection("Inventory").doc(id);
    }

    // return: Promise<DocumentSnapshot>
    // https://firebase.google.com/docs/reference/js/firebase.firestore.DocumentSnapshot
    getDrinkType(drinkName) {
        return this.dbh.collection("DrinkType").doc(drinkName).get();
    }

    // return: Promise<DocumentSnapshot>
    // https://firebase.google.com/docs/reference/js/firebase.firestore.DocumentSnapshot
    getStation(id) {
        return this.dbh.collection("Station").doc(id).get();
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

    // return: Promise<DocumentSnapshot>
    // https://firebase.google.com/docs/reference/js/firebase.firestore.DocumentSnapshot
    getEvent(id) {
        return this.dbh.collection("Event").doc(id).get();
    }

    // return Promise<void>
    // https://firebase.google.com/docs/database/web/read-and-write
    updateDrinkTypeInfo(data) {
        const typeId = data.id;
        obj = {
            icon : data.icon,
            name : data.name,
            unitPerPack : data.unitPerPack,
            ouncePerUnit : data.ouncePerUnit,
            pricePerUnit : data.pricePerUnit,
            alert : data.alert,
            costPerUnit : data.costPerUnit
        };
        return this.dbh.collection("DrinkType").doc(typeId).update(obj);
    }

    // return void
    // https://firebase.google.com/docs/database/web/read-and-write
    updateDrinkInventoryByType(inventoryId, data) {
        this.dbh.collection("Inventory").doc(inventoryId).collection("drinks").get()
        .then(snapshot => {
		    console.log("Drinks: ", snapshot.size);
		    snapshot.forEach(snap => {
                console.log(data);
                if (snap.data().drinkType == data.drinkType) {
                    console.log("FOUND:", data.drinkType);
                    this.dbh.collection("Inventory")
                    .doc(inventoryId)
                    .collection("drinks")
                    .doc(snap.id).update(data)
                    .then(d => {console.log(d)})
                    .catch(e => {console.log(e)});
                }
		       	console.log("Runner ID: ", snap.id, snap.data());
		    })
        })
        .catch(e => {console.log(e)});
    }

    upload_Image(eventId, imgFile) {
        // Unimplemented.
        /*const blob = FetchBlob.polyfill.Blob;
        const fs = FetchBlob.fs;
        window.XMLHttpRequest = FetchBlob.XMLHttpRequest;
        window.Blob = blob;
        const image = FetchBlob.wrap(imgFile);

        let photoBlob = null;
        let url = null;
        ref = this.store.ref().child(eventId).child("drinks");
        blob.build(image, {type: "image/jpg"})
            .then((blob) => {
                photoBlob = blob;
                return ref.put(blob, {contentType: "image/jpg"});
            })
            .then((snap) => {
                url = snap.downloadURL;
                photoBlob.close();
            })
            .catch((e) => {
                console.log(e);
            });
        return url;*/
    }

    // return Promise
    createDrinkInventory(inventoryId, data) {
        this.dbh.collection("Inventory").doc(inventoryId).collection("drinks").add(data);
    }

    // return void
    createDrinkTypeInfo(data) {
        this.dbh.collection("DrinkType").get()
        .then(snapshot => {
            console.log("Drinks: ", snapshot.size);
            var found = false;
		    snapshot.forEach(snap => {
                console.log(data);
                if (snap.data().id == data.id) {
                    console.log("FOUND:", data.id);
                    found = true;
                }
            });
            if (!found) {
                this.dbh.collection("DrinkType").add(data);
            }
            console.log("FOUND: ", found);
        })
        .catch(e => {console.log(e)});
    }

    // return Promise<void>
    // https://firebase.google.com/docs/database/web/read-and-write
    updateDrinkInventoryById(drinkId, obj) {
        console.log(drinkId, obj);
        return this.dbh.collection("Inventory").doc("h6Q9BwsaW51bnTv9zUe8").collection("drinks").doc(drinkId).update(obj);
    }
}

export var dbManager = new DBManager();