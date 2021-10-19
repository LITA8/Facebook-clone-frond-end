import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAwwtxm8oxALWuqvWCJuJ8kD9YcrcDW9tU",
    authDomain: "facebook-clone-96f09.firebaseapp.com",
    projectId: "facebook-clone-96f09",
    storageBucket: "facebook-clone-96f09.appspot.com",
    messagingSenderId: "544993324057",
    appId: "1:544993324057:web:dff0ccdbc6186308fe4e88",
    measurementId: "G-9JR71YCRG5"
  };
  // ici on cenecter le back et le font-end avec firebase qui gere la base donnée
  const firebase =firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;