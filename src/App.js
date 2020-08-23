import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Container from 'react-bootstrap/Container';

import Header from './components/layout/Header';
import Index from './components/layout/Index';
import Posts from './components/Post/Posts';

function App() {
  return (
    <Container className="App">
      <Router>
        <Header />
        <Route exact path="/" render={() => (<Index />)} />
        <Route path="/posts" render={() => (<Posts />)} />
      </Router>
    </Container>
  );
}

export default App;
