import Nav from "./componenet/Nav";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./componenet/master/Home";
import Web from "./componenet/master/Web"
import './App.css';


function App() {
  return (
    <div className="App">
        <Router>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path='/web' component={Web}/>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
