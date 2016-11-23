import fetch from 'isomorphic-fetch'

export const SET_PRICE_FILTER = 'SET_PRICE_FILTER'
export const SET_SORT_BY = 'SET_SORT_BY'
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

export const setPriceFilter = (filter) => {
  return {
    type: SET_PRICE_FILTER,
    filter
  }
}

export const SortByOptions = {
  NAME: 'Name',
  PRICE_ASC: 'Price: Low to High',
  PRICE_DSC: 'Price: High to Low',
  DATE: 'Newest Arrivals'
}

export const setSortBy = (option) => {
  return {
    type: SET_SORT_BY,
    option
  }
}