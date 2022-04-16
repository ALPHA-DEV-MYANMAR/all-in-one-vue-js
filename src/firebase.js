import { initializeApp } from "firebase/app";
import { getFirestore , collection } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBPREFjkRuqrOVfT3dAX5eX6VS1aDh0aVk",
  authDomain: "fir-vue-2b593.firebaseapp.com",
  projectId: "fir-vue-2b593",
  storageBucket: "fir-vue-2b593.appspot.com",
  messagingSenderId: "391307632049",
  appId: "1:391307632049:web:adaab34b6187ceedee7190"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const citiesColRef = collection(db,'cities');
const auth = getAuth(app);
export default citiesColRef;