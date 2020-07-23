import React, { Component } from 'react';
import axios from 'axios';

import PageHeader from '../template/pageHeader';
import ToDoForm from './todoForm';
import ToDoList from './todoList';

const URL = 'http://localhost:3003/api/todos';

class ToDo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			description: '',
			list: []
		};
		this.handleAdd = this.handleAdd.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleRemove = this.handleRemove.bind(this);
		this.handleMarkAsDone = this.handleMarkAsDone.bind(this);
		this.handleMarkAsPending = this.handleMarkAsPending.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
		this.handleClear = this.handleClear.bind(this);
		this.refresh();
	}

	refresh(description = '') {
		const search = description ? `&description__regex=/${description}/` : ''
		axios.get(`${URL}?sort=-createdAt${search}`).then((resp) =>
			this.setState({
				...this.state,
				description,
				list: resp.data
			})
		);
	}

	handleAdd() {
		const description = this.state.description;
		axios.post(URL, { description }).then((resp) => this.refresh());
	}

	handleChange(e) {
		this.setState({ ...this.state, description: e.target.value });
	}

	handleRemove(item) {
		axios.delete(`${URL}/${item._id}`).then((resp) => this.refresh(this.state.description));
	}

	handleMarkAsDone(item) {
		axios.put(`${URL}/${item._id}`, { ...item, done: true }).then((resp) => this.refresh(this.state.description));
	}

	handleMarkAsPending(item) {
		axios.put(`${URL}/${item._id}`, { ...item, done: false }).then((resp) => this.refresh(this.state.description));
	}

	handleClear(){
		this.refresh();
	}


	handleSearch(){
		this.refresh(this.state.description)
	}

	render() {
		return (
			<div>
				<h1>
					{' '}
					<PageHeader name="Tasks" small="Register" />{' '}
				</h1>
				<ToDoForm
					description={this.state.description}
					handleAdd={this.handleAdd}
					handleChange={this.handleChange}
					handleSearch={this.handleSearch}
					handleClear={this.handleClear}
				/>
				<ToDoList
					list={this.state.list}
					handleMarkAsDone={this.handleMarkAsDone}
					handleMarkAsPending={this.handleMarkAsPending}
					handleRemove={this.handleRemove}
				/>
			</div>
		);
	}
}

export default ToDo;
