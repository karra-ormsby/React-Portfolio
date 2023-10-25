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
import Home from "./pages/home";
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume'
import './App.css'

function App() {
  const [hovered, setHovered] = useState(false);

  const handleIconHover = () => {
    setHovered(!hovered);
  };

  return (
    <div>
      <Router>
        <div>
          <header>
            <Navbar onNavHover={handleIconHover} />
          </header>

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/About" element={<About />} />
            <Route exact path="/Contact" element={<Contact />} />
            <Route exact path="/Portfolio" element={<Portfolio />} />
            <Route exact path="/Resume" element={<Resume />} />
            {/* <Route path="/" component={About} /> Set the "/" route to render the About component */}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
// import React, { useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import Navbar from './components/Navbar'
// import About from './pages/About';
// import Contact from './pages/Contact';
// import Portfolio from './pages/Portfolio';
// import Resume from './pages/Resume'
// import './App.css'

// function App() {
//   const [hovered, setHovered] = useState(false);

//   const handleIconHover = () => {
//     setHovered(!hovered);
//   };

//   return (
//     <div>
//       <header>
//         <Navbar onNavHover={handleIconHover} />
//       </header>

//       <div>
//         <About />
//         <Portfolio />
//         <Contact />
//         <Resume />
//       </div>
//     </div>
//   );
// }

// export default App;
