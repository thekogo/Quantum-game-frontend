import logo from "./logo.svg";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Scoreboard from "./pages/Scoreboard";
import MissionBoard from "./pages/MissionBoard";
import MissionBoard2 from "./pages/MissionBoard2";
import MissionBoard3 from "./pages/MissionBoard3";
import MissionBoard5 from "./pages/MissionBoard5";

function App() {
  return (
    <Switch>
      <Route path="/mission5">
        <MissionBoard5 />
      </Route>
      <Route path="/mission3">
        <MissionBoard3 />
      </Route>
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
