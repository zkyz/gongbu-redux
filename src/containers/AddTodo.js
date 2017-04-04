import React from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../actions'

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <fieldset>
      <input ref={ node => input = node.value } />
      <button onClick={ dispatch(addTodo(input)) }>add</button>
    </fieldset>
  )
}

AddTodo = connect()(AddTodo)

export default AddTodo
