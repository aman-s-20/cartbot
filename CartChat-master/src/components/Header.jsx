import React from "react";
import {
  TextField,
  Typography,
  IconButton,
  InputAdornment,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import PeopleIcon from "@material-ui/icons/People";

const useStyles = makeStyles((theme) => ({
  notchedOutline: {
    borderWidth: "2px",
    borderColor: "#4DC58D !important",
    borderRadius: "1.5rem",
  },

  searchField: {
    //eslint-disable-next-line no-useless-computed-key
    ["@media (max-width:768px)"]: {
      display: "none",
    },
  },

  logoutButton: {
    //eslint-disable-next-line no-useless-computed-key
    ["@media (max-width:768px)"]: {
      display: "none",
    },
  },
}));

const Header = (props) => {
  const classes = useStyles();
  return (
    <header
      style={{
        height: "6rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#FAFAFA",
        zIndex: "1400",
      }}
    >
      <div
        style={{ display: "flex", alignItems: "center", marginLeft: "1rem" }}
      >
        <IconButton
          onClick={() => props.setPlatforms(true)}
          edge="start"
          style={{ display: props.platforms && "none" }}
        >
          <MenuIcon />
        </IconButton>
        <img
          src="assets/CartChat-logo.png"
          alt="logo"
          style={{ height: "4rem" }}
        />
      </div>

      <TextField
        className={classes.searchField}
        placeholder="Explore new servers"
        variant="outlined"
        style={{ width: "30%" }}
        color="secondary"
        InputProps={{
          classes: {
            notchedOutline: classes.notchedOutline,
          },
          startAdornment: (
            <InputAdornment position="start">
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <div
        style={{ display: "flex", alignItems: "center", marginRight: "1rem" }}
      >
        <Button
          className={classes.logoutButton}
          style={{ marginRight: "1rem" }}
        >
          <Typography style={{ color: "#9C28B0" }} variant="h6">
            <b>LOGOUT</b>
          </Typography>
        </Button>
        <IconButton
          onClick={() => props.setUsers(true)}
          edge="start"
          style={{ display: props.users && "none" }}
        >
          <PeopleIcon />
        </IconButton>
      </div>
    </header>
  );
};

export default Header;
