import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
} from '@nextui-org/react';
import ModalButton from '../Components/Modal';

function Header() {
	return (
		<Navbar shouldHideOnScroll className="bg-transparent-0 w-full">
			<NavbarBrand justify="start">
				<img
					className="h-[36px] w-auto"
					src="https://firebasestorage.googleapis.com/v0/b/dutradetailing.appspot.com/o/Logohd.webp?alt=media&token=6f478de0-e8cb-48cb-996c-f9c4598a756b"
					alt="dutra detailing car detail"
				/>
			</NavbarBrand>
			<NavbarContent justify="end">
				<NavbarItem>
					<ModalButton />
				</NavbarItem>
			</NavbarContent>
		</Navbar>
	);
}

export default Header;
