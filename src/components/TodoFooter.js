import React from 'react'
import FilterLink from '../containers/FilterLink'

const TodoFooter = () => (
  <div>
    Show: { ' ' }
    <FilterLink filter='ALL'>All</FilterLink> { ', ' }
    <FilterLink filter='ACTIVE'>Active</FilterLink> { ', ' }
    <FilterLink filter='COMPLETED'>Completed</FilterLink>
  </div>
)

export default TodoFooter
