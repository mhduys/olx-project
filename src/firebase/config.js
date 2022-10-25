import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCGq2KM4RoA7j3e8DGslk4pYS80yDGTuSY",
    authDomain: "reactolx-a5f6d.firebaseapp.com",
    projectId: "reactolx-a5f6d",
    storageBucket: "reactolx-a5f6d.appspot.com",
    messagingSenderId: "37025600716",
    appId: "1:37025600716:web:a21c54fe406a05f181de69",
    measurementId: "G-SYK5VYH4MJ"
  };

 export default firebase.initializeApp(firebaseConfig) 