import React from 'react'
import Navbar from "./components/Navbar.jsx"
import "./App.css";
import Footer from "./components/Footer.jsx"
import Homepage from './pages/Homepage.jsx';
import Errorpage from './pages/Errorpage.jsx';
import About from './pages/About.jsx';
import Apartmentpage from "./pages/Apartmentpage.jsx"

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";



function App() {
  return (
    <div>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route index element={<Homepage />} />
            <Route path="about" element={<About />} />
            <Route path="products/:productId" element={<Apartmentpage/>} />
            <Route path="/404" element={<Errorpage/>} />
            <Route path="*" element={<Errorpage />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
