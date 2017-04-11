import React from 'react'
import {reduxForm} from 'redux-form'
import Input from './Input'
import {add} from '../actions/index'

import 'material-ui'
import Select from './Select'

const validate = values => {
}

const asyncValidate = values => {
	return new Promise(fx => setTimeout(fx, 1500))
	.then(() => {
		if (['test', 'check', 'hello'].includes(values.message)) {
			// eslint-disable-next-line
			throw {
				message: 'Stop the testing'
			}
		}
	})
}

const submit = (values, pristine, dispatch) => {
	if (pristine) {

	}

	if (values.message && values.message.length < 5) {

	}

	dispatch(add(values.message))
}

let options = []

new Promise(fx => setTimeout(fx, 1000)).then(() => {
	options = [
		{value: 123, text: 'test'},
		{value: 456, text: 'check'}
	]

	console.log(options)
})

const TodoForm = ({handleSubmit, dispatch, pristine}) => (
	<form onSubmit={ handleSubmit(values => submit(values, pristine, dispatch)) }>
		<Select name="system" options={ options } />
		<Input name="message"
					 placeholder="What's your mission?"
					 validate={
						 value => {
							 return 'test'
						 }
					 }
		/>
	</form>
)

export default reduxForm({
	form: 'todo-form',
	validate,
	asyncValidate
})(TodoForm)
