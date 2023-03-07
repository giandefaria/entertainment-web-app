import React from 'react';
import logo from './logo.svg';
import './App.css';
import './global.css'
import Main from './pages/main/main';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter> 
        <Routes>
          <Route path="/" element ={ <Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
