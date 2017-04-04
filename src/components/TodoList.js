import React from 'react'
import Todo from './Todo'

const TodoList = ({todos, onTodoClick}) => (
  <ul>
    {
      todos.map(
        i =>
          <Todo key={ i.id } { ...i }
                   onClick={
                     () => onTodoClick(i.id)
                   } />
      )
    }
  </ul>
)

export default TodoList
