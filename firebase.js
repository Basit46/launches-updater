import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAdDTB_PJcZU5GY3id6NSh1w4miA_D0SE",
  authDomain: "web3-launches.firebaseapp.com",
  projectId: "web3-launches",
  storageBucket: "web3-launches.appspot.com",
  messagingSenderId: "395850749833",
  appId: "1:395850749833:web:ce2c13f04226bff4653358",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
