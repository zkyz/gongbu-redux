import React from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import todo from './reducers/index'
import TodoApp from './components/TodoApp'

import './index.css'

//noinspection JSUnresolvedFunction
const store = createStore(
  todo,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

render(
	<Provider store={ store }>
		<TodoApp />
	</Provider>,
	document.getElementById("root")
)
