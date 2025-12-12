import React, { use, useContext, useEffect } from 'react';
import { AuthContext } from '../Context/FirebaseProvider';
import axios from 'axios';

const instance = axios.create({
  // baseURL: 'http://localhost:3000',
  baseURL: 'https://style-decor-server-blue.vercel.app',
});

const useAxiosSecure = () => {
  const { loginUser } = useContext(AuthContext);
  useEffect(() => {
    const requestInterceptor = instance.interceptors.request.use((config) => {
      config.headers.authorization = `Bearer ${loginUser?.accessToken}`;
      return config;
    });
    return () => {
      instance.interceptors.request.eject(requestInterceptor);
    };
  }, [loginUser]);

  return instance;
};

export default useAxiosSecure;
