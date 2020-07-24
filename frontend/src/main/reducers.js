import { combineReducers } from 'redux';
import todoReducer from '../todo/todoReducer';

const rootReducer = combineReducers({
	toDo: todoReducer
});

export default rootReducer;
