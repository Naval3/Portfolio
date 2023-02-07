import React from "react";
import Home from "./Home";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Skills from "./Skills";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="">
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
