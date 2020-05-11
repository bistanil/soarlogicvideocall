import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Login from './Login';
import Signup from "./SignUp";
import CallingScreen from "./CallingScreen";
import { createHistory } from 'history';

const history = useRouterHistory(createHistory)({
	basename: '/login'
})
class App extends Component {
	
	render() {
		return (
				<Router history={history}>
					<div className="App">
					<Switch>
						<Route exact path="/register" component={Signup} />
						<Route exact path="/login" component={Login} />
                        <Route exact path="/callingScreen" component={CallingScreen} />
						<Redirect from="/" to="login" />
					</Switch>
					</div>
				</Router>
		);
	}
}
export default App;