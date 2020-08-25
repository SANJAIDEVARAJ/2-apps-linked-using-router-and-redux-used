import React from 'react';
import {BrowserRouter as Router,Switch,Route,NavLink} from "react-router-dom";
import { Home } from './Home';
import { Todo } from './Todo';
import { Fb } from './Fb';



export default function App() {
 
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/" exact activeStyle={
              { color:'red' }
            }>Home</NavLink>
            </li>
            <li>
              <NavLink to="/TODO" exact activeStyle={
              { color:'red' }
            }>To Do App</NavLink>
            </li>
            <li>
              <NavLink to="/FB" exact activeStyle={
              { color:'red' }
            }>fb timeline</NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          
          <Route path="/TODO">
            <Todo />
          </Route>
          <Route path="/FB">
            <Fb />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}


