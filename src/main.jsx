import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'
import App from './App.jsx'

// This finds the <div id="root"> in index.html and renders our App inside it
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)