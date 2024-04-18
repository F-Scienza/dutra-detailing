
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	Link,
	Button,
} from '@nextui-org/react';
import logo from '../assets/Logohd.webp'


function Header() {
	return (
		<Navbar shouldHideOnScroll className='bg-transparent-0 w-screen'>
			<NavbarBrand justify="start">
				<img className="h-12 w-auto" src={logo} alt="dutra detailing" />
			</NavbarBrand>
			<NavbarContent justify="end">
				<NavbarItem>
					<Button as={Link} className='bg-red-600/75 text-white font-semibold' href="#" variant="solid">
						Solicitar turno
					</Button>
				</NavbarItem>
			</NavbarContent>
		</Navbar>
	);
}

export { Header };
