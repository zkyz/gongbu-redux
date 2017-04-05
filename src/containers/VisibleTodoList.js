import {connect} from 'react-redux'
import {toggle} from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = ({todo = [], filter}) => {
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
  todo: getVisibleTodos(state)
})

const mapDispatchToProps = {
  onclick: toggle
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
