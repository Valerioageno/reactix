import React from 'react'
import { render, hydrate } from 'react-dom'
import App from './App'

if (process.env.NODE_ENV !== 'production') {
   render(
      <React.StrictMode>
         <App />
      </React.StrictMode>,
      document.getElementById('root')
   )
} else {
   hydrate(<App />, document.getElementById('root'))
}
