let todoId = 0

export const add = (text) => ({
	type: 'ADD',
	id: todoId++,
	completed: false,
	text
})

export const toggle = (id) => ({
	type: 'TOGGLE',
	id
})

export const setFilter = (filter) => ({
	type: 'SET_VISIBILITY_FILTER',
	filter
})
