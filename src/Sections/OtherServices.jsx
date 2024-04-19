import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import auto2 from '../assets/auto2.png';
import auto3 from '../assets/auto3.png';
import auto4 from '../assets/auto4.png';

function OtherServices() {
    return (
			<div className="p-4 flex flex-wrap justify-evenly bg-white">
				<Card
					shadow="sm"
					isPressable
					onPress={() => console.log('item pressed')}
					className=""
				>
					<CardFooter className="text-small justify-between p-2 text-center">
						<b>Lavado premium</b>
					</CardFooter>
					<CardBody className="overflow-visible p-0">
						<Image
							shadow="sm"
							radius="lg"
							alt="asd"
							className="w-full object-cover "
							src={auto2}
						/>
					</CardBody>
				</Card>
				<Card
					shadow="sm"
					isPressable
					onPress={() => console.log('item pressed')}
					className="w-2/5 p-0 mb-6"
				>
					<CardBody className="overflow-visible p-0">
						<Image
							shadow="sm"
							radius="lg"
							alt="asd"
							className="w-full object-cover "
							src={auto3}
						/>
					</CardBody>
					<CardFooter className="text-small justify-between p-2 text-center">
						<b>Lavado premium</b>
					</CardFooter>
				</Card>
				<Card
					shadow="sm"
					isPressable
					onPress={() => console.log('item pressed')}
					className="w-2/5 p-0 mb-6"
				>
					<CardBody className="overflow-visible p-0">
						<Image
							shadow="sm"
							radius="lg"
							alt="asd"
							className="w-full object-cover "
							src={auto4}
						/>
					</CardBody>
					<CardFooter className="text-small justify-between p-2 text-center">
						<b>Lavado premium</b>
					</CardFooter>
				</Card>
				<Card
					shadow="sm"
					isPressable
					onPress={() => console.log('item pressed')}
					className="w-2/5 p-0 mb-6"
				>
					<CardBody className="overflow-visible p-0">
						<Image
							shadow="sm"
							radius="lg"
							alt="asd"
							className="w-full object-cover "
							src={auto2}
						/>
					</CardBody>
					<CardFooter className="text-small justify-between p-2 text-center">
						<b>Lavado premium</b>
					</CardFooter>
				</Card>
			</div>
		);
}

export {OtherServices};