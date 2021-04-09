import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/home";
import Navbar from "./components/navbar";
import Cs from "./components/cs";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cs" component={Cs} />
      </Switch>
    </Router>
  );
}

export default App;
