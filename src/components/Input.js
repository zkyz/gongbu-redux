import React from 'react'
import {connect} from 'react-redux'
import {add} from '../actions/index'

let Input = ({ dispatch }) => {
  let text

  return (
    <form onSubmit={
      e => {
        e.preventDefault()
        dispatch(add(text.value))
      }
    }>
      <input ref={ node => text = node } placeholder="Write your everything!" />
    </form>
  )
}

Input = connect()(Input)

export default Input
