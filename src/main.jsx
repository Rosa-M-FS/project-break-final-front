import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import {CarritoProvider} from './context/CarritoContext';
import { WishlistProvider } from './context/WishlistContext.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <CarritoProvider>
        <WishlistProvider>
        <App />
        </WishlistProvider>
      </CarritoProvider>
    </Router>
  </StrictMode>
)
