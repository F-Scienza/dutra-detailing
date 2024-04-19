import './App.css';
import { About } from './Sections/About';
import { Carousel } from './Sections/Carousel';
import { Header } from './Sections/Header';
import { OtherServices } from './Sections/OtherServices';
import { Services } from './Sections/Services';
function App() {
	return (
		<>
			<Header />
			<Carousel />
			<About />
			<Services/>
			<OtherServices/>
			<div className="text-3xl font-bold">combos</div>
			<div className="text-3xl font-bold">footer</div>
		</>
	);
}

export default App;
