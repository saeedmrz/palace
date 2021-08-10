import React from "react";
// Components and pages
import Home from "./pages/Home";
import Nav from "./components/Nav";
// Styles
import Globalstyles from "./components/GlobalStyles";
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
