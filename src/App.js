import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from './components/Navbar'
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume'
import Footer from "./components/Footer";
import './App.css'

function App() {
  const [hovered, setHovered] = useState(false);

  const handleIconHover = () => {
    setHovered(!hovered);
  };

  return (
    <div>
      <Router>
        {/* <div style={{ paddingTop: hovered ? '10rem' : '0', transition: 'all 0.5s ease'}}> */}
        <div>
          <header>
            <Navbar onNavHover={handleIconHover} />
          </header>

          <Routes>
            <Route exact path="/" element={<About />} />
            <Route exact path="/Contact" element={<Contact />} />
            <Route exact path="/Portfolio" element={<Portfolio />} />
            <Route exact path="/Resume" element={<Resume />} />
          </Routes>
        </div>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
