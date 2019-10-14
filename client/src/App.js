import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage"
import Nav from "./components/Nav"
// ..npm 
const App = () =>  {
  
  return (
    <Router>
       
      <>
        <Nav/>
        <Switch>
          <Route exact path="/" component={Homepage} />
        </Switch> 

      </>
    </Router>
  );
}

export default App;
