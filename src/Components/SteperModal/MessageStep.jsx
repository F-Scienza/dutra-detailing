import { ModalBody, Textarea } from "@nextui-org/react";

function MessageStep() {
    return (
			<ModalBody>
				<Textarea
					placeholder="Dejanos la consulta que te haya surgido"
					className="max-w-xs"
				/>
			</ModalBody>
		);
}

export {MessageStep};