import { ModalBody, ModalFooter, ModalHeader } from '@nextui-org/react';
import { LuCheckCircle2 } from 'react-icons/lu';
import { FaInstagram, FaFacebookSquare } from 'react-icons/fa';

function CompleteStep() {
	return (
		<>
			<ModalHeader
				className={`flex items-center text-red-500 text-xl orbitron gap-1`}
			>
				Listo!
				<LuCheckCircle2 size={24} />
			</ModalHeader>
			<ModalBody className="flex w-full text-black text-xl">
				<p>Recibimos tu solicitud con éxito. Pronto te daremos novedades.</p>
				<p className='text-sm text-gray-600'>Si no ves nuestro mensaje en tu correo, revisa la sección de spam.</p>
			</ModalBody>
			<ModalFooter className="flex text-lg text-black items-center">
				<p>Nuestras redes: </p>
				<a
					href="https://www.facebook.com/profile.php?id=100040951931371"
					target="_blank"
					rel="noopener noreferrer"
					className="text-red-500 hover:text-gray-700"
				>
					<FaFacebookSquare size={24} />
				</a>
				<a
					href="https://www.instagram.com/dutradetailing/"
					target="_blank"
					rel="noopener noreferrer"
					className="text-red-500 hover:text-gray-700"
				>
					<FaInstagram size={24} />
				</a>
			</ModalFooter>
		</>
	);
}

export { CompleteStep };
