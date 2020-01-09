import React from 'react';
import './App.css';
import Gnews from './components/gnews/Gnews';
import Comicvine from './components/comicvine/Comicvine';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Gnews></Gnews>
        <Comicvine></Comicvine>
      </header>
    </div>
  );
}

export default App;
