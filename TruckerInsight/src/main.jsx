import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './css/Navbar.css'
import './css/index.css'
import './css/CompanyCard.css'
import './css/TruckerCard.css'
import './css/Title.css'
import './css/LoadCard.css'
import './css/LoadContainer.css'
import { BrowserRouter, Route, Routes, useParams} from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
