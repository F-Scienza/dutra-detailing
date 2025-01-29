import { Chip } from '@nextui-org/react';
import WhatsappButton from '../Components/WhatsappButton';

function Combos() {
	return (
		<div className="md:w-full flex flex-col justify-center items-center h-auto rounded-xl py-8 md:py-16">
			<div className="items-center w-11/12 sm:w-[620px] lg:w-[980px] h-[670px]  rounded-xl relative  cursor-pointer">
				<img
					className="h-full  sm:w-full object-cover absolute right-0 sm:inset-0 bottom-0 z-0 rounded-xl opacity-80 shadow-gradient"
					src="https://firebasestorage.googleapis.com/v0/b/dutradetailing.appspot.com/o/imagen%20enero.webp?alt=media&token=0fc804cd-94b0-4c74-8fa3-3376644cc09e"
					alt="carforsale"
				/>
				<div className="relative h-full w-full rounded-xl bg-gradient-to-t from-black/50 to-black/5 flex items-center md:rounded-xl">
					<div className="absolute z-10 flex flex-col w-full">
						<div className="flex flex-wrap justify-center items-center w-100 gap-1 pb-4">
							<Chip
								className="md:text-lg orbitron bg-white text-red-500 font-bold shadow-none"
								color="danger"
								variant="shadow"
							>
								Tratamiento ceramico
							</Chip>
							<Chip
								className="md:text-lg orbitron bg-white text-red-500 font-bold shadow-none"
								color="danger"
								variant="shadow"
							>
								Tratamiento acrílico
							</Chip>
							{/* <Chip
								className="md:text-lg orbitron bg-white text-red-500 font-bold shadow-none"
								color="danger"
								variant="shadow"
							>
								Abrillantado
							</Chip> */}
						</div>
						<h1 className="orbitron text-2xl md:text-3xl lg:text-4xl text-center mb-4 md:mb-6">
							Solicitá turno desde éste botón y accede al beneficio
							automáticamente!
						</h1>
						<div className=" place-self-center">
							<WhatsappButton/>
						</div>
					</div>
				</div>
				<div className="bg-white text-red-500 w-40 h-12 lg:h-16 rounded-l-2xl absolute text-center items-center flex justify-center top-12 right-0 shadow-black shadow-sm">
					<span className="archivo-black text-2xl"> 10% off</span>
				</div>
			</div>
		</div>
	);
}

export default Combos ;
