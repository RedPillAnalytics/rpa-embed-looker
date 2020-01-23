import React from 'react';
import './App.css';
import Iframe from 'react-iframe';
import { getLookerEmbed } from './actions/getLookerEmbed';

const url = getLookerEmbed();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Iframe
          url={url}
          width='900'
          height='500'
        />
      </header>
    </div>
  );
}

export default App;
