import {setFilter} from '../actions'
import {connect} from 'react-redux'
import FilterItem from '../components/FilterItem'

const mapStateToProps = (state, ownProps) => ({
  active: state.filter === ownProps.filter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  click: filter => dispatch(setFilter(filter))
})

const Filter = connect(mapStateToProps, mapDispatchToProps)(FilterItem)
export default Filter
