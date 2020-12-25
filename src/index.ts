import express from 'express'
import { withCors } from './middleware/withCors'
import hello from './routes/open/hello'

const app = express()

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`connected to db ${process.env.DB_URL}`)
  console.log(`listening on port ${PORT}...`)
})

app.use(withCors)
app.use(express.json())

app.post('/hello', hello)

export { app }
