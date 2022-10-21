import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Home2 from './components/keys'
import Home from './components/home';
import About from './components/refs';
import Toggle from './components/event';
import Toggle2 from './components/form';
import './App.css';

class App extends Component {
render() {
	return (
	<Router>
		<div className="App">
			<ul className="App-header">
      <li>
				<Link to="/">This is the home route</Link>
			</li>
			<li>
				<Link to="/keys">Check out how keys works</Link>
			</li>
			<li>
				<Link to="/refs">Check out how refs works</Link>
			</li>
			<li>
				<Link to="/eventhandler">Check out how a event handler works</Link>
			</li>
      <li>
				<Link to="/form">Check out how a form works</Link>
			</li>
			</ul>
		<Routes>
    <Route exact path='/' element={< Home />}></Route>
				<Route exact path='/keys' element={< Home2 />}></Route>
				<Route exact path='/refs' element={< About />}></Route>
				<Route exact path='/eventhandler' element={< Toggle />}></Route>
        <Route exact path='/form' element={< Toggle2 />}></Route>
		</Routes>
		</div>
	</Router>
);
}
}

export default App;
