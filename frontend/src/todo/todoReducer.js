import {
    DESCRIPTION_CHANGED,
    TODO_SEARCHED,
    TODO_ADDED,
    TODO_CLEAR
} from '../objects/objects.constants';

const initialState = {
	description: '',
	 list: [],
	 author: undefined,
	 date: new Date()
};

export default (state = initialState, action) => {
	switch (action.type) {
		case DESCRIPTION_CHANGED:
            return { ...state, description: action.payload };
        case TODO_SEARCHED:
            return { ...state, list: action.payload };
        case TODO_CLEAR:
        return { ...state, description: ''}
		default:
			return state;
	}
};
