import React from 'react'
import PropTypes from 'prop-types'
import {SelectField} from 'redux-form-material-ui'
import {Field} from 'redux-form'
import {pickBy} from 'lodash'
import {MenuItem} from 'material-ui'

const Select = (attr) => {
	const {id, name, style, label, options} = attr
	const otherAttr = pickBy(attr, (x, y) => y !== 'label' && y !== 'options')

	let key = 0

	return (
		<Field { ...otherAttr }
					 id={ id }
					 name={ name }
					 floatingLabelText={ label || id || name }
					 component={ SelectField }
					 style={{...style, verticalAlign: 'top'}}
		>
			{
				options.map(
					option => <MenuItem key={ key++ }
															value={ option.value }
															primaryText={ option.text }

					/>
				)
			}
		</Field>
	)
}

Select.propTypes = {
	name:      PropTypes.string.isRequired,
	id:        PropTypes.string,
	label:     PropTypes.string,
	style:     PropTypes.object,
	options:   PropTypes.arrayOf(
		PropTypes.shape({
			value: PropTypes.any.isRequired,
			text:  PropTypes.string.isRequired
		})
	),
	validate:  PropTypes.func,
	autoFocus: PropTypes.bool
}

export default Select
