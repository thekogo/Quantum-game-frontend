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
import PrivateRoute from "./PrivateRoute";
import ScoreboardHidden from "./pages/ScoreboardHidden";

function App() {
  return (
    <Switch>
      <PrivateRoute path="/mission/6" component={MissionBoard6} />
      <PrivateRoute path="/mission/5" component={MissionBoard5} />
      <PrivateRoute path="/mission/4" component={MissionBoard4} />
      <PrivateRoute path="/mission/3" component={MissionBoard3} />
      <PrivateRoute path="/mission/2" component={MissionBoard2} />
      <PrivateRoute path="/mission/1" component={MissionBoard} />
      <PrivateRoute path="/scoreboard" component={Scoreboard} />
      <Route path="/qxkmutt/scoreboard" component={ScoreboardHidden} />
      <Route path="/">
        <Login />
      </Route>
    </Switch>
  );
}

export default App;
