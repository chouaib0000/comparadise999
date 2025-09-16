import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Partners from './components/Partners';
import AutoSection from './components/AutoSection';
import HomeSection from './components/HomeSection';
import Claims from './components/Claims';
import Quote from './components/Quote';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AutoDetails from './pages/AutoDetails';
import HabitationDetails from './pages/HabitationDetails';
import ServicesPage from './pages/ServicesPage';
import EntrepriseDetails from './pages/EntrepriseDetails';
import AvantagesDetails from './pages/AvantagesDetails';
import AdminPage from './pages/AdminPage';
import Chatbot from './components/Chatbot';

const HomePage = () => (
  <>
    <Header />
    <Hero />
    <Services />
    <About />
    <AutoSection />
    <Partners />
    <HomeSection />
    <Claims />
    <Quote />
    <Blog />
    <Contact />
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/auto-details" element={<AutoDetails />} />
          <Route path="/habitation-details" element={<HabitationDetails />} />
          <Route path="/entreprise-details" element={<EntrepriseDetails />} />
          <Route path="/avantages-details" element={<AvantagesDetails />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;