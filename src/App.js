import React, { useEffect } from "react"
import {BrowserRouter as Router, Switch,Route} from "react-router-dom"
import './App.css';
import Checkout from "./components/Checkout";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import { useStateValue } from "./components/StateProvider";
import fire from "./firebase";

function App() {
  const[{basket},dispatch]=useStateValue()
useEffect(()=>{
const unsubscribe=fire.auth().onAuthStateChanged((authUser)=>{
  if(authUser){
dispatch({
  type:"SET_USER",
  user:authUser
})
  }else{
    dispatch({
      type:"SET_USER",
      user:null
    })
  }
})

return()=>{
  unsubscribe()
}
},[])

  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Header />
          <Home />
        </Route>
        <Route exact path="/checkout">
          <Header />
          <Checkout />
        </Route>
        <Route exact path="/login">
          
          <Login />
        </Route>
      </Switch>
     
    </div>
    </Router>
  );
}

export default App;
