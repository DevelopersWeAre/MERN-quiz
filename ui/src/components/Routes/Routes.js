import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Layout from "../Layout/Layout";
// import Quizzes from "../Quizzes/Quizzes";
// import Ladder from "../Ladder/Ladder";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Layout} />
    {/* <Route path="/quizzes" component={Quizzes} /> */}
    {/* <Route path="/ladder" component={Ladder} /> */}
    <Route render={() => <Redirect to="/" />} />
  </Switch>
);

export default Routes;
