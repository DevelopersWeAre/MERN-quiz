import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

// Layout will always be loaded so I wont include it in lazy loading.
import Layout from "./components/Layout/Layout";

// Lazy loading pages
const Home = lazy(() => import("./pages/Home"));
const Quizzes = lazy(() => import("./pages/Quizzes"));
const Ladder = lazy(() => import("./pages/Ladder"));

function App() {
  return (
    <Router>
      <Layout>
        {/* Loading hardcoded untill we get spinner/loader task done */}
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/quizzes" component={Quizzes} />
            <Route path="/ladder" component={Ladder} />
            <Route render={() => <Redirect to="/" />} />
          </Switch>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;
