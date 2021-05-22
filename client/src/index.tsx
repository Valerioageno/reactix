import React from 'react'
import { render, hydrate } from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

if (process.env.NODE_ENV !== 'production') {
   render(
      <React.StrictMode>
         <BrowserRouter>
            <App />
         </BrowserRouter>
      </React.StrictMode>,
      document.getElementById('root')
   )
} else {
   hydrate(
      <BrowserRouter>
         <App />
      </BrowserRouter>,
      document.getElementById('root')
   )
}
