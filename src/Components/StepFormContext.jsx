import { createContext, useContext, useState } from 'react';
// import { sendEmail } from './EmailUtils';
import { sendWsp } from './WhatsappUtils';
const FormDataContext = createContext();

export const useFormData = () => useContext(FormDataContext);

// eslint-disable-next-line react/prop-types
export const FormDataProvider = ({ children }) => {
	const defaultFormData = {
		name: '',
		email: '',
		phone: '',
		vehicle: '',
		services: [],
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
		<FormDataContext.Provider
			value={{ formData, updateFormData, sendWsp }}
		>
			{children}
		</FormDataContext.Provider>
	);
};
