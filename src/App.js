import React from 'react';
import './App.css';
import Home from './components/layout/Home';
import About from './components/layout/About';
import NotFound from './components/layout/NotFound';
import SurfboardState from './surfboardContext/SurfboardState';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <SurfboardState>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </SurfboardState>
  )
};

export default App;
