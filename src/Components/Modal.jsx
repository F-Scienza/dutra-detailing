
import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Button,
	useDisclosure,
	Input,
} from '@nextui-org/react';

export default function ModalButton() {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();

	return (
		<>
			<Button onClick={onOpen}  color="primary" className="bg-red-600 font-bold">
				Solicitar turno
			</Button>
			<Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
				<ModalContent>
					{onClose => (
						<>
							<ModalHeader className="flex flex-col text-red-500 text-xl orbitron gap-1">Solicitar turno</ModalHeader>
							<ModalBody>
								<Input
									autoFocus
									label="Nombre"
									placeholder="Ingrese su nombre y apellido"
									variant="bordered"
								/>
								<Input
									label="Contacto"
									placeholder="Numero de telefono"
									type="number"
									variant="bordered"
								/>
								<Input
									label="Vehiculo"
									placeholder="Modelo de su vehiculo"
									variant="bordered"
								/>
							</ModalBody>
							<ModalFooter>
								<Button color="primary" onPress={onClose}>
									Continuar
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	);
}
