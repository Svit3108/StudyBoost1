import React from 'react';

import NoteverbesserungImage from '../../assets/Noteverbesserung-image.jpg';

const Noteverbesserung = () => {
    return (
        <div className="flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url(${NoteverbesserungImage})`,
                minHeight: '100vh',
                padding: '8rem 2rem',
                color: '#333',
            }}>
            <div className="w-full max-w-4xl mx-auto p-8 bg-white bg-opacity-90 rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold text-center text-purple-900 mb-8">
                Tipps zur Notenverbesserung und Unterstützungsmöglichkeiten
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="p-6 bg-white bg-opacity-90 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold text-purple-900 mb-4">Zahlen und Operationen</h2>
                        <p className="text-lg text-gray-800">
                        Liebe Schülerinnen und Schüler, liebe Eltern,

Wir hoffen, dass es Ihnen allen gut geht und Sie gesund sind. Uns ist bewusst, dass das Schuljahr Herausforderungen mit sich bringt, insbesondere was die Noten betrifft. Daher möchten wir Ihnen einige wertvolle Tipps und Unterstützungsmöglichkeiten vorstellen, die dabei helfen können, die schulischen Leistungen zu verbessern.
                        </p>
                    </div>

                    <div className="p-6 bg-white bg-opacity-90 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold text-purple-900 mb-4">Regelmäßiges Lernen</h2>
                        <p className="text-lg text-gray-800">
                        Kontinuierliches Lernen und Wiederholen des Unterrichtsstoffs sind entscheidend. Erstellen Sie einen Lernplan, um den Überblick zu behalten und das Lernen zu strukturieren.
                        </p>
                    </div>

                    <div className="p-6 bg-white bg-opacity-90 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold text-purple-900 mb-4">Hausaufgaben und Übungsaufgaben</h2>
                        <p className="text-lg text-gray-800">
                        Bearbeiten Sie alle Hausaufgaben sorgfältig und pünktlich. Zusätzliche Übungsaufgaben, insbesondere in den Fächern, in denen Schwierigkeiten bestehen, können ebenfalls sehr hilfreich sein.
                        </p>
                    </div>

                    <div className="p-6 bg-white bg-opacity-90 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold text-purple-900 mb-4">Fragen stellen</h2>
                        <p className="text-lg text-gray-800">
                        Scheuen Sie sich nicht, Fragen zu stellen, wenn Sie etwas nicht verstehen. Nutzen Sie die Sprechstunden Ihrer Lehrerinnen und Lehrer oder stellen Sie Fragen direkt im Unterricht.
                        </p>
                    </div>

                    <div className="p-6 bg-white bg-opacity-90 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold text-purple-900 mb-4">Lerngruppen</h2>
                        <p className="text-lg text-gray-800">
                        Lernen in Gruppen kann motivierend sein und hilft, schwierige Themen gemeinsam zu erarbeiten. Bilden Sie Lerngruppen mit Klassenkameraden, um sich gegenseitig zu unterstützen.
                        </p>
                    </div>

                    <div className="p-6 bg-white bg-opacity-90 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold text-purple-900 mb-4">Nachhilfe</h2>
                        <p className="text-lg text-gray-800">
                        Sollten Sie intensivere Unterstützung benötigen, ziehen Sie professionelle Nachhilfe in Betracht. Es gibt zahlreiche Angebote, sowohl online als auch vor Ort.
                        </p>
                    </div>

                    <div className="p-6 bg-white bg-opacity-90 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold text-purple-900 mb-4">Zeitmanagement</h2>
                        <p className="text-lg text-gray-800">
                        Achten Sie auf ein gutes Zeitmanagement. Pausen sind wichtig, aber auch eine feste Struktur des Tagesablaufs kann helfen, konzentriert und effektiv zu lernen.
                        </p>
                    </div>
                    <div className="p-6 bg-white bg-opacity-90 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold text-purple-900 mb-4">Gesundheit und Wohlbefinden</h2>
                        <p className="text-lg text-gray-800">
                        Vergessen Sie nicht, auf Ihre Gesundheit zu achten. Ausreichend Schlaf, gesunde Ernährung und Bewegung sind ebenfalls wichtige Faktoren für schulischen Erfolg.

Wir möchten Sie außerdem daran erinnern, dass unsere Schule verschiedene Unterstützungsangebote bereithält. Sollten Sie individuelle Beratung oder zusätzliche Ressourcen benötigen, zögern Sie bitte nicht, uns zu kontaktieren. Unsere Lehrerinnen und Lehrer sowie das Beratungsteam stehen Ihnen jederzeit zur Verfügung.

Gemeinsam können wir daran arbeiten, dass dieses Schuljahr erfolgreich verläuft. Wir glauben fest daran, dass jede Schülerin und jeder Schüler das Potenzial hat, hervorragende Leistungen zu erbringen.

Mit freundlichen Grüßen, Team Studyboost
                        </p>

                        <p className="text-lg text-gray-800">
                            

                            Mit freundlichen Grüßen, Team Studyboost
                        </p>
                    </div>



                </div>

                
                
            </div>
        </div>
    );
}

export default Noteverbesserung;
