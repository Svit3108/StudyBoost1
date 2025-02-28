import React from 'react';
import { Link } from 'react-router-dom';
import MathersteklasseImage from '../../assets/Mathersteklasse-image.jpg';
const MathematikContentTest1 = () => {
    return (
        <div> 
        <div
        
            className="flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url(${MathersteklasseImage})`,
                minHeight: '100vh', 
                padding: '8rem 2rem', 
                color: '#333', 
            }}
        >
          <nav>
        
      </nav>
            <div className="w-full max-w-4xl mx-auto p-8 bg-white bg-opacity-90 rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold text-center text-purple-900 mb-8">
                    Mathematische Themen für die erste Klasse
                </h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="p-6 bg-white bg-opacity-90 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold text-purple-900 mb-4">Zahlen und Zählen</h2>
                        <p className="text-lg text-gray-800">
                            Einführung in Zahlen bis 20, Zählen durch Bilder und Zahlenlinien.
                        </p>
                    </div>
                    
                    <div className="p-6 bg-white bg-opacity-90 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold text-purple-900 mb-4">Grundlegende Addition und Subtraktion</h2>
                        <p className="text-lg text-gray-800">
                            Verwendung von visuellen Hilfsmitteln wie Zählstäbchen und Karten.
                        </p>
                    </div>
                    
                    <div className="p-6 bg-white bg-opacity-90 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold text-purple-900 mb-4">Formen und Muster</h2>
                        <p className="text-lg text-gray-800">
                            Erkunden von Grundformen und Erstellen einfacher Muster.
                        </p>
                    </div>
                </div>

                <nav className="w-full mt-8">
                    <ul className="flex flex-wrap justify-center gap-8">
                        <li>
                            <Link to="/Mathematik/Klasse1zahleneinfuehrung" className="flex items-center bg-purple-600 p-3 rounded-lg text-white shadow-md hover:bg-purple-700 transition">
                                Zahlen und Zählen
                            </Link>
                        </li>
                        <li>
                            <Link to="/Mathematik/Klasse1additionsubtraktion" className="flex items-center bg-purple-600 p-3 rounded-lg text-white shadow-md hover:bg-purple-700 transition">
                                Addition und Subtraktion
                            </Link>
                        </li>
                        <li>
                            <Link to="/Mathematik/Klasse1formenmuster" className="flex items-center bg-purple-600 p-3 rounded-lg text-white shadow-md hover:bg-purple-700 transition">
                                Formen und Muster
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
          </div>
    </div>
    );
}

export default MathematikContentTest1;

