import React from 'react'
import {add} from '../actions/todo.action'

const TodoInput = (dispatch) => {
	let text;

	return (
		<fieldset>
			<input ref={ node => text = node.value }/>
			<button onClick={
				() => dispatch(add(text))
			}
			>add</button>
		</fieldset>
	)
}