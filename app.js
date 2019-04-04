const express = require("express");
const chalk = require("chalk");
const debug = require("debug")("app");
const path = require("path");
const morgan = require("morgan");

const app = express();
app.use(morgan("tiny"));
app.use(express.static(path.join(__dirname, "/public/")));
app.use(
  "/css",
  express.static(path.join(__dirname, "/noe_modules/bootstrap/dist/css"))
);
app.use(
  "/js",
  express.static(path.join(__dirname, "/noe_modules/bootstrap/dist/js"))
);
app.use(
  "/js",
  express.static(path.join(__dirname, "/noe_modules/jquery/dist "))
);
app.get("/", (req, res)=> {
  res.sendFile(path.join(__dirname, "/views/index.html"));
});

app.listen(3000, ()=> {
  debug("listening to port " + chalk.green("3000"));
});
