import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import { Home } from "../src/Home";
import { Page1 } from "../src/Page1";
import { Page2 } from "../src/Page2";
import { Page1DetailA } from "../src/Page1DetailA";
import { Page1DetailB } from "../src/Page1DetailB";

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route
        path="/page1"
        render={({ match: { url } }) => (
          <Switch>
            <Route exact path={url}>
              <Page1 />
            </Route>
            <Route path={`${url}/detailA`}>
              <Page1DetailA />
            </Route>
            <Route path={`${url}/detailB`}>
              <Page1DetailB />
            </Route>
          </Switch>
        )}
      />

      <Route path="/page2">
        <Page2 />
      </Route>
    </Switch>
  );
};
