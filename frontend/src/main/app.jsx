import 'modules/font-awesome/css/font-awesome.min.css';
import 'modules/bootstrap/dist/css/bootstrap.min.css';
import '../template/custom.css';
import React from 'react';
import ToDo from '../todo/todo';
import About from '../about/about';
import Menu from '../template/menu';
import Routes from './routes';

export default function App(props) {
	return (
		<div className="container">
			<Menu/>
			<Routes/>
		</div>
	);
}
