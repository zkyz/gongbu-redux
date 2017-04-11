import React from 'react'
import PropTypes from 'prop-types'
import {TextField} from 'redux-form-material-ui'
import {Field} from 'redux-form'
import {pickBy} from 'lodash'

const Input = (attr) => {
	const {id, name, label, style, placeholder} = attr
	const otherAttr = pickBy(attr, (x, y) => y !== 'label' && y !== 'placeholder')

	return (
		<Field { ...otherAttr }
					 id={ id }
					 name={ name }
					 floatingLabelText={ label || id || name }
					 hintText={ placeholder }
					 component={ TextField }
					 style={{...style, verticalAlign: 'top'}}
		/>
	)
}

Input.propTypes = {
	name:      PropTypes.string.isRequired,
	id:        PropTypes.string,
	label:     PropTypes.string,
	hint:      PropTypes.string,
	style:     PropTypes.object,
	validate:  PropTypes.func,
	autoFocus: PropTypes.bool
}

export default Input
