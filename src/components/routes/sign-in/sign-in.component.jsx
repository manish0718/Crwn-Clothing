import React from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userdocRef = createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <button onClick={() => logGoogleUser()}>SIGN IN</button>
    </div>
  );
};

export default SignIn;
