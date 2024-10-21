import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ApplicationRouter } from './Routes'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ApplicationRouter />
  </StrictMode>,
)
