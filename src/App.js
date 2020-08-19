import React from 'react';

import './App.css';
import Navigation from './components/NavBar';
import Header from './components/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Experiences from './pages/Experiences';

function App() {
  return (
    <div>
      <Header></Header>
      <Navigation />
      <About id="about" />
      <Projects id="projects" />
      <Experiences id="experiences" />
      <Contact id="contact" />
    </div>
  );
}

export default App;
