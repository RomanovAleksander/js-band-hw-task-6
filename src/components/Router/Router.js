import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import App from "../App";

import "./router.css";

const Router = () => (
  <HashRouter>
    <Switch>
      <Route path="/todos" component={App} />
      <Redirect from="/" to="/todos" exact />
      <Route path="*">
        <div className="glyphicon glyphicon-remove not-found">
          <p>Page not found</p>
        </div>
      </Route>
    </Switch>
  </HashRouter>
);

export default Router;
