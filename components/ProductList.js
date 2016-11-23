import React, { PropTypes } from 'react'
import Product from './Product'

const ProductList = ({products}) => {
  return <ol>
    {products.map(product => 
      <Product
        key={product.id}
        imgSrc={product.mainImage.ref}
        name={product.name}
        price={'$' + (product.defaultPriceInCents/100).toFixed(2)}
      />
    )}
  </ol>
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    mainImage: PropTypes.shape({
      ref: PropTypes.string.isRequired
    }),
    name: PropTypes.string.isRequired, 
    defaultPriceInCents: PropTypes.number.isRequired
  }).isRequired).isRequired
}

export default ProductList