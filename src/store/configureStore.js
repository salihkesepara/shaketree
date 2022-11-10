import { createStore } from 'redux'
import rootReducer from '../models/index'

export default function configureStore (initialState) {
  return createStore(rootReducer, initialState)
}
