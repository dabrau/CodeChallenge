import { RECEIVE_PRODUCTS, SET_SORT_BY_PROPERTY, SortByProperties, SET_SORT_ORDER, SortOrder, SET_PRICE_FILTER } from '../actions'

const products = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return action.products
    default:
      return state
  }
}

const sortByProperty = (state = SortByProperties.NAME, action) => {
  switch (action.type) {
    case SET_SORT_BY_PROPERTY:
      return action.property
    default:
      return state
  }
}

const sortOrder = (state = SortOrder.ASC, action) => {
  switch (action.type) {
    case SET_SORT_ORDER:
      return action.order
    default:
      return state
  }
}

const priceFilter = (state = 99999999999999, action) => {
  switch (action.type) {
    case SET_PRICE_FILTER:
      return action.price
    default:
      return state
  }
}

import { combineReducers } from 'redux'

const storeApp = combineReducers({
  products,
  sortByProperty,
  sortOrder,
  priceFilter
})

export default storeApp