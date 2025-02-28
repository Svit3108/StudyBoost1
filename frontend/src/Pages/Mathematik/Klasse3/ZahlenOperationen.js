import React from 'react';
import PropTypes from 'prop-types';
import YouTube from 'react-youtube';
import additionImage from '../../../assets/addition-image.jpg'; 
import subtractionImage from '../../../assets/subtraction-image.jpg'; 
import transparentImage from '../../../assets/transparent-image.png';
import QuestSpiel from '../../../Components/QuestSpiel/QuestSpiel';
import GameLink from '../../../Components/GameLink/GameLink'; 
import './ZahlenOperation.css';
import { Link } from 'react-router-dom';

const TransparentImage = ({ src }) => (
  <img className="transparent-image" src={src} alt="Transparentes Bild" />
);

TransparentImage.propTypes = {
  src: PropTypes.string.isRequired,
};


const VideoSection = () => (
  <section id="video">

    <h2><strong>Lernvideos</strong></h2>
    <div className="video-container">
      <YouTube videoId="QXS4exogzb0" />
      <YouTube videoId="J0VA-WcsOtI" />
    </div>
  </section>
);

const ImageGallery = () => (
  <section id="images">
       

    <h2><strong>Schöne Bilder zur Veranschaulichung</strong></h2>


    <div className="image-gallery">
      <div className="image-card">
        <img src={additionImage} alt="Addition" />
        <p><strong>Bild zur Addition</strong></p>
      </div>
      <div className="image-card">
        <img src={subtractionImage} alt="Subtraktion" />
        <p><strong>Bild zur Subtraktion</strong></p>
      </div>
    </div>
  </section>
);

function ZahlenOperation() {
  return (
    <div className="addition-subtraktion">
      
      <nav>
          <Link to="/"> <strong>Zurück zur Homeseite </strong></Link>
        </nav>
      <header className="header">
      

        <h2><span className="badge text-bg-secondary"><strong>Übungen zur Addition und Subtraktion</strong></span></h2>
      </header>

      <main>
        <TransparentImage src={transparentImage} />
        <ImageGallery />
        <QuestSpiel /> {/* Fügen Sie die QuestSpiel-Komponente hier ein */}
        <VideoSection />
        <GameLink /> {/* Einfügen der GameLink-Komponente */}
      </main>
      </div>
  );
}

export default ZahlenOperation;