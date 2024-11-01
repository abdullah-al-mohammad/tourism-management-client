import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Router from './components/router/Router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router></Router>
  </StrictMode>,
)
