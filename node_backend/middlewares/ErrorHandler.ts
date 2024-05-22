import { Request, Response, NextFunction } from 'express'
import HttpError from '../utils/HttpError'

//eslint-disable-next-line consistentreturn
function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  if (res.headersSent) {
    return next(err)
  }

  const statusCode = err instanceof HttpError ? err.statusCode : 500
  const message = err.message || 'Internal Server Error'

  res.status(statusCode).json({ error: message })
}

export default errorHandler
