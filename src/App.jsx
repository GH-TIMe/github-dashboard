import React from "react";
import { Home, Card } from "./pages";
import { Route } from "react-router-dom";

function App() {
  return (
    <>
      <Route path="/github-dashboard" component={Home} exact />
      <Route path="/github-dashboard/card" component={Card} exact />
    </>
  );
}

export default App;
