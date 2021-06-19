import express from 'express'
import htmlTemplate from './template'

const app = express()

app.use(express.static('dist/'))

app.get('*', (req, res) => {
   res.status(200)
      .type('html')
      .send(
         htmlTemplate({
            location: req.url,
            context: {},
         })
      )
})

app.listen(3000, () =>
   console.log('server listening at http://localhost:3000')
)
