import React from 'react';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import User from './User';


const App = () => {

  return (
    <main>
      <Router>
        
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/users/:id" component={User} />
          </Switch>
        
        <Home />
      </Router>
      
    </main>
  );
}



export default App;