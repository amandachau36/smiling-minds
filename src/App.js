import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Journal from './Journal';
import ResetRating from './ResetRating'

function App() {
  return (
    <div className="App">
        <h3 style={{textAlign: "left", paddingBottom: "0.3em"}}>Let's chat! How are you feeling today?</h3>
        <ResetRating question={"I've been feeling relaxed"} />
        <ResetRating question={"I've been feeling distracted"} />
        <br/>
        <Journal/>
    </div>
  );
}

export default App;
