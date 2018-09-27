import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDOU_L9Xh-ufWQJF5XVIvBY8nv5llkZ13Y",
  authDomain: "live-app-com.firebaseapp.com",
  databaseURL: "https://live-app-com.firebaseio.com",
  projectId: "live-app-com",
  storageBucket: "live-app-com.appspot.com",
  messagingSenderId: "48862331897"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const firestore = firebase.firestore();
const auth = firebase.auth();

export {
  firestore,
  auth,
};
