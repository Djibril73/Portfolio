import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Experience from './components/Experience';
import Description from './components/Description';
import Skills from './components/Skills';
import Projets from './components/projets';
import Contact from './pages/Contact';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer';
import Certifications from './components/Certification';

const App = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <Description />
            <Experience />
            <Skills />
            <Certifications />
            <Projets />
          </>
        } />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <ToastContainer />
      <Footer />
    </div>
  );
};

export default App;