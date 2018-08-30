import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { AppContainer } from 'react-hot-loader';
import 'core-js';

const render = function(Component) {
	ReactDOM.render(
		<AppContainer>
			<Component />
		</AppContainer>,
		document.getElementById('root')
	);
};

render(App);

if (module.hot) {
	module.hot.accept('./App.jsx', function() {
		const NextApp = require('./App.jsx').default;
		render(NextApp);
	});
}
