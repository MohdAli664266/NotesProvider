// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyAh3mio1VcQejHUEFRWBQUJQpApaXvIReY",
  authDomain: "royal-notes.firebaseapp.com",
  projectId: "royal-notes",
  storageBucket: "royal-notes.appspot.com",
  messagingSenderId: "360980430229",
  appId: "1:360980430229:web:2f7c9bf6ed8749d7560a9c",
  databaseUrl: "https://royal-notes-default-rtdb.firebaseio.com",
};
const app = initializeApp(firebaseConfig);
export default app;