import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import BmiApp from "./bmiComponents/BmiApp";




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BmiApp/>
  </React.StrictMode>
);

