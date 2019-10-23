import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage"
import Stories from "./pages/Stories"
import Nav from "./components/Nav"
// ..npm 
const App = () =>  {
  
  return (
    <Router>
       
      <>
        <Nav/>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/stories" component={Stories} />
        </Switch> 

      </>
    </Router>
  );
}

export default App;
