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
import axios from 'axios';
import useAxios from '../CustomHook/useAxios';

export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();

const FirebaseProvider = ({ children }) => {
  const [loginUser, setLoginUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState('user');
  const axiosInstance = useAxios();

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
    const unsubscribe = onAuthStateChanged(Auth, async (currentUser) => {
      setLoginUser(currentUser);
      if (currentUser) {
        const res = await axiosInstance.get(
          `/user-role?email=${currentUser.email}`
        );
        setRole(res.data.role);
      }
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
    role,
  };
  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default FirebaseProvider;
