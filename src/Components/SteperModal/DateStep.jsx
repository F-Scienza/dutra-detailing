import { ModalBody, RangeCalendar } from '@nextui-org/react';
import { today, getLocalTimeZone } from '@internationalized/date';
import { I18nProvider } from '@react-aria/i18n';
import { useFormData } from '../StepFormContext';

function DateStep() {
	const { formData ,updateFormData } = useFormData();

	const handleChange = minValue => {
		const fechas = `Desde el ${minValue.start.day}/${minValue.start.month} al ${minValue.end.day}/${minValue.end.month}`;
		updateFormData("parsedDates", fechas);
		updateFormData("dates", minValue)
	};

	return (
		<ModalBody>
			<I18nProvider locale="es-AR">
				<RangeCalendar
					translate="yes"
					aria-label="Date (Min Date  Value)"
					minValue={today(getLocalTimeZone())}
					color="danger"
					value={formData.dates}
					onChange={handleChange}
				/>
			</I18nProvider>
		</ModalBody>
	);
}

export { DateStep };
