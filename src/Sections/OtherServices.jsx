import {
	Card,
	CardHeader,
	Image,
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	useDisclosure,
	Button,
	Divider,
} from '@nextui-org/react';
import { useState } from 'react';

function OtherServices() {
	const tratamientos = [
		{
			title: 'Lavado premium',
			description: `El lavado premium es un servicio de limpieza de vehículos que va más allá del lavado básico. `,
			description2: `Incluye un proceso detallado de lavado que utiliza técnicas y productos de alta calidad para eliminar la suciedad y el polvo, sin generar ningún tipo de daño sobre la carrocería, las llantas y otros componentes del vehículo. `,
			description3: `Además del lavado exterior, un lavado premium incluye limpieza y acondicionado interior así como también la aplicación de cera o selladores para proteger la pintura o mantener los selladores en caso de haber sido tratado previamente.`,
			price: '$20.000',
		},
		{
			title: 'Pulido de opticas',
			description: ` Con el tiempo, los faros pueden volverse opacos, amarillentos o nublados por la exposición a los elementos, los rayos UV del sol y el desgaste general.`,
			description2: `Esto no solo afecta la estética del automóvil, sino que también puede reducir la efectividad de los faros al dispersar la luz de manera desigual.`,
			description3: `El pulido de ópticas aparte de mejorar la apariencia del vehículo, también mejora la seguridad al mejorar la visibilidad nocturna al conducir.`,
			price: '$20.000 c/u',
		},
		{
			title: 'Limpieza de interior',
			description: `El servicio de limpieza interior implica la eliminación meticulosa de suciedad, polvo, manchas y olores del interior del automóvil. `,
			description2: `Esto incluye aspirar y cepillar a fondo las superficies, como alfombras, tapicería, paneles de puertas y salpicaderos, para eliminar la suciedad y los residuos. Además, se utilizan productos específicos para limpiar y desinfectar las superficies, eliminando manchas y olores no deseados.`,
			description3: `Por último, aplicamos un acondicionador para proteger y revitalizar la tapicería y los materiales interiores, dejando el interior del vehículo limpio, fresco y como nuevo.`,
			price: '$140.000',
		},
		{
			title: 'Limpieza de motor',
			description: `La limpieza del motor es un proceso que implica eliminar la suciedad, el polvo, los residuos de aceite y otros desechos acumulados en el compartimiento del motor de un vehículo.`,
			description2: `Este proceso no solo mejora la apariencia del motor, sino que también puede contribuir a su rendimiento y durabilidad a largo plazo. `,
			description3: `Este trabajo se realiza con sumo cuidado y utilizando los productos y herramientas adecuados para evitar dañar los componentes del motor o causar problemas eléctricos. `,
			price: '$30.000',
		},
	];
	const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
	const [modalInfo, setModalInfo] = useState('');
	const handleOnOpen = tratamiento => {
		onOpen();
		setModalInfo(tratamientos[tratamiento]);
	};

	return (
		<div className="h-auto md:w-full pb-16 ">
			<h1 className="text-4xl orbitron text-center pt-12 mb-6 font-light text-red-600">
				Otros servicios
			</h1>
			<div className="flex flex-wrap justify-evenly lg:grid lg:grid-cols-2 lg:place-items-center lg:justify-center lg:gap-4">
				<div
					className="flex justify-center content-center place-self-end hover:scale-[1.01] transition-all duration-400"
					onClick={() => handleOnOpen(0)}
				>
					<Card className="h-[100px] md:h-[150px] w-11/12 md:w-[450px] lg:w-[500px] flex justify-center content-center mb-6 cursor-pointer">
						<CardHeader className="absolute z-10 flex justify-center">
							<h1 className="text-center orbitron text-white text-3xl ">
								Lavado premium
							</h1>
						</CardHeader>
						<Image
							alt="Lavado premium"
							className=" z-0 w-screen h-full object-cover "
							src="https://firebasestorage.googleapis.com/v0/b/dutradetailing.appspot.com/o/lavadopremium.webp?alt=media&token=becb8bc0-0d3b-4cf6-83d2-c1be8a6d0143"
						/>
					</Card>
				</div>
				<div
					className="flex justify-center md:place-self-start hover:scale-[1.01] transition-all duration-400"
					onClick={() => handleOnOpen(3)}
				>
					<Card className="h-[100px] md:h-[150px] w-11/12 md:w-[450px] lg:w-[500px] flex justify-center content-center mb-6 cursor-pointer">
						<CardHeader className="absolute z-10 flex justify-center">
							<h1 className="text-center orbitron text-white text-3xl">
								Limpieza de motor
							</h1>
						</CardHeader>
						<Image
							alt="Limpieza de motor"
							className=" z-0 w-screen h-full object-cover "
							src="https://firebasestorage.googleapis.com/v0/b/dutradetailing.appspot.com/o/limp_motor.webp?alt=media&token=f481d080-6d45-487a-bb6d-ee5a387e3eba"
						/>
					</Card>
				</div>
				<div
					className="flex justify-center md:place-self-end hover:scale-[1.01] transition-all duration-400"
					onClick={() => handleOnOpen(2)}
				>
					<Card className="h-[100px] md:h-[150px] w-11/12 md:w-[450px] lg:w-[500px] flex justify-center content-center mb-6 cursor-pointer">
						<CardHeader className="absolute z-10 flex justify-center">
							<h1 className="text-center orbitron text-white text-3xl">
								Limpieza de interior
							</h1>
						</CardHeader>
						<Image
							alt="Limpieza de interior"
							className=" z-0 w-screen h-full object-cover "
							src="https://firebasestorage.googleapis.com/v0/b/dutradetailing.appspot.com/o/limp_interior.webp?alt=media&token=c3c82eb2-4e09-4a8a-955b-e4811040d729"
						/>
					</Card>
				</div>
				<div
					className="flex justify-center md:place-self-start hover:scale-[1.01] transition-all duration-400"
					onClick={() => handleOnOpen(1)}
				>
					<Card className="h-[100px] md:h-[150px] w-11/12 md:w-[450px] lg:w-[500px] flex justify-center content-center mb-6 cursor-pointer">
						<CardHeader className="absolute z-10 flex justify-center">
							<h1 className="text-center orbitron text-white text-3xl">
								Pulido de ópticas
							</h1>
						</CardHeader>
						<Image
							alt="Pulido de opticas"
							className=" z-0 w-screen h-full object-cover "
							src="https://firebasestorage.googleapis.com/v0/b/dutradetailing.appspot.com/o/limp_opticas.webp?alt=media&token=fda3bc3b-fe6e-45b3-949f-9c791f509487"
						/>
					</Card>
				</div>
				<div className="flex justify-center md:place-self-end hover:scale-[1.01] transition-all duration-400">
					<Card className="h-[100px] md:h-[150px] w-11/12 md:w-[450px] lg:w-[500px] flex justify-center content-center mb-6 cursor-pointer">
						<CardHeader className="absolute z-10 flex justify-center">
							<h1 className="text-center orbitron text-white text-3xl">
								Polarizado
							</h1>
						</CardHeader>
						<Image
							alt="Polarizado"
							className=" z-0 w-screen h-full object-cover "
							src="https://firebasestorage.googleapis.com/v0/b/dutradetailing.appspot.com/o/polarizado.webp?alt=media&token=b009426a-8242-4dfb-98cf-d08edec3810b"
						/>
					</Card>
				</div>
				<div className="flex justify-center md:place-self-start hover:scale-[1.01] transition-all duration-400">
					<Card className="h-[100px] md:h-[150px] w-11/12 md:w-[450px] lg:w-[500px] flex justify-center content-center mb-6 cursor-pointer">
						<CardHeader className="absolute z-10 flex justify-center">
							<h1 className="text-center orbitron text-white text-3xl">
								Microbollos
							</h1>
						</CardHeader>
						<Image
							alt="Microbollos"
							className=" z-0 w-screen h-full object-cover "
							src="https://firebasestorage.googleapis.com/v0/b/dutradetailing.appspot.com/o/microbollos.webp?alt=media&token=7dac5fc8-a5dc-4b8b-8015-08e01e42d8d1"
						/>
					</Card>
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
							<div className="flex flex-col">
								<p className="text-xs self-center opacity-90">Desde:</p>
								<p className="self-center text-red-500 orbitron">
									{modalInfo.price}
								</p>
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
		</div>
	);
}

export default OtherServices ;
