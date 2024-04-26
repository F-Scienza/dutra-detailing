import './App.css';
import ModalButton from './Components/Modal';
import { About } from './Sections/About';
import { Carousel } from './Sections/Carousel';
import Combos from './Sections/Combos';
import { Footer } from './Sections/Footer';
import { Header } from './Sections/Header';
import { OtherServices } from './Sections/OtherServices';
import { Services } from './Sections/Services';
function App() {
	return (
		<div className="h-auto flex flex-col md:items-center">
			<Header />
			<Carousel />
			<About />
			<Services />
			<OtherServices />
			<Combos/>
			<ModalButton />
			<Footer />
		</div>
	);
}

export default App;
