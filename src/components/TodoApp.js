import React from 'react'
import TodoInput from './TodoInput'
import TodoFooter from './TodoFooter'
import VisibleTodoList from '../containers/VisibleTodoList'

const TodoApp = () => (
  <div>
    <TodoInput />
    <VisibleTodoList />
    <TodoFooter />
  </div>
)

export default TodoApp
