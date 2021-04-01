import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAU8CDJwL7PdKtsbzbnUZyWnLtCorRUzEs',
  authDomain: 'project1-f9e32.firebaseapp.com',
  projectId: 'project1-f9e32',
  storageBucket: 'project1-f9e32.appspot.com',
  messagingSenderId: '689057582406',
  appId: '1:689057582406:web:aa4ac1ef9648a972142947',
  measurementId: 'G-3WS7CNSEDX',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const database = firebase.firestore();
// const ref = database.ref('todos');
export default database;
