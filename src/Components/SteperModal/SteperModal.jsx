import { useState } from 'react';
import { ModalHeader, ModalFooter, Button } from '@nextui-org/react';
import { TiTick } from 'react-icons/ti';
import './Steper.css';
import { ClientStep } from './ClientStep';
import { ServicesStep } from './ServicesStep';
import { DateStep } from './DateStep';
import { MessageStep } from './MessageStep';
import { CompleteStep } from './CompleteStep';
import { useFormData } from '../StepFormContext';

function SteperModal() {
	const { formdata } = useFormData();

	const steps = [
		'Ingrese sus datos',
		'Servicios',
		'Rango de fechas para el turno',
		'Mensaje adicional',
	];

	const [currentStep, setCurrentStep] = useState(1);
	const [complete, setComplete] = useState(false);
	const [visibilityButtons, setVisibilityButtons] = useState('block');

	return (
		<div className="flex flex-col p-2">
			<div className="flex justify-between w-100">
				{steps?.map((step, i) => (
					<div
						key={i}
						className={`step-item ${currentStep === i + 1 && 'active'} ${
							(i + 1 < currentStep || complete) && 'complete'
						} `}
					>
						<div className="step">
							{i + 1 < currentStep || complete ? <TiTick size={24} /> : i + 1}
						</div>
					</div>
				))}
			</div>
			<ModalHeader
				className={`flex flex-col text-red-500 text-xl orbitron gap-1 ${visibilityButtons} `}
			>
				{steps[currentStep - 1]}
			</ModalHeader>

			{complete ? (
				<CompleteStep />
			) : currentStep == 1 ? (
				<ClientStep formdata={formdata} />
			) : currentStep == 2 ? (
				<ServicesStep formdata={formdata} />
			) : currentStep == 3 ? (
				<DateStep formdata={formdata} />
			) : currentStep == 4 ? (
				<MessageStep formdata={formdata} />
			) : null}

			<ModalFooter className={` justify-between `}>
				{currentStep > 1 ? (
					<Button
						className={`${visibilityButtons} bg-red-500 text-white font-bold w-24 place-self-end mr-6 mt-6`}
						onClick={() => {
							setCurrentStep(prev => prev - 1);
							setComplete(false);
						}}
					>
						Anterior
					</Button>
				) : (
					<Button
						isDisabled
						className="bg-red-500 text-white font-bold w-24 place-self-start ml-6 mt-6"
					>
						Anterior
					</Button>
				)}

				{!complete && ( // si no esta completo pasa lo siguiente
					<Button
						className={`${visibilityButtons} bg-red-500 text-white font-bold w-24 place-self-end mr-6 mt-6`}
						onClick={() => {
							currentStep === steps.length // si es igual a la cantidad de pasos
								? (setComplete(true), setVisibilityButtons('hidden')) // si se apritea se setea como completo
								: setCurrentStep(prev => prev + 1); // si no es igual aumenta uno
						}}
					>
						{
							currentStep === steps.length
								? 'Enviar' // si es igual dice enviar
								: 'Siguiente' // si no es igual dice siguiente
						}
					</Button>
				)}
			</ModalFooter>
		</div>
	);
}

export { SteperModal };
