import React from 'react';

class Foerderung extends React.Component {
    render() {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 p-4">
                <div className="p-6 bg-white bg-opacity-90 rounded-lg shadow-md mt-8 max-w-2xl">
                    <h2 className="text-3xl font-bold text-purple-900 mb-4 text-center">Förderung der Selbstständigkeit</h2>
                    <p className="text-lg text-gray-800 mb-2">
                    Ermutigung der Schüler und Studenten, Verantwortung für ihr eigenes Lernen zu übernehmen und eigenständig zu arbeiten, um ihre Selbstständigkeit und Selbstdisziplin zu stärken.
                    </p>
                </div>
            </div>
        );
    }
}

export default Foerderung;
