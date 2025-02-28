import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { UserAuthContextProvider } from './context/UserAuthContext';
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';




const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
      <UserAuthContextProvider>
      <React.StrictMode>
        <App />
        </React.StrictMode> 
      </UserAuthContextProvider>
    </BrowserRouter>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
