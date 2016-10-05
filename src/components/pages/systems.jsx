import React from 'react';

const Intro = () => {
	return (
		<h1>Systems</h1>
	);
};

class SystemsPage extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container">
				<Intro />
			</div>
		);
	}
}

export default SystemsPage;
