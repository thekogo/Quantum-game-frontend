import logo from "./logo.svg";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Scoreboard from "./pages/Mission";
import MissionBoard from "./pages/MissionBoard";
import MissionBoard2 from "./pages/MissionBoard2";
import MissionBoard3 from "./pages/MissionBoard3";
import MissionBoard5 from "./pages/MissionBoard5";
import MissionBoard4 from "./pages/MissionBoard4";
import MissionBoard6 from "./pages/MissionBoard6";

function App() {
  return (
    <Switch>
      <Route path="/mission/4">
        <MissionBoard4 />
      </Route>

      <Route path="/mission/5">
        <MissionBoard5 />
      </Route>
      <Route path="/mission/3">
        <MissionBoard3 />
      </Route>
      <Route path="/mission/2">
        <MissionBoard2 />
      </Route>
      <Route path="/scoreboard">
        <Scoreboard />
      </Route>
      <Route path="/mission/1">
        <MissionBoard />
      </Route>
      <Route path="/mission/6">
        <MissionBoard6 />
      </Route>
      <Route path="/">
        <Login />
      </Route>
    </Switch>
  );
}

export default App;
