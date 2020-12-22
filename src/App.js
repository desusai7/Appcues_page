import './App.css';
import React,{useEffect} from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Pageone from "./Pageone";
import Pagetwo from "./Pagetwo";

function routeChanged() {
  window.Appcues.page() 
  console.log("making page call")
}

function App() {

  useEffect(() => {
  window.Appcues.identify("DesuSaiVenkat")
  }, []);

  return (
    <div className="App">
      <Router>
    <main>
      <nav>
        <ul>
          <li><Link to="/pageone">Page 1</Link></li>
          <li><Link to="/pagetwo">Page 2</Link></li>
        </ul>
      </nav>
    <Switch>
      <Route path="/pageone" component={Pageone}  onChange={routeChanged}/>
      <Route path="/pagetwo"  component={Pagetwo} onChange={routeChanged}/>
    </Switch>
    </main>
</Router>
      </div>
  );
}

export default App;
