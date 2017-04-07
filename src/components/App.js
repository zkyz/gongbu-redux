import React from 'react'
import FilteredTodoList from '../containers/FilteredTodoList'
import Filters from './Filters'
import TodoForm from './TodoForm'

const App = () => (
  <div>
    <h1>TODO</h1>
    <TodoForm />
    <FilteredTodoList />
    <Filters />
  </div>
)

export default App
