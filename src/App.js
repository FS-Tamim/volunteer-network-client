import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Activities from './components/Activities/Activities';
import ActivityRegister from './components/ActivityRegister/ActivityRegister';
import Admin from './components/Admin/Admin';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import AddActivity from './components/AddActivity/AddActivity';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedIn, setLoggedIn] = useState({});
  return (
    <UserContext.Provider value={[loggedIn, setLoggedIn]}>
      <div className="app">
        <Router>
          <Header></Header>
          <Switch>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <PrivateRoute path='/activities'>
              <Activities></Activities>
            </PrivateRoute>
            <PrivateRoute path='/activityRegister/:eventTitle'>
              <ActivityRegister></ActivityRegister>
            </PrivateRoute>
            <Route path='/admin'>
              <Admin></Admin>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/addActivity'>
              <AddActivity></AddActivity>
            </Route>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route ptah='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </div>
    </UserContext.Provider>

  );
}

export default App;
