import React from 'react';

const Intro = () => {
	return (
		<h1>Campaigns page</h1>
	);
};

const CampaignInfo = ({title, description, picture}) => {
	return (
		<div className="col-sm-4">
			<div className="card">
				<div className="card-img-wrapper">
					<img className="card-img card-img-top img-fluid" src={picture} />
				</div>
				<div className="card-block">
					<h4 className="card-title">{title}</h4>
					<p className="card-text">{description}</p>
				</div>
			</div>
		</div>
	);
};

class CampaignsPage extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container m-t-6">
				<Intro />
				<div className="row">
					<CampaignInfo
						title="La regina dei ghiacci eterni"
						description="Una campagna di Axel"
						picture="http://img15.deviantart.net/5c34/i/2014/168/1/f/the_ice_queen_by_dannykojima-d5lcuh3.jpg" />
					<CampaignInfo
						title="Il re delle fiamme perenni"
						description="Una campagna di Axel"
						picture="http://www.kafkaesqueblog.com/wp-content/uploads/2014/06/Demon-devil-in-hell-red-flames.jpg" />
					<CampaignInfo
						title="L'assedio di Fortebastione"
						description="Una campagna di Axel"
						picture="http://img15.deviantart.net/5c34/i/2014/168/1/f/the_ice_queen_by_dannykojima-d5lcuh3.jpg" />
					<CampaignInfo
						title="L'assedio di Fortebastione"
						description="Una campagna di Axel"
						picture="http://img15.deviantart.net/5c34/i/2014/168/1/f/the_ice_queen_by_dannykojima-d5lcuh3.jpg" />
					<CampaignInfo
						title="L'assedio di Fortebastione"
						description="Una campagna di Axel"
						picture="http://img15.deviantart.net/5c34/i/2014/168/1/f/the_ice_queen_by_dannykojima-d5lcuh3.jpg" />
				</div>
			</div>
		);
	}
}

export default CampaignsPage;
