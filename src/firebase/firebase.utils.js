import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// config

const firebaseConfig = {
    apiKey: "AIzaSyCWnkEYAoE5wL9i90Xh5svq8UW1YU53iF4",
    authDomain: "ecommerce-react-59c86.firebaseapp.com",
    projectId: "ecommerce-react-59c86",
    storageBucket: "ecommerce-react-59c86.appspot.com",
    messagingSenderId: "910512677241",
    appId: "1:910512677241:web:4e92be2c5e166834e50fa8"
};
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);