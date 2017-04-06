import {connect} from 'react-redux'
import TodoList from '../components/TodoList'
import {toggle} from '../actions/index'

const filteredTodoList = (todo, filter) => {
  switch (filter) {
    case 'ACTIVE':
      return todo.filter(i => !i.completed)
    case 'COMPLETED':
      return todo.filter(i => i.completed)
    default:
      return todo
  }
}

const mapStateToProps = (state) => ({
  todo: filteredTodoList(state.todo, state.filter)
})

const mapDispatchToProps = (dispatch) => ({
  click: id => dispatch(toggle(id))
})

const FilteredTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList)
export default FilteredTodoList
