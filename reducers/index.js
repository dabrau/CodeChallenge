import { RECEIVE_PRODUCTS, SET_SORT_BY, SortByDefaultOption, SET_PRICE_FILTER } from '../actions'

const products = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return action.products
    default:
      return state
  }
}

const sortBy = (state = SortByDefaultOption, action) => {
  switch (action.type) {
    case SET_SORT_BY:
      return action.option
    default:
      return state
  }
}

const priceFilter = (state = false, action) => {
  switch (action.type) {
    case SET_PRICE_FILTER:
      return action.filter
    default:
      return state
  }
}

import { combineReducers } from 'redux'

const storeApp = combineReducers({
  products,
  sortBy,
  priceFilter
})

export default storeApp