import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Header from './components/Home/Header/Header';
import ProductDetails from './components/Home/ProductDetails/ProductDetails';


function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
        <Route path="/checkout">
          <Header/>
          <h1>This is checkout</h1>
        </Route>
        <Route path="/login">
          <h1>This is login</h1>
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
  );
}

export default App;
