import React from 'react';
import { Link } from 'react-router';

const JumboTron = () => {
	return (
		<div className="jumbotron">
			<div className="container">
				<h1 className="display-3">Hello, traveller...</h1>
				<p className="lead">Welcome to the land of avatars. This is a strange place, I warn you!</p>
				<p>Here, anything can come true, either your wildest dreams or your worst nightmares. It's up to you to play your fortune and choose your path.</p>
				<div className="btn-group" role="group" aria-label="Autenticazione">
					<Link className="btn btn-secondary" to="/signup" role="button">Interested?</Link>
					<Link className="btn btn-secondary" to="/signin" role="button">Let me in</Link>
				</div>
			</div>
		</div>
	);
};

const AboutUs = () => {
	return (
		<div className="container">
			<h1>Discover the land</h1>
			<p>Here you can be whatever you want to be: a dwarf, a dragon, a secret agent... it does not matter at all. This land is open and it's up to you to fill it, traveller.</p>
			<p>We are citizen like you and we'll maybe meet again someday. As for now, be safe and watch yourself from the narrators: they shape the world up to their desires. Be brave and fear not my friend: your immagination is the only limit.</p>
		</div>
	);
};

class HomePage extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<JumboTron />
				<AboutUs />
			</div>
		);
	}
}

export default HomePage;
