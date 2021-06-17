import express from 'express'
import template from './template'

const server = express()

server.get('*', (req, res) => {
   res.status(200)
   .type('html')
   .send(
      template({
         location: req.url,
         context: {},
      })
   )
})

server.listen(3000, () =>
   console.log('server listening at http://localhost:3000')
)
