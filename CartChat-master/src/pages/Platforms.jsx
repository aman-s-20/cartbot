import React from "react";
import Background from "../Background";
import "../App.css";
import categories from "../assets/categories";
import { Grid, Typography } from "@material-ui/core";

const Platforms = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
      <Background />
      <div className="background">
        <center>
          <Typography
            style={{ fontSize: "2em", margin: "1em", color: "#E6E6FA" }}
          >
            Choose atleast three of the following categories
          </Typography>
        </center>
        <center>
          <Grid container justifyContent="center">
            {categories.map((item, key) => (
              <Grid item xs={3} style={{ margin: "0.85em" }}>
                <div
                  className="outline"
                  style={{ border: "4px solid #e6e6fa" }}
                >
                  <img src={item.icon} />
                  <Typography style={{ fontSize: "1.5em", color: "#e6ffe6" }}>
                    {item.categoryName}
                  </Typography>
                </div>
              </Grid>
            ))}
          </Grid>
        </center>
      </div>
    </div>
  );
};

export default Platforms;
