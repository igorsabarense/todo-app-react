import React from 'react';
import {Router, Route, Redirect, hashHistory} from 'react-router'

import ToDo from '../todo/todo'
import About from'../about/about'

export default function Routes(props) {
	return (
        <Router history={hashHistory}>

            <Route path='/todos' component = {ToDo}/>
            <Route path='/about' component = {About}/>
            <Redirect from='*' to ='/todos'/>
        </Router>
    )
}
