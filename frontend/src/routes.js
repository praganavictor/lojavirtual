import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Footer from "./components/Footer";

import login from "./pages/login";
import register from "./pages/register";

import dashboard from "./pages/dashboard";

import error404 from "./pages/error404";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={dashboard} />

        <Route exact path="/login" component={login} />

        <Route exact path="/register" component={register} />

        <Route exact path="/login" component={login} />

        <Route path="*" component={error404} />

      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Routes;
