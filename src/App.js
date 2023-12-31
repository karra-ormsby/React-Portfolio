import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Home from "./pages/Home";
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume'
import './App.css'
import ThemeProvider from "./utils/ThemeContext";

function App() {

  return (
    <div>
      <Router>
        <div>
          <ThemeProvider>
            <Routes>
              <Route exact path="/React-Portfolio" element={<Home />} />
              <Route exact path="/About" element={<About />} />
              <Route exact path="/Contact" element={<Contact />} />
              <Route exact path="/Portfolio" element={<Portfolio />} />
              <Route exact path="/Resume" element={<Resume />} />
            </Routes>
          </ThemeProvider>
        </div>
      </Router>
    </div>
  );
}

export default App;
