import firebase from 'firebase';
//require('@firebase/firestore');

export const firebaseConfig = {
 apiKey: "AIzaSyDi_tIXwzhTspJ6nKxh9PddXhaI8tSalCM",
    authDomain: "storytelling-app-fbaba.firebaseapp.com",
    databaseURL: "https://storytelling-app-fbaba-default-rtdb.firebaseio.com/",
    projectId: "storytelling-app-fbaba",
    storageBucket: "storytelling-app-fbaba.appspot.com",
    messagingSenderId: "922084077198",
    appId: "1:922084077198:web:ce746e8f8ac2493b1fa3df"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}
