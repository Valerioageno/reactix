import React from 'react'
import { render, hydrate } from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

const props = (() => {
   const stateHolder = window as { __INITIAL_PROPS__?: string }
   const ssrState = stateHolder.__INITIAL_PROPS__

   if (ssrState) {
      delete stateHolder.__INITIAL_PROPS__
      return JSON.parse(ssrState)
   }
   return {}
})()

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
         <App {...props} />
      </BrowserRouter>,
      document.getElementById('root')
   )
}
