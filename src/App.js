import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'

import NavBar from './components/navbar'
import AboutMe from './components/aboutme'
import Skills from './components/skills'
import MainContent from './components/main-content'
import Footer from './components/footer'


function App() {
  return (
    <div className="App">
      <NavBar />
      <AboutMe />
      <Skills />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
