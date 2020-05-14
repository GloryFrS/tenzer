import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import app from '../reducers'

export default createStore(
  app,
  applyMiddleware(logger)
)
