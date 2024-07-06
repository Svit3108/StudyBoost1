import React, { useState } from 'react';
import './calculator.css'; // Stile können in einer CSS-Datei definiert und importiert werden

const Calculator = () => {
    const [displayValue, setDisplayValue] = useState(''); // State für den Anzeigewert im Taschenrechner

    // Funktion zum Hinzufügen von Zeichen zur Anzeige
    const appendToDisplay = (value) => {
        setDisplayValue(displayValue + value);
    };

    // Funktion zur Berechnung des Ergebnisses
    const calculate = () => {
        try {
            const result = eval(displayValue); // Verwenden von eval für die einfache Berechnung (ACHTUNG: eval sollte in realen Anwendungen vermieden werden)
            setDisplayValue(result.toString());
        } catch (error) {
            console.error('Fehler bei der Berechnung:', error);
            setDisplayValue('Error');
        }
    };

    // Funktion zum Löschen der Anzeige
    const clearDisplay = () => {
        setDisplayValue('');
    };

    return (
        <div id="calculator">
            <input type="text" id="display" value={displayValue} readOnly />
            <div id="keys">
                <button onClick={() => appendToDisplay('+')} className="operator-btn">+</button>
                <button onClick={() => appendToDisplay('7')}>7</button>
                <button onClick={() => appendToDisplay('8')}>8</button>
                <button onClick={() => appendToDisplay('9')}>9</button>
                <button onClick={() => appendToDisplay('-')} className="operator-btn">-</button>
                <button onClick={() => appendToDisplay('4')}>4</button>
                <button onClick={() => appendToDisplay('5')}>5</button>
                <button onClick={() => appendToDisplay('6')}>6</button>
                <button onClick={() => appendToDisplay('*')} className="operator-btn">*</button>
                <button onClick={() => appendToDisplay('1')}>1</button>
                <button onClick={() => appendToDisplay('2')}>2</button>
                <button onClick={() => appendToDisplay('3')}>3</button>
                <button onClick={() => appendToDisplay('/')} className="operator-btn">/</button>
                <button onClick={() => appendToDisplay('0')}>0</button>
                <button onClick={() => appendToDisplay('.')}>.</button>
                <button onClick={calculate}>=</button>
                <button onClick={clearDisplay} className="operator-btn">C</button>
            </div>
        </div>
    );
};

export default Calculator;
