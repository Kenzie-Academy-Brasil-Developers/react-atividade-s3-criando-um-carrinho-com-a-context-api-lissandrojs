import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CartProvider } from "./provider/cart";
import { CatalogueProvider } from "./provider/catalogue";

ReactDOM.render(
  <React.StrictMode>
    <CatalogueProvider>
      <CartProvider>
            <App />
      </CartProvider>
    </CatalogueProvider>
  
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
