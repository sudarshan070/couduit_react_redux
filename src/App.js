import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer'
import Hero from './components/Hero'
import Header from './components/Header'


function App() {
  return (
    <BrowserRouter>
      < Header />
      <Hero />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
