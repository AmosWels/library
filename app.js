const express = require("express");
const chalk = require("chalk");
const debug = require("debug")("app");
const path = require("path");
const morgan = require("morgan");

const port = process.env.PORT || 3000
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

app.set('views','./src/views');
app.set('view engine', 'ejs');

app.get("/", (req, res)=> {
  // res.sendFile(path.join(__dirname, "/views/index.html"));
  // res.render('index', {title:'My library'});
  res.render('index', {list:['a','b'], title:'Library'});
});

app.listen(port, ()=> {
  debug("listening at port " + chalk.green(port));
});
