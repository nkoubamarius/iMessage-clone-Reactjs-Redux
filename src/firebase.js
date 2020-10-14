import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCNXQYfL82qgYoqiVIQtG7US9434xnPNg4",
    authDomain: "imessage-clone-63451.firebaseapp.com",
    databaseURL: "https://imessage-clone-63451.firebaseio.com",
    projectId: "imessage-clone-63451",
    storageBucket: "imessage-clone-63451.appspot.com",
    messagingSenderId: "245903336681",
    appId: "1:245903336681:web:c82a58579a29316f703c78",
    measurementId: "G-CXR4YKNEVE"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();
  const auth=firebase.auth();

  const provider=new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;
