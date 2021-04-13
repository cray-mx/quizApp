import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/home";
import Navbar from "./components/navbar";
import Question from "./components/question";
import "./css/main.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:id" component={Question} />
      </Switch>
    </Router>
  );
}

export default App;
