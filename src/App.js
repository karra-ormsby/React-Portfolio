import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
// import Navigation from './components/Navigation';
import Header from './components/Header/Header'
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Portfolio from './components/pages/Portfolio';
import Resume from './components/pages/Resume'
import Footer from "./components/Footer/Footer";
import './App.css'

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" element={<About />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route exact path="/Portfolio" element={<Portfolio />} />
          <Route exact path="/Resume" element={<Resume />} />
        </Routes>
      </Router>
      {/* <Navigation></Navigation> */}
      <Footer />
    </div>
  );
}

export default App;
