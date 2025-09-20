import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import News from "./pages/News";
import FindSupport from "./pages/FindSupport";
import Join from "./pages/Join";
import Footer from "./components/Footer";
import Extra from "./components/Extra";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<News />} />
          <Route path="/findsupport" element={<FindSupport />} />
          <Route path="/join" element={<Join />} />
        </Routes>
        <Extra />
        <Footer />
      </Router>
    </HelmetProvider>
  );
}

export default App;
