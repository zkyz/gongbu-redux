import React from 'react'
import {add} from '../actions/index'
import {connect} from 'react-redux'

let TodoInput = ({ dispatch }) => {
  let text

  return (
    <fieldset>
      <input ref={ node => text = node }/>
      <button onClick={
        () => {
          dispatch(add(text.value))

          text.focus()
          text.value = ''
        }
      }
      >add</button>
    </fieldset>
  )
}

TodoInput = connect()(TodoInput)

export default TodoInput
