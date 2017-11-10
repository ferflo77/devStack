import incrementReducer from './incrementReducer'
import { combineReducers } from 'redux';

export default combineReducers({
	increment: incrementReducer,
})