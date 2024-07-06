import React from 'react';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Main from './Components/Main/Main';
import { ThemeProvider } from './context/ThemeProvider';
import Home from './Pages/Home/Home';
import Courses from './Pages/Courses/Courses';
import Help from './Pages/Help/Help';
import Login from './Pages/Login/Login';
import Error from './Pages/Error/Error';
import Hausaufgabenhilfe from './Pages/Hausaufgabenhilfe/Hausaufgabenhilfe';
import Notenverbesserung from './Pages/Notenverbesserung/Notenverbesserung';
import Register from './Pages/Register/Register';
import Mathematik from './Pages/Mathematik/Mathematik';
import Informatik from './Pages/Informatik/Informatik';
import Deutsch from './Pages/Deutsch/Deutsch';
import MathematikContent from './Components/MathematikContent/MathematikContent';
import DeutschContent from './Components/DeutschContent/DeutschContent';
import InformatikContent from './Components/InformatikContent/InformatikContent';
import InformatikContentTest1 from './Components/InformatikContentTest1/InformatikContentTest1';
import MathematikContentTest1 from './Components/MathematikContentTest1/MathematikContentTest1';
import MathematikContentTest2 from './Components/MathematikContentTest2/MathematikContentTest2';
import MathematikContentTest3 from './Components/MathematikContentTest3/MathematikContentTest3';
import DeutschContentTest1 from './Components/DeutschContentTest1/DeutschContentTest1';

import Klasse1Test from './Pages/Mathematik/Klasse1/Test';
import Klasse2Test from './Pages/Mathematik/Klasse2/Test';
import Klasse3Test from './Pages/Mathematik/Klasse3/Test';
import Klasse1deutsch from './Pages/Deutsch/Klasse1/deutsch';
import Klasse1Informatiktest from './Pages/Informatik/Klasse1/Informatiktest';
import Klasse1zahleneinführung from './Pages/Mathematik/Klasse1/zahleneinführung';
import Klasse2geometrie from './Pages/Mathematik/Klasse2/Geometrie';
import Klasse1Woertersaetze from './Pages/Deutsch/Klasse1/Woertersaetze';
import Klasse1Alphabeteinführung from './Pages/Deutsch/Klasse1/Alphabeteinführung';
import Klasse1Informatikeinführung from './Pages/Informatik/Klasse1/Informatikeinführung';
import Klasse1Informatikalgorithmen from './Pages/Informatik/Klasse1/Algorithmen';
import Klasse1Informatikprogrammierung from './Pages/Informatik/Klasse1/Programmierung';
import Klasse1GeschichtenMaerchen from './Pages/Deutsch/Klasse1/GeschichtenMaerchen';
import Klasse1additionsubtraktion from './Pages/Mathematik/Klasse1/additionsubtraktion';
import Klasse2ZahlenOperationen from './Pages/Mathematik/Klasse2/ZahlenOperationen';
import Klasse1formenmuster from './Pages/Mathematik/Klasse1/formenmuster';

function App() {
  return (
    <ThemeProvider>
      <div className='App flex-col min-h-screen dark:bg-gray-800'>
        <Header />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/help" element={<Help />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Hausaufgabenhilfe" element={<Hausaufgabenhilfe />} />
          <Route path="/Notenverbesserung" element={<Notenverbesserung />} />
          <Route path="/Mathematik" element={<Mathematik />} />
          <Route path="/Deutsch" element={<Deutsch />} />
          <Route path="/Informatik" element={<Informatik />} />
          <Route path="/Mathematik/Klasse1Test" element={<Klasse1Test />} />
  
          <Route path="/Mathematik/Klasse2Test" element={<Klasse2Test />} />
          <Route path="/Mathematik/Klasse3Test" element={<Klasse3Test />} />
          <Route path="/Informatik/Klasse1Informatiktest" element={<Klasse1Informatiktest />} />
          <Route path="/Deutsch/Klasse1deutsch" element={<Klasse1deutsch />} />
          <Route path="/Deutsch/Klasse1Woertersaetze" element={<Klasse1Woertersaetze />} />
          <Route path="/Informatik/Klasse1Informatikeinführung" element={<Klasse1Informatikeinführung />} />
          <Route path="/Informatik/Klasse1Informatikalgorithmen" element={<Klasse1Informatikalgorithmen />} />
          <Route path="/Informatik/Klasse1Informatikprogrammierung" element={<Klasse1Informatikprogrammierung />} />
          <Route path="/Deutsch/Klasse1Alphabeteinführung" element={<Klasse1Alphabeteinführung />} />
          <Route path="/Deutsch/Klasse1GeschichtenMaerchen" element={<Klasse1GeschichtenMaerchen />} />
          <Route path="/Mathematik/Klasse2ZahlenOperationen" element={<Klasse2ZahlenOperationen />} />
          <Route path="/Mathematik/Klasse2Geometrie" element={<Klasse2geometrie />} />
          <Route path="/Mathematik/Klasse1zahleneinführung" element={<Klasse1zahleneinführung />} />
          <Route path="/Mathematik/Klasse1additionsubtraktion" element={<Klasse1additionsubtraktion />} />
          <Route path="/Mathematik/Klasse1formenmuster" element={<Klasse1formenmuster />} />
          <Route path="/MathematikContent" element={<MathematikContent />} />
          <Route path="/InformatikContent" element={<InformatikContent />} />
          <Route path="/DeutschContent" element={<DeutschContent />} />
          <Route path="/MathematikContentTest1" element={<MathematikContentTest1 />} />
        
          <Route path="/MathematikContentTest2" element={<MathematikContentTest2 />} />
          <Route path="/MathematikContentTest3" element={<MathematikContentTest3 />} />
          <Route path="/InformatikContentTest1" element={<InformatikContentTest1 />} />
          <Route path="/DeutschContentTest1" element={<DeutschContentTest1 />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Main />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
