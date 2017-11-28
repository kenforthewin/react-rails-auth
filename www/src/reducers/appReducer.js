import {persistCombineReducers} from 'redux-persist'
import userReducer from './userReducer'
import storage from 'redux-persist/es/storage'
import { routerReducer } from 'react-router-redux'

const config = {
  key: 'root',
  storage,
}

const appReducer = persistCombineReducers(config, {
  userReducer,
  routerReducer
})

export default appReducer