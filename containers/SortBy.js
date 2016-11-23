import { SortByOptions, SortByDefaultOption, setSortBy } from '../actions'
import SortBy from '../components/SortBy'

const mapStateToProps = (state) => {
  return {
    defaultOption: SortByDefaultOption,
    options: Object.keys(SortByOptions).map(option => SortByOptions[option])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSelect: (sortBy) => {
      dispatch(setSortBy(sortBy))
    } 
  }
}

import { connect } from 'react-redux'

export default connect(mapStateToProps, mapDispatchToProps)(SortBy)