import { SortByOptions, SortByDefaultOption, setSortBy } from '../actions'
import { connect } from 'react-redux'
import React, { PropTypes } from 'react'

const SortBy = ({dispatch}) => {
  const options = Object.keys(SortByOptions).map(option => SortByOptions[option])
  const defaultOption = SortByDefaultOption

  return <div>
    <label htmlFor="sort-by-selector">Sort by</label>
    <select id="sort-by-selector" onChange={(e) => dispatch(setSortBy(e.target.value))} label="Sort by" defaultValue={defaultOption}>
      {options.map(option => 
         <option key={option} value={option} >{option}</option>
      )}
    </select>
  </div>
}

export default connect()(SortBy)