import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./components/home";
import Navbar from "./components/navbar";
import Question from "./components/question";
import { PointContext } from "./components/context";
import "./css/main.css";

function App() {
  const [points, setPoints] = useState(0);
  useEffect(() => {
    if (localStorage.getItem("points")) {
      setPoints(JSON.parse(localStorage.getItem("points")));
    }
  }, []);

  return (
    <Router>
      <PointContext.Provider value={[points, setPoints]}>
        <Navbar points={points} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/:id" component={Question} />
        </Switch>
      </PointContext.Provider>
    </Router>
  );
}

export default App;
