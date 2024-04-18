import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import background from '../assets/auto.jpg';

function Carousel() {
	const tratamientos = [
		'Lavado Premium',
		'Tratamiento acrílico',
		'Tratamiento cerámico',
		'Limpieza de interior',
		'Abrillantado',
		'Limpieza de motor',
		'Lavado premium',
		'Pulido de ópticas',
	];

	const [currentTreatmentIndex, setCurrentTreatmentIndex] = useState(0);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentTreatmentIndex(
				prevIndex => (prevIndex + 1) % tratamientos.length
			);
		}, 2000); // Cambia de frase cada 2 segundos

		return () => clearInterval(intervalId);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="top-0 w-screen h-screen relative flex justify-center items-center">
			<img
				className="absolute h-screen object-cover z-0 w-auto"
				src={background}
				alt="bg auto"
			/>
			<motion.div
				key={currentTreatmentIndex}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 1 }}
				className="text-4xl font-semibold text-white z-10"
			>
				{tratamientos[currentTreatmentIndex]}
			</motion.div>
		</div>
	);
}

export { Carousel };
