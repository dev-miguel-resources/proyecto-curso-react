import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// config
const firebaseConfig = {
  apiKey: "AIzaSyCWnkEYAoE5wL9i90Xh5svq8UW1YU53iF4",
  authDomain: "ecommerce-react-59c86.firebaseapp.com",
  projectId: "ecommerce-react-59c86",
  storageBucket: "ecommerce-react-59c86.appspot.com",
  messagingSenderId: "910512677241",
  appId: "1:910512677241:web:4e92be2c5e166834e50fa8",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`); // define el path de la collecion con el identificador de usuarios con su uuid

  const snapshot = await userRef.get(); // .get() obtiene esa referencia de los documentos asociados a esa collection

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore(); // firestore: todo lo que es apuntar a collections y documentos

//config providers
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
