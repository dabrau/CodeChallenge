import React from 'react'
import PriceFilter from '../containers/PriceFilter'
import SortBy from '../containers/SortBy'
import ProductList from '../containers/ProductList'

const App = () => (
  <div>
    <PriceFilter />
    <SortBy />
    <ProductList />
  </div>
)

export default App