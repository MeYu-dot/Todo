/* eslint-disable */
import Vue from 'vue';
// import firebase from 'firebase/app';
// import 'firebase/firestore';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

// const config = {
//   apiKey: 'AIzaSyB1T981jd-3D4i46Pd05ZxNGI2nXFneLX4',
//   authDomain: 'todo-8a8ac.firebaseapp.com',
//   databaseURL: 'https://todo-8a8ac.firebaseio.com',
//   projectId: 'todo-8a8ac',
//   storageBucket: 'todo-8a8ac.appspot.com',
//   messagingSenderId: '752652228842',
// };
// firebase.initializeApp(config);

// const config = {
//   apiKey: 'AIzaSyB1T981jd-3D4i46Pd05ZxNGI2nXFneLX4',
//   authDomain: 'todo-8a8ac.firebaseapp.com',
//   databaseURL: 'https://todo-8a8ac-default-rtdb.firebaseio.com',
//   projectId: 'todo-8a8ac',
//   storageBucket: 'todo-8a8ac.appspot.com',
//   messagingSenderId: '752652228842',
//   appId: '1:752652228842:web:1b220c74e26986b2571f93',
//   measurementId: 'G-T7F4C6DM9Z',
// };
// firebase.initializeApp(config);
// const database = firebase.firestore();
// export default database;
// const database = firebase
//   .initializeApp(config)
//   .firestore()
// Timestamp, GeoPoint = firebase.firestore;
// firebase.auth().onAuthStateChanged((response) => {
//   if (response) {
//     // User is signed in.
//     const userData = {
//       id: response.user.uid,
//     };
//     store.dispatch('setUser', userData);
//   } else {
//     console.log('No user is signed in.');
//   }
// });

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
