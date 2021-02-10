import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter } from 'react-router-dom';

describe('app component', () => {
	const createWithStore = () => {
		return (
			<Provider store={store}>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</Provider>
		);
	};

	it('should create body', () => {
		const component = render(createWithStore());
		const bodyElements = component.container.getElementsByClassName('body');
		expect(bodyElements.length).toBe(1);
	});
});