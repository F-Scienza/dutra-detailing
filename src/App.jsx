import './App.css';
import { About } from './Sections/About';
import { Carousel } from './Sections/Carousel';
import { Header } from './Sections/Header';
import { OtherServices } from './Sections/OtherServices';
import { Services } from './Sections/Services';
function App() {
	return (
		<div className='md:flex md:flex-col md:items-center'>
			<Header />
			<Carousel />
			<About />
			<Services/>
			<OtherServices/>
			<div className="text-3xl font-bold">combos</div>
			<div className="text-3xl font-bold">footer</div>
		</div>
	);
}

export default App;
