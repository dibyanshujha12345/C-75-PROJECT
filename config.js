import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {

  apiKey: "AIzaSyCCWai2K57ONdQAGzdKNJp7rQ1UfFpvic8",
  authDomain: "eriderapp-cc9f3.firebaseapp.com",
  projectId: "eriderapp-cc9f3",
  storageBucket: "eriderapp-cc9f3.appspot.com",
  messagingSenderId: "1066373878007",
  appId: "1:1066373878007:web:cd84cd9fdd40cb348c43f2"

};


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
