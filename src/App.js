import React from 'react';
import { Router, Route, Link } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import UploadForm from './components/UploadForm';

const Home = () => (
  <div>
    <h2>UI Devs Coffee Club!</h2>
  </div>
);

const App = () => (
  <Router history={createHistory({ basename: process.env.PUBLIC_URL })}>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/yer-a-wizard-harry">Add coffee</Link>
        </li>
      </ul>
      <Route exact path="/" component={Home} />
      <Route path="/yer-a-wizard-harry" component={UploadForm} />
    </div>
  </Router>
);

export default App;
