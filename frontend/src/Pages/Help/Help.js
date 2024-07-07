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
            const response = await axios.post('http://3.123.19.43:5001/api/auth/send-email', formData);
            alert('Nachricht wurde erfolgreich abgeschickt:\n' + JSON.stringify(response.data, null, 2));
        } catch (error) {
            console.error('Es gab einen Fehler beim Absenden der Nachricht', error);
            alert('Es gab einen Fehler beim Absenden der Nachricht');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-100">
            <form 
                onSubmit={handleSubmit} 
                className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg"
            >
                <h1 className="text-2xl font-bold mb-6 text-center">Nachricht senden</h1>
                
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Betreff:</label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700">Datum:</label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Nachricht:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
                        rows="4"
                        required
                    ></textarea>
                </div>

                <button 
                    type="submit" 
                    className="w-full bg-blue-600 text-white p-2 rounded-md shadow-sm hover:bg-blue-700 transition"
                >
                    Absenden
                </button>
            </form>
        </div>
    );
};

export default Help;
