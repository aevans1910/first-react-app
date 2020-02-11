import React from 'react';
import './App.css';

function Heading({ title, subtitle }) {
    return (
      <header className="App-header">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </header>
    )
  }

  export default Heading;