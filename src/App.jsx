import './App.css';
import { About } from './Sections/About';
import { Carousel } from './Sections/Carousel';
import Combos from './Sections/Combos';
import { Footer } from './Sections/Footer';
import { Header } from './Sections/Header';
import { OtherServices } from './Sections/OtherServices';
import { Services } from './Sections/Services';
function App() {
	return (
		<div className="md:flex md:flex-col md:items-center">
			<Header />
			<Carousel />
			<About />
			<Services />
			<OtherServices />
			<Combos/>
			<Footer />
		</div>
	);
}

export default App;
