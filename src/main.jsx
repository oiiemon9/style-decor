import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { RouterProvider } from 'react-router';
import { Router } from './Router/Router.jsx';
import FirebaseProvider from './Context/FirebaseProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FirebaseProvider>
      <RouterProvider router={Router} />
    </FirebaseProvider>
  </StrictMode>
);
