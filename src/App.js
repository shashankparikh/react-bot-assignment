import React from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { Router, Route } from "react-router-dom";
import theme from "./styles/theme";
import Login from "./Epics/Pages/login";
import List from "./Epics/Pages/Components/List/list";
import history from "./history";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <div>
          <Route exact path="/" component={Login} />
          <Route exact path="/chat" component={List} />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
