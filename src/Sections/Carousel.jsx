import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import deskBG from '../assets/inicio_desk.jpg';
import mobileBG from '../assets/inicio_mobile.jpeg';

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
		<div className="orbitron text-center top-[-2rem] w-full h-[95vh] relative flex justify-center items-center overflow-hidden ">
			<div className="w-screen h-screen absolute bg-gradient-to-t from-gray-900/80 via-black/5 to-black/0 z-10" ></div>
			<img
				className=" hidden md:block absolute h-screen object-cover z-0 w-auto md:w-screen md:object-cover "
				src={deskBG}
				alt="estetica vehicular auto"
			/>
			<img
				className="block md:hidden absolute h-screen object-cover z-0 w-auto md:w-screen md:object-cover"
				src={mobileBG}
				alt="estetica vehicular auto"
			/>
			<motion.div
				key={currentTreatmentIndex}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 1 }}
				className="top-[-3rem] text-4xl md:text-6xl font-semibold md:font-bold text-white z-20"
			>
				{tratamientos[currentTreatmentIndex]}
			</motion.div>
		</div>
	);
}

export { Carousel };
