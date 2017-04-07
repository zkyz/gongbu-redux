import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {TextField} from 'material-ui'

const renderTextField = ({input, label, meta: {touched, error}, ...custom}) => (
  <TextField hintText={label}
             floatingLabelText={label}
             errorText={touched && error}
             {...input}
             {...custom}
  />
)

const TodoForm = ({handleSubmit}) => (
  <form onSubmit={ handleSubmit }>
    <div>
      <Field name="message" label="What's your todo?" component={ renderTextField }/>
    </div>
  </form>
)

const validate = values => {
  let errors = {}
  let requiredField = ['text']

  requiredField.forEach(name => {
    if (!values[name] || !(values[name]).toString().trim()) {
      errors[name] = 'Its required!'
    }
  })

  if (values.text && values.text.length < 4) {
    errors.email = 'Needs more message'
  }

  return errors
}

export default reduxForm({
  form: 'todo-form',
  validate
})(TodoForm)
