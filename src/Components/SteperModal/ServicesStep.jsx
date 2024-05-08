import { ModalBody, CheckboxGroup, Checkbox } from '@nextui-org/react';
import { useFormData } from '../StepFormContext';

function ServicesStep() {
	const { formData, updateFormData } = useFormData();
	const handleCheckboxGroupChange = values => {
		updateFormData("services",(formData.services = values));
	}

	return (
		<ModalBody>
			<CheckboxGroup
				orientation="vertical"
				color="danger"
				value={formData.services}
				onValueChange={handleCheckboxGroupChange} // Función que maneja los cambios
			>
				<Checkbox value="Tratamiento-Ceramico">Tratamiento Ceramico</Checkbox>
				<Checkbox value="Abrillantado">Abrillantado</Checkbox>
				<Checkbox value="Tratamiento Acrilico">Tratamiento Acrilico</Checkbox>
				<Checkbox value="Lavado premium">Lavado premium</Checkbox>
				<Checkbox value="Limpieza de interior">Limpieza de interior</Checkbox>
				<Checkbox value="Limpieza de motor">Limpieza de motor</Checkbox>
				<Checkbox value="Pulido de opticas">Pulido de opticas</Checkbox>
				<Checkbox value="Preparacion para la venta">
					Preparacion para la venta
				</Checkbox>
			</CheckboxGroup>
		</ModalBody>
	);
}

export { ServicesStep };
