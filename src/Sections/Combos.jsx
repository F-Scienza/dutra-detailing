import { Chip } from '@nextui-org/react';
import combo from '../assets/combo.jpg';
function Combos() {
	return (
		<div className="md:w-screen flex flex-col justify-center items-center h-auto rounded-xl py-8 md:py-16">
			<div className="items-center w-11/12 sm:w-[620px] lg:w-[980px] h-[670px]  rounded-xl relative  cursor-pointer">
				<img
					className="h-[670px]  sm:w-full object-cover absolute right-0 sm:inset-0 bottom-0 z-0 rounded-xl opacity-80 shadow-gradient"
					src={combo}
					alt="carforsale"
				/>
				<div className="relative h-full w-full rounded-xl bg-gradient-to-t from-black/50 to-black/5 flex items-center md:rounded-xl">
					<div className="absolute z-10 flex flex-col sm:w-full">
						<h1 className="orbitron text-4xl md:text-5xl lg:text-6xl text-center mb-4 md:mb-6">
							Prepara tu vehiculo
							<br />
							para la venta
						</h1>
						<div className="flex flex-wrap justify-center items-center w-100 gap-1 ">
							<Chip
								className="md:text-lg orbitron bg-red-700/85"
								color="danger"
								variant="shadow"
							>
								Abrillantado
							</Chip>
							<Chip
								className="md:text-lg orbitron bg-red-700/85"
								color="danger"
								variant="shadow"
							>
								Limpieza de interior
							</Chip>
							<Chip
								className="md:text-lg orbitron bg-red-700/85"
								color="danger"
								variant="shadow"
							>
								Limpieza de motor
							</Chip>
						</div>
					</div>
				</div>
				<div className="bg-white text-red-500 w-40 h-12 lg:h-16 rounded-l-2xl absolute text-center items-center flex justify-center top-12 right-0 shadow-black shadow-sm">
					<span className="archivo-black text-2xl"> 15% off</span>
				</div>
			</div>
		</div>
	);
}

export default Combos;
