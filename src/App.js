import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Journal from './Journal';
import ResetRating from './ResetRating'

function App() {
  return (
    <div className="App">
        <ResetRating placeholderRating={3} />
        <Journal/>

    </div>
  );
}

export default App;
