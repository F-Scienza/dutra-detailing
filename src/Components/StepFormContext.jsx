import { createContext, useContext, useState } from 'react';
import { sendEmail } from './EmailUtils';

const FormDataContext = createContext();

export const useFormData = () => useContext(FormDataContext);

export const FormDataProvider = ({ children }) => {
	const defaultFormData = {
		name: '',
		email: '',
		phone: '',
		vehicle: '',
		services: '',
		parsedDates: '',
		dates: '',
		message: '',
	};

	const [formData, setFormData] = useState(defaultFormData);

	const updateFormData = (fieldName, value) => {
		setFormData(prevData => ({
			...prevData,
			[fieldName]: value,
		}));
		console.log(formData);
	};

	return (
		<FormDataContext.Provider value={{ formData, updateFormData, sendEmail }}>
			{children}
		</FormDataContext.Provider>
	);
};
