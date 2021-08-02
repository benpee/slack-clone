import React, { useState, useContext, createContext, useReducer } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Chat from './Chat';
import Login from './Login';
import { useStateValue } from './StateProvider';


function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    // BEM naming convention
    <div className="app">
      <Router>
        {
          !user ? (
            <Login />
          ) : (
            <>
              <Header />
              <div className="app_body">
                <Sidebar />
                <Switch>
                  <Route path="/room/:roomId">
                    <Chat />
                  </Route>
                  <Route path='/'>
                    <h1>Welcome to Chat App</h1>
                  </Route>
                </Switch>
              </div>
            </>
          )
        }
      </Router>
    </div>
  );
}

export default App;

