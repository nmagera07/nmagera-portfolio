import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'

import NavBar from './components/navbar'
import MainContent from './components/main-content'

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainContent />
    </div>
  );
}

export default App;
