import React from 'react'
import {TextField} from 'material-ui'

const Input = ({ input, label, meta: { touched, error } }) => (
  <TextField { ...input }　
             errorText={ touched && error }
             floatingLabelText={ label }
             hintText={ label } />
)

export default Input
