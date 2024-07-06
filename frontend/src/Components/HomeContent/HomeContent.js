import React from 'react';
import BeautifulImage from '../../assets/beautiful-image.jpg';
import { Link } from 'react-router-dom';

class HomeContent extends React.Component {
    state = {};
    render() {
        return (
            <div className="flex flex-col items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 min-h-screen p-4">
                <h1 className="text-5xl font-extrabold text-center text-white mb-8">Willkommen bei StudyBoost</h1>
                
                <img src={BeautifulImage} alt="Bild von einem Computer" className="rounded-lg shadow-lg mt-5 w-[500px]"/>

                <div className="p-6 bg-white bg-opacity-90 rounded-lg shadow-md mt-8 max-w-4xl">
                    <h2 className="text-3xl font-bold text-purple-900 mb-4">Was ist das Ziel von StudyBoost?</h2>
                    <p className="text-lg text-gray-800 mb-2">
                        Schülern und Studenten zu helfen, ihre Lern- und Studienleistungen zu verbessern. Dies wird durch verschiedene Funktionen und Werkzeuge erreicht, die speziell darauf ausgelegt sind, das Lernen effizienter und effektiver zu gestalten. Einige der Hauptziele von StudyBoost können folgende sein:
                    </p>
                    <ul className="list-disc list-inside text-lg text-gray-800 mb-4">
                        <li>Verbesserung der Lernorganisation</li>
                        <li>Förderung der Zusammenarbeit</li>
                        <li>Personalisierung des Lernens</li>
                        <li>Motivation und Engagement</li>
                        <li>Zugriff auf hochwertige Lernressourcen</li>
                        <li>Förderung der Selbstständigkeit</li>
                        <li>Unterstützung der Lehrer und Eltern</li>
                    </ul>
                </div>

                <p className="text-center text-lg text-white mt-8 mb-6">Hier findest du die besten Kurse für deine Prüfungsvorbereitung</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl">
                    <Link to="/Hausaufgaben" className="bg-blue-900 p-4 rounded-lg text-white text-center border border-b-4 border-blue-800 hover:border-b-2 transform hover:scale-105 transition duration-300">Hausaufgaben</Link>
                    <Link to="/Notenverbesserung" className="bg-green-600 p-4 rounded-lg text-white text-center border border-b-4 border-green-800 hover:border-b-2 transform hover:scale-105 transition duration-300">Notenverbesserung</Link>
                    <Link to="/Lernorganisation" className="bg-yellow-600 p-4 rounded-lg text-white text-center border border-b-4 border-yellow-800 hover:border-b-2 transform hover:scale-105 transition duration-300">Lernorganisation</Link>
                    <Link to="/Motivation" className="bg-red-600 p-4 rounded-lg text-white text-center border border-b-4 border-red-800 hover:border-b-2 transform hover:scale-105 transition duration-300">Motivation</Link>
                    <Link to="/Foerderung " className="bg-purple-600 p-4 rounded-lg text-white text-center border border-b-4 border-purple-800 hover:border-b-2 transform hover:scale-105 transition duration-300">Foerderung</Link>
                    <Link to="/Selbstständigkeit" className="bg-indigo-600 p-4 rounded-lg text-white text-center border border-b-4 border-indigo-800 hover:border-b-2 transform hover:scale-105 transition duration-300">Selbstständigkeit</Link>
                    <Link to="/Unterstützung" className="bg-pink-600 p-4 rounded-lg text-white text-center border border-b-4 border-pink-800 hover:border-b-2 transform hover:scale-105 transition duration-300">Unterstützung</Link>
                    <Link to="/Zusammenarbeit" className="bg-teal-600 p-4 rounded-lg text-white text-center border border-b-4 border-teal-800 hover:border-b-2 transform hover:scale-105 transition duration-300">Zusammenarbeit</Link>
                    <Link to="/Personalisierung" className="bg-orange-600 p-4 rounded-lg text-white text-center border border-b-4 border-orange-800 hover:border-b-2 transform hover:scale-105 transition duration-300">Personalisierung</Link>
                </div>
            </div>
        );
    }
}

export default HomeContent;
