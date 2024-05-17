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
	const { formData, sendEmail } = useFormData();

	const steps = [
		'Ingrese sus datos',
		'Servicios',
		'Rango de fechas para el turno',
		'Mensaje adicional',
	];

	const [currentStep, setCurrentStep] = useState(1);
	const [complete, setComplete] = useState(false);
	const [visibilityButtons, setVisibilityButtons] = useState('block');
	const [load, setLoad] = useState();
	const [btnText, setBtnText] = useState('Enviar');

	const handleSendEmail = () => {
		console.log(`send email con ${formData}`);
		setLoad(true);
		setBtnText('');
		sendEmail(formData)
			.then(() => {
				setComplete(true);
				setLoad(false);
				setVisibilityButtons('hidden');
			})
			.catch(error => {
				// Manejar cualquier error que ocurra durante el envío del correo electrónico
				console.error('Error al enviar el correo electrónico:', error);
				setLoad(false);
				setBtnText('error');
			});
	};

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
				<ClientStep formData={formData} />
			) : currentStep == 2 ? (
				<ServicesStep formData={formData} />
			) : currentStep == 3 ? (
				<DateStep formData={formData} />
			) : currentStep == 4 ? (
				<MessageStep formData={formData} />
			) : null}

			<ModalFooter className="flex flex-col gap-1">
				
				<p className="text-center text-sm text-black/80 font-light mb-2">
					Todos los turnos se reservan con seña, sin excepcion.
				</p>
				<div className="flex justify-between ">
					{currentStep > 1 ? (
						<Button
							className={`${visibilityButtons} bg-red-500 text-white font-bold w-24 place-self-end  `}
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
							className="bg-red-500 text-white font-bold w-24 place-self-start "
						>
							Anterior
						</Button>
					)}

					{!complete && ( // si no esta completo pasa lo siguiente
						<Button
							isLoading={load}
							className={`${visibilityButtons} bg-red-500 text-white font-bold w-24 place-self-end  `}
							onClick={() => {
								currentStep === steps.length // si es igual a la cantidad de pasos
									? handleSendEmail(formData) // si se apritea se setea como completo
									: setCurrentStep(prev => prev + 1); // si no es igual aumenta uno
							}}
						>
							{
								currentStep === steps.length
									? btnText // si es igual dice eso
									: 'Siguiente' // si no es igual dice siguiente
							}
						</Button>
					)}
				</div>
			</ModalFooter>
		</div>
	);
}

export { SteperModal };
