import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from "./Chat";
import Profile from "./Profile";
import Home from "./Home";
import AppBar from "./AppBar";
import Picture from "./Picture";

const App = () => {
  return (
    <Router>
      <AppBar />

      <Switch>
        <Route path="/chat/:chatId">
          <Chat />
        </Route>
        <Route path="/chat">
          <Chat />
        </Route>

        <Route path="/picture">
          <Picture />
        </Route>

        <Route path="/profile">
          <Profile />
        </Route>

        <Route exact path="/">
          <Home />
        </Route>

        <Route>
          <h3>Page not found</h3>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
