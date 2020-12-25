import { RequestHandler } from 'express'

const hello: RequestHandler = async (_req, res) => {
  res.status(200).send("Hello")
}

export default hello
