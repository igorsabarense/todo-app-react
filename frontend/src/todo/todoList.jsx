import React from 'react';
import IconButton from '../template/iconButton';
import { connect } from 'react-redux';

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
						onClick={() => props.handleMarkAsDone(item)}
						hide={item.done}
					/>
					<IconButton
						style="warning"
						icon="undo"
						onClick={() => props.handleMarkAsPending(item)}
						hide={!item.done}
					/>
					<IconButton style="danger" icon="trash-o" onClick={() => props.handleRemove(item)} />
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



export default connect(mapStateToProps, null)(ToDoList);
