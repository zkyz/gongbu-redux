import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import todo from './reducers/todo.reducer'

import './index.css'

const store = createStore(todo)

ReactDOM.render(
	<Provider store={ store }>
		<TodoApp />
	</Provider>,
	document.getElementById("root")
)