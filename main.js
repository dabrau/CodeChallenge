import React from 'react'
import thunkMiddleware from 'redux-thunk'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import storeApp from './reducers'
import { fetchProducts } from './actions'
import App from './components/App'

let store = createStore(
  storeApp, 
  applyMiddleware(thunkMiddleware)
)

store.dispatch(fetchProducts())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)