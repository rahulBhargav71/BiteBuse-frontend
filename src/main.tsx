import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.tsx'
import './global.css'
import AppRoutes from "./AppRoutes";

import {BrowserRouter as Router} from"react-router-dom";
import Auth0ProviderWithNavigate from './auth/Auth0ProviderWithNavigate';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Toaster } from './components/ui/sonner';

const queryClient= new QueryClient({
  defaultOptions:{
    queries:{
      refetchOnWindowFocus:false,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient} >
      <Router>
        <Auth0ProviderWithNavigate>
        <AppRoutes/>
        <Toaster visibleToasts={1} position="top-right" richColors/>
        </Auth0ProviderWithNavigate>
      </Router>
    </QueryClientProvider>
    
  </React.StrictMode>,
)
