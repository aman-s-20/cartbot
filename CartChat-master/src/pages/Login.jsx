import React, { useState } from "react";
import {
  Button,
  TextField,
  Link,
  Grid,
  Card,
  makeStyles,
} from "@material-ui/core";
import "../App.css";
import axios from "axios";
import { withRouter } from "react-router-dom";
import Background from "../Background";

const useStyles = makeStyles(() => ({
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // eslint-disable-next-line no-useless-computed-key
    ["@media (min-width:825px)"]: {
      width: "30vw",
    },
    // eslint-disable-next-line no-useless-computed-key
    ["@media (max-width:825px)"]: {
      width: "90vw",
    },
  },
}));

const Login = (props) => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    var ls = require("local-storage");
    if (email === "" || password === "") {
      alert("Please fill all the fields!");
      return;
    }
    axios
      .post("http://localhost:5000/api/userlogins/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        ls("cartchat-auth-token", res.data.token);
        props.history.push("/home");
      })
      .catch((e) => console.log(e));
  };
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
      <Background />
      <div className="background">
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          className="login-register-grid"
        >
          <Grid item>
            <Card className={classes.card} elevation={6}>
              <img
                src="assets/CartChat-logo.png"
                alt="logo"
                style={{ height: "100%", width: "auto", margin: "1em" }}
              />
              <TextField
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                label="Email Address"
                color="secondary"
                required
                style={{ margin: "0.75em", width: "90%" }}
              />
              <TextField
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                color="secondary"
                label="Password"
                type="password"
                required
                style={{ margin: "0.75em", width: "90%" }}
              />
              <Button
                variant="contained"
                color="primary"
                style={{ margin: "0.75em", width: "90%" }}
                size="large"
                onClick={handleLogin}
              >
                Sign In
              </Button>
              <Link
                href="/register"
                variant="body2"
                color="secondary"
                style={{ margin: "0.75em" }}
              >
                {"Don't have an account? Sign Up"}
              </Link>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
export default withRouter(Login);
