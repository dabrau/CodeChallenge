import React from 'react'
import Header from './Header'
import PriceFilter from '../containers/PriceFilter'
import SortBy from '../containers/SortBy'
import ProductList from '../containers/ProductList'

const App = () => (
  <div>
    <Header />
    <PriceFilter />
    <SortBy />
    <ProductList />
  </div>
)

export default App