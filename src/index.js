import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import {Provider} from "react-redux";
import store from "./store";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <Provider store ={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

