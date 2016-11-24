import { connect } from 'react-redux'
import React, { PropTypes } from 'react'
import { setPriceFilter } from '../actions'

const PriceFilter = ({dispatch}) => (
  <div>
    <input id="price-filter" type="checkbox" onChange={e => dispatch(setPriceFilter(e.target.checked))} />
    <label htmlFor="price-filter">Under $20</label>
  </div>
)

export default connect()(PriceFilter)