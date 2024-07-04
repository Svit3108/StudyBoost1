// src/Help.js
import React, { useState } from 'react';
import axios from 'axios';



const Help = () => {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    date: '',
    message: ''
});

const handleChange = (e) => {
    setFormData({
    ...formData,
    [e.target.name]: e.target.value
    });
};


const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    const response = await axios.post('http://localhost:5001/api/auth/submit', formData);
    alert('Formular wurde erfolgreich abgeschickt:\n' + JSON.stringify(response.data, null, 2));
    } catch (error) {
    console.error('Es gab einen Fehler beim Absenden des Formulars', error);
    alert('Es gab einen Fehler beim Absenden des Formulars');
    }
  };



  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name des Schülers:</label>
        <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        />
    </div>
    <div>
        <label htmlFor="subject">Fach:</label>
        <input
        type="text"
        id="subject"
        name="subject"
        value={formData.subject}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="date">Termin:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="message">Nachricht:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
      </div>
      <button type="submit">Absenden</button>
    </form>
  );
};

export default Help;
