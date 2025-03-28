import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Art1 from "./pages/Art1.jsx";
import Art2 from "./pages/Art2.jsx";
import Art3 from "./pages/Art3.jsx";
import Art4 from "./pages/Art4.jsx";
import Art5 from "./pages/Art5.jsx";
import Art6 from "./pages/Art6.jsx";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <Router>
    {/* Navbar appears on all pages */}

      {/* Routes for different pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* Artwork Pages */}
        <Route path="/art1" element={<Art1 />} />
        <Route path="/art2" element={<Art2 />} />
        <Route path="/art3" element={<Art3 />} />
        <Route path="/art4" element={<Art4 />} />
        <Route path="/art5" element={<Art5 />} />
        <Route path="/art6" element={<Art6 />} />
      </Routes>

      <Footer /> {/* Footer appears on all pages */}
    </Router>
  );
}

export default App;
