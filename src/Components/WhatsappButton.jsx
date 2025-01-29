import {  Button } from '@nextui-org/react';
// https://wa.link/kni2em
export default function WhatsappButton() {

	const openInNewTab = ()=> {
		console.log(' se apreto el boton ')
		window.open('https://wa.link/kni2em', '_blank', 'noreferrer');
	};

	return (
		<>
			<div className="w-42 md:w-66 p-0.5 animate-border inline-block rounded-xl bg-white bg-gradient-to-r from-whatsapp via-black/40 to-whatsapp bg-[length:500%_400%]">
				<Button
					onClick={openInNewTab}
					color="primary"
					className="bg-black font-bold md:text-xl w-40 md:w-64 place-self-center text-white"
				>
					Acceder al beneficio
				</Button>
			</div>
		</>
	);
}
