import {
	Modal,
	ModalContent,
	Button,
	useDisclosure,
} from '@nextui-org/react';
import { SteperModal } from './SteperModal/SteperModal';

export default function ModalButton() {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	
	return (
		<>
			<Button onClick={onOpen} color="primary" className="bg-red-600 font-bold w-32 md:w-40 place-self-center">
				Solicitar turno
			</Button>
			<Modal
				isOpen={isOpen}
				onOpenChange={onOpenChange}
				placement="center"
				hideCloseButton
			>
				<ModalContent>
					{onClose => (
							<SteperModal 
								onClose={onClose}
							/>
					)}
				</ModalContent>
			</Modal>
		</>
	);
}
