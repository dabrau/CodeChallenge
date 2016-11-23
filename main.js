import thunkMiddleware from 'redux-thunk'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import storeApp from './reducers'
import { fetchProducts } from './actions'
//import App from './components/App'

let store = createStore(
  storeApp, 
  applyMiddleware(thunkMiddleware)
)

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

store.dispatch(fetchProducts())



// render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// )



// import {setPriceFilter, setSortOrder, setSortByProperty} from './actions'

// store.dispatch(setPriceFilter(20))
// store.dispatch(setPriceFilter(30))
// store.dispatch(setSortByProperty('PRICE'))
// store.dispatch(setSortOrder('DSC'))



// unsubscribe()