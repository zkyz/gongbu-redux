import {connect} from 'react-redux'
import {toggleTodo} from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ACTIVE':
      return todos.filter(i => !i.completed)
    case 'SHOW_COMPLETED':
      return todos.filter(i => i.completed)
    default:
      return todos
  }
}

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos, state.filter)
})

const mapDispatchToProps = {
  onTodoClick: toggleTodo
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
