import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import {CarritoProvider} from './context/CarritoContext';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <CarritoProvider>
        <App />
      </CarritoProvider>
    </Router>
  </StrictMode>
)
