import { Accordion, AccordionItem } from '@nextui-org/react';

export default function AccordionNext() {
	const defaultContent =
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

	return (
		<Accordion>
			<AccordionItem
				key="1"
				aria-label="Accordion 1"
				subtitle="Press to expand"
				title="Accordion 1"
			>
				{defaultContent}
			</AccordionItem>
		</Accordion>
	);
}