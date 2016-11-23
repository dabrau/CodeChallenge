import React, { PropTypes } from 'react'

const SortBy = ({selected, onSelect, options}) => (
  <div>
    <label>Sort by
      <select onChange={(e) => onSelect(e.target.value)} label="Sort by" defaultValue={selected}>
        {options.map(option => 
           <option key={option} value={option} >{option}</option>
        )}
      </select>
    </label>
  </div>
)

SortBy.propTypes = {
  selected: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default SortBy