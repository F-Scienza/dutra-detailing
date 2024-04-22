import { useState } from 'react';
import {
	Card,
	CardHeader,
	CardBody,
	Image,
	Spacer,
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	useDisclosure,
	Button
} from '@nextui-org/react';
import auto2 from '../assets/auto2.png';
import auto3 from '../assets/auto3.png';
import auto4 from '../assets/auto4.png';

function Services() {
	const tratamientos = [
		{
			title: 'Tratamiento ceramico',
			description: 'loremipsum',
		},
		{
			title: 'Tratamiento acrilico',
			description: 'loremipsum',
		},
		{
			title: 'Abrillantado',
			description: 'loremipsum',
		},
	];
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	const [modalInfo, setModalInfo] = useState('');
	const handleOnOpen = tratamiento => {
		onOpen();
		setModalInfo(tratamientos[tratamiento]);
	};

	return (
		<div className="text-justify bg-white md:w-screen ">
			<h1 className="orbitron text-center pt-12 mb-6 font-light text-red-600">
				Servicios
			</h1>
			<div className="flex overflow-x-auto pb-6 md:justify-center">
				<Spacer x={14} />
				<div className="flex-shrink-0" onClick={() => handleOnOpen(0)}>
					<Card className="bg-zinc-900/5 py-4">
						<CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
							<h4 className="font-bold text-large text-pink-600">
								Tratamiento ceramico
							</h4>
							<small className="text-default-500">3 meses</small>
						</CardHeader>
						<CardBody className="overflow-visible py-2">
							<Image
								isZoomed
								alt="Card background"
								className="h-80 object-cover rounded-xl"
								src={auto2}
								width={270}
							/>
						</CardBody>
					</Card>
				</div>
				<Spacer x={8} />
				<div className="flex-shrink-0" onClick={() => handleOnOpen(1)}>
					<Card className="bg-zinc-900/5 py-4">
						<CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
							<h4 className="font-bold text-large text-pink-600">
								Tratamiento acrilico
							</h4>
							<small className="text-default-500">3 meses</small>
						</CardHeader>
						<CardBody className="overflow-visible py-2">
							<Image
								isZoomed
								alt="Card background"
								className="h-80 object-cover rounded-xl"
								src={auto4}
								width={270}
							/>
						</CardBody>
					</Card>
				</div>
				<Spacer x={8} />
				<div className="flex-shrink-0" onClick={() => handleOnOpen(2)}>
					<Card className="bg-zinc-900/5 py-4">
						<CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
							<h4 className="font-bold text-large text-pink-600">
								Abrillantado
							</h4>
							<small className="text-default-500">3 meses</small>
						</CardHeader>
						<CardBody className="overflow-visible py-2">
							<Image
								isZoomed
								alt="Card background"
								className="h-80 object-cover rounded-xl"
								src={auto3}
								width={270}
							/>
						</CardBody>
					</Card>
				</div>
				<Spacer x={14} />
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
	);
}

export { Services };
