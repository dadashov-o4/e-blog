import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";

const articles = [
  {
    id: 1,
    basliq: "Meqale1",
    Metn: "Metn1",
    shekil: "https://res.cloudinary.com/dlsupk9sb/image/upload/v1715873926/ae3ca22b25f568f36e643d33390ffcb1_n5j1qm.jpg"
  },
  {
    id: 2,
    basliq: "Meqale2",
    Metn: "Metn2",
    shekil: "https://res.cloudinary.com/dlsupk9sb/image/upload/v1715874130/f8d17f1b085a5fe275e1ebadd2226b67_uw2ji6.png"
  },
  {
    id: 3,
    basliq: "Meqale3",
    Metn: "Metn3",
    shekil: "https://res.cloudinary.com/dlsupk9sb/image/upload/v1715874130/f8d17f1b085a5fe275e1ebadd2226b67_uw2ji6.png"
  }
];

const addData = async () => {
  try {
    const collectionRef = collection(db, "articles");
    for (const article of articles) {
      await addDoc(collectionRef, article);
    }
    console.log("Data added successfully");
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};

addData();
