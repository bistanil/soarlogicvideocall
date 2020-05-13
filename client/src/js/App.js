import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Login from './Login';
import Signup from "./SignUp";
import CallingScreen from "./CallingScreen";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Router>
					<Route exact path="/register" component={Signup} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/callingScreen" component={CallingScreen} />
					<Redirect from="/" to="login" />
				</Router>
			</div>
		);
	}
}
export default App;