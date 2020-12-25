import cors from 'cors'
import { RequestHandler } from 'express'

export const withCors: RequestHandler = async (req, res, next) => {
  cors({ origin: true })(req, res, next)
}
