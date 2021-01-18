import React from "react"
import './App.scss';
import './styles/common.css';
import { BrowserRouter as Router } from "react-router-dom";
import Routes from './router/Routes';

function App() {
  
  return (
    <Router>
      <div className="App">
        <Router>
          <Routes></Routes>
        </Router>
      </div>
    </Router>
  );
}

export default App;
