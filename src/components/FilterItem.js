import React, {PropTypes} from 'react'

const FilterItem = ({active, filter, children, click}) => {
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
  active: PropTypes.bool.isRequired,
  filter: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  click: PropTypes.func.isRequired
}

export default FilterItem
