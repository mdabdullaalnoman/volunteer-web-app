import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Component/Home/Home/Home';
import MainRegister from './Component/Register/MainRegister/MainRegister';
import AddedService from './Component/AddedService/AddedService/AddedService';
import RegisterLists from './Component/RegisterLilst/RegisterLists/RegisterLists';
import AddVoluntear from './Component/AddVoluntear/AddVoluntear/AddVoluntear';
import { createContext, useEffect, useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import PrivateRoute from './Component/Register/PrivateRoute/PrivateRoute';
import Login from './Component/Register/Login/Login';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState([]);
  const [singleVolunteer, setSingleVolunteer] = useState();

  return (
    <UserContext.Provider value={{ logInfo: [loggedInUser, setLoggedInUser], singleInfo: [singleVolunteer, setSingleVolunteer] }}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/mainRegister">
            <MainRegister></MainRegister>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/addedService">
            <AddedService></AddedService>
          </PrivateRoute>
          <Route path="/admin">
            <RegisterLists></RegisterLists>
          </Route>
          <PrivateRoute path="/addVoluntear">
            <AddVoluntear></AddVoluntear>
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
