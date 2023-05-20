import React from 'react';
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
    <ToastContainer
    position="top-right"
    autoClose={4000}
    hideProgressBar={false}
    limit={5}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
  />
</>




);


