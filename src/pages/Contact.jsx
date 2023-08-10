import { useState } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    lastName: '',
    user_email: '',
    message: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateEmail(formData.user_email)) {
      alert('Veuillez fournir une adresse e-mail valide.');
      return;
    }

    if (!validateName(formData.user_name) || !validateName(formData.lastName)) {
      alert('Veuillez entrer un prénom et un nom valides.');
      return;
    }

    if (formData.message.includes('<script>')) {
      alert('Le message ne peut pas contenir de script externe.');
      return;
    }

    // Envoi du formulaire via emailjs
    emailjs.send('service_p1iuzzr', 'template_kozi68r', formData, 'oK7n_taNIi7XvaWQc')
      .then((response) => {
        console.log('E-mail envoyé avec succès :', response);
        alert('Votre message a été envoyé avec succès !');
      })
      .catch((error) => {
        console.error('Erreur lors de l\'envoi de l\'e-mail :', error);
        alert('Une erreur est survenue lors de l\'envoi du message.');
      });
  };

  const validateEmail = (user_email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(user_email);
  };

  const validateName = (user_name) => {
    const re = /^[A-Za-z\s]+$/;
    return re.test(user_name);
  };

  return (
    <form onSubmit={handleSubmit} className='contact-form'>
      <div className='form-group'>
        <label>Prénom :</label>
        <input
  type="text"
  placeholder='Prénom'
  name="user_name"
  value={formData.user_name}
  onChange={handleInputChange}
  className={`form-control ${formData.user_name && validateName(formData.user_name) ? 'valid' : formData.user_name ? 'invalid' : ''}`}
  required/>
      </div>
      <div className='form-group'>
        <label>Nom :</label>
        <input
  type="text"
  placeholder='Nom'
  name="lastName"
  value={formData.lastName}
  onChange={handleInputChange}
  className={`form-control ${formData.lastName && validateName(formData.lastName) ? 'valid' : formData.lastName ? 'invalid' : ''}`}
  required/>      </div>
      <div className='form-group'>
        <label>E-mail :</label>
  
        <input
  type="text"
  placeholder='e-mail'
  name="user_email"
  value={formData.user_email}
  onChange={handleInputChange}
  className={`form-control ${formData.user_email && validateName(formData.user_email) ? 'valid' : formData.user_email ? 'invalid' : ''}`}
  required/>     
</div>
      <div className='form-group'>
        <label>Votre demande :</label>
        
        <textarea name="message" 
        placeholder='Votre message'
        value={formData.message} 
        onChange={handleInputChange}  
        className={`form-control ${formData.firstName && validateName(formData.firstName) ? 'valid' : 'invalid'}`} 
        required />
      </div>
      <button type="submit" value="Send">Envoyer</button>
    </form>
  );
};

export default Contact;
