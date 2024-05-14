import React, { Suspense } from 'react';
import './App.css';
// import { Header } from './Sections/Header';
// import { Carousel } from './Sections/Carousel';
// import { Combos } from './Sections/Combos';
// import { Services } from './Sections/Services';
// import { OtherServices } from './Sections/OtherServices';
// import { About } from './Sections/About';
// import { Footer } from './Sections/Footer';

// const LazyHeader = React.lazy(() => Header);
// const LazyCarousel = React.lazy(() => Carousel);
// const LazyCombos = React.lazy(() => Combos);
// const LazyServices = React.lazy(() => Services);
// const LazyOtherServices = React.lazy(() => OtherServices);
// const LazyAbout = React.lazy(() => About);
// const LazyFooter = React.lazy(() => Footer);

const LazyHeader = React.lazy(() => import('./Sections/Header'));
const LazyCarousel = React.lazy(() => import('./Sections/Carousel'));
const LazyCombos = React.lazy(() => import('./Sections/Combos'));
const LazyServices = React.lazy(() => import('./Sections/Services'));
const LazyOtherServices = React.lazy(() => import('./Sections/OtherServices'));
const LazyAbout = React.lazy(() => import('./Sections/About'));
const LazyFooter = React.lazy(() => import('./Sections/Footer'));

function App() {
	return (
		<div className="h-auto flex flex-col md:items-center ">
			<Suspense fallback={<div>Loading...</div>}>
				<LazyHeader />
				<LazyCarousel />
				<LazyCombos />
				<LazyServices />
				<LazyOtherServices />
				<LazyAbout />
				<LazyFooter />
			</Suspense>
		</div>
	);
}

export default App;
