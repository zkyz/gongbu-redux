import React from 'react'
import Todo from './Todo'

const TodoList = ({todo, onclick}) => (
  <ul>
    {
      todo.map(
        i =>
          <Todo key={ i.id }
                { ...i }
                onclick={
                  () => onclick(i.id)
                }
          />
      )
    }
  </ul>
)

export default TodoList
