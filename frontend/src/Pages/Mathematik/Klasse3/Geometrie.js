import React, { useState } from 'react';
import YouTube from 'react-youtube';
import './Geometrie.css';
import { Link } from 'react-router-dom';


const Fragen = [
  { frage: "Welche Form fehlt: 🔵🟥🔵🟥?", antworten: ["🔵", "🟥", "🔺"], richtigeAntwort: "🔵" },
  { frage: "Welche Form fehlt: 🟥🔵🟥🔵?", antworten: ["🔵", "🟥", "🔺"], richtigeAntwort: "🟥" },
  { frage: "Welche Form fehlt: 🔺🟥🔺🟥?", antworten: ["🔵", "🟥", "🔺"], richtigeAntwort: "🔺" },
  { frage: "Welche Form fehlt: 🔵🔺🔵🔺?", antworten: ["🔵", "🟥", "🔺"], richtigeAntwort: "🔵" },
];

const Geometrie = () => {
  const [aktuelleFrageIndex, setAktuelleFrageIndex] = useState(0);
  const [feedback, setFeedback] = useState({ text: "", emoji: "" });
  const aktuelleFrage = Fragen[aktuelleFrageIndex];

  const handleAntwortClick = (antwort) => {
    if (antwort === aktuelleFrage.richtigeAntwort) {
      setFeedback({ text: "Richtig!", emoji: "👍" });
    } else {
      setFeedback({ text: "Falsch, versuche es nochmal.", emoji: "❌" });
    }
  };

  const handleNextClick = () => {
    setFeedback({ text: "", emoji: "" });
    setAktuelleFrageIndex((prevIndex) => (prevIndex + 1) % Fragen.length);
  };

  return (
    <div className="formen-muster-container">
     
        <header className="header">
        <h1>Formen lernen macht Spaß! </h1>
      </header>
      <section className="introduction">
        <p>Willkommen zu unserem Lernspiel! Hier kannst du Formen entdecken und üben.</p>
      </section>

      <section className="shapes">
        <h2>Formen</h2>
        <div className="shape-card-container">
          <div className="shape-card">
            <div className="shape">🔵</div>
            <p>Kreis</p>
          </div>
          <div className="shape-card">
            <div className="shape">🟥</div>
            <p>Quadrat</p>
          </div>
          <div className="shape-card">
            <div className="shape">🔺</div>
            <p>Dreieck</p>
          </div>
        </div>
      </section>

      

      <section className="exercise">
        <h2>Übung</h2>
        <div className="question">
          <p>{aktuelleFrage.frage}</p>
          {aktuelleFrage.antworten.map((antwort) => (
            <button key={antwort} onClick={() => handleAntwortClick(antwort)}>
              {antwort}
            </button>
          ))}
        </div>
        {feedback.text && (
          <div className="feedback">
            <p>{feedback.text}</p>
            <span>{feedback.emoji}</span>
          </div>
        )}
        <button className="next-button" onClick={handleNextClick}>
          Nächste Frage
        </button>
      </section>

      <section className="video-section">
        <h2>Lernvideos</h2>
        <div className="video-container">
          <YouTube videoId="vZ2s7S9GC8I" />
          <YouTube videoId="XR0Kbs-3RY8" />
        </div>
      </section>
    </div>

  );
};

export default Geometrie;