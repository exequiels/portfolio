import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './global.css'
import { ThemeProvider } from './context/ThemeContext'

const rootElement = document.getElementById('root')

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <React.StrictMode>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  )
} else {
  console.error('Failed to find the root element')
}
