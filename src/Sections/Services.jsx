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
	Button,
	Divider,
} from '@nextui-org/react';

function Services() {
	const tratamientos = [
		{
			title: 'Tratamiento ceramico',
			description: `El tratamiento cerámico es uno de los mejores servicios que brindamos.`,
			description2: `Consiste en realizar una corrección de barniz full en donde eliminaremos hasta un 90% de imperfecciones. Aquí no solo mejora el nivel de corrección sino también mejora notablemente la protección, siendo ésta una capa líquida de recubrimiento de sílice sobre la pintura, lo cual protegerá a la misma de manchas, corrosión y daños causados por los rayos UV.`,
			description3: `Ésta protección puede variar su duración entre 1, 2 y hasta 3 años dependiendo el sellador que elija el cliente. Cualquiera de éstas protecciones además de proteger a la pintura mejora el brillo y la profundidad del color dejando un acabado en su máximo nivel de brillo.`,
			priceMoto: '$110.000',
			priceCarSm: '$350.000',
			priceCarMd: '$420.000',
			priceCarLg: '$500.000',
		},
		{
			title: 'Tratamiento acrilico',
			description: `En éste tratamiento realizamos una corrección de barniz intermedia en donde eliminamos entre un 50/60% de rayas circulares (las famosas telarañas que se ven con la luz del sol). `,
			description2: `Ésto da como resultado una muy buena terminación y ayuda a incrementar el brillo notablemente. `,
			description3: `Una vez terminada la corrección de barniz aplicaremos la protección, que proporciona una barrera protectora contra la suciedad, los rayos UV y aporta un plus de brillo, todo esto por hasta 6 meses.`,
			priceMoto: '$90.000',
			priceCarSm: '$230.000',
			priceCarMd: '$270.000',
			priceCarLg: '$360.000',
		},
		{
			title: 'Abrillantado',
			description: `Este servicio es un proceso que incluye un pulido leve. `,
			description2: `Eliminamos defectos superficiales y así incrementar el brillo del vehículo sin necesidad de realizar un trabajo profundo. `,
			description3: `Este trabajo finaliza con la aplicación de una cera, lo que le dará al vehículo un plus de brillo y otorgará suavidad a la superficie. `,
			priceMoto: '- - - -',
			priceCarSm: '$140.000',
			priceCarMd: '$170.000',
			priceCarLg: '$220.000',
		},
	];
	const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
	const [modalInfo, setModalInfo] = useState('');
	const handleOnOpen = tratamiento => {
		onOpen();
		setModalInfo(tratamientos[tratamiento]);
	};

	return (
		<div className="text-justify md:w-full">
			<h1 className="text-4xl orbitron text-center pt-12 mb-6 font-light text-red-600">
				Servicios de pulido
			</h1>
			<div className="flex overflow-x-auto pb-6 md:justify-center">
				<Spacer x={4} />
				<div
					className="shadow-white/10 shadow-lg hover:shadow-xl hover:shadow-white/20 transition-all duration-500 rounded-2xl flex-shrink-0"
					onClick={() => handleOnOpen(0)}
				>
					<Card className="bg-white/10 py-4 cursor-pointer">
						<CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
							<h4 className="font-bold text-large text-white">
								Tratamiento cerámico
							</h4>
							<small className="font-bold text-pink-500">Hasta 1 años</small>
						</CardHeader>
						<CardBody className="overflow-visible py-2">
							<Image
								isZoomed
								alt="Tratamiento ceramico"
								className="h-80 object-cover rounded-xl"
								src="https://firebasestorage.googleapis.com/v0/b/dutradetailing.appspot.com/o/julio-tratamiento-ceramico.webp?alt=media&token=d6889488-3814-4fd9-8b84-b2627b64f6b3"
								width={290}
							/>
						</CardBody>
					</Card>
				</div>
				<Spacer x={6} />
				<div
					className="shadow-white/10 shadow-lg hover:shadow-xl hover:shadow-white/20 transition-all duration-500 rounded-2xl flex-shrink-0"
					onClick={() => handleOnOpen(1)}
				>
					<Card className="bg-white/10 py-4 cursor-pointer">
						<CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
							<h4 className="font-bold text-large text-white">
								Tratamiento acrílico
							</h4>
							<small className="font-bold text-pink-500">6 meses</small>
						</CardHeader>
						<CardBody className="overflow-visible py-2">
							<Image
								isZoomed
								alt="Tratamiento acrilico"
								className="h-80 object-cover rounded-xl"
								src="https://firebasestorage.googleapis.com/v0/b/dutradetailing.appspot.com/o/julio-tratamiento-acrilico.webp?alt=media&token=4c258c20-c770-40c3-9946-315e6d437826"
								width={290}
							/>
						</CardBody>
					</Card>
				</div>
				<Spacer x={6} />
				<div
					className="shadow-white/10 shadow-lg hover:shadow-xl hover:shadow-white/20 transition-all duration-500 rounded-2xl flex-shrink-0"
					onClick={() => handleOnOpen(2)}
				>
					<Card className="bg-white/10 py-4 cursor-pointer">
						<CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
							<h4 className="font-bold text-large text-white">Abrillantado</h4>
							<small className="font-bold text-pink-500">3 meses</small>
						</CardHeader>
						<CardBody className="overflow-visible py-2">
							<Image
								isZoomed
								alt="Abrillantado Pulido"
								className="h-80 object-cover rounded-xl"
								src="https://firebasestorage.googleapis.com/v0/b/dutradetailing.appspot.com/o/julio-abrillantado.webp?alt=media&token=581c5347-4e9b-437e-987e-2a09c81903d2"
								width={290}
							/>
						</CardBody>
					</Card>
				</div>
				<Spacer x={4} />
			</div>
			<Modal
				isOpen={isOpen}
				onOpenChange={onOpenChange}
				isKeyboardDismissDisabled={true}
				placement="center"
				backdrop="blur"
				hideCloseButton
			>
				<ModalContent className="text-black">
					<ModalHeader className="flex flex-col gap-1 orbitron text-red-500 text-2xl">
						{modalInfo.title}
					</ModalHeader>
					<ModalBody>
						<p>{modalInfo.description}</p>
						<p>{modalInfo.description2} </p>
						<p>{modalInfo.description3} </p>
						<Divider className="my-2" />
						<div className="flex justify-between">
							<div className="flex flex-col">
								<p className="text-xs self-center opacity-90">Moto:</p>
								<p className="self-center text-red-500 orbitron">
									{modalInfo.priceMoto}
								</p>
							</div>
							<div className="flex flex-col">
								<p className="text-xs self-center opacity-90">Auto chico:</p>
								<p className="self-center text-red-500 orbitron">
									{modalInfo.priceCarSm}
								</p>
							</div>
							<div className="flex flex-col">
								<p className="text-xs self-center opacity-90">Auto grande:</p>
								<p className="self-center text-red-500 orbitron">
									{modalInfo.priceCarMd}
								</p>
							</div>
							<div className="flex flex-col">
								<p className="text-xs self-center opacity-90">Suv / pick-up:</p>
								<p className="self-center text-red-500 orbitron">
									{modalInfo.priceCarLg}
								</p>
							</div>
						</div>

						<p className="text-sm self-center">
							{' '}
							El costo del servicio varia segun el tamaño del vehiculo.
						</p>
					</ModalBody>
					<ModalFooter>
						<Button color="danger" variant="light" onClick={onClose}>
							Cerrar
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</div>
	);
}

export default Services;
