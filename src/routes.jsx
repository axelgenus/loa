// React libraries
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

// Page components
import MasterPage from './components/pages/master';
import HomePage from './components/pages/home';
import SigninPage from './components/pages/signin';
import SignupPage from './components/pages/signup';
import ProfilePage from './components/pages/profile';
import UsersPage from './components/pages/users';
import CampaignsPage from './components/pages/campaigns';
import SystemsPage from './components/pages/systems';
import NotFoundPage from './components/pages/notfound';

const routes = (
	<Router history={browserHistory}>
		<Route component={MasterPage}>
			<Route path="/" component={HomePage} />
			<Route path="signin" component={SigninPage} />
			<Route path="signup" component={SignupPage} />
			<Route path="profile" component={ProfilePage} />
			<Route path="users" component={UsersPage} />
			<Route path="campaigns" component={CampaignsPage} />
			<Route path="systems" component={SystemsPage} />
		</Route>
		<Route path="*" component={NotFoundPage} />
	</Router>
);

export default routes;
