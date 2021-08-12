import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA4ZFrAeVYOQkoqrpG00RKfJeRAP_gM5IU",
  authDomain: "cet9-mesas.firebaseapp.com",
  projectId: "cet9-mesas",
  storageBucket: "cet9-mesas.appspot.com",
  messagingSenderId: "759566903252",
  appId: "1:759566903252:web:b67313b3d57bfeee9fd841",
  measurementId: "G-LDMPTSEWJ8"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db }