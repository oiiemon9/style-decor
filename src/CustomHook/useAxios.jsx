import axios from 'axios';
import React from 'react';

const Instance = axios.create({
  // baseURL: 'http://localhost:3000', // Replace with your API base URL
  baseURL: 'https://style-decor-server-blue.vercel.app', // Replace with your API base URL
});

const useAxios = () => {
  return Instance;
};

export default useAxios;
