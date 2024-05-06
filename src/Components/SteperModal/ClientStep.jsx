import { ModalBody, Input } from '@nextui-org/react';

function ClientStep() {
	return (
		<ModalBody>
			<Input
				autoFocus
				label="Nombre"
				placeholder="Nombre y apellido"
				variant="bordered"
				className=" text-black font-semibold"
			/>
			<Input
				label="Contacto"
				placeholder="Numero de telefono"
				type="number"
				variant="bordered"
				className="appearance-none text-black font-semibold"
			/>
			<Input
				label="Vehiculo"
				placeholder="Modelo de su vehiculo"
				variant="bordered"
				className="text-black font-semibold"
			/>
		</ModalBody>
	);
}

export { ClientStep };
