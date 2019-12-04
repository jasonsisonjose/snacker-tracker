import firebase from 'firebase';


  // Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyBcLIWq6H7YTeqxjP2r-JnB6QHndSBYkyY",
  authDomain: "snackertracker-be2e9.firebaseapp.com",
  databaseURL: "https://snackertracker-be2e9.firebaseio.com",
  projectId: "snackertracker-be2e9",
  storageBucket: "snackertracker-be2e9.appspot.com",
  messagingSenderId: "489115693939",
  appId: "1:489115693939:web:8fd6e9dd0e7ecfaf57cb06",
  // measurementId: "G-0M34YWM1G3"
};

// Initialize Firebase
const fire = firebase.initializeApp(config);
export default fire;
