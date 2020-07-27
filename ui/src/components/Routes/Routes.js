import React from "react";
import { Switch, Route } from "react-router-dom";

import Layout from "../Layout/Layout";
// import Quizzes from "../Quizzes/Quizzes";
// import Ladder from "../Ladder/Ladder";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Layout} />
    {/* <Route path="/quizzes" component={Quizzes} /> */}
    {/* <Route path="/ladder" component={Ladder} /> */}
  </Switch>
);

export default Routes;
