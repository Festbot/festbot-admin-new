import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';

import AdminContainer from './containers/AdminContainer.jsx';
import DashboardContainer from './containers/DashboardContainer.jsx';
import VenuesContainer from './containers/VenuesContainer.jsx';

const AppContainer = styled.div`
margin:0;
padding:0;
	font-family: 'Nunito', sans-serif;
	font-weight: 100;

`;

class App extends Component {
	componentDidMount(){
		document.body.style.margin = 0;
		//document.body.style.overflow = 'hidden';
	}
	render() {
		return (
			<AppContainer>
				<BrowserRouter>
					<AdminContainer>
						<Switch>
							<Route
								path="/"
								exact
								component={DashboardContainer}
							/>
							<Route
								path="/venues"
								exact
								component={VenuesContainer}
							/>
						</Switch>
					</AdminContainer>
				</BrowserRouter>
			</AppContainer>
		);
	}
}

export default App;
