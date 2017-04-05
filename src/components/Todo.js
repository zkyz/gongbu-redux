import React, {PropTypes} from 'react'

const Todo = ({ text, completed, click }) => (
  <li style={
        {
          textDecoration: completed ? 'line-through' : 'none'
        }
      }
      onClick={
        () => click()
      }
  >
    { text }
  </li>
)

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  //click: PropTypes.func.isRequired
}

export default Todo
