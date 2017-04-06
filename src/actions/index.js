let todoId = 0

export const add = (text) => ({
  id: todoId++,
  type: 'ADD',
  text
})

export const toggle = (id) => ({
  type: 'TOGGLE',
  id
})

export const setFilter = (filter) => ({
  type: 'SET_FILTER',
  filter
})
