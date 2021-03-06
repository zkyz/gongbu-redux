import {combineReducers} from 'redux'
import { reducer as formReducer } from 'redux-form'

const todo = (state = [], action) => {
  switch (action.type) {
    case 'ADD':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          created: new Date(),
          finished: null,
          completed: false,
        }
      ]
    case 'TOGGLE':
      return state.map(i => {
        if (i.id === action.id) {
          return {
            ...i,
            finished: !i.completed ? new Date() : null,
            completed: !i.completed
          }
        }

        return i
      })
    default:
      return state
  }
}

const filter = (state = 'ALL', action) => {
  switch (action.type) {
    case 'FILTER':
      return action.filter
    default:
      return state
  }
}

const reducers = combineReducers({
  todo,
  filter,
  form: formReducer
})
export default reducers
