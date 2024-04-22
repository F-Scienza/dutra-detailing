import { Tooltip } from '@nextui-org/react';
import logo from '../assets/Logohd.webp';
import ig from '../assets/instagram.svg';
import fb from '../assets/facebook.svg';
import wsp from '../assets/whatsapp.svg';

function Footer() {
	return (
		<div className="w-screen h-80 text-center flex flex-col md:flex-row justify-center items-center md:justify-evenly">
			<img className="w-52 " src={logo} alt="logo" />
			<div className="mt-6 md:mt-0 flex flex-col items-center gap-6">
				<div className=" flex gap-6">
					<a
						href="https://www.instagram.com/dutradetailing/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Tooltip
							content={
								<div className="text-black text-small font-bold">Instagram</div>
							}
						>
							<img className="w-6 h-6" src={ig} alt="instagram" />
						</Tooltip>
					</a>
					<a
						href="https://www.facebook.com/profile.php?id=100040951931371"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Tooltip
							content={
								<div className="text-black text-small font-bold">facebook</div>
							}
						>
							<img className="w-6 h-6" src={fb} alt="instagram" />
						</Tooltip>
					</a>
					<a
						href="https://wa.link/4grcv9"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Tooltip
							content={
								<div className="text-black text-small font-bold">whatsapp</div>
							}
						>
							<img className="w-6 h-6" src={wsp} alt="instagram" />
						</Tooltip>
					</a>
				</div>
				<p>Calle falsa 123 Córdoba</p>
			</div>
		</div>
	);
}

export { Footer };
