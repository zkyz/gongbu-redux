import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({todo, click}) => (
	<ul>
		{
			todo.map(i =>
				<Todo key={ i.id }
							{ ...i }
							click={
								() => click(i.id)
							}
				/>
			)
		}
	</ul>
)

TodoList.propTypes = {
	todo:  PropTypes.arrayOf(
		PropTypes.shape({
			id:        PropTypes.number.isRequired,
			text:      PropTypes.string.isRequired,
			completed: PropTypes.bool.isRequired
		}).isRequired
	).isRequired,
	click: PropTypes.func.isRequired
}

export default TodoList
