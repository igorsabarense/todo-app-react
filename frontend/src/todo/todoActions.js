import { DESCRIPTION_CHANGED, TODO_SEARCHED, TODO_ADDED, TODO_CLEAR } from '../objects/objects.constants';

import axios from 'axios';

const URL = 'http://localhost:3003/api/todos';

export const changeDescription = (description) => ({
	type: DESCRIPTION_CHANGED,
	payload: description.target.value
});

export const search = () => {
	return (dispatch, getState) => {
		const description = getState().toDo.description;
		const search = description ? `&description__regex=/${description}/` : '';
        const request = axios.get(`${URL}?sort=-createdAt${search}`)
        .then(resp=> dispatch({type: TODO_SEARCHED, payload: resp.data}));
	};
};

export const add = (description) => {
	return (dispatch) => {
		axios.post(URL, { description }).then((resp) => dispatch(clear())).then((resp) => dispatch(search()));
	};
};

export const markAsDone = (toDo) => {
	return (dispatch) => {
		axios.put(`${URL}/${toDo._id}`, { ...toDo, done: true }).then((resp) => dispatch(search()));
	};
};


export const markToWatchLater = (toDo) => {
	return (dispatch) => {
		axios.put(`${URL}/${toDo.isLater}`, { ...toDo, isLater: true }).then((resp) => dispatch(search()));
	};
};

export const markAsPending = (toDo) => {
	return (dispatch) => {
		axios.put(`${URL}/${toDo._id}`, { ...toDo, done: false }).then((resp) => dispatch(search()));
	};
};

export const remove = (toDo) => {
	return (dispatch) => {
		axios.delete(`${URL}/${toDo._id}`).then((resp) => dispatch(search()));
	};
};

export const clear = () => {
	return [{ type: TODO_CLEAR }, search()];
};
