import ChatPage from "./chat/ChatPage";
import HomePage from "./HomePage";
import User from './User';
import Navbar from "./navbar";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

 const App = () => {
    return (
        <Router>
            <Navbar />
            <div>
                <Switch>
                    <Route path="/chat">
                        <ChatPage />
                    </Route>
                    <Route path="/users">
                        <User />
                    </Route>
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App;