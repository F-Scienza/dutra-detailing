const sendWsp = formData => {
	return new Promise((resolve) => {

		const phoneNumber = '3513518772'; // Número de WhatsApp al que quieres enviar el mensaje
		const message = `Hola, mi nombre es ${formData.name}. Estoy interesado en los servicios de ${formData.services} para mi vehículo ${formData.vehicle}. Me gustaria que fuera ${formData.parsedDates}. 
		${formData.message?formData.message:''}`;

		const wspURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
			message
		)}`;

		// Abre WhatsApp en una nueva pestaña
		window.open(wspURL, '_blank');

		resolve('WhatsApp message opened');
	});
};

export { sendWsp };
