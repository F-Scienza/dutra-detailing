import React, { Suspense } from 'react';
import './App.css';
import LazyLoading from './Components/LazyLoading';
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
			<Suspense fallback={<LazyLoading/>}>
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
