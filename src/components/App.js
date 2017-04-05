import React from 'react'
import Input from './Input'
import FilteredTodoList from '../containers/FilteredTodoList'

const App = () => (
  <div>
    <h1>TODO</h1>
    <Input />
    <FilteredTodoList />
  </div>
)

export default App
