import { ModalBody, Input } from '@nextui-org/react';

function ClientStep() {
	return (
		<ModalBody>
			<Input
				autoFocus
				label="Nombre"
				placeholder="Nombre y apellido"
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
	);
}

export { ClientStep };
