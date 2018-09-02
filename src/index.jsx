import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/store.js';
import { Provider } from 'react-redux';
import App from './App.jsx';
import { AppContainer } from 'react-hot-loader';
import 'babel-polyfill';
import 'core-js';


const render = function(Component) {
	ReactDOM.render(
		<AppContainer>
			<Provider store={store}>
				<Component />
			</Provider>
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
