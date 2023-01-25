import React from "react";
// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../../sign-up-form/sign-up-form.component";
import SignInForm from "../../sign-in-form/sign-in-form.component";
import "./authentication.styles.scss";

const Authentication = () => {
  // const SignIn = () => {
  //   useEffect(async () => {
  //     const response = await getRedirectResult(auth);
  //     if (response) {
  //       const userdocRef = createUserDocumentFromAuth(response.user);
  //     }
  //   }, []);
  // };

  return (
    <div className="authentication-container">
      {/* <button onClick={() => logGoogleUser()}>SIGN IN</button> */}
      <SignInForm />
      <SignUpForm />
      {/* <button onClick={signInWithGoogleRedirect}>SIGN IN REDIRECT</button> */}
    </div>
  );
};

export default Authentication;
