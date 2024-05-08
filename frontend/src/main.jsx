import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './Styles/index.css'
import {BrowserRouter } from 'react-router-dom'
import Temp from './temp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
    {/* <Temp /> */}
  </BrowserRouter>,
)
