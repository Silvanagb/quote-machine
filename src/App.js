import React, { useState } from 'react';
import './App.css';

const quotes = [
  {
    text: "La vida es lo que pasa mientras estás ocupado haciendo otros planes.",
    author: "John Lennon"
  },
  {
    text: "El propósito de nuestras vidas es ser felices.",
    author: "Dalai Lama"
  },
  {
    text: "El éxito es ir de fracaso en fracaso sin perder el entusiasmo.",
    author: "Winston Churchill"
  },
  {
    text: "Haz lo que puedas, con lo que tengas, donde estés.",
    author: "Theodore Roosevelt"
  },
  {
    text: "Si puedes soñarlo, puedes hacerlo.",
    author: "Walt Disney"
  }
];

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function App() {
  const [quote, setQuote] = useState(getRandomQuote());

  const handleNewQuote = () => {
    setQuote(getRandomQuote());
  };

  return (
    <div className="wrapper">
      <div id="quote-box">
        <p id="text">"{quote.text}"</p>
        <p id="author">- {quote.author}</p>

        <div className="buttons">
          <a
            id="tweet-quote"
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
              `"${quote.text}" - ${quote.author}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Tuitear
          </a>
          <button id="new-quote" onClick={handleNewQuote}>
            Nueva cita
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;