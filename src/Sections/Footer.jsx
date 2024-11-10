import { Tooltip } from '@nextui-org/react';
import ig from '../assets/instagram.svg';
import fb from '../assets/facebook.svg';
import wsp from '../assets/whatsapp.svg';
import { FaLocationDot } from 'react-icons/fa6';
import { MdAccessTimeFilled } from 'react-icons/md';
function Footer() {
	return (
		<div className="w-full h-64 text-center flex flex-col md:flex-row justify-center items-center md:justify-evenly">
			<img
				className="w-52 "
				src="https://firebasestorage.googleapis.com/v0/b/dutradetailing.appspot.com/o/Logohd.webp?alt=media&token=6f478de0-e8cb-48cb-996c-f9c4598a756b"
				alt="Dutra detailing"
			/>
			<div className="mt-6 md:mt-0 flex flex-col items-center gap-2">
				<div className="flex justify-center items-center gap-2">
					<MdAccessTimeFilled className="text-red-500" />
					<p>Lun/Vie. 9:30 - 18:30</p>
					<p>Sab. 10:00 - 14:00</p>
				</div>
				<div className="flex justify-center items-center gap-2">
					<FaLocationDot className="text-red-500" />
					<p>9 de Julio 2675 - Alto Alberdi</p>
				</div>
				<div className="flex gap-6 mt-2">
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
								<div className="text-black text-small font-bold">Facebook</div>
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
								<div className="text-black text-small font-bold">WhatsApp</div>
							}
						>
							<img className="w-6 h-6" src={wsp} alt="whatsapp" />
						</Tooltip>
					</a>
				</div>
			</div>
		</div>
	);
}

export default  Footer ;
