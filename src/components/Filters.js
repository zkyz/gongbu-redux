import React from 'react'
import Filter from '../containers/Filter'

const Filters = () => (
  <div>
    Show: { ' ' }
    <Filter filter="ALL">All</Filter> { ', ' }
    <Filter filter="ACTIVE">Active</Filter> { ', ' }
    <Filter filter="COMPLETED">Completed</Filter>
  </div>
)

export default Filters
