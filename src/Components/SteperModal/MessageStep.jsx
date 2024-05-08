import { ModalBody, Textarea } from '@nextui-org/react';
import { useFormData } from '../StepFormContext';
import { useState } from 'react';

function MessageStep() {
	const { formData, updateFormData } = useFormData();

	const [textValue, setTextValue] = useState(formData.message);

	const handleChange = value => {
		setTextValue(value)
		updateFormData('message', value);
	};

	return (
		<ModalBody>
			<Textarea
				size="lg"
				variant="underlined"
				labelPlacement="outside"
				placeholder="Dejanos un mensaje o duda que te haya surgido."
				value={textValue}
				onValueChange={handleChange}
			/>
		</ModalBody>
	);
}

export { MessageStep };
