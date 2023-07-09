import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import StockState from './contexts/StockState';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StockState>
    <App />
    </StockState>
    
  </React.StrictMode>
);

