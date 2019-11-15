import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage"
import Stories from "./pages/Stories"
import Donate from "./pages/Donate"
import Merch from "./pages/Merch"
import Product from "./pages/Product1"
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
          <Route exact path="/donate" component={Donate} />
          <Route exact path="/merch" component={Merch} />
          <Route exact path="/heather-dust-cropped-hoodie" component={Product} />
        </Switch> 

      </>
    </Router>
  );
}

export default App;
