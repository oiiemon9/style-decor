import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { Auth } from '../Firebase/firebase.init';

export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();

const FirebaseProvider = ({ children }) => {
  const [loginUser, setLoginUser] = useState(null);

  const googleLogin = () => {
    return signInWithPopup(Auth, googleProvider);
  };
  const logOut = () => {
    return signOut(Auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(Auth, (currentUser) => {
      setLoginUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const info = {
    googleLogin,
    loginUser,
    setLoginUser,
    logOut,
  };
  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default FirebaseProvider;
