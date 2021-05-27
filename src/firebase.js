import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAoGh19AZz0ALjncEExKuXQRsDsQGzh0V0",
  authDomain: "disney-hotstar-clone-eeb66.firebaseapp.com",
  projectId: "disney-hotstar-clone-eeb66",
  storageBucket: "disney-hotstar-clone-eeb66.appspot.com",
  messagingSenderId: "405585849119",
  appId: "1:405585849119:web:8821199f81e29ee0455e2a",
  measurementId: "G-2BH86MPX8L",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
