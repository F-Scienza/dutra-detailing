import { Modal, ModalContent, Button, useDisclosure } from '@nextui-org/react';
import { SteperModal } from './SteperModal/SteperModal';
import { FormDataProvider } from './StepFormContext';
export default function ModalButton() {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();

	return (
		<>
			<div className="md:w-66 p-0.5 animate-border inline-block rounded-xl bg-white bg-gradient-to-r from-red-500 via-black/40 to-pink-500 bg-[length:500%_400%]">
				<Button
					onClick={onOpen}
					color="primary"
					className=" bg-black md:text-xl font-bold w-32 md:w-64 place-self-center text-white"
				>
					Solicitar turno
				</Button>
			</div>

			<Modal
				isOpen={isOpen}
				onOpenChange={onOpenChange}
				placement="center"
				hideCloseButton
				className="w-11/12"
			>
				<ModalContent>
					{onClose => (
						<FormDataProvider>
							<SteperModal onClose={onClose} />
						</FormDataProvider>
					)}
				</ModalContent>
			</Modal>
		</>
	);
}
