import React from 'react'
import Input from './Input'
import FilteredTodoList from '../containers/FilteredTodoList'
import Filters from './Filters'

const App = () => (
  <div>
    <h1>TODO</h1>
    <Input />
    <FilteredTodoList />
    <Filters />
  </div>
)

export default App
