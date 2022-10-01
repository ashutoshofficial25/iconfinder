import { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import App from "./App";

function Routes() {
  return (
    <Suspense fallback={"<h1>Loading</h1>"}>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home"></Redirect>
        </Route>
        <Route path="/home" exact component={App} />
      </Switch>
    </Suspense>
  );
}

export default Routes;
