import emailjs from '@emailjs/browser';
const EMAIL_SERVICE_ID = 'service_i0xvz0e';
//const EMAIL_SERVICE_ID = 'service_aruc97e'; // Reemplaza con tu ID de servicio
const EMAIL_TEMPLATE_ID = 'template_6oj20bs'; // Reemplaza con tu ID de plantilla
const EMAIL_USER_ID = 'lXboeEWSVlZxUCYmA'; // Reemplaza con tu ID de usuario


const options = {
	publicKey: EMAIL_USER_ID,
};
emailjs.init(options)

const sendEmail = formData => {
	return new Promise((resolve, reject) => {
		const templateParams = {
			name: `${formData.name}`,
			email: `${formData.email}`,
			phone: `${formData.phone}`,
			vehicle: `${formData.vehicle}`,
			services: `${formData.services}`,
			dates: `${formData.parsedDates}`,
			message: `${formData.message}`,
		};

		emailjs.send(EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, templateParams).then(
			response => {
				console.log('SUCCESS!', response.status, response.text);
				resolve(response); // Resuelve la promesa cuando el correo electrónico se envía con éxito
			},
			error => {
				console.log('FAILED...', error);
				reject(error); // Rechaza la promesa en caso de error
			}
		);
	});
};

export { sendEmail };
