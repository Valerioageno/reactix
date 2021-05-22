import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import App from './App'
import { Helmet } from 'react-helmet'

export const Index = (params: string | undefined): string => {
   const props = params ? JSON.parse(params) : {}
   const helmetData = Helmet.renderStatic()

   return `
        <!doctype html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie-edge">
            <title>Reactix</title>
            ${helmetData.title.toString()}
            ${helmetData.meta.toString()}
            <link rel="stylesheet" href="./styles/ssr.css">
        </head>
        <body>
            <div id="root">
                ${renderToString(
                   <StaticRouter {...props}>
                      <App />
                   </StaticRouter>
                )}
            </div>
            <script src="./scripts/bundle.js"></script>
        </body>
        </html>
    `
}
