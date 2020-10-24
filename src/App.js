import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Journal from './Journal';
import ResetRating from './ResetRating'

function App() {
  return (
    <div className="App">
        <h2>Let's chat! How are you feeling today?</h2>
        <p>I've been feeling relaxed</p>
        <ResetRating />
        <p>I've been feeling distracted</p>
        <ResetRating />
        <Journal/>
    </div>
  );
}

export default App;
