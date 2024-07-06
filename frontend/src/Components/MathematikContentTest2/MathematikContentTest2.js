import React from 'react';
import { Link } from 'react-router-dom';
import MathersteklasseImage from '../../assets/Mathersteklasse-image.jpg';

const MathematikContentTest2 = () => {
    return (
        <div className="flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url(${MathersteklasseImage})`,
                minHeight: '100vh',
                padding: '8rem 2rem',
                color: '#333',
            }}>
            <div className="w-full max-w-4xl mx-auto p-8 bg-white bg-opacity-90 rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold text-center text-purple-900 mb-8">
                    Mathematische Themen für die Zweite Klasse
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="p-6 bg-white bg-opacity-90 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold text-purple-900 mb-4">Zahlen und Operationen</h2>
                        <p className="text-lg text-gray-800">
                            Vertiefung des Zahlenverständnisses bis 100. Addition und Subtraktion im Zahlenraum bis 100.
                            Multiplikation und einfache Division (z.B. mit Ergebnissen bis 20).
                        </p>
                    </div>

                    <div className="p-6 bg-white bg-opacity-90 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold text-purple-900 mb-4">Größen und Messen</h2>
                        <p className="text-lg text-gray-800">
                            Messen von Längen, Gewichten und Volumen mit geeigneten Maßeinheiten (z.B. Meter, Gramm,
                            Liter). Vergleich von Größen (z.B. größer/kleiner, schwerer/leichter).
                        </p>
                    </div>

                    <div className="p-6 bg-white bg-opacity-90 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold text-purple-900 mb-4">Geometrie</h2>
                        <p className="text-lg text-gray-800">
                            Erkennen und Benennen geometrischer Formen wie Dreiecke, Vierecke, Kreise. Unterscheidung
                            von geraden und ungeraden Zahlen. Einführung in Symmetrie und Spiegelungen.
                        </p>
                    </div>

                    <div className="p-6 bg-white bg-opacity-90 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold text-purple-900 mb-4">Zeit und Kalender</h2>
                        <p className="text-lg text-gray-800">
                            Lesen und Interpretieren der Uhrzeit (volle und halbe Stunden). Verständnis für Monate,
                            Tage und Wochen im Kalenderjahr.
                        </p>
                    </div>

                    <div className="p-6 bg-white bg-opacity-90 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold text-purple-900 mb-4">Daten und Wahrscheinlichkeit</h2>
                        <p className="text-lg text-gray-800">
                        Interpretation einfacher Tabellen und Diagramme.
                        Einführung in Begriffe wie "häufig" und "selten".
                        </p>
                    </div>

                    <div className="p-6 bg-white bg-opacity-90 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold text-purple-900 mb-4">Problem lösen und mathematisch argumentieren:</h2>
                        <p className="text-lg text-gray-800">
                        Anwenden mathematischer Konzepte zur Lösung von Alltagsproblemen.
                        Verbalisieren und Begründen mathematischer Überlegungen.
                        </p>
                    </div>


                </div>

                <nav className="w-full mt-8">
                    <ul className="flex flex-wrap justify-center gap-8">
                        <li>
                            <Link
                                to="/Mathematik/Klasse2ZahlenOperationen"
                                className="flex items-center bg-purple-600 p-3 rounded-lg text-white shadow-md hover:bg-purple-700 transition">
                                ZahlenOperationen
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/Mathematik/Klasse2GrößenMessen"
                                className="flex items-center bg-purple-600 p-3 rounded-lg text-white shadow-md hover:bg-purple-700 transition">
                                Größen und Messen
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/Mathematik/Klasse2Geometrie"
                                className="flex items-center bg-purple-600 p-3 rounded-lg text-white shadow-md hover:bg-purple-700 transition">
                                Geometrie
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default MathematikContentTest2;
