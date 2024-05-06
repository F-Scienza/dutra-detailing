import { useState } from 'react';

function useForm() {
	const [formData, setFormData] = useState([]);

	const handleChange = (name, value) => {
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = () => {
		console.log(`formdata: ${formData}`);
	}

	return { formData, handleChange, handleSubmit };
}

export default useForm;
