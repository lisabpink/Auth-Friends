import React from 'react';
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import LoginForm from './components/LoginForm';
import './App.css';
import Friends from './components/Friends';

function App() {
  return (
    <Router>
    <div className="App">
    <Route exact path='/' component={LoginForm}/>
     <Switch>
      <PrivateRoute path='/friends'>
      <Route exact path='/friends' component={Friends}/>
      </PrivateRoute>
     </Switch>

  </div>
  </Router>
  );
}

export default App;
