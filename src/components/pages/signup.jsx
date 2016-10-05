import React from 'react';

class LoginPage extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container">
				<form className="form-signin" onSubmit={this.handleSubmit.bind(this)}>
					<h2 className="form-signin-heading">Sign up</h2>
					<label htmlFor="inputUsername" className="sr-only">User name:</label>
					<input type="text" id="inputUsername" className="form-control" placeholder="User name" required />
					<label htmlFor="inputEmail" className="sr-only">E-mail address:</label>
					<input type="email" id="inputEmail" className="form-control" placeholder="E-mail address" required />
					<label htmlFor="inputPassword" className="sr-only">Password:</label>
					<input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
					<button className="btn btn-lg btn-secondary btn-block" type="submit">Hooray!</button>
				</form>
			</div>
		);
	}

	handleSubmit(e) {
		e.preventDefault();

		let inputUsername = e.target.querySelector('#inputUsername');
		let inputEmail = e.target.querySelector('#inputEmail');
		let inputPassword = e.target.querySelector('#inputPassword');

		console.log(inputUsername.value);
		console.log(inputEmail.value);
		console.log(inputPassword.value);
	}
}

export default LoginPage;
