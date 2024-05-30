import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyARKHte7H9RwG2sPEj0HCaTMGTZMgLH_FA",
    authDomain: "meherremdiplom.firebaseapp.com",
    projectId: "meherremdiplom",
    storageBucket: "meherremdiplom.appspot.com",
    messagingSenderId: "686648114235",
    appId: "1:686648114235:web:1902f65d6c97d0d8e3b01e",
    measurementId: "G-XL1L5LNZS4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
