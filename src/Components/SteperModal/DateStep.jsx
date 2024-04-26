import { ModalBody, RangeCalendar } from '@nextui-org/react';
import { today, getLocalTimeZone } from '@internationalized/date';
import { I18nProvider } from '@react-aria/i18n';
function DateStep() {
	return (
		<ModalBody>
			<I18nProvider locale="es-AR">
				<RangeCalendar
					translate="yes"
					aria-label="Date (Min Date  Value)"
					minValue={today(getLocalTimeZone())}
					color="danger"
				/>
			</I18nProvider>
		</ModalBody>
	);
}

export { DateStep };
