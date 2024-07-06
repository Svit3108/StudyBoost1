import React, { useState } from 'react';
import axios from 'axios';

const Hausaufgabenhilfe = () => {
    const [homeworkText, setHomeworkText] = useState('');
    const [file, setFile] = useState(null);
    const [responseMessage, setResponseMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleTextChange = (e) => {
        setHomeworkText(e.target.value);
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setResponseMessage('');
        setErrorMessage('');

        try {
            await submitHomeworkToServer(homeworkText, file);
            setResponseMessage('Hausaufgabe erfolgreich abgesendet!');
            setHomeworkText('');
            setFile(null);
        } catch (error) {
            console.error('Fehler beim Absenden der Hausaufgabe:', error);
            setErrorMessage('Fehler beim Absenden der Hausaufgabe.');
        }
    };

    const submitHomeworkToServer = async (text, file) => {
        try {
            const formData = new FormData();
            formData.append('homeworkText', text);
            formData.append('file', file);

            // Retrieve the token from localStorage
            const token = localStorage.getItem('token');

            // Add the token to the headers
            const response = await axios.post('http://localhost:5000/api/auth/Hausaufgabe', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'x-auth-token': token // Add the token to the headers
                }
            });

            console.log('Serverantwort:', response.data);
        } catch (error) {
            console.error('Fehler beim Speichern der Hausaufgabe:', error);
            throw error;
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="container mx-auto p-4">
                <h1 className="font-bold text-2xl mb-4">Hausaufgabenhilfe</h1>

                <form onSubmit={handleSubmit} className="max-w-lg bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Beschreibe deine Hausaufgabe:
                            <textarea
                                value={homeworkText}
                                onChange={handleTextChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </label>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Datei hochladen:
                            <input
                                type="file"
                                onChange={handleFileChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </label>
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Anfrage absenden
                        </button>
                    </div>
                </form>

                {responseMessage && (
                    <p className="text-sm text-green-500 mb-4">{responseMessage}</p>
                )}

                {errorMessage && (
                    <p className="text-sm text-red-500 mb-4">{errorMessage}</p>
                )}
            </div>
        </div>
    );
};

export default Hausaufgabenhilfe;