import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import axios from "axios";
import { CircularProgress } from "@material-ui/core";

const ProtectedRoute = (props) => {
  const { component: Component, ...rest } = props;
  const [credentialsValid, setCredentialsValid] = useState(false);
  const [validated, setValidated] = useState(false);
  var ls = require("local-storage");
  let token = ls.get("cartchat-auth-token");

  const verifyToken = async () => {
    try {
      const resp = await axios.post(
        "http://localhost:5000/api/userlogins/verify",
        {
          headers: {
            "cartchat-auth-token": token,
          },
        }
      );
      setCredentialsValid(resp.data.res);
      setValidated(true);
    } catch (err) {
      setCredentialsValid(false);
      setValidated(true);
      ls("cartchat-auth-token", null);
    }
  };
  useEffect(() => {
    verifyToken();
    //eslint-disable-next-line
  }, []);

  if (credentialsValid && validated) {
    return (
      <Route {...rest} render={(props) => <Component {...rest} {...props} />} />
    );
  } else if (!credentialsValid && validated) {
    ls("cartchat-auth-token", null);
    return <Redirect to="/login" />;
  } else {
    return <CircularProgress />;
  }
};

export default ProtectedRoute;
