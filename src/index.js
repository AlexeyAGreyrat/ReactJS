import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import ChatPage from './components/chat/ChatPage'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

