import React from 'react'
import PropTypes from 'prop-types'

const Icon = ({name, style, children }) => (
  <!--suppress HtmlPresentationalElement -->
	<i className="material-icons" style={ style }>{ name || children }</i>
)

Icon.propTypes = {
	children: PropTypes.node.isRequired
}

export default Icon
