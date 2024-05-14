import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Image } from '@nextui-org/react';
// import deskBG from '../assets/inicio_desk.jpg';
// import mobileBG from '../assets/inicio_mobile.jpeg';

function Carousel() {
	const tratamientos = [
		'Car detail',
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
		<div className="orbitron text-center top-[-2rem] w-full h-[85vh] md:h-[95vh] relative flex justify-center items-center overflow-hidden ">
			<div className="w-screen h-screen absolute bg-gradient-to-t from-gray-900/80 via-black/5 to-black/0 z-10"></div>
			<div className="absolute h-auto w-auto">
				<Image
					className="hidden sm:block h-screen w-auto  object-cover z-0 md:w-screen md:object-cover "
					src="https://firebasestorage.googleapis.com/v0/b/dutradetailing.appspot.com/o/inicio_desk.webp?alt=media&token=cffa3610-ad6f-4b5f-9704-7c81bd4586f7"
					alt="estetica vehicular"
				/>
				<Image
					loading="lazy"
					className="block sm:hidden  h-screen object-cover z-0 w-screen md:w-screen md:object-cover"
					src="https://firebasestorage.googleapis.com/v0/b/dutradetailing.appspot.com/o/inicio_mobile.webp?alt=media&token=17d32bbd-068d-4aeb-bbbc-21e8e346218c"
					alt="Car detail"
				/>
			</div>
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

export default Carousel;
