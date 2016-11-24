import React from 'react'
import Header from './Header'
import PriceFilter from '../containers/PriceFilter'
import SortBy from '../containers/SortBy'
import ProductList from '../containers/ProductList'

const App = () => (
  <div>
    <Header />
    <div className="product-input-wrapper">
      <div className="input-wrapper">
        <PriceFilter />
        <SortBy />
      </div>
      <ProductList />
    </div>
  </div>
)

export default App