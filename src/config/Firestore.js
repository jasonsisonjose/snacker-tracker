import firebase from 'firebase';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyCCq09_5O3Y6sYJwuOygglc0nDQCWk17ZU",
  authDomain: "testing-df90c.firebaseapp.com",
  databaseURL: "https://testing-df90c.firebaseio.com",
  projectId: "testing-df90c",
  storageBucket: "testing-df90c.appspot.com",
  messagingSenderId: "68907689321",
  appId: "1:68907689321:web:49f2963f302d5b8bec09f8"
};
// Initialize Firebase
const fire = firebase.initializeApp(config);

// Initialize Cloud Firestore through Firebase
// const  db = fire.firestore();

export default fire;
