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

    // get<Type> return: Promise<Snapshot>
    // https://firebase.google.com/docs/reference/js/firebase.firestore.QuerySnapshot
    // https://firebase.google.com/docs/reference/js/firebase.firestore.DocumentSnapshot
    // get<Type>Handle return: DocumentReference
    // https://firebase.google.com/docs/reference/js/firebase.firestore.DocumentChange

    getRunner(id) {
        return this.getRunnerHandle(id).get();
    }

    getRunnerHandle(id) {
        return this.dbh.collection("Runner").doc(id);
    }

    getServer(id) {
        return this.getServerHandle(id).get();
    }

    getServerHandle(id) {
        return this.dbh.collection("Server").doc(id);
    }

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

    getInventoryHandle(id) {
        return this.dbh.collection("Inventory").doc(id);
    }

    getDrinkType(id) {
        return this.dbh.collection("DrinkType").doc(id).get();
    }

    getPairItemType(id) {
        return this.dbh.collection("PairItemType").doc(id).get();
    }

    getStation(id) {
        return this.getStationHandle(id).get();
    }

    getStationHandle(id) {
        return this.dbh.collection("Station").doc(id);
    }

    getJob(id) {
        return this.getJobHandle(id).get();
    }

    getJobHandle(id) {
        return this.dbh.collection("Jobs").doc(id);
    }

    getDrinksInInventory(id) {
        return this.getDrinksInInventoryHandle(id).get();
    }

    getPairItemsInInventory(id) {
        return this.getPairItemsInInventoryHandle(id).get();
    }

    getDrinksInInventoryHandle(id) {
        return this.dbh.collection("Inventory").doc(id).collection("drinks");
    }

    getPairItemsInInventoryHandle(id) {
        return this.dbh.collection("Inventory").doc(id).collection("pairItems");
    }

    getDrinksInStation(id) {
        return this.getDrinksInStationHandle(id).get();
    }

    getPairItemsInStation(id) {
        return this.getPairItemsInStationHandle(id).get();
    }

    getDrinksInStationHandle(id) {
        return this.dbh.collection("Station").doc(id).collection("drinks");
    }

    getPairItemsInStationHandle(id) {
        return this.dbh.collection("Station").doc(id).collection("pairItems");
    }

    getDrinksInServer(id) {
        return this.dbh.collection("Server").doc(id).collection("soldDrinks").get();
    }

    getPairItemsInServer(id) {
        return this.dbh.collection("Server").doc(id).collection("usedPairItems").get();
    }

    getDrinksInJob(id) {
        return this.getDrinksInJobHandle(id).get();
    }

    getPairItemsInJob(id) {
        return this.getPairItemsInJobHandle(id).get();
    }

    getDrinksInJobHandle(id) {
        return this.dbh.collection("Jobs").doc(id).collection("drinks");
    }

    getPairItemsInJobHandle(id) {
        return this.dbh.collection("Jobs").doc(id).collection("pairItems");
    }

    getEvent(id) {
        return this.getEventHandle(id).get();
    }

    getEventHandle(id) {
        return this.dbh.collection("Event").doc(id);
    }

    // return Promise<void>
    // https://firebase.google.com/docs/database/web/read-and-write
    updateDrinkTypeInfo(id, data) {
        return this.dbh.collection("DrinkType").doc(id).update(data);
    }

    async updateDrinkInStation(stationId, updated) {
        var data = await this.getDrinksInStationHandle(stationId).where("drinkType", "==", updated.drinkType).get();
        this.getDrinksInStationHandle(stationId).doc(data.docs[0].id).set(updated);
    }

    updateDrinkInInventory(inventoryId, drinkId, data) {
        return this.dbh.collection("Inventory").doc(inventoryId)
                       .collection("drinks").doc(drinkId)
                       .update(data);
    }

    // return void
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
		       	console.log("snap id: ", snap.id, snap.data());
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

    // return Promise<DocumentReference>
    // https://firebase.google.com/docs/reference/js/firebase.firestore.DocumentReference
    createDrinkInventory(inventoryId, data) {
        return this.dbh.collection("Inventory").doc(inventoryId).collection("drinks").add(data);
    }

    // return: Promise<DocumentReference>
    // https://firebase.google.com/docs/reference/js/firebase.firestore.DocumentReference
    createDrinkTypeInfo(data) {
        return this.dbh.collection("DrinkType").add(data);
    }

    async createNewJob(job, pairItems) {
        const res = await this.dbh.collection("Jobs").add(job);
        // console.log(res.id);
        const id = res.id;
        const ref = this.getJobHandle(id);
        for (let pairItem of pairItems) {
            await ref.collection("pairItems").add(pairItem);
        }
        return id;
    }

    updateJob(drink, stationKey, status, runnerId) {
        const baseRef = this.dbh.collection("Jobs");
        baseRef.get()
        .then(snapshot => {
		    console.log("Drinks: ", snapshot.size);
		    snapshot.forEach(snap => {
                if (snap.data().stationKey === stationKey) {
                    let found = false;
                    let id = "";
                    baseRef.doc(snap.id)
                        .collection("drinks")
                        .get()
                        .then(snapshot => {
                            snapshot.forEach(function(childSnapshot) {
                                if (childSnapshot.data().drinkType == drink.drinkType) {
                                    found = true;
                                    id = childSnapshot.id;
                                    console.log("Found: ", id);
                                }
                            });
                        });
                    if (found) {
                        let newData = snap.data();
                        if (status != null) {
                            newData.status = status;
                        }
                        if (runnerId != null) {
                            newData.runnerId = runnerId;
                        }
                        baseRef.doc(snap.id).update(newData);
                        baseRef.doc(snap.id).collection("drinks").doc(id).update(drink);
                    }
                }
		       	console.log("snap id: ", snap.id);
		    })
        })
        .catch(e => {console.log(e)});
    }

    // return void
    // createDrinkTypeInfo(data) {
    //     this.dbh.collection("DrinkType").get()
    //     .then(snapshot => {
    //         console.log("Drinks: ", snapshot.size);
    //         var found = false;
	// 	    snapshot.forEach(snap => {
    //             console.log(data);
    //             if (snap.data().id == data.id) {
    //                 console.log("FOUND:", data.id);
    //                 found = true;
    //             }
    //         });
    //         if (!found) {
    //             this.dbh.collection("DrinkType").add(data);
    //         }
    //         console.log("FOUND: ", found);
    //     })
    //     .catch(e => {console.log(e)});
    // }

    // return Promise<void>
    // https://firebase.google.com/docs/database/web/read-and-write
    updateDrinkInventoryById(drinkId, obj) {
        console.log(drinkId, obj);
        return this.dbh.collection("Inventory").doc("h6Q9BwsaW51bnTv9zUe8").collection("drinks").doc(drinkId).update(obj);
    }
}

export var dbManager = new DBManager();