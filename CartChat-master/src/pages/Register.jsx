import React, { useState } from "react";
import {
  Button,
  TextField,
  Link,
  Grid,
  Card,
  makeStyles,
  Typography,
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

const Register = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState();
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");

  const handleRegister = () => {
    if (
      name === "" ||
      email === "" ||
      password === "" ||
      cpassword === "" ||
      !number
    ) {
      alert("Please fill all the fields!");
      return;
    }
    axios
      .post("http://localhost:5000/api/userlogins/register", {
        name: name,
        email: email,
        password: password,
        contactno: number,
      })
      .then((res) => {
        props.history.push("/platforms");
      })
      .catch((e) => console.log(e));
  };
  const classes = useStyles();
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
            <Card className={classes.card} elevation={5}>
              <img
                src="assets/CartChat-logo.png"
                alt="logo"
                style={{ height: "100%", width: "auto", margin: "1em" }}
              />
              <TextField
                variant="outlined"
                label="Full Name"
                value={name}
                color="secondary"
                onChange={(e) => setName(e.target.value)}
                required
                style={{ margin: "0.75em", width: "90%" }}
              />
              <TextField
                variant="outlined"
                label="Email Address"
                value={email}
                color="secondary"
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{ margin: "0.75em", width: "90%" }}
              />
              <TextField
                variant="outlined"
                label="Mobile Number"
                value={number}
                color="secondary"
                onChange={(e) => setNumber(e.target.value)}
                required
                type="number"
                style={{ margin: "0.75em", width: "90%" }}
              />
              <TextField
                variant="outlined"
                label="Password"
                value={password}
                color="secondary"
                type="password"
                required
                style={{ margin: "0.75em", width: "90%" }}
                onChange={(e) => setPassword(e.target.value)}
              />
              <TextField
                variant="outlined"
                label="Confirm Password"
                value={cpassword}
                color="secondary"
                type="password"
                required
                onChange={(e) => setCPassword(e.target.value)}
                style={{ margin: "0.75em", width: "90%" }}
              />
              {password === cpassword ? (
                <Button
                  variant="contained"
                  color="primary"
                  style={{ margin: "0.75em", width: "90%" }}
                  size="large"
                  onClick={handleRegister}
                >
                  Sign Up
                </Button>
              ) : (
                <>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ margin: "0.75em", width: "90%" }}
                    size="large"
                    disabled
                  >
                    Sign Up
                  </Button>
                  <Typography variant="overline" style={{ color: "#DC143C" }}>
                    <strong>Passwords do not match!</strong>
                  </Typography>
                </>
              )}
              <Link
                href="/login"
                variant="body2"
                color="secondary"
                style={{ margin: "0.75em" }}
              >
                {"Already have an account? Sign In"}
              </Link>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
export default withRouter(Register);
