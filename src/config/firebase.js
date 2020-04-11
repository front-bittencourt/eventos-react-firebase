import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyADS_-r0zFJT4Dtk45ElY2TZlgtzEeIANA",
    authDomain: "eventos-95931.firebaseapp.com",
    databaseURL: "https://eventos-95931.firebaseio.com",
    projectId: "eventos-95931",
    storageBucket: "eventos-95931.appspot.com",
    messagingSenderId: "532075940991",
    appId: "1:532075940991:web:4fa72812ef06210943034a"
  };
  
  // Initialize Firebase
  export default firebase.initializeApp(firebaseConfig);