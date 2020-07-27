import React from 'react';
import IconButton from '../template/iconButton';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import { markAsDone, markAsPending, remove } from './todoActions';

function ToDoList(props) {
	const renderRows = () => {
		const list = props.list || [];
		return list.map((item) => (
			<tr key={item._id}>
				<td className={item.done ? 'markedAsDone' : ''}>{item.description}</td>
				<td key={item._id}>
					<IconButton
						style="success"
						icon="check"
						onClick={() => props.markAsDone(item)}
						hide={item.done}
					/>
					<IconButton
						style="warning"
						icon="undo"
						onClick={() => props.markAsPending(item)}
						hide={!item.done}
					/>
					<IconButton style="danger" icon="trash-o" onClick={() => props.remove(item)} />
				</td>
			</tr>
		));
	};

	return (
		<table className="table">
			<thead>
				<tr>
					<th>Description</th>
					<th className="tableActions">Actions</th>
				</tr>
			</thead>
			<tbody>{renderRows()}</tbody>
		</table>
	);
}

function mapStateToProps(state) {
	return {
		list: state.toDo.list
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ markAsDone, markAsPending, remove }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
