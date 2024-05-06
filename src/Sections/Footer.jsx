import { Tooltip } from '@nextui-org/react';
import logo from '../assets/Logohd.webp';
import ig from '../assets/instagram.svg';
import fb from '../assets/facebook.svg';
import wsp from '../assets/whatsapp.svg';
import { FaLocationDot } from 'react-icons/fa6';
function Footer() {
	return (
		<div className="w-screen h-64 text-center flex flex-col md:flex-row justify-center items-center md:justify-evenly">
			<img className="w-52 " src={logo} alt="Dutra detailing" />
			<div className="mt-6 md:mt-0 flex flex-col items-center gap-2">
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
							<img className="w-6 h-6" src={fb} alt="Facebook" />
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
							<img className="w-6 h-6" src={wsp} alt="whatsapp" />
						</Tooltip>
					</a>
				</div>
				<div className='flex justify-center items-center gap-2'>
					<FaLocationDot  />
					<p >9 de Julio 2675 - Alto Alberdi</p>
				</div>
			</div>
		</div>
	);
}

export { Footer };
