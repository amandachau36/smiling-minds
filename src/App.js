import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Journal from './Journal';
import ResetRating from './ResetRating'

function App() {
  return (
    <div className="App">
        <h2>Let's chat! How are you feeling today?</h2>
        <br/>
        <br/>
        <ResetRating question={"I've been feeling relaxed"} />
        <br/>
        <br/>
        <ResetRating question={"I've been feeling distracted"} />
        <br/>
        <br/>
        <Journal/>
    </div>
  );
}

export default App;
