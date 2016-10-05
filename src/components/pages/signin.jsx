import React from 'react';

class LoginPage extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container">
				<form className="form-signin" onSubmit={this.handleSubmit.bind(this)}>
					<h2 className="form-signin-heading">Sign in</h2>
					<label htmlFor="inputId" className="sr-only">User name or e-mail:</label>
					<input type="text" id="inputId" className="form-control" placeholder="User name or e-mail" required />
					<label htmlFor="inputPassword" className="sr-only">Password:</label>
					<input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
					<div className="checkbox">
						<label>
							<input type="checkbox" id="inputRemember" value="remember-me" /> Don't forget about me...
						</label>
					</div>
					<button className="btn btn-lg btn-secondary btn-block" type="submit">Ok, take me in!</button>
				</form>
			</div>
		);
	}

	handleSubmit(e) {
		e.preventDefault();
		
		let inputId = e.target.querySelector('#inputId');
		let inputPassword = e.target.querySelector('#inputPassword');
		let inputRemember = e.target.querySelector('#inputRemember');

		console.log(inputId.value);
		console.log(inputPassword.value);
		console.log(inputRemember.checked);
	}
}

export default LoginPage;
