const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());
connectDB();

app.get("/", (req, res) => res.send("CartChat server running"));

const routes = ["userlogins"];
routes.forEach((route) =>
  app.use(`/api/${route}`, require(`./routes/${route}`))
);

app.listen(5000, () => {
  console.log("App running on port 5000");
});
