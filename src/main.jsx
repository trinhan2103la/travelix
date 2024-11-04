import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './css/offers.css';
import './css/contact.css';
import './css/news.css';
import './css/index.css';
import './css/grids.css';
import './css/style.css';
import './css/about.css';
import './css/responesive.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
