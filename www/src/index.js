import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { persistStore, persistCombineReducers} from 'redux-persist'
import { PersistGate } from 'redux-persist/es/integration/react'
import appReducer from './reducers/appReducer'
import { combineReducers } from 'redux'
import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'
import { routerReducer, routerMiddleware, push } from 'react-router-redux'

const routeMiddleware = routerMiddleware(history)

let store = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(
    thunkMiddleware,
    routeMiddleware
  )
)



var persistor = persistStore(store)

ReactDOM.render(
  <PersistGate persistor={persistor}>
    <Provider store={store}>
      <App />
    </Provider>
  </PersistGate>
  , document.getElementById('root'));
registerServiceWorker();

export const history = createHistory()
