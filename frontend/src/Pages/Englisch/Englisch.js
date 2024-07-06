import React from 'react';

class Motivation extends React.Component {
    render() {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 p-4">
                <div className="p-6 bg-white bg-opacity-90 rounded-lg shadow-md mt-8 max-w-2xl">
                    <h2 className="text-3xl font-bold text-purple-900 mb-4 text-center">Motivation und Engagement</h2>
                    <p className="text-lg text-gray-800 mb-2">
                   Nutzung von Gamification-Elementen und Belohnungssystemen, um Schüler und Studenten zu motivieren und ihr Engagement für das Lernen zu erhöhen.
                    </p>
                </div>
            </div>
        );
    }
}

export default Motivation;
