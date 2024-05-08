import { ModalBody, Input } from '@nextui-org/react';
import { useFormData } from '../StepFormContext';

function ClientStep() {
	
	const { formData, updateFormData } = useFormData();
	const handleChange = e => {
		const {name, value} = e.target
		updateFormData(name,value)
	};

	return (
		<ModalBody>
			<Input
				isRequired
				autoFocus
				label="Nombre"
				placeholder="Nombre y apellido"
				variant="bordered"
				className=" text-black font-semibold"
				name="name"
				onChange={handleChange}
				value={formData.name}
			/>
			<Input
				isRequired
				label="Contacto"
				placeholder="Numero de telefono"
				type="number"
				variant="bordered"
				className="appearance-none text-black font-semibold"
				name="contact"
				onChange={handleChange}
				value={formData.contact}
			/>
			<Input
				isRequired
				label="Vehiculo"
				placeholder="Modelo de su vehiculo"
				variant="bordered"
				className="text-black font-semibold"
				name="vehicle"
				onChange={handleChange}
				value={formData.vehicle}
			/>
		</ModalBody>
	);
}

export { ClientStep };
