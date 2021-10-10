import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from "./Chat";
import Profile from "./Profile";
import Home from "./Home";
import AppBar from "./AppBar";
import Picture from "./Picture";
import Signup from "./Auth/Signup";
import Login from "./Auth/Login";
import firebase from "firebase/compat";


export const firebaseConfig = {
  apiKey: "AIzaSyA8jtO5DW3C4x7Ddkm6mZ7d_3iitP601vM",
  authDomain: "lab9-87995.firebaseapp.com",
  databaseURL: "https://lab9-87995-default-rtdb.firebaseio.com",
  projectId: "lab9-87995",
  storageBucket: "lab9-87995.appspot.com",
  messagingSenderId: "370905812477",
  appId: "1:370905812477:web:8b234e775a4bd59dd55d94"
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.database();

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

        <Route path="/login">
            <Login />
          </Route>

          <Route path="/signup">
            <Signup />
          </Route>

        <Route>
          <h3>Page not found</h3>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
