import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyC_yG4lLq4cH-9ebU4TPLBwgJFU0ju_izE",
  authDomain: "signalclone2023-3dfca.firebaseapp.com",
  projectId: "signalclone2023-3dfca",
  storageBucket: "signalclone2023-3dfca.appspot.com",
  messagingSenderId: "949726977159",
  appId: "1:949726977159:web:b01a7431241d0b2b04ec22",
  };

  let app;

  if(firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
  }
  else{
    app = firebase.app();
  }

  const db = app.firestore();
  const auth = firebase.auth();
  
  export {db,auth};
