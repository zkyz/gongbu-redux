import {connect} from 'react-redux'
import {setFilter} from '../actions'
import Link from '../components/Link'

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.filter,
  onclick: ownProps.onclick
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onclick: () => dispatch(setFilter(ownProps.filter))
})

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Link)

export default FilterLink
