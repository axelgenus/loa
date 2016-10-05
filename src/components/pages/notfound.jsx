import React from 'react';

class NotFoundPage extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<h1>Ops!</h1>
				<p>La pagina indicata non &egrave; stata trovata.</p>
			</div>
		);
	}
}

export default NotFoundPage;
