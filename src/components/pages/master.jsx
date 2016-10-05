import React from 'react';

import { Link, browserHistory } from 'react-router';

class UserMenu extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			username: props.username,
			menuOpen: false
		}
	}

	render() {
		if (this.state.username) {
			let menu = '';

			if (this.state.menuOpen) {
				menu = (
					<div className="dropdown-menu">
						<Link className="dropdown-item" to="/profile">Profilo</Link>
						<div className="dropdown-divider"></div>
						<a className="dropdown-item" href="#" onClick={this.onLogout.bind(this)}>Esci</a>
					</div>
				);
			}

			return (
				<div className="dropdown pull-xs-right">
					<button type="button" className="btn btn-info dropdown-toggle" onClick={this.handleToggleUserMenu.bind(this)}>{this.state.username}</button>
					{menu}
				</div>
			);
		}
		else {
			return (
				<div className="btn-group pull-xs-right" role="group" aria-label="Autenticazione">
					<button type="button" className="btn btn-outline-secondary" onClick={this.handleSignIn.bind(this)}>Sign in</button>
					<button type="button" className="btn btn-secondary" onClick={this.handleSignUp.bind(this)}>Sign up</button>
				</div>
				);
		}

		return;
	}

	handleToggleUserMenu() {
		this.setState({
			menuOpen: !this.state.menuOpen
		});
	}

	handleSignIn() {
		browserHistory.push('signin');
	}

	handleSignUp() {
		browserHistory.push('signup');
	}

	onLogout() {
		// TODO: erase user data in the app state
		browserHistory.push('/');
	}
}

class NavLink extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Link {...this.props} className="nav-link" activeClassName="active">{this.props.children}</Link>
		);
	}
}

class NavBar extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<nav className="navbar navbar-fixed-top navbar-dark bg-inverse">
				<div className="container">
					<ul className="nav navbar-nav">
						<li className="nav-item"><NavLink to="/">Land of Avatars</NavLink></li>
						<li className="nav-item"><NavLink to="/systems">Systems</NavLink></li>
						<li className="nav-item"><NavLink to="/campaigns">Campaigns</NavLink></li>
					</ul>
					<UserMenu />
				</div>
			</nav>
		);
	}
}

class Footer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container">
				<p className="m-t-2 text-muted text-xs-center">Copyright &copy; 2016 - <a href="mailto:axelgenus@gmail.com?subject=Land of Avatars">Alessandro Calor&igrave;</a></p>
			</div>
		);
	}
}

class MasterPage extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<NavBar />
				{this.props.children}
				<Footer />
			</div>
		);
	}
}

export default MasterPage;