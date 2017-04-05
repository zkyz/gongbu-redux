import React, {PropTypes} from 'react'

const Link = ({active, onclick, children}) => {
  if (active) {
    return <span>{ children }</span>
  }

  return (
    <a href="#"
       onClick={
         e => {
           e.preventDefault()
           onclick()
         }
       }>{ children } </a>

  )
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  onclick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
}

export default Link
