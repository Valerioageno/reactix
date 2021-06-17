import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import App from '../src/App'
import { Helmet } from 'react-helmet'

interface TemplateProps {
   location: string
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   context: any
}

export default (props: TemplateProps): string => {
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
        <noscript>Your browser does not support JavaScript!</noscript>
        <div id="root">
            ${renderToString(
               <StaticRouter {...props}>
                  <App />
               </StaticRouter>
            )}
        </div>
    </body>
    </html>
    `
}
