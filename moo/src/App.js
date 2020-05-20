import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">All</Link>
            </li>
            <li>
              <Link to="/watched">Watched</Link>
            </li>
            <li>
              <Link to="/not-watched">Not Watched</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/">
            {/* <Home /> */}
          </Route>
          <Route path="/watched">
            {/* <Watched /> */}
          </Route>
          <Route path="/not-watched">
            {/* <Not-watched /> */}
          </Route>
        </Switch>
      </div>
    </Router>
      
    </div>
  );
}

export default App;
