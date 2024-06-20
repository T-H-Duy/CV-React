import React from "react"
import { Route, Routes } from 'react-router-dom';

import Home from "./pages/Home";
import Services from "./pages/Services";
import AccomplishmentPages from './pages/AccomplishmentPages';
import BlogPages from './pages/BlogPages';
import Contact from './pages/Contact';
import LegalMention from './pages/LegalMention';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/services' element={<Services />}/>
        <Route path='/accomplishmentPages' element={<AccomplishmentPages />}/>
        <Route path='/blogPages' element={<BlogPages />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/legalMention' element={<LegalMention />}/>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
