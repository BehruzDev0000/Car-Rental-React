import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CarRental } from './context/Context'

createRoot(document.getElementById('root')).render(
  <CarRental>
    <StrictMode>
    <App />
  </StrictMode>,
  </CarRental>
)

