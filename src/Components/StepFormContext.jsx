import { createContext, useContext, useState } from 'react';

const FormDataContext = createContext();

export const useFormData = () => useContext(FormDataContext);

export const FormDataProvider = ({ children }) => {
	const defaultFormData = {
		name: '',
		contact: '',
		vehicle: '',
		services: '',
		parsedDates:'',
		dates: '',
		message: ''
	};

	const [formData, setFormData] = useState(defaultFormData);

	const updateFormData = (fieldName, value) => {
		setFormData(prevData => ({
			...prevData,
			[fieldName]: value,
		}))
		console.log(formData);
	};

	return (
		<FormDataContext.Provider value={{ formData, updateFormData }}>
			{children}
		</FormDataContext.Provider>
	);
};
