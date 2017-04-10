import React from 'react'
import {reduxForm} from 'redux-form'
import Input from './Input'

const required = value => value ? '' : 'required.'

const TodoForm = ({handleSubmit, dispatch, pristine}) => (
  <form onSubmit={ handleSubmit }>
    <Input name="message"
           label="Message"
           hint="Whats's your plan?"
           validate={ required }
           autoFocus/>
  </form>
)


export default reduxForm({
  form: 'todo-form'
})(TodoForm)
