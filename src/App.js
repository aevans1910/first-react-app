import React from 'react';
import PageHeader from './PageHeader';
import PageContent from './PageContent';
import PageFooter from './PageFooter';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import data from './data'
import SelectedProject from './SelectedProject.js'

function App() {
  return (
    <Router>
      <div className="App">
        <PageHeader />
        <Route exact path='/' component={PageContent} />
        <Route exact path='/:index' component={SelectedProject} />
        <PageFooter />
      </div>
    </Router>
  );
}

export default App;
