import React from "react";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import {Navigation} from "./router/navigation.js";
import {Home} from "./home/home.js";
import {Footer} from "./footer/footer.js";
import {Login} from './login/login.js';

export const Router = (props) => {
  return(
    <BrowserRouter>
      <div className='container'>
        <Navigation />
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route path={"/login"} component={Login}/>
          <Route render = { () => {
            return <p>Not Found</p>
          }}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
