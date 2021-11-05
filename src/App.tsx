import logo from "./logo.svg";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Scoreboard from "./pages/Scoreboard";
import MissionBoard from "./pages/MissionBoard";

function App() {
  return (
    <Switch>
      <Route path="/scoreboard">
        <Scoreboard />
      </Route>
      <Route path="/mission">
        <MissionBoard />
      </Route>
      <Route path="/">
        <Login />
      </Route>
    </Switch>
  );
}

export default App;
