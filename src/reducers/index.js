import {combineReducers} from 'redux'

const todo = (state = [], action) => {
	switch (action.type) {
		case 'ADD':
			return [
				...state,
				{
					id:        action.id,
					text:      action.text,
					completed: false
				}
			]
		case 'TOGGLE':
			return state.map(i => {
				if (i.id !== action.id) {
					return i
				}

				return {
					...i,
					completed: !i.completed
				}
			})
		default:
			return state
	}
}

const filter = (state = 'ALL', action) => {
	switch (action.type) {
		case 'SET_VISIBILITY_FILTER':
			return action.filter
		default:
			return state
	}
}

const reducers = combineReducers({ todo, filter })
export default reducers
