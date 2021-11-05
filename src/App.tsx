import logo from "./logo.svg";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Scoreboard from "./pages/Mission";
import MissionBoard from "./pages/MissionBoard";
import MissionBoard2 from "./pages/MissionBoard2";

function App() {
  return (
    <Switch>
      <Route path="/mission2">
        <MissionBoard2 />
      </Route>
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
