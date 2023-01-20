import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD4hZTt86Brv387SIIHC_q7vGy2uuPuCI0",
  authDomain: "crwn-clothing-db-cdc66.firebaseapp.com",
  projectId: "crwn-clothing-db-cdc66",
  storageBucket: "crwn-clothing-db-cdc66.appspot.com",
  messagingSenderId: "497834970272",
  appId: "1:497834970272:web:e41ece450d1398b3174dc5",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const useDocRef = doc(db, "users", userAuth.uid);
  console.log(useDocRef);

  const userSnapShot = await getDoc(useDocRef);
  console.log(userSnapShot);

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(useDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the user ", error.message);
    }
  }

  return useDocRef;
};
