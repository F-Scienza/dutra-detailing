import { useState } from 'react';
import { ModalHeader, ModalFooter, Button } from '@nextui-org/react';
import { TiTick } from 'react-icons/ti';
import './Steper.css';
import { ClientStep } from './ClientStep';
import { ServicesStep } from './ServicesStep';
import { DateStep } from './DateStep';
import { MessageStep } from './MessageStep';

function SteperModal() {
	const steps = [
		'Ingrese sus datos',
		'Servicios',
		'Rango de fechas para el turno',
		'Mensaje adicional',
	];
	const [currentStep, setCurrentStep] = useState(1);
	const [complete, setComplete] = useState(false);

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
			<ModalHeader className="flex flex-col text-red-500 text-xl orbitron gap-1">
				{steps[currentStep - 1]}
			</ModalHeader>
			{currentStep == 1 ? (
				<ClientStep />
			) : currentStep == 2 ? (
				<ServicesStep />
			) : currentStep == 3 ? (
				<DateStep />
			) : currentStep == 4 ? (
				<MessageStep />
			) : null}
			<ModalFooter className="justify-between">
				{currentStep > 1 ? (
					<Button
						className="bg-red-500 text-white font-bold w-24 place-self-start ml-6 mt-6"
						onClick={() => {
							setCurrentStep(prev => prev - 1);
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

				{!complete && (
					<Button
						className="bg-red-500 text-white font-bold w-24 place-self-end mr-6 mt-6"
						onClick={() => {
							currentStep === steps.length
								? setComplete(true)
								: setCurrentStep(prev => prev + 1);
						}}
					>
						{currentStep === steps.length ? 'Enviar' : 'Siguiente'}
					</Button>
				)}
			</ModalFooter>
		</div>
	);
}

export { SteperModal };
