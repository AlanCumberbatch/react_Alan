import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* BrowserRouter 只能在这里使用，在App.jsx中的局部使用的话，会报错 */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
