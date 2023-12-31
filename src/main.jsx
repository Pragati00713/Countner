import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Nav from './Nav.jsx'
import Counter from './Counter.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Nav />
  <Counter />
  </React.StrictMode>,
)
