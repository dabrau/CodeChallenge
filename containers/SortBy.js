import { SortByOptions, setSortBy } from '../actions'
import SortBy from '../components/SortBy'

const getOptions = () => Object.keys(SortByOptions).map(option => SortByOptions[option])

const mapStateToProps = (state) => {
  return {
    selected: state.sortBy,
    options: getOptions()
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