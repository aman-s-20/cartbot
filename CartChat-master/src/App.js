import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Platforms from "./pages/Platforms";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <ProtectedRoute exact path="/home" component={Home} />
          <ProtectedRoute exact path="/platforms" component={Platforms} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
