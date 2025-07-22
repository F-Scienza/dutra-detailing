import { Chip } from '@nextui-org/react';
import WhatsappButton from '../Components/WhatsappButton';

function Combos() {
	return (
		<div className="md:w-full flex flex-col justify-center items-center h-auto rounded-xl py-8 md:py-16">
			<div className="items-center w-11/12 sm:w-[620px] lg:w-[980px] h-[670px]  rounded-xl relative  cursor-pointer">
				<img
					className="h-full  sm:w-full object-cover absolute right-0 sm:inset-0 bottom-0 z-0 rounded-xl opacity-80 shadow-gradient"
					src="https://firebasestorage.googleapis.com/v0/b/dutradetailing.appspot.com/o/15off.webp?alt=media&token=d12924d2-843b-4315-aa28-fc274016a984"
					alt="carforsale"
				/>
				<div className=" h-full w-full rounded-xl bg-gradient-to-t from-black/50 to-black/5 flex items-center md:rounded-xl">
					<div className="absolute z-10 flex flex-col w-full">
						<div className="flex flex-wrap justify-center items-center w-100 gap-4 pb-4">
							<Chip
								className="text-md md:text-xl orbitron bg-white text-red-500 font-bold shadow-none"
								color="danger"
								variant="shadow"
							>
								¿Tu primera experiencia con nosotros?
							</Chip>
							{/* <Chip
								className="text-lg md:text-xl orbitron bg-white text-red-500 font-bold shadow-none"
								color="danger"
								variant="shadow"
							>
								Tratamiento acrílico
							</Chip> */}
							{/* <Chip
								className="md:text-lg orbitron bg-white text-red-500 font-bold shadow-none"
								color="danger"
								variant="shadow"
							>
								Abrillantado
							</Chip> */}
						</div>
						<h1 className="orbitron text-lg md:text-2xl lg:text-3xl text-center mb-4 md:mb-6">
							Contrata 2 o más de nuestros servicios y obtené un descuento
						</h1>

						<div className="place-self-center bg-red-500 text-white w-40 h-8 lg:h-8 mb-4 md:mb-6 rounded-2xl  text-center items-center flex justify-center  shadow-black shadow-sm">
							<span className="orbitron text-lg md:text-xl lg:text-2xl">
								{' '}
								15% off
							</span>
						</div>
						<div className=" place-self-center">
							<WhatsappButton />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Combos ;
