import { SortByProperties } from '../actions'
import ProductList from '../components/ProductList'

const getVisibleProducts = (products, priceFilter, sortBy) => {
  let visibleProducts = products

  if (priceFilter) {
    visibleProducts = visibleProducts.filter(product => product.defaultPriceInCents < 20000)
  }

  switch (sortBy) {
    case SortByProperties.Name:
      visibleProducts.sort((a, b) => {
        let nameA = a.name.toUpperCase() // ignore upper and lowercase
        let nameB = b.name.toUpperCase() // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        // names must be equal
        return 0;
      })
      break
    case SortByProperties.PRICE_ASC:
      visibleProducts.sort((a, b) => a.defaultPriceInCents - b.defaultPriceInCents)
      break
    case SortByProperties.PRICE_DSC:
      visibleProducts.sort((a,b) => b.defaultPriceInCents - a.defaultPriceInCents)
      break
    case SortByProperties.Date:
      visibleProducts.sort((a,b) => b.createdAt - b.createdAt)
      break
  }

  return visibleProducts
}

const mapStateToProps = (state) => {
  return {
    products: getVisibleProducts(state.products, state.priceFilter, state.sortByProperty)
  }
}

import { connect } from 'react-redux'

export default connect(mapStateToProps)(ProductList)
