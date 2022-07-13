import React, { useState } from "react";
import {
  Grid,
  CssBaseline,
  Typography,
  Drawer,
  Toolbar,
  IconButton,
} from "@material-ui/core";
import Header from "../components/Header";
import { makeStyles } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const useStyles = makeStyles((theme) => ({
  platforms: {
    textAlign: "center",
    backgroundColor: "#6A7CE1",
    height: "100%",

    //eslint-disable-next-line no-useless-computed-key
    ["@media (max-width:900px)"]: {
      position: "absolute",
      left: 0,
      top: 0,
    },
  },

  users: {
    textAlign: "center",
    backgroundColor: "#6A7CE1",
    height: "100%",

    //eslint-disable-next-line no-useless-computed-key
    ["@media (max-width:900px)"]: {
      display: "none",
    },
  },

  drawer: {
    textAlign: "center",
    width: 300,
    flexShrink: 0,
    overflow: "hidden",
  },

  drawerPaper: {
    width: 300,
    backgroundColor: "#6A7CE1",
    overflow: "hidden",
  },
}));

const Home = () => {
  const classes = useStyles();
  const [platforms, setPlatforms] = useState(false);
  const [users, setUsers] = useState(false);

  return (
    <>
      <CssBaseline />
      <div
        style={{ height: "100vh", display: "flex", flexDirection: "column" }}
      >
        <Header
          setPlatforms={setPlatforms}
          setUsers={setUsers}
          platforms={platforms}
          users={users}
        />
        <Grid container justifyContent="space-between">
          <Drawer
            className={classes.drawer}
            anchor="left"
            open={platforms}
            onClose={() => setPlatforms(false)}
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="persistent"
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <IconButton onClick={() => setPlatforms(false)}>
                <ArrowBackIcon style={{ color: "black" }} />
              </IconButton>
              <Typography variant="h6" style={{ color: "#AAE1E9" }}>
                <b>Shopping Platforms</b>
              </Typography>
            </div>
          </Drawer>
          <Grid
            item
            md={12}
            lg={12}
            sm={12}
            xs={12}
            style={{
              textAlign: "center",
              marginLeft: platforms ? 300 : -300,
              marginRight: users ? 300 : -300,
            }}
          >
            <Typography variant="h6" style={{ padding: "1rem" }}>
              <b>COMPANY NAME</b>
            </Typography>
          </Grid>
          <Drawer
            className={classes.drawer}
            anchor="right"
            open={users}
            onClose={() => setUsers(false)}
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="persistent"
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="h6" style={{ color: "#DEBEF1" }}>
                <b>Server Users</b>
              </Typography>
              <IconButton
                style={{ position: "absolute", right: 10 }}
                onClick={() => setUsers(false)}
              >
                <ArrowForwardIcon style={{ color: "black" }} />
              </IconButton>
            </div>
          </Drawer>
        </Grid>
      </div>
    </>
  );
};

export default Home;
