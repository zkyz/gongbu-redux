import React, {PropTypes} from 'react'

const Todo = ({ text, completed, onclick }) => (
  <li style={{
    textDecoration: completed ? 'line-through' : 'none'
  }} onClick={ onclick }>{ text }</li>
)

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onclick: PropTypes.func.isRequired
}

export default Todo
