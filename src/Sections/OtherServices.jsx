import {
	Card,
	CardHeader,
	Image,
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Button,
	useDisclosure,
} from '@nextui-org/react';
import auto2 from '../assets/auto2.png';
import auto3 from '../assets/auto3.png';
import auto4 from '../assets/auto4.png';
import { useState } from 'react';

function OtherServices() {
	const tratamientos = [
		{
			title: 'Lavado premium',
			description: 'loremipsum',
		},
		{
			title: 'Pulido de opticas',
			description: 'loremipsum',
		},
		{
			title: 'Limpieza de interior',
			description: 'loremipsum',
		},
		{
			title: 'Limpieza de motor',
			description: 'lorem',
		},
	];
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	const [modalInfo, setModalInfo] = useState('');
	const handleOnOpen = tratamiento => {
		onOpen();
		setModalInfo(tratamientos[tratamiento]);
	};

	return (
		<div className="h-auto md:w-screen pb-16 bg-white">
			<h1 className="orbitron text-center pt-12 mb-6 font-light text-red-600">
				Tambien
			</h1>
			<div className="flex flex-wrap justify-evenly lg:grid lg:grid-cols-2 lg:place-items-center lg:justify-center lg:gap-4">
				<div
					className="flex justify-center content-center place-self-end hover:scale-[1.01] transition-all duration-400"
					onClick={() => handleOnOpen(0)}
				>
					<Card className="h-[100px] md:h-[150px] w-11/12 md:w-[450px] lg:w-[500px] flex justify-center content-center mb-6 cursor-pointer">
						<CardHeader className="absolute z-10 flex justify-center">
							<h4 className="text-center orbitron text-white text-3xl ">
								Lavado premium
							</h4>
						</CardHeader>
						<Image
							alt="Card background"
							className="blur-sm z-0 w-full h-full object-cover "
							src={auto2}
						/>
					</Card>
				</div>
				<div
					className="flex justify-center md:place-self-start hover:scale-[1.01] transition-all duration-400"
					onClick={() => handleOnOpen(1)}
				>
					<Card className="h-[100px] md:h-[150px] w-11/12 md:w-[450px] lg:w-[500px] flex justify-center content-center mb-6 cursor-pointer">
						<CardHeader className="absolute z-10 flex justify-center">
							<h4 className="text-center orbitron text-white text-3xl">
								Pulido de opticas
							</h4>
						</CardHeader>
						<Image
							alt="Card background"
							className="blur-[2px] z-0 w-full h-full object-cover "
							src={auto3}
						/>
					</Card>
				</div>
				<div
					className="flex justify-center md:place-self-end hover:scale-[1.01] transition-all duration-400"
					onClick={() => handleOnOpen(2)}
				>
					<Card className="h-[100px] md:h-[150px] w-11/12 md:w-[450px] lg:w-[500px] flex justify-center content-center mb-6 cursor-pointer">
						<CardHeader className="absolute z-10 flex justify-center">
							<h4 className="text-center orbitron text-white text-3xl">
								Limpieza de interior
							</h4>
						</CardHeader>
						<Image
							alt="Card background"
							className="blur-[2px] z-0 w-full h-full object-cover "
							src={auto4}
						/>
					</Card>
				</div>
				<div
					className="flex justify-center md:place-self-start hover:scale-[1.01] transition-all duration-400"
					onClick={() => handleOnOpen(3)}
				>
					<Card className="h-[100px] md:h-[150px] w-11/12 md:w-[450px] lg:w-[500px] flex justify-center content-center mb-6 cursor-pointer">
						<CardHeader className="absolute z-10 flex justify-center">
							<h4 className="text-center orbitron text-white text-3xl">
								Limpieza de motor
							</h4>
						</CardHeader>
						<Image
							alt="Card background"
							className="blur-[2px] z-0 w-full h-full object-cover "
							src={auto2}
						/>
					</Card>
				</div>
				<Modal
					isOpen={isOpen}
					onOpenChange={onOpenChange}
					isKeyboardDismissDisabled={true}
					placement="center"
					backdrop="blur"
				>
					<ModalContent className="text-black">
						{onClose => (
							<>
								<ModalHeader className="flex flex-col gap-1 orbitron text-red-500 text-2xl">
									{modalInfo.title}
								</ModalHeader>
								<ModalBody>
									<p>{modalInfo.description}</p>
								</ModalBody>
								<ModalFooter>
									<Button color="primary" onPress={onClose}>
										Action
									</Button>
								</ModalFooter>
							</>
						)}
					</ModalContent>
				</Modal>
			</div>
		</div>
	);
}

export { OtherServices };
