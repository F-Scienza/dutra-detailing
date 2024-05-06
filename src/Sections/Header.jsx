import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
} from '@nextui-org/react';
import logo from '../assets/Logohd.webp';
import ModalButton from '../Components/Modal';

function Header() {
	return (
		<Navbar shouldHideOnScroll className="bg-transparent-0 w-full">
			<NavbarBrand justify="start">
				<img className="h-12 w-auto" src={logo} alt="dutra detailing" />
			</NavbarBrand>
			<NavbarContent justify="end">
				<NavbarItem>
					<ModalButton />
				</NavbarItem>
			</NavbarContent>
		</Navbar>
	);
}

export { Header };
