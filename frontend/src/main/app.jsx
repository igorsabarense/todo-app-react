import 'modules/font-awesome/css/font-awesome.min.css';
import 'modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ToDo from '../todo/todo';
import About from '../about/about';
import Menu from '../template/menu';

export default function App(props) {
	return (
		<div className="container">
			<Menu/>
			<ToDo/>
			<About/>
		</div>
	);
}
