import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import WebFont from 'webfontloader';
import './App.scss';
import About from './components/About/About';
import Header from './components/Header/Header';
import Services from './components/Services/Services';
import Team from './components/Team/Team';
import Partners from './components/Partners/Partners';
import Publications from './components/Publications/Publications';
import Footer from './components/Footer/Footer';

function App() {
	useEffect(() => {
		WebFont.load({
			google: {
				families: ['Montserrat', 'Open Sans'],
			},
		});
	}, []);

	return (
		<BrowserRouter>
			<div className='backgroundPage bottomShadow'>
				<Header />
				<About />
				<Services />
			</div>

			<Team />
			<Partners />
			<Publications />
			<Footer />
		</BrowserRouter>
	);
}

export default App;
