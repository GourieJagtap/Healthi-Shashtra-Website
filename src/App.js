import React from 'react';
import "./App.css";
import Header from "../src/Components/Header";
import Home from "../src/Components/Home";

const App = () => {
  return (
    <div>
    <div className="container-fluid bg p-0">
      <Header/>
      <Home/>
    </div>
    <div className="container-fluid bgg mt-3">
    </div>
    </div>
  )
}

export default App