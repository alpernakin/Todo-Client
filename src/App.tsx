import './App.scss';
import React from 'react';
import { Router } from './routes/Router';
import Header from './components/layout/header/Header';
import Footer from './components/layout/footer/Footer';

function App() {
	return (
		<div className="app">
			<Header />

			<div className="body">
				<Router />
			</div>

			<Footer />
		</div>
	);
}

export default App;