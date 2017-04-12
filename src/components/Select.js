import React from 'react'
import PropTypes from 'prop-types'
import {SelectField} from 'redux-form-material-ui'
import {Field} from 'redux-form'
import {pickBy} from 'lodash'
import {MenuItem} from 'material-ui'

class Select extends React.Component {

	constructor(props) {
		super(props)

		this.props = props
		this.options = props.options
		this.otherAttr = pickBy(props, (x, y) => y !== 'label' && y !== 'options')
	}

	render() {
		const {id, name, label, style} = this.props
		let key = 0

		return (
			<Field { ...this.otherAttr }
			       id={ id }
			       name={ name }
			       floatingLabelText={ label || id || name }
			       component={ SelectField }
			       style={ {...style, verticalAlign: 'top'} }
			       selectedMenuItemStyle={ {fontWeight: '500'} }
			>
				{
					this.options.map(
						({value, text, style}) => <MenuItem key={ key++ }
						                                    value={ value }
						                                    primaryText={ text }
						                                    style={ {...style} }/>
					)
				}
			</Field>
		)
	}
}

Select.propTypes = {
	name: PropTypes.string.isRequired,
	id: PropTypes.string,
	label: PropTypes.string,
	style: PropTypes.object,
	options: PropTypes.arrayOf(
		PropTypes.shape({
			value: PropTypes.any.isRequired,
			text: PropTypes.string.isRequired
		})
	),
	validate: PropTypes.func,
	autoFocus: PropTypes.bool
}

export default Select
