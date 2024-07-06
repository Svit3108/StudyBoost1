import React from 'react';

class Lernorganisation extends React.Component {
    render() {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 p-4">
                <div className="p-6 bg-white bg-opacity-90 rounded-lg shadow-md mt-8 max-w-2xl">
                    <h2 className="text-3xl font-bold text-purple-900 mb-4 text-center">Verbesserung der Lernorganisation</h2>
                    <p className="text-lg text-gray-800 mb-2">
                        Bereitstellung von Werkzeugen zur Planung und Verwaltung von Hausaufgaben, Projekten und Prüfungen, um den Schülern zu helfen, ihre Zeit besser zu managen und Fristen einzuhalten.
                    </p>
                </div>
            </div>
        );
    }
}

export default Lernorganisation;
