import React, {PropTypes} from 'react'
import {TextField} from 'redux-form-material-ui'
import {Field} from 'redux-form'
import {pickBy} from 'lodash'

const Input = (attr) => {
	const {id, name, label, placeholder} = attr
	const otherAttr = pickBy(attr, (x, y) => y !== 'label' && y !== 'placeholder')

	return (
		<Field id={ id }
					 name={ name }
					 floatingLabelText={ label || id || name }
					 hintText={ placeholder }
					 component={ TextField }
					 { ...otherAttr }
		/>
	)
}

Input.propType = {
	name:      PropTypes.string.isRequired,
	label:     PropTypes.string,
	hint:      PropTypes.string,
	autoFocus: PropTypes.bool
}

export default Input
