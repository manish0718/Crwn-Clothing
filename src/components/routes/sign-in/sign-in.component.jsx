import React from "react";
// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../../sign-up-form/sign-up-form.component";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from "../../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userdocRef = createUserDocumentFromAuth(user);
  };

  // const SignIn = () => {
  //   useEffect(async () => {
  //     const response = await getRedirectResult(auth);
  //     if (response) {
  //       const userdocRef = createUserDocumentFromAuth(response.user);
  //     }
  //   }, []);
  // };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={() => logGoogleUser()}>SIGN IN</button>
      <SignUpForm />
      {/* <button onClick={signInWithGoogleRedirect}>SIGN IN REDIRECT</button> */}
    </div>
  );
};

export default SignIn;
