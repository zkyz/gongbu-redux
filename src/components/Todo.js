import React from 'react'

const Todo = ({text, onClick}) => (
  <li onClick={ onClick }>{ text }</li>
)

export default Todo
