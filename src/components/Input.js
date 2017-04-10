import React, {PropTypes} from 'react'
import {TextField} from 'redux-form-material-ui'
import {Field} from 'redux-form'
import {pickBy} from 'lodash'

const Input = (attr) => {
  const {label, hint} = attr
  const newAttr = pickBy(attr, (x, y) => y != 'label' && y != 'hint')

  return (
    <Field name={ name }
           floatingLabelText={ label }
           hintText={ hint }
           component={ TextField }
           { ...newAttr } />
  )
}

Input.propType = {
  name: PropTypes.string.isRequired
}

export default Input
