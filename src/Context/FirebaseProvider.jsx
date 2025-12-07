import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { Auth } from '../Firebase/firebase.init';

export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();

const FirebaseProvider = ({ children }) => {
  const [loginUser, setLoginUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(Auth, email, password);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(Auth, email, password);
  };

  const googleLogin = () => {
    return signInWithPopup(Auth, googleProvider);
  };

  const logOut = () => {
    return signOut(Auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(Auth, (currentUser) => {
      setLoginUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const info = {
    googleLogin,
    loginUser,
    setLoginUser,
    logOut,
    registerUser,
    login,
    loading,
  };
  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default FirebaseProvider;
