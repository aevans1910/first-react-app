import React from 'react';
import Heading from './Heading';
import './App.css';

function App() {
  return (
    <div className="App">
      <Heading title="Hello World" subtitle="Foo Bar" />
      <Heading title="Foo Bar" subtitle="Hello World" />
    </div>
  );
}

export default App;
