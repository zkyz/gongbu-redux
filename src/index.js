import React from 'react'
import ReactDOM from 'react-dom'
import {combineReducers, createStore} from 'redux'

let todoId = 0
const list = (state = [], action) => {
	switch (action.type) {
		case 'ADD':
			return [
				...state,
				{
					id:        todoId++,
					text:      action.text,
					completed: false
				}
			]
		case 'TOGGLE':
			return state.map(i => {
				if (i.id === action.id)
					i.completed = !i.completed

				return i
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

const store = createStore(combineReducers({list, filter}))

const TodoInput = () => {
	let input;
	return (
		<fieldset>
			<input ref={ element => input = element }/>
			<button onClick={
				() => {
					store.dispatch({
						type: 'ADD',
						text: input.value
					})

					input.value = ''
				}
			}
			>Add todo
			</button>
		</fieldset>
	)
}

const Todo = ({item}) => (
	<li onClick={
		() => store.dispatch({
			type: 'TOGGLE',
			id:   item.id
		})
	}
	style={{
		textDecoration: item.completed ? 'line-through' : ''
	}}>
		{ item.text }
	</li>
)

const FilterLink = ({filter, children }) => (
	filter === children.toUpperCase()
		? <span>{ children }</span>
		: <a href="#" onClick={
		e => {
			e.preventDefault()
			store.dispatch({
				type:   'SET_VISIBILITY_FILTER',
				filter: children.toUpperCase()
			})
		}
	}>{ children }</a>
)


const TodoList = ({list, filter}) => (
	<div>
		<h1>TODO</h1>
		<TodoInput />
		<ul>{
			list
			.filter(
				i => {
					switch (filter) {
						case 'ACTIVE':
							return !i.completed
						case 'COMPLETED':
							return i.completed
						default:
							return true
					}
				}
			)
			.map(
				i => <Todo key={ i.id } item={ i }/>
			)
		}</ul>
		<div>
			Show: {' '}
			<FilterLink filter={ filter }>All</FilterLink>,
			<FilterLink filter={ filter }>Active</FilterLink>,
			<FilterLink filter={ filter }>Completed</FilterLink>
		</div>
	</div>
)

const render = () => {
	const state = store.getState();
	ReactDOM.render(
		<TodoList { ...state } />,
		document.getElementById("root")
	)
}

store.subscribe(render)
render()