import React from 'react';
import {Route} from "react-router-dom";
import {Switch} from "react-router-dom";
import Home from "./home";
import Child from "./Child";
//import Delhi from "./delhi";
//import Kolkata from "./kolkata";
//import {withRouter} from "react-router-dom";

class App extends React.Component
{
  render()
  {
    return(<div>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/:id" component={Child}/>
      </Switch>
      </div>
      
    );
  }
}

export default (App);
