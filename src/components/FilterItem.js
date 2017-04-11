import React from 'react'
import PropTypes from 'prop-types'

const FilterItem = ({filter, active, click, children}) => {
	if (active) {
		return (
			<span>{ children }</span>
		)
	}

	return (
		<a href="#"
			 onClick={
				 e => {
					 e.preventDefault()
					 click(filter)
				 }
			 }
		>{ children }</a>
	)
}

FilterItem.propTypes = {
	active:   PropTypes.bool.isRequired,
	filter:   PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
	click:    PropTypes.func.isRequired
}

export default FilterItem
