import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB1T981jd-3D4i46Pd05ZxNGI2nXFneLX4',
  authDomain: 'todo-8a8ac.firebaseapp.com',
  databaseURL: 'https://todo-8a8ac-default-rtdb.firebaseio.com',
  projectId: 'todo-8a8ac',
  storageBucket: 'todo-8a8ac.appspot.com',
  messagingSenderId: '752652228842',
  appId: '1:752652228842:web:1b220c74e26986b2571f93',
  measurementId: 'G-T7F4C6DM9Z',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const database = firebase.firestore();
// const ref = database.ref('todos');
export default database;
