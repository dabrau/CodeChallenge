import fetch from 'isomorphic-fetch'

export const SET_PRICE_FILTER = 'SET_PRICE_FILTER'
export const SET_SORT_BY_PROPERTY = 'SET_SORT_BY_PROPERTY'
export const SET_SORT_ORDER = 'SET_SORT_ORDER'
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS'

export function receiveProducts(products) {
  return {
    type: RECEIVE_PRODUCTS,
    products: products,
  }
}

export const fetchProducts = () => {
  return (dispatch) => {
    return fetch('https://sneakpeeq-sites.s3.amazonaws.com/interviews/ce/feeds/store.js')
      .then(response => response.json())
      .then(json => dispatch(receiveProducts(json.products)))
      .catch(err => console.log(err))
  }
}

export const SortByProperties = {
  NAME: 'NAME',
  PRICE: 'PRICE',
  DATE: 'DATE'
}

export const SortOrder = {
  ASC: 'ASC',
  DSC: 'DSC'
}

export const setPriceFilter = (price) => {
  return {
    type: SET_PRICE_FILTER,
    price
  }
}


export const setSortByProperty = (property) => {
  return {
    type: SET_SORT_BY_PROPERTY,
    property
  }
}

export const setSortOrder = (order) => {
  return {
    type: SET_SORT_ORDER,
    order
  }
}