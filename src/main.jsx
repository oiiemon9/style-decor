import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { RouterProvider } from 'react-router';
import { Router } from './Router/Router.jsx';
import FirebaseProvider from './Context/FirebaseProvider.jsx';
import { ToastContainer } from 'react-toastify';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';
const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <FirebaseProvider>
        <RouterProvider router={Router} />
        <ToastContainer />
      </FirebaseProvider>
    </QueryClientProvider>
  </StrictMode>
);
