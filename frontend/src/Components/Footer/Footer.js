import React from 'react';
import { useTheme } from '../../context/ThemeProvider';
import { FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

const Footer = () => {
    const { theme } = useTheme();

    return (
        <footer className={`p-3 bg-gray-800 text-white text-center ${theme}`}>
            <p>&copy; 2024 StudyBoost</p>
            <div className="flex justify-center space-x-4">
                <a href="https://www.linkedin.com/in/studyboost-studyboost-55ba07313" target="_blank" rel="noopener noreferrer" className="text-lg text-blue-600 font-bold">
                    <FaLinkedin className="text-blue-600 inline-block" />
                </a>
                <a href="https://x.com/SStudyboost" target="_blank" rel="noopener noreferrer" className="text-lg text-blue-600 font-bold">
                    <FaTwitter className="text-blue-600 inline-block" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61561060858517" target="_blank" rel="noopener noreferrer" className="text-lg text-blue-600 font-bold">
                    <FaFacebook className="text-blue-600 inline-block" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
