import React, { PropTypes } from 'react'

const Product = ({imgSrc, name, price}) => (
  <li className="item">
    <img src={imgSrc} />
    <div>
      <div>{name}</div>
      <div>{price}</div>
    </div>
  </li>
)

Product.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired
}

export default Product