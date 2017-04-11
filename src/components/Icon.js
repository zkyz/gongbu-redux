import React from 'react'

const Icon = ({name, style, children }) => (
  <i className="material-icons" style={ style }>{ name || children }</i>
)

export default Icon
