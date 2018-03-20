import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UploadForm from './components/UploadForm';

const Home = () => (
  <div>
    <h2>UI Devs Coffee Club! ☕️</h2>
  </div>
);

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/yer-a-wizard-harry" component={UploadForm} />
    </div>
  </Router>
);

export default App;
