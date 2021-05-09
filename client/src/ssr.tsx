import React from 'react'
import { renderToString } from 'react-dom/server'
import App from './App'

export const Index = () => {
    return (`
        <!doctype html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie-edge">
            <title>Reactix</title>
            <link rel="stylesheet" href="./styles/ssr.css">
        </head>
        <body>
            <div id="root">
                ${renderToString(<App />)}
            </div>
            <script src="./scripts/bundle.js"></script>
        </body>
        </html>
    `); 
};
