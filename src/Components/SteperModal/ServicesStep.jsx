import { ModalBody, CheckboxGroup, Checkbox } from '@nextui-org/react';
import { useFormData } from '../StepFormContext';

function ServicesStep() {
	const { formData, updateFormData } = useFormData();
	const handleCheckboxGroupChange = values => {
		updateFormData('services', values);
	};

	return (
		<ModalBody>
			<CheckboxGroup
				orientation="vertical"
				color="danger"
				value={formData.services}
				onValueChange={handleCheckboxGroupChange} // Función que maneja los cambios
			>
				<Checkbox value={`_Tratamiento Cerámico_`}>
					Tratamiento Cerámico
				</Checkbox>
				<Checkbox value={`_Abrillantado_`}>Abrillantado</Checkbox>
				<Checkbox value={`_Tratamiento Acrílico_`}>
					Tratamiento Acrílico
				</Checkbox>
				<Checkbox value={`_Lavado premium_`}>Lavado premium</Checkbox>
				<Checkbox value={`_Limpieza de interior_`}>
					Limpieza de interior
				</Checkbox>
				<Checkbox value={`_Limpieza de motor_`}>Limpieza de motor</Checkbox>
				<Checkbox value={`_Pulido de opticas_`}>Pulido de ópticas</Checkbox>
				<Checkbox value={`_Preparacion para la venta_`}>
					Preparacion para la venta{' '}
					{/* <span className="font-semibold text-red-500"> -15% </span> */}
				</Checkbox>
				<Checkbox value={`_Otros_`}>Otros</Checkbox>
			</CheckboxGroup>
		</ModalBody>
	);
}

export { ServicesStep };
