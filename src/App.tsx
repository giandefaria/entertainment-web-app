import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './pages/main/main';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element ={ <Main />} />
      </Routes>
    </div>
  );
}

export default App;
