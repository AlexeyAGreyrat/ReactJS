import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "@material-ui/styles";
import { theme } from "./theme";
import store from "./store";
import { Provider } from "react-redux";

export const MyDataContext = React.createContext({ appVersion: "0.9-alpha" });

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <MyDataContext.Provider value={{ appVersion: "0.9-alpha" }}>
        <Provider store={store}>
          <App />
        </Provider>
      </MyDataContext.Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
