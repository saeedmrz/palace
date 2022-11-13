import React from "react";
// Components and pages
import Home from "./views/Home";
import Nav from "./components/common/Nav/Nav";
// Styles
import Globalstyles from "./styles/GlobalStyles";
// Router
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Globalstyles />
      <Nav />
      <Route path={["/game/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
