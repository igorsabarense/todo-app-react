import React, { Component } from 'react';
import Grid from '../template/grid';
import IconButton from '../template/iconButton';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeDescription, search, add } from './todoActions';

class ToDoForm extends Component {
	constructor(props) {
		super(props);
		this.keyHandler = this.keyHandler.bind(this);
	}

	componentWillMount() {
		this.props.search();
	}

	keyHandler(e) {
		const { add , search} = this.props
		if (e.key === 'Enter') {
			e.shiftKey ? search() : add(e);
		} else if (e.key == 'Escape') {
			this.props.handleClear();
		}
	}

	render() {
		const { add, search , description } = this.props
		return (
			<div role="form" className="todoForm">
				<Grid cols="12 9 10">
					<input
						id="description"
						className="form-control"
						placeholder="Add a task"
						value={this.props.description}
						onChange={this.props.changeDescription}
						onKeyUp={this.keyHandler}
					/>
				</Grid>
				<Grid cols="12 3 2">
					<IconButton style="primary" icon="plus" onClick={() => add(description)} />
					<IconButton style="info" icon="search" onClick={() => search()} />
					<IconButton style="default" icon="close" onClick={this.props.handleClear} />
				</Grid>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		description: state.toDo.description
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ changeDescription, search, add }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoForm);
