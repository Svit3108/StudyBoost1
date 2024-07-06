import React from 'react';
import { Link } from 'react-router-dom';
import MathersteklasseImage from '../../assets/Mathersteklasse-image.jpg';

const MathematikContentTest3 = () => {
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
                    Mathematische Themen für die 3. Klasse
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="p-6 bg-white bg-opacity-90 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold text-purple-900 mb-4">Zahlen und Operationen</h2>
                        <p className="text-lg text-gray-800">
                        Große Zahlen lesen und schreiben (bis 1000)
Addition und Subtraktion im Zahlenraum bis 1000
Multiplikation und Division
Kopfrechnen
Anwendung der Rechengesetze (Kommutativgesetz, Assoziativgesetz, Distributivgesetz)
                        </p>
                    </div>

                    <div className="p-6 bg-white bg-opacity-90 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold text-purple-900 mb-4">Größen und Messen</h2>
                        <p className="text-lg text-gray-800">
                        Längen messen und vergleichen (Millimeter, Zentimeter, Meter)
Gewichte messen und vergleichen (Gramm, Kilogramm)
Volumen messen (Milliliter, Liter)
                        </p>
                    </div>

                    <div className="p-6 bg-white bg-opacity-90 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold text-purple-900 mb-4">Geometrie</h2>
                        <p className="text-lg text-gray-800">
                        Erkennen und benennen von geometrischen Formen (Kreis, Rechteck, Quadrat, Dreieck)
Zeichnen und Messen von Linien
Verständnis von Symmetrie
Einführung in die Winkelmessung
                        </p>
                    </div>

                    <div className="p-6 bg-white bg-opacity-90 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold text-purple-900 mb-4">Daten und Wahrscheinlichkeiten</h2>
                        <p className="text-lg text-gray-800">
                        Erfassen und Darstellen von Daten (z.B. durch Diagramme)
                        Einfaches Verständnis von Wahrscheinlichkeiten (z.B. Würfelspiele)
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
                        Muster und Reihen fortsetzen
Einfache logische Rätsel lösen
Strategien zum Problemlösen entwickeln
                        </p>
                    </div>


                </div>

                <nav className="w-full mt-8">
                    <ul className="flex flex-wrap justify-center gap-8">
                        <li>
                            <Link
                                to="/Mathematik/Klasse3ZahlenOperationen"
                                className="flex items-center bg-purple-600 p-3 rounded-lg text-white shadow-md hover:bg-purple-700 transition">
                                ZahlenOperationen
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/Mathematik/Klasse3GrößenMessen"
                                className="flex items-center bg-purple-600 p-3 rounded-lg text-white shadow-md hover:bg-purple-700 transition">
                                Größen und Messen
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/Mathematik/Klasse3Geometrie"
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

export default MathematikContentTest3;
