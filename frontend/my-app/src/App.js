import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/pages/Home';
import Profile from './components/pages/Profile';
import SignUp from './components/pages/SignUp';
import Employees from './components/pages/Employees';
import Sales from './components/pages/Sales';



function App() {
  return (
   <>
   <Router>
     <Navbar/>
     <Switch>
       <Route path= '/' exact component={Home} />
       <Route path= '/profile' exact component={Profile} />
       <Route path= '/sign-up' exact component={SignUp} />
       <Route path= '/employees' exact component={Employees} />
       <Route path= '/sales' exact component={Sales} />


      </Switch>
   </Router>
      
    </>
  );
}

export default App;
