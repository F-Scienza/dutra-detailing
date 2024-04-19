import { Card, CardHeader, Image } from '@nextui-org/react';
import auto2 from '../assets/auto2.png';
import auto3 from '../assets/auto3.png';
import auto4 from '../assets/auto4.png';

function OtherServices() {
	return (
		<div className="h-auto md:w-screen p-4 bg-white">
			<h1 className="orbitron text-center pt-12 mb-6 font-light text-red-600">
				Tambien
			</h1>
			<div className="flex flex-wrap justify-evenly lg:grid lg:grid-cols-2 lg:gap-4 lg:place-items-center lg:justify-center">
				<Card className="h-[100px] md:h-[150px] w-11/12 md:w-[450px] lg:w-[500px] flex justify-center content-center mb-6">
					<CardHeader className="absolute z-10 flex justify-center">
						<h4 className="text-center orbitron text-white text-3xl">
							Lavado premium
						</h4>
					</CardHeader>
					<Image
						alt="Card background"
						className="blur-sm z-0 w-full h-full object-cover"
						src={auto2}
					/>
				</Card>
				<Card className="h-[100px] md:h-[150px] w-11/12 md:w-[450px] lg:w-[500px] flex justify-center content-center mb-6">
					<CardHeader className="absolute z-10 flex justify-center">
						<h4 className="text-center orbitron text-white text-3xl">
							Pulido de opticas
						</h4>
					</CardHeader>
					<Image
						alt="Card background"
						className="blur-[2px] z-0 w-full h-full object-cover "
						src={auto3}
					/>
				</Card>
				<Card className="h-[100px] md:h-[150px] w-11/12 md:w-[450px] lg:w-[500px] flex justify-center content-center mb-6">
					<CardHeader className="absolute z-10 flex justify-center">
						<h4 className="text-center orbitron text-white text-3xl">
							Limpieza de interior
						</h4>
					</CardHeader>
					<Image
						alt="Card background"
						className="blur-[2px] z-0 w-full h-full object-cover "
						src={auto4}
					/>
				</Card>
				<Card className="h-[100px] md:h-[150px] w-11/12 md:w-[450px] lg:w-[500px] flex justify-center content-center mb-6">
					<CardHeader className="absolute z-10 flex justify-center">
						<h4 className="text-center orbitron text-white text-3xl">
							Limpieza de motor
						</h4>
					</CardHeader>
					<Image
						alt="Card background"
						className="blur-[2px] z-0 w-full h-full object-cover "
						src={auto2}
					/>
				</Card>
			</div>
		</div>
	);
}

export { OtherServices };
