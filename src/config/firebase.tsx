import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

const settings = {timestampsInSnapshots: true};

const firebaseConfig = {
  apiKey: "AIzaSyBN6Bv9K-gIxRxVGDiIwaKgsNyqJFOnWtk",
  authDomain: "rebimboka-dev.firebaseapp.com",
  projectId: "rebimboka-dev",
  storageBucket: "rebimboka-dev.appspot.com",
  messagingSenderId: "855262855661",
  appId: "1:855262855661:web:7f5ef42a76cc72234fa7e4",
  measurementId: "G-THHSNBQTJJ"
};

firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;