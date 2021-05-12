import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Header from './components/Home/Header/Header';
import ProductDetails from './components/Home/ProductDetails/ProductDetails';
import Checkout from './components/Checkout/Checkout';
import Login from './components/FirebaseSignInOut/Login/Login';
import PrivetRoute from './components/FirebaseSignInOut/PrivetRoute/PrivetRoute';

export const UserContext = createContext();

function App() {
  
  const [loggedInUser, setLoggedInUser] = useState({});
  console.log(loggedInUser)
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
      <div className="App">
      <Switch>
        <PrivetRoute path="/orderProceed">
          <Header/>
          <h1>Order is on Proceed</h1>
        </PrivetRoute>
        <Route path="/checkout">
          <Header/>
          <Checkout/>
        </Route>
        <Route path="/login">
          <Header/>
          <Login/>
        </Route>
        <Route path="/:id">
          <ProductDetails/>
        </Route>
        <Route exact path="/">
         <Header/>
         <Home/>
        </Route>
      </Switch>
      </div>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
