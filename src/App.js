import React,{Fragment} from 'react';
import './App.css';
import 'bulma/css/bulma.css'
import {BrowserRouter as Router, Route, NavLink, Redirect,Link} from "react-router-dom";
import Main from "./Main"

class App extends React.Component {


  render(){
  return (
            <div>
            <Router>
            <Route exact path="/" component={Main} />
            </Router>
            </div>
  )
}
}

export default App;
