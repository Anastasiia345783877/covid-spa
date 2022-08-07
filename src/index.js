import React from 'react';
import ReactDOM from 'react-dom/client';
//import css file kotoryj u nas global'nyj
import './index.css';
import App from './App'; 
//React berjot div s id root i zapuskaet ves proect v nego(div)
const root = ReactDOM.createRoot(document.getElementById('root'));
//React StricktMode component kotoryj otvechaet za strogij rezhym napisanija koda, insrument dlia obnaruzhenia poteyculnych problem coda
//izza nego proishodit dopolnitelnuj render componentov

//My zapuskaem nashe prelozhenije...glavnyj component App
root.render(
  <React.StrictMode>
    <App />
  
  </React.StrictMode>
);

  
