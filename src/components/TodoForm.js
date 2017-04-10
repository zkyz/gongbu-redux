import React from 'react'
import {reduxForm} from 'redux-form'
import Input from './Input'
import {add} from '../actions/index'

const validate = values => {
	console.log('- validate --------------')
	console.log(values)

	if (values.message && values.message.length < 5) {
		return {
			message: 'Too short.'
		}
	}
}

const asyncValidate = values => {
	console.log('- asyncValidate --------------')

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

const submit = (values, dispatch) => {
	console.log('- submit --------------')
	console.log(values)

	dispatch(add(values.message))
}

const TodoForm = ({handleSubmit, dispatch, pristine}) => (
	<form onSubmit={ handleSubmit(values => submit(values, dispatch)) }>
		<Input name="message"
					 placeholder="What's your mission?"
		/>
	</form>
)


export default reduxForm({
	form:            'todo-form',
	validate,
	asyncValidate,
	asyncBlurFields: ['']
})(TodoForm)
